"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/ds/theme";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useState } from "react";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// PostHog page view tracking component
function PostHogPageView() {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	
	// Track pageviews
	useEffect(() => {
		if (pathname && typeof posthog.capture === 'function') {
			try {
				let url = window.origin + pathname;
				if (searchParams.toString()) {
					url = url + "?" + searchParams.toString();
				}

				posthog.capture("$pageview", { $current_url: url });
			} catch (error) {
				console.error("Error capturing pageview:", error);
			}
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
	const [isPostHogReady, setIsPostHogReady] = useState(false);

	// Initialize PostHog
	useEffect(() => {
		// Use environment variables for PostHog configuration
		const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';
		
		if (!posthogKey) {
			console.warn('PostHog API key not found in environment variables');
			return;
		}
		
		try {
			// Check if PostHog is already initialized
			if (typeof posthog.__loaded === 'undefined' || posthog.__loaded === false) {
				posthog.init(posthogKey, {
					api_host: posthogHost,
					capture_pageview: false, // Disable automatic pageview capture, as we capture manually
					loaded: function(ph) {
						// Enable debug mode in development
						if (process.env.NODE_ENV === 'development') {
							ph.debug();
						}
						setIsPostHogReady(true);
					}
				});
			} else {
				setIsPostHogReady(true);
			}
		} catch (error) {
			console.error("Error initializing PostHog:", error);
		}
	}, []);

	return (
		<PostHogProvider client={posthog}>
			<ChakraProvider theme={theme}>
				{isPostHogReady && <SuspendedPostHogPageView />}
				{children}
			</ChakraProvider>
		</PostHogProvider>
	);
}
