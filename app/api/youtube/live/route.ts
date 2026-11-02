
import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return NextResponse.json(
      { error: "YouTube API configuration is missing." },
      { status: 500 }
    );
  }

  try {
    const params = new URLSearchParams({
      part: "snippet",
      channelId,
      eventType: "live",
      type: "video",
      maxResults: "1",
      key: apiKey,
    });

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params.toString()}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error(
        `YouTube API request failed: ${response.status}`
      );
    }

    const data = await response.json();
    const liveVideo = data.items?.[0];

    if (!liveVideo?.id?.videoId) {
      return NextResponse.json({
        isLive: false,
        videoId: null,
        title: null,
      });
    }

    return NextResponse.json({
      isLive: true,
      videoId: liveVideo.id.videoId,
      title: liveVideo.snippet?.title ?? "Global Harvest Church Live",
    });
  } catch (error) {
    console.error("YouTube livestream check failed:", error);

    return NextResponse.json(
      { error: "Unable to check livestream status." },
      { status: 503 }
    );
  }
}
