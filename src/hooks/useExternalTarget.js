import { useMemo } from "react";

export default function useExternalTarget() {
  return useMemo(() => {
    const ua = navigator.userAgent;
    const isIOSSafari =
      /iP(ad|hone|od)/.test(ua) &&
      /WebKit/.test(ua) &&
      !/CriOS/.test(ua) &&
      !/FxiOS/.test(ua);
    return isIOSSafari ? "_self" : "_blank";
  }, []);
}
