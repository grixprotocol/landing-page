import Mixpanel from 'mixpanel-browser';
import posthog from 'posthog-js';

// Initialize Mixpanel
const initMixpanel = () => {
  const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
  
  if (!mixpanelToken) {
    console.warn('Mixpanel token not found in environment variables');
    return;
  }
  
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
};

// Initialize Mixpanel on load
initMixpanel();

// Note: PostHog is now initialized in src/app/providers.tsx
// We don't need to initialize it here again

export const ANALYTICS_EVENTS = {
  PAGE_INTERACTION: 'page_interaction',
  LAUNCH_APP: 'launch_app',
  SOCIAL_LINK: 'social_link'
} as const;

export const analytics = {
  identify: (identifier: string) => {
    // Track in Mixpanel
    Mixpanel.identify(identifier);
    
    // Track in PostHog
    posthog.identify(identifier);
  },
  track: (eventName: string, props: Record<string, unknown> = {}) => {
    // Track in Mixpanel
    Mixpanel.track(eventName, props);
    
    // Track in PostHog
    posthog.capture(eventName, props);
  },
  // Page content interactions (pillars, networks, etc)
  trackPageInteraction: (interactionType: string, additionalProps: Record<string, unknown> = {}) => {
    const properties = {
      interaction_type: interactionType,
      ...additionalProps,
    };
    
    // Track in Mixpanel
    Mixpanel.track(ANALYTICS_EVENTS.PAGE_INTERACTION, properties);
    
    // Track in PostHog
    posthog.capture(ANALYTICS_EVENTS.PAGE_INTERACTION, properties);
  },
  // Launch app specific tracking
  trackLaunchApp: (source: string, additionalProps: Record<string, unknown> = {}) => {
    const properties = {
      source,
      ...additionalProps,
    };
    
    // Track in Mixpanel
    Mixpanel.track(ANALYTICS_EVENTS.LAUNCH_APP, properties);
    
    // Track in PostHog
    posthog.capture(ANALYTICS_EVENTS.LAUNCH_APP, properties);
  },
  // Social and footer links
  trackSocialLink: (platform: string, additionalProps: Record<string, unknown> = {}) => {
    const properties = {
      platform,
      ...additionalProps,
    };
    
    // Track in Mixpanel
    Mixpanel.track(ANALYTICS_EVENTS.SOCIAL_LINK, properties);
    
    // Track in PostHog
    posthog.capture(ANALYTICS_EVENTS.SOCIAL_LINK, properties);
  }
}; 