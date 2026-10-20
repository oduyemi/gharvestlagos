
"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightOutlined,
  ClockCircleOutlined,
  CloseCircleFilled,
  HeartFilled,
  PlayCircleFilled,
  ReloadOutlined,
  SearchOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

type ServiceVideo = {
  videoId: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
};

type PlaylistResponse = {
  videos: ServiceVideo[];
  nextPageToken?: string;
  error?: string;
};

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@gharvestchurch";
const YOUTUBE_LIVE_URL = "https://www.youtube.com/@gharvestchurch/live";
const PLAYLIST_ID = "PLdi_NG7B5yPjXl74wJI9uiZbsWp0K-jrX";

const reveal = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

function formatDuration(duration: string): string {
  if (!duration) return "";

  const match = duration.match(
    /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,
  );

  if (!match) return "";

  const hours = Number(match[1] || 0);
  const minutes = Number(match[2] || 0);
  const seconds = Number(match[3] || 0);

  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
    : `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function formatPublishedDate(date: string): string {
  if (!date) return "";

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function getVideoDescription(description: string): string {
  return description?.trim()
    ? description.trim()
    : "Spend time in the Word and reflect on this message from Global Harvest Church.";
}

function VideoSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e9e6df] bg-white">
      <div className="aspect-video animate-pulse bg-[#eeede7]" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-4/5 animate-pulse rounded-full bg-[#eeede7]" />
        <div className="h-3 w-2/5 animate-pulse rounded-full bg-[#f3f2ee]" />
        <div className="h-3 w-full animate-pulse rounded-full bg-[#f3f2ee]" />
      </div>
    </div>
  );
}

export const OnlineServices = () => {
  const shouldReduceMotion = useReducedMotion();

  const [videos, setVideos] = useState<ServiceVideo[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<ServiceVideo | null>(null);
  const [nextPageToken, setNextPageToken] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadVideos = useCallback(
    async (pageToken?: string, append = false) => {
      if (append) {
        setLoadingMore(true);
      } else {
        setLoading(true);
        setError(null);
      }

      try {
        const query = new URLSearchParams({ playlistId: PLAYLIST_ID });

        if (pageToken) query.set("pageToken", pageToken);

        const response = await fetch(
          `/api/online-services/playlist?${query.toString()}`,
          {
            method: "GET",
            headers: { Accept: "application/json" },
          },
        );

        const data = (await response.json()) as PlaylistResponse;

        if (!response.ok) {
          throw new Error(
            data.error || "We couldn't load the messages right now.",
          );
        }

        if (!Array.isArray(data.videos)) {
          throw new Error("The playlist response was not in the expected format.");
        }

        if (append) {
          setVideos((current) => {
            const existingIds = new Set(current.map((video) => video.videoId));
            const uniqueNewVideos = data.videos.filter(
              (video) => !existingIds.has(video.videoId),
            );

            return [...current, ...uniqueNewVideos];
          });
        } else {
          setVideos(data.videos);
          setSelectedVideo(data.videos[0] ?? null);
          setAutoplay(false);
        }

        setNextPageToken(data.nextPageToken);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the messages.",
        );
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  useEffect(() => {
    void loadVideos();
  }, [loadVideos]);

  const filteredVideos = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return videos;

    return videos.filter(
      (video) =>
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query),
    );
  }, [videos, searchQuery]);

  const handleSelectVideo = (video: ServiceVideo) => {
    setSelectedVideo(video);
    setAutoplay(true);

    document.getElementById("featured-service")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const handleLoadMore = () => {
    if (!nextPageToken || loadingMore) return;
    void loadVideos(nextPageToken, true);
  };

  const animationProps = shouldReduceMotion
    ? {}
    : {
        variants: reveal,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <section
      id="online-services"
      className="relative overflow-hidden bg-[#faf9f5] py-14 text-[#18202a] sm:py-16 lg:py-20"
    >
      {/* Soft, understated colour accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 h-80 w-80 rounded-full bg-[#00a3e0]/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[42%] h-80 w-80 rounded-full bg-[#ffc72c]/[0.09] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Introduction */}
        <motion.div {...animationProps} className="mb-9 max-w-3xl sm:mb-11">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e8e4d8] bg-white/80 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[0.17em] text-[#0b2265] shadow-sm sm:text-[11px]">
            <span className="h-2 w-2 rounded-full bg-[#00a3e0]" />
            Faith for everyday life
          </div>

          <h2 className="max-w-2xl text-[clamp(2rem,4.5vw,3.6rem)] font-extrabold leading-[1.07] tracking-[-0.055em] text-[#0b2265]">
            A word for your
            <span className="relative ml-2 inline-block text-[#0096c9]">
              journey.
              <svg
                aria-hidden="true"
                viewBox="0 0 180 10"
                fill="none"
                className="absolute -bottom-2 left-0 h-2 w-full text-[#ffc72c]"
              >
                <path
                  d="M3 6C45 1 120 2 177 5"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Discover messages, revisit meaningful moments, and find
              encouragement in God&apos;s Word, wherever life takes you.
            </p>

            <a
              href={YOUTUBE_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-2 text-sm font-bold text-[#0b2265] transition-colors hover:text-[#008bbd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-4"
            >
              Explore our channel
            </a>
          </div>
        </motion.div>

        {/* Featured message */}
        <motion.div
          {...animationProps}
          id="featured-service"
          className="mb-14 scroll-mt-24 sm:mb-16 lg:mb-[4.5rem]"
        >
          <div className="grid overflow-hidden rounded-[1.4rem] border border-[#e7e4db] bg-white shadow-[0_24px_70px_-42px_rgba(11,34,101,0.35)] lg:grid-cols-[1.35fr_0.8fr] lg:rounded-[1.7rem]">
            <div className="relative min-w-0 self-center bg-[#071744]">
              {selectedVideo ? (
                <div className="relative aspect-video w-full">
                  <iframe
                    key={selectedVideo.videoId}
                    src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?rel=0&autoplay=${autoplay ? 1 : 0}`}
                    title={selectedVideo.title}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex aspect-video items-center justify-center p-8 text-center text-white">
                  <div>
                    <PlayCircleFilled className="mb-3 text-4xl text-[#ffc72c]" />
                    <p className="text-sm font-semibold">
                      {loading ? "Finding your next message..." : "Your next message starts here"}
                    </p>
                  </div>
                </div>
              )}

              <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#071744]/85 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.13em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:text-[10px]">
                <PlayCircleFilled className="text-[#ffc72c]" />
                Featured message
              </div>
            </div>

            <div className="relative flex min-w-0 flex-col justify-center overflow-hidden p-5 sm:p-7 lg:p-8 xl:p-9">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00a3e0]/[0.08] blur-2xl"
              />

              <div className="relative inline-flex w-fit items-center gap-2 rounded-full bg-[#fff5d7] px-3 py-1.5 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#775500] sm:text-[10px]">
                <HeartFilled />
                A moment in the Word
              </div>

              <h3 className="relative mt-4 text-xl font-extrabold leading-snug tracking-[-0.035em] text-[#0b2265] sm:text-2xl">
                {selectedVideo?.title ||
                  "Experience Global Harvest Church Online"}
              </h3>

              {selectedVideo && (
                <div className="relative mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-500">
                  {formatPublishedDate(selectedVideo.publishedAt) && (
                    <span>{formatPublishedDate(selectedVideo.publishedAt)}</span>
                  )}

                  {formatDuration(selectedVideo.duration) && (
                    <span className="inline-flex items-center gap-1.5">
                      <ClockCircleOutlined />
                      {formatDuration(selectedVideo.duration)}
                    </span>
                  )}
                </div>
              )}

              <p className="relative mt-4 line-clamp-4 text-sm leading-6 text-slate-600 sm:leading-7">
                {selectedVideo
                  ? getVideoDescription(selectedVideo.description)
                  : "Watch our messages, spend time in the Word, and stay connected with the Global Harvest Church community wherever you are."}
              </p>

              <div className="relative mt-5 flex flex-wrap gap-3">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0b2265] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00a3e0] hover:text-[#071744] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 sm:text-sm"
                >
                  <YoutubeFilled className="text-base" />
                  Visit channel
                  <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={YOUTUBE_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#e6e5df] bg-white px-4 py-2.5 text-xs font-bold text-[#0b2265] transition hover:border-[#00a3e0]/50 hover:bg-[#f5fbfd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 sm:text-sm"
                >
                  Watch live
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Library heading and search */}
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.19em] text-[#008bbd] sm:text-[11px]">
              Take another look
            </p>

            <h3 className="text-2xl font-extrabold tracking-[-0.04em] text-[#0b2265] sm:text-[1.8rem]">
              The message library
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Something to revisit. Something new to discover.
            </p>
          </div>

          <div className="w-full lg:max-w-[340px]">
            <label
              htmlFor="service-search"
              className="mb-2 block text-xs font-bold text-slate-700"
            >
              Find a message
            </label>

            <div className="flex h-12 items-center gap-3 rounded-full border border-[#e5e3dc] bg-white px-4 shadow-sm transition focus-within:border-[#00a3e0] focus-within:ring-4 focus-within:ring-[#00a3e0]/10">
              <SearchOutlined className="text-base text-[#00a3e0]" />

              <input
                id="service-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search by title or keyword..."
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="inline-flex items-center justify-center text-slate-400 transition hover:text-[#0b2265]"
                >
                  <CloseCircleFilled />
                </button>
              )}
            </div>

            {!loading && (
              <p aria-live="polite" className="mt-2 pl-3 text-xs text-slate-500">
                {filteredVideos.length}{" "}
                {filteredVideos.length === 1 ? "message" : "messages"}
                {searchQuery.trim() ? " found" : " available on this page"}
              </p>
            )}
          </div>
        </div>

        {/* Initial loading error */}
        {error && videos.length === 0 && (
          <div className="rounded-2xl border border-red-100 bg-white px-6 py-10 text-center sm:px-10">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
              <ReloadOutlined className="text-lg" />
            </div>

            <h4 className="text-lg font-extrabold text-[#0b2265]">
              We couldn&apos;t load the messages
            </h4>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => void loadVideos()}
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0b2265] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#071744] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
            >
              <ReloadOutlined />
              Try again
            </button>
          </div>
        )}

        {/* Message grid */}
        {loading && videos.length === 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
            {Array.from({ length: 6 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredVideos.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-5">
                {filteredVideos.map((video) => {
                  const isSelected =
                    selectedVideo?.videoId === video.videoId;

                  return (
                    <motion.button
                      key={video.videoId}
                      type="button"
                      onClick={() => handleSelectVideo(video)}
                      whileHover={
                        shouldReduceMotion ? undefined : { y: -4 }
                      }
                      transition={{ duration: 0.2 }}
                      aria-pressed={isSelected}
                      aria-label={`Play message: ${video.title}`}
                      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-white text-left transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-[#00a3e0] shadow-[0_12px_35px_-18px_rgba(0,163,224,0.55)] ring-1 ring-[#00a3e0]/30"
                          : "border-[#e9e6df] shadow-[0_3px_12px_-8px_rgba(11,34,101,0.15)] hover:border-[#00a3e0]/40 hover:shadow-[0_18px_35px_-22px_rgba(11,34,101,0.35)]"
                      }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-[#071744]">
                        <img
                          src={video.thumbnail}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.045]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071744]/65 via-transparent to-black/10 transition group-hover:from-[#071744]/45" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0b2265] shadow-lg transition duration-300 sm:h-12 sm:w-12 ${
                              isSelected
                                ? "scale-100"
                                : "scale-90 group-hover:scale-100 group-hover:bg-[#ffc72c]"
                            }`}
                          >
                            <PlayCircleFilled className="text-2xl" />
                          </span>
                        </div>

                        {formatDuration(video.duration) && (
                          <span className="absolute bottom-2.5 right-2.5 rounded-md border border-white/10 bg-[#071744]/85 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-sm">
                            {formatDuration(video.duration)}
                          </span>
                        )}

                        {isSelected && (
                          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full bg-[#ffc72c] px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-[#071744]">
                            <PlayCircleFilled />
                            Selected
                          </span>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-4">
                        <h4 className="line-clamp-2 text-[15px] font-extrabold leading-6 tracking-[-0.02em] text-[#0b2265] transition-colors group-hover:text-[#007eae]">
                          {video.title}
                        </h4>

                        <p className="mt-2 line-clamp-2 text-[13px] leading-5 text-slate-500">
                          {getVideoDescription(video.description)}
                        </p>

                        <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#f0eee8] pt-3">
                          <span className="text-[11px] font-medium text-slate-500">
                            {formatPublishedDate(video.publishedAt) ||
                              "Watch message"}
                          </span>

                          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-extrabold text-[#0b2265] transition-colors group-hover:text-[#00a3e0]">
                            Watch
                            <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Empty search state */}
            {!loading &&
              videos.length > 0 &&
              filteredVideos.length === 0 && (
                <div className="rounded-2xl border border-dashed border-[#d9d7cf] bg-white px-6 py-10 text-center sm:px-10">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8fc] text-[#008bbd]">
                    <SearchOutlined className="text-lg" />
                  </div>

                  <h4 className="text-lg font-extrabold text-[#0b2265]">
                    No matching messages
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Try another title or keyword to find the message you&apos;re
                    looking for.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-[#e5e3dc] px-5 py-2.5 text-sm font-bold text-[#0b2265] transition hover:border-[#00a3e0] hover:bg-[#f5fbfd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
                  >
                    Clear search
                  </button>
                </div>
              )}

            {/* Pagination error */}
            {error && videos.length > 0 && (
              <div
                role="status"
                className="mt-5 flex flex-col items-center justify-between gap-3 rounded-2xl border border-red-100 bg-white p-4 sm:flex-row"
              >
                <p className="text-sm text-red-700">{error}</p>

                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore || !nextPageToken}
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#f5f4ef] px-4 py-2 text-sm font-bold text-[#0b2265] transition hover:bg-[#ecebe5] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ReloadOutlined />
                  Try loading more
                </button>
              </div>
            )}

            {/* Pagination */}
            {nextPageToken && !searchQuery.trim() && (
              <div className="mt-8 flex justify-center sm:mt-10">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#e5e3dc] bg-white px-6 py-3 text-sm font-bold text-[#0b2265] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#00a3e0]/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingMore ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b2265]/20 border-t-[#0b2265]" />
                      Loading messages...
                    </>
                  ) : (
                    <>
                      Discover more messages
                      <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Channel call-to-action */}
        <motion.div
          {...animationProps}
          className="relative mt-14 overflow-hidden rounded-[1.4rem] bg-[#0b2265] sm:mt-16 lg:mt-[4.5rem] lg:rounded-[1.7rem]"
        >
          <div className="relative px-5 py-7 sm:px-8 sm:py-9 lg:px-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border-[24px] border-white/[0.06] sm:h-60 sm:w-60"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-28 right-1/4 h-48 w-48 rounded-full bg-[#00a3e0]/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#ffc72c] sm:text-[11px]">
                  <YoutubeFilled className="text-base" />
                  Keep growing with us
                </div>

                <h3 className="text-2xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-3xl">
                  Your next favourite message awaits.
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  Explore more teachings and online gatherings on our YouTube
                  channel. There&apos;s always room to grow in faith.
                </p>
              </div>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#ffc72c] px-5 py-3 text-sm font-extrabold text-[#071744] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b2265] md:self-center sm:px-6"
              >
                <YoutubeFilled className="text-lg" />
                Explore YouTube
                <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
