
"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightOutlined, ClockCircleOutlined, CloseCircleFilled,
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

const containerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
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

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(
      seconds,
    ).padStart(2, "0")}`;
  }

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
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
  const cleaned = description?.trim();

  if (!cleaned) {
    return "Watch this message from Global Harvest Church and take time to reflect on the Word.";
  }

  return cleaned;
}

function VideoSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
      <div className="aspect-video animate-pulse bg-slate-200" />

      <div className="space-y-3 p-4 sm:p-5">
        <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
        <div className="h-3 w-2/5 animate-pulse rounded bg-slate-100" />
        <div className="h-3 w-full animate-pulse rounded bg-slate-100" />
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
        const query = new URLSearchParams({
          playlistId: PLAYLIST_ID,
        });

        if (pageToken) {
          query.set("pageToken", pageToken);
        }

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

        setVideos((currentVideos) => {
          const updatedVideos = append
            ? [...currentVideos, ...data.videos]
            : data.videos;

          if (!append) {
            setSelectedVideo(data.videos[0] ?? null);
            setAutoplay(false);
          }

          return updatedVideos;
        });

        setNextPageToken(data.nextPageToken);
        setError(null);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Something went wrong while loading the messages.";

        setError(message);
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

    return videos.filter((video) => {
      return (
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query)
      );
    });
  }, [videos, searchQuery]);

  const handleSelectVideo = (video: ServiceVideo) => {
    setSelectedVideo(video);
    setAutoplay(true);

    document
      .getElementById("featured-service")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleLoadMore = () => {
    if (!nextPageToken || loadingMore) return;

    void loadVideos(nextPageToken, true);
  };

  const animationProps = shouldReduceMotion
    ? {}
    : {
        variants: containerVariants,
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
      };

  return (
    <section
      id="online-services"
      className="relative overflow-hidden bg-[#f7f9fc] py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      {/* Soft background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#00a3e0]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-40 h-96 w-96 rounded-full bg-[#0b2265]/[0.05] blur-3xl"
      />

      <div className="gh-container relative mx-auto w-full px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section introduction */}
        <motion.div
          {...animationProps}
          className="mb-10 max-w-3xl sm:mb-14"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0b2265]/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0b2265] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#00a859]" />
            Watch anytime, anywhere
          </div>

          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0b2265] sm:text-4xl lg:text-5xl">
            Messages that stay with you.
            <span className="mt-1 block text-[#00a3e0]">
              Watch. Reflect. Grow.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Join Global Harvest Church online through powerful messages,
            worship, and biblical teaching. Revisit a message whenever you
            need encouragement or a fresh reminder of God&apos;s Word.
          </p>
        </motion.div>

        {/* Featured video */}
        <motion.div
          {...animationProps}
          id="featured-service"
          className="mb-16 scroll-mt-24 sm:mb-20 lg:mb-24"
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_70px_-35px_rgba(11,34,101,0.28)] lg:grid-cols-[1.5fr_0.85fr]">
            <div className="relative min-w-0 bg-[#071744]">
              {selectedVideo ? (
                <div className="relative aspect-video w-full overflow-hidden">
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
                    <PlayCircleFilled className="mb-4 text-5xl text-[#ffc72c]" />
                    <p className="font-semibold">
                      {loading
                        ? "Loading messages..."
                        : "Your next message starts here"}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-9 xl:p-10">
              <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#00a3e0]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b2265]">
                <PlayCircleFilled />
                Featured message
              </span>

              <h3 className="text-xl font-bold leading-snug text-[#0b2265] sm:text-2xl">
                {selectedVideo?.title ||
                  "Experience Global Harvest Church Online"}
              </h3>

              {selectedVideo && (
                <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
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

              <p className="mt-4 line-clamp-5 text-sm leading-7 text-slate-600 sm:text-base">
                {selectedVideo
                  ? getVideoDescription(selectedVideo.description)
                  : "Watch our messages, spend time in the Word, and stay connected with the Global Harvest Church community wherever you are."}
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b2265] px-5 py-3 text-sm font-bold text-white transition duration-200 hover:bg-[#071744] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
                >
                  <YoutubeFilled className="text-lg" />
                  Visit our channel
                  <ArrowRightOutlined />
                </a>

                <a
                  href={YOUTUBE_LIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#0b2265] transition duration-200 hover:border-[#00a3e0]/50 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
                >
                  Watch live
                  <ArrowRightOutlined />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Playlist heading and search */}
        <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#00a3e0] sm:text-sm">
              The message library
            </p>

            <h3 className="text-2xl font-bold tracking-tight text-[#0b2265] sm:text-3xl">
              Explore our messages
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
              Find a message to watch again or discover something new.
            </p>
          </div>

          <div className="w-full lg:max-w-sm">
            <label
              htmlFor="service-search"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Search messages
            </label>

            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-[#00a3e0] focus-within:ring-4 focus-within:ring-[#00a3e0]/10">
              <SearchOutlined className="text-lg text-slate-400" />

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
              <p className="mt-2 text-xs text-slate-500">
                {filteredVideos.length}{" "}
                {filteredVideos.length === 1 ? "message" : "messages"} shown
                {searchQuery.trim() ? " in your search" : ""}
              </p>
            )}
          </div>
        </div>

        {/* Error state */}
        {error && videos.length === 0 && (
          <div className="rounded-2xl border border-red-100 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500">
              <ReloadOutlined className="text-xl" />
            </div>

            <h4 className="text-lg font-bold text-[#0b2265]">
              We couldn&apos;t load the messages
            </h4>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              {error}
            </p>

            <button
              type="button"
              onClick={() => void loadVideos()}
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#0b2265] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#071744] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
            >
              <ReloadOutlined />
              Try again
            </button>
          </div>
        )}

        {/* Video gallery */}
        {loading && videos.length === 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <VideoSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredVideos.length > 0 && (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
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
                      className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border bg-white text-left shadow-sm transition duration-200 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 ${
                        isSelected
                          ? "border-[#00a3e0] ring-1 ring-[#00a3e0]/30"
                          : "border-slate-200/80 hover:border-[#00a3e0]/50"
                      }`}
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-[#071744]">
                        <img
                          src={video.thumbnail}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#071744]/75 via-transparent to-black/5 transition duration-300 group-hover:from-[#071744]/60" />

                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/95 text-[#0b2265] shadow-lg transition duration-300 sm:h-14 sm:w-14 ${
                              isSelected
                                ? "scale-100"
                                : "scale-90 group-hover:scale-100"
                            }`}
                          >
                            <PlayCircleFilled className="text-2xl sm:text-3xl" />
                          </span>
                        </div>

                        {formatDuration(video.duration) && (
                          <span className="absolute bottom-3 right-3 rounded-md bg-[#071744]/90 px-2 py-1 text-xs font-semibold text-white">
                            {formatDuration(video.duration)}
                          </span>
                        )}

                        {isSelected && (
                          <span className="absolute left-3 top-3 rounded-full bg-[#ffc72c] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#071744]">
                            Selected
                          </span>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-4 sm:p-5">
                        <h4 className="line-clamp-2 text-base font-bold leading-6 text-[#0b2265] transition-colors group-hover:text-[#007eae] sm:text-lg">
                          {video.title}
                        </h4>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {getVideoDescription(video.description)}
                        </p>

                        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                          <span className="text-xs font-medium text-slate-500">
                            {formatPublishedDate(video.publishedAt) ||
                              "Watch message"}
                          </span>

                          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#0b2265] transition group-hover:text-[#00a3e0]">
                            Watch
                            <ArrowRightOutlined />
                          </span>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* No search results */}
            {!loading &&
              videos.length > 0 &&
              filteredVideos.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center sm:px-10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <SearchOutlined className="text-xl" />
                  </div>

                  <h4 className="text-lg font-bold text-[#0b2265]">
                    No matching messages
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Try another title or keyword to find the message you&apos;re
                    looking for.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mt-5 inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-[#0b2265] transition hover:border-[#00a3e0] hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2"
                  >
                    Clear search
                  </button>
                </div>
              )}

            {/* Pagination error */}
            {error && videos.length > 0 && (
              <div
                role="status"
                className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border border-red-100 bg-red-50/70 p-4 sm:flex-row"
              >
                <p className="text-sm text-red-700">{error}</p>

                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore || !nextPageToken}
                  className="inline-flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#0b2265] shadow-sm transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <ReloadOutlined />
                  Try loading more
                </button>
              </div>
            )}

            {/* Load more */}
            {nextPageToken && !searchQuery.trim() && (
              <div className="mt-10 flex justify-center sm:mt-12">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-7 py-3 text-sm font-bold text-[#0b2265] shadow-sm transition duration-200 hover:border-[#00a3e0]/60 hover:bg-slate-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00a3e0] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loadingMore ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0b2265]/20 border-t-[#0b2265]" />
                      Loading messages...
                    </>
                  ) : (
                    <>
                      Load more messages
                      <ArrowRightOutlined />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Channel CTA */}
        <motion.div
          {...animationProps}
          className="mt-16 overflow-hidden rounded-3xl bg-[#0b2265] sm:mt-20"
        >
          <div className="relative px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border-[36px] border-white/[0.06]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 right-1/4 h-64 w-64 rounded-full bg-[#00a3e0]/20 blur-3xl"
            />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-[#ffc72c]">
                  <YoutubeFilled className="text-lg" />
                  Stay connected
                </div>

                <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                  There&apos;s more to discover.
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                  Visit our YouTube channel for more messages and online
                  gatherings. Keep growing in faith, wherever life takes you.
                </p>
              </div>

              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-xl bg-[#ffc72c] px-6 py-3 text-sm font-extrabold text-[#071744] transition duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b2265] md:self-center"
              >
                <YoutubeFilled className="text-lg" />
                Explore YouTube
                <ArrowRightOutlined />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
