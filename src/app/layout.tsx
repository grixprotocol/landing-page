import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";

const geist = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.grix.finance"),
	title: "GRIX | DeFi Options Aggregator",
	description: "Unified Liquidity protocol for the DeFi options market",
	keywords:
		"DeFi derivatives toolkit, AI trading agents, risk management tools, position optimization, strategy execution, ElizaOS integration, enterprise DeFi, protocol integration, GRIX token, decentralized finance",
	authors: [{ name: "Grix Finance" }],
	viewport: "width=device-width, initial-scale=1.0",
	robots: "index, follow",
	applicationName: "Grix Finance",
	creator: "Grix Finance",
	publisher: "Grix Finance",
	formatDetection: {
		telephone: false,
	},
	themeColor: "#000000",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black",
		title: "Grix Finance",
	},
	openGraph: {
		type: "website",
		url: "https://www.grix.finance/",
		title: "GRIX | DeFi Options Aggregator",
		description: "Unified Liquidity protocol for the DeFi options market",
		siteName: "Grix Finance",
		locale: "en_US",
		images: [
			{
				url: "https://cdn.prod.website-files.com/64ee0b5cf326da0c678c499a/656f51799ecc50891f0d5de8_1200x600.png",
				alt: "GRIX DeFi Options Aggregator",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "GRIX | DeFi Options Aggregator",
		description: "Unified Liquidity protocol for the DeFi options market",
		site: "@GrixFinance",
		creator: "@GrixFinance",
		images: [
			"https://cdn.prod.website-files.com/64ee0b5cf326da0c678c499a/656f51799ecc50891f0d5de8_1200x600.png",
		],
	},
	icons: {
		icon: [
			{
				url: "/GrixLogoV2.svg",
				type: "image/svg+xml",
				sizes: "any",
			},
			{
				url: "/favicon.ico",
				sizes: "32x32",
			},
		],
		apple: [
			{
				url: "/apple-icon.png",
				sizes: "180x180",
			},
		],
	},
	alternates: {
		canonical: "https://www.grix.finance/",
	},
	other: {
		"ia:markup_url": "",
		"ia:markup_url_dev": "",
		"ia:rules_url": "",
		"ia:rules_url_dev": "",
		"og:updated_time": "1739804666",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/GrixLogoV2.svg" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-400528782"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-400528782');
					`}
				</Script>
			</head>
			<body className={geist.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
