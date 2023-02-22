import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";

interface ScrollWatchProps {
  as: React.ElementType;
  children?: React.ReactNode;
  className?: string;
  threshold?: string;
}

export const ScrollWatch = ({
  as,
  children,
  className,
  threshold = "0",
}: ScrollWatchProps) => {
  const Component = as;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const isInViewport = useIsInViewport(ref);

  useEffect(() => {
    if (isInViewport && !isVisible) {
      setTimeout(() => {
        setIsVisible(true);
      }, +threshold * 1000);
    }
  }, [isInViewport, isVisible]);

  return (
    <Component
      ref={ref}
      className={classNames(className, { "_watcher-view": isVisible })}
    >
      {children}
    </Component>
  );
};

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
