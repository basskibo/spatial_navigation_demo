// hooks/useIntersectionObserver.ts
import { useEffect, useState, useRef } from "react";

export function useIntersectionObserver({
   root = null,
   rootMargin = "0px",
   threshold = 0.1,
}: IntersectionObserverInit = {}) {
   const [isIntersecting, setIsIntersecting] = useState(false);
   const ref = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
         ([entry]) => {
            setIsIntersecting(entry.isIntersecting);
         },
         { root, rootMargin, threshold }
      );

      observer.observe(ref.current);

      return () => {
         observer.disconnect();
      };
   }, [ref.current]);

   return [ref, isIntersecting] as const;
}
