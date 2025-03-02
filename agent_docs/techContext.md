The project uses HTML, CSS, and JavaScript for a static website. Development is set up using a local development server with tools for live reloading and linting. Technical constraints include ensuring compatibility across modern browsers and devices, optimizing load times, and minimizing dependencies.

The project uses Next.js as the framework with Chakra UI for the component library. For analytics and tracking, the project implements:

1. Mixpanel - Used for tracking user interactions, with a custom configuration that routes through the Grix API:
   - Initialized with token '2111331d11fb90732a2aa39342002652'
   - Uses custom API routes for tracking data
   - Configured with custom headers including an API key
   - Tracks events like page interactions, app launches, and social link clicks

2. PostHog - Added as an additional analytics platform alongside Mixpanel:
   - Implemented using the Next.js app router approach with proper client-side initialization
   - Initialized in the providers.tsx file with PostHogProvider from posthog-js/react
   - Includes automatic page view tracking integrated with Next.js routing
   - Uses the Suspense API to prevent client-side rendering issues
   - Implements the same event tracking structure as Mixpanel
   - Uses the posthog-js library
   - Captures the same events: page interactions, app launches, and social link clicks

3. Google Tag Manager (GTM-WWGR4G8F) - For managing various tracking scripts

4. Google Analytics (G-Y4EGK3QGSZ) - For general website analytics

The analytics implementation is structured in a service-based approach, with a dedicated analytics service that provides methods for tracking different types of events. 