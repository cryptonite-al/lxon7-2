import { useEffect, useRef, useState } from "react";
import spotlight from "@/assets/spotlight-loop.mp4";
import spotlightPoster from "@/assets/spotlight-poster.jpg";

// Intro preloader — plays the branded spotlight loop over the homepage once per
// browser session, then fades to reveal the page. Returning to the homepage in
// the same session skips it. Honours prefers-reduced-motion (skips entirely).
const KEY = "lxon7_preloaded";
const HOLD_MS = 5000; // visible time before fade (≥5s so the clip is watchable)
const FADE_MS = 700; // fade-out duration (keep in sync with duration-700 below)

export function Preloader() {
  // Decide synchronously on first render so returning visitors never see a flash.
  const [show, setShow] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      if (sessionStorage.getItem(KEY) === "1") return false;
      if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
        sessionStorage.setItem(KEY, "1");
        return false;
      }
    } catch {
      /* private mode may block storage — just show it this once */
    }
    return true;
  });
  const [fading, setFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!show) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden"; // lock scroll while it plays
    videoRef.current?.play?.().catch(() => {});

    const fadeTimer = setTimeout(() => setFading(true), HOLD_MS);
    const doneTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {
        /* ignore */
      }
      setShow(false);
    }, HOLD_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [show]);

  if (!show) return null;

  return (
    <div
      role="presentation"
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src={spotlight}
        poster={spotlightPoster}
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
        className="w-[220px] max-w-[72vw] object-contain sm:w-[300px]"
      />
    </div>
  );
}
