interface GTagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: string;
}

const GA_KEY = process.env.NEXT_PUBLIC_GA_ID;

const pageview = (url: URL) => {
  window.gtag('config', GA_KEY as string, {
    page_path: url,
  });
};

const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export { GA_KEY, event, pageview };
