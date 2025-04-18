import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { Providers } from './providers';
import Script from 'next/script';

const geist = Geist({
	subsets: ['latin'],
});

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1.0,
	themeColor: '#000000',
};

export const metadata: Metadata = {
	metadataBase: new URL('https://www.grix.finance'),
	title: 'GRIX | Universal DeFi Derivatives Language',
	description:
		'The Universal Language for DeFi Derivatives Interactions. Empower your AI agents with battle-tested toolkits for risk management, position optimization, and strategy execution across leading agentic platforms like ElizaOS.',
	keywords:
		'DeFi derivatives language, AI trading agents, risk management tools, position optimization, strategy execution, ElizaOS integration, enterprise DeFi, protocol integration, derivatives toolkits, agentic trading, GRIX token, decentralized finance, cross-protocol position tools, market analysis framework, token staking, governance token',
	authors: [{ name: 'Grix Finance' }],
	robots: 'index, follow',
	applicationName: 'Grix Finance',
	creator: 'Grix Finance',
	publisher: 'Grix Finance',
	formatDetection: {
		telephone: false,
	},
	appleWebApp: {
		capable: true,
		statusBarStyle: 'black',
		title: 'Grix Finance - Universal DeFi Derivatives Language',
	},
	openGraph: {
		type: 'website',
		url: 'https://www.grix.finance/',
		title: 'GRIX | Universal DeFi Derivatives Language',
		description:
			'The Universal Language for DeFi Derivatives Interactions. Access premium features and unlock powerful derivatives trading toolkits with GRIX token. Available on Ethereum, Arbitrum, and Solana.',
		siteName: 'Grix Finance',
		locale: 'en_US',
		images: [
			{
				url: 'https://grix-develop-media.s3.amazonaws.com/Grix-AIunifiedliquidityforDeFioptions.jpg',
				width: 1200,
				height: 600,
				alt: 'GRIX - Universal DeFi Derivatives Language Platform',
				type: 'image/png',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'GRIX | Universal DeFi Derivatives Language',
		description:
			'Get started with GRIX token - Access standardized protocol integration, risk management, and strategy execution tools. Available on multiple networks.',
		site: '@GrixFinance',
		creator: '@GrixFinance',
		images: [
			{
				url: 'https://grix-develop-media.s3.amazonaws.com/Grix-AIunifiedliquidityforDeFioptions.jpg',
				alt: 'GRIX - Universal DeFi Derivatives Language Platform',
				width: 1200,
				height: 600,
			},
		],
	},
	icons: {
		icon: [
			{
				url: '/logo.png',
				type: 'image/png',
				sizes: '512x512',
			},
			{
				url: '/GrixLogoV2.svg',
				type: 'image/svg+xml',
				sizes: 'any',
			},
			{
				url: '/favicon.ico',
				sizes: '32x32',
			},
		],
		apple: [
			{
				url: '/apple-icon.png',
				sizes: '180x180',
			},
		],
	},
	alternates: {
		canonical: 'https://www.grix.finance/',
	},
	other: {
		'ia:markup_url': '',
		'ia:markup_url_dev': '',
		'ia:rules_url': '',
		'ia:rules_url_dev': '',
		'og:updated_time': '1739804666',
		'og:logo': '/logo.png',
		'msvalidate.01': '875A6DAAE92712CE0C823F122522AF4A',
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
				<link rel="icon" href="/logo.png" type="image/png" />
				<link rel="apple-touch-icon" href="/apple-icon.png" />
				{/* Google Tag Manager */}
				<Script id="google-tag-manager" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WWGR4G8F');
					`}
				</Script>
				{/* End Google Tag Manager */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-400528782"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-Y4EGK3QGSZ');
					`}
				</Script>
			</head>
			<body className={geist.className}>
				{/* Google Tag Manager (noscript) */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-WWGR4G8F"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
				{/* End Google Tag Manager (noscript) */}
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
