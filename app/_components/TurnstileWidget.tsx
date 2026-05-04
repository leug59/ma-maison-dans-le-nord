"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

interface Props {
  onToken: (token: string) => void;
  onExpire?: () => void;
}

export default function TurnstileWidget({ onToken, onExpire }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ts = (window as any).turnstile;
    if (!ts || !containerRef.current || widgetIdRef.current !== null) return;
    widgetIdRef.current = ts.render(containerRef.current, {
      sitekey: siteKey,
      callback: onToken,
      "expired-callback": onExpire ?? (() => {}),
    });
  }, [siteKey, onToken, onExpire]);

  useEffect(() => {
    // Handles case where the script was already cached and loaded
    renderWidget();
    return () => {
      widgetIdRef.current = null;
    };
  }, [renderWidget]);

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onLoad={renderWidget}
      />
      <div ref={containerRef} />
    </>
  );
}
