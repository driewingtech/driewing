import React from "react";

const DEFAULT_ROOT_MARGIN = "300px 0px";

const LazySection = ({
  children,
  className = "section-skeleton",
  minHeight = 320,
  rootMargin = DEFAULT_ROOT_MARGIN,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const placeholderRef = React.useRef(null);

  React.useEffect(() => {
    const node = placeholderRef.current;

    if (!node || isVisible) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  if (isVisible) {
    return children;
  }

  return (
    <div
      ref={placeholderRef}
      className={className}
      aria-hidden="true"
      style={{ minHeight }}
    >
      <div className="container">
        <div className="section-skeleton-card" />
      </div>
    </div>
  );
};

export default LazySection;
