import React, { useRef, useEffect } from "react";

export default function SmoothScroller({ children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  // Tweak these for slipiness:
  const ease = 0.14;       
  const multiplier = 1.3;    

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    let current = 0;
    let target = 0;

    // Capture wheel and update target
    const onWheel = (e) => {
      e.preventDefault();
      target += e.deltaY * multiplier;
      const max = inner.clientHeight - outer.clientHeight;
      target = Math.max(0, Math.min(target, max));
    };
    outer.addEventListener("wheel", onWheel, { passive: false });

    // RAF loop to lerp current toward target
    const animate = () => {
      current += (target - current) * ease;
      inner.style.transform = `translateY(${-current}px)`;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => outer.removeEventListener("wheel", onWheel);
  }, [ease, multiplier]);

  return (
    <div ref={outerRef} className="smooth-outer">
      <div ref={innerRef} className="smooth-inner">
        {children}
      </div>
    </div>
  );
}
