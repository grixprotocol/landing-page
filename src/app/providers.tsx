"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/ds/theme";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// PostHog page view tracking component
function PostHogPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Track pageviews
	useEffect(() => {
		if (pathname) {
			let url = window.origin + pathname;
			if (searchParams.toString()) {
				url = url + "?" + searchParams.toString();
			}

			posthog.capture("$pageview", { $current_url: url });
		}
	}, [pathname, searchParams]);

	return null;
}

// Wrap PostHogPageView in Suspense to avoid the useSearchParams usage
// from de-opting the whole app into client-side rendering
function SuspendedPostHogPageView() {
	return (
		<Suspense fallback={null}>
			<PostHogPageView />
		</Suspense>
	);
}

// Combined provider component
export function Providers({ children }: { children: React.ReactNode }) {
	// Initialize PostHog
	useEffect(() => {
		// Replace 'YOUR_POSTHOG_API_KEY' with your actual API key
		posthog.init('phc_1ndM9W27cV3meFtNFwTK6tHC5ndyR2PXQMQMaJD6bxM', {
			api_host: 'https://app.posthog.com', // or your self-hosted URL
			capture_pageview: false, // Disable automatic pageview capture, as we capture manually
			loaded: function(posthog) {
				// Enable debug mode in development
				if (process.env.NODE_ENV === 'development') {
					posthog.debug();
				}
			}
		});
	}, []);

	return (
		<PostHogProvider client={posthog}>
			<ChakraProvider theme={theme}>
				<SuspendedPostHogPageView />
				{children}
			</ChakraProvider>
		</PostHogProvider>
	);
}
