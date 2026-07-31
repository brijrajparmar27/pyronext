export const GA_TRACKING_ID = "G-PSX0G5C1CF";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetOrAction: string,
      additionalParams?: Record<string, unknown>
    ) => void;
  }
}

// Log the pageview with a specific URL
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = (
  action: string,
  {
    event_category,
    event_label,
    value,
    ...rest
  }: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: unknown;
  } = {}
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category,
      event_label,
      value,
      ...rest,
    });
  }
};
