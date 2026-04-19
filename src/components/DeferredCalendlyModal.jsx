import React from "react";

const CalendlyPopupModal = React.lazy(() =>
  import("react-calendly").then((module) => ({ default: module.PopupModal })),
);

const DeferredCalendlyModal = ({ isOpen, onClose, url }) => {
  const rootElement =
    typeof document !== "undefined" ? document.getElementById("root") : null;

  if (!isOpen || !rootElement) {
    return null;
  }

  return (
    <React.Suspense fallback={null}>
      <CalendlyPopupModal
        url={url}
        onModalClose={onClose}
        open={isOpen}
        rootElement={rootElement}
      />
    </React.Suspense>
  );
};

export default DeferredCalendlyModal;
