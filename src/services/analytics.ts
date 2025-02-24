import Mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
Mixpanel.init('2111331d11fb90732a2aa39342002652', {
  track_pageview: true,
  persistence: 'localStorage',
  ignore_dnt: true,
  batch_requests: false,
  api_transport: 'XHR',
  api_method: 'POST',
  api_payload_format: 'json',
  api_host: 'https://internal-api-dev.grix.finance',
  api_routes: {
    track: 'data/activity',
    engage: 'data/account',
  },
  xhr_headers: {
    'x-api-key': 'Vf4KrqNjAzHLbVgZBb90PYKw797UtVd4A3B5AuZH',
  },
});

export const ANALYTICS_EVENTS = {
  PAGE_INTERACTION: 'page_interaction',
  LAUNCH_APP: 'launch_app',
  SOCIAL_LINK: 'social_link'
} as const;

export const analytics = {
  identify: (identifier: string) => {
    Mixpanel.identify(identifier);
  },
  track: (eventName: string, props: Record<string, unknown> = {}) => {
    Mixpanel.track(eventName, props);
  },
  // Page content interactions (pillars, networks, etc)
  trackPageInteraction: (interactionType: string, additionalProps: Record<string, unknown> = {}) => {
    Mixpanel.track(ANALYTICS_EVENTS.PAGE_INTERACTION, {
      interaction_type: interactionType,
      ...additionalProps,
    });
  },
  // Launch app specific tracking
  trackLaunchApp: (source: string, additionalProps: Record<string, unknown> = {}) => {
    Mixpanel.track(ANALYTICS_EVENTS.LAUNCH_APP, {
      source,
      ...additionalProps,
    });
  },
  // Social and footer links
  trackSocialLink: (platform: string, additionalProps: Record<string, unknown> = {}) => {
    Mixpanel.track(ANALYTICS_EVENTS.SOCIAL_LINK, {
      platform,
      ...additionalProps,
    });
  }
}; 