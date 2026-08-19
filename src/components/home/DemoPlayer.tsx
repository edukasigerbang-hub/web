"use client";

import { demoSx } from "@/data/site";
import { track } from "@/lib/analytics";

/** Demo video player — fires video_play event when playback starts. */
export function DemoPlayer() {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-line bg-ink shadow-card">
      <video
        className="h-full w-full object-cover"
        controls
        preload="none"
        poster="/assets/demo-poster.png"
        onPlay={() => track("video_play", { source: "homepage-demo" })}
      >
        <source src={demoSx.videoSrc} type="video/mp4" />
        Browser Anda tidak mendukung pemutaran video.
      </video>
    </div>
  );
}