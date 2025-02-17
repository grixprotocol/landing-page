import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";

const geist = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Grix - Universal DeFi Derivatives Toolkit",
	description: "Empower your DeFi experience with GRIX Token's universal derivatives toolkit",
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
			</head>
			<body className={geist.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
