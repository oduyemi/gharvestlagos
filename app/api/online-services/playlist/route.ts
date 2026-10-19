import { NextRequest, NextResponse } from "next/server";

const PLAYLIST_ID = "PLdi_NG7B5yPjXl74wJI9uiZbsWp0K-jrX";
const YOUTUBE_API = "https://www.googleapis.com/youtube/v3";

export async function GET(request: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "YouTube API key is not configured." },
      { status: 500 },
    );
  }

  const pageToken = request.nextUrl.searchParams.get("pageToken");

  try {
    const params = new URLSearchParams({
      part: "snippet,contentDetails",
      playlistId: PLAYLIST_ID,
      maxResults: "50",
      key: apiKey,
    });

    if (pageToken) params.set("pageToken", pageToken);

    const playlistResponse = await fetch(
      `${YOUTUBE_API}/playlistItems?${params}`,
      { next: { revalidate: 3600 } },
    );

    if (!playlistResponse.ok) {
      console.error("YouTube playlist API error:", await playlistResponse.text());

      return NextResponse.json(
        { error: "Unable to load the church's video playlist." },
        { status: 502 },
      );
    }

    const playlistData = await playlistResponse.json();

    const items = (playlistData.items ?? [])
      .map((item: any) => ({
        videoId:
          item.contentDetails?.videoId ??
          item.snippet?.resourceId?.videoId,
        title: item.snippet?.title ?? "Untitled message",
        description: item.snippet?.description ?? "",
        thumbnail:
          item.snippet?.thumbnails?.maxres?.url ??
          item.snippet?.thumbnails?.high?.url ??
          item.snippet?.thumbnails?.medium?.url ??
          item.snippet?.thumbnails?.default?.url ??
          "",
        publishedAt: item.contentDetails?.videoPublishedAt ?? null,
      }))
      .filter((item: any) => item.videoId);

    const ids = items.map((item: any) => item.videoId);
    const durations: Record<string, string> = {};

    if (ids.length) {
      const videoParams = new URLSearchParams({
        part: "contentDetails",
        id: ids.join(","),
        key: apiKey,
      });

      const videosResponse = await fetch(
        `${YOUTUBE_API}/videos?${videoParams}`,
        { next: { revalidate: 3600 } },
      );

      if (videosResponse.ok) {
        const videosData = await videosResponse.json();

        for (const video of videosData.items ?? []) {
          durations[video.id] = video.contentDetails?.duration ?? "";
        }
      }
    }

    return NextResponse.json(
      {
        videos: items.map((item: any) => ({
          ...item,
          duration: durations[item.videoId] ?? "",
        })),
        nextPageToken: playlistData.nextPageToken ?? null,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    console.error("YouTube playlist route error:", error);

    return NextResponse.json(
      { error: "Something went wrong while loading online services." },
      { status: 500 },
    );
  }
}