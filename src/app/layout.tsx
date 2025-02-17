import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";

const geist = Geist({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "GRIX Token",
	description: "GRIX Token Information and Trading",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={geist.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
