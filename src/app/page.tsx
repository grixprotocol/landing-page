"use client";

import { Container, VStack } from "@chakra-ui/react";

import { DevelopersSection, TradersSection } from "@/components/landing/LandingAudience";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingHero } from "@/components/landing/LandingHero";
import { LandingNetworks } from "@/components/landing/LandingNetworks";
import { LandingProducts } from "@/components/landing/LandingProducts";
import { LandingProtocols } from "@/components/landing/LandingProtocols";
import { LandingStats } from "@/components/landing/LandingStats";
import { LandingJoin } from "@/components/landing/LandingJoin";

export default function LandingPage() {
	const cardBg = "rgba(17, 25, 40, 0.75)";
	const cardHoverBg = "rgba(17, 25, 40, 0.9)";
	const borderColor = "whiteAlpha.200";

	return (
		<Container maxW="full" p={0}>
			<VStack spacing={24} align="stretch" py={16}>
				{/* Hero Section */}
				<LandingHero />

				{/* Key Stats Section */}
				<LandingStats cardBg={cardBg} borderColor={borderColor} />

				{/* Integrated Protocols Section */}
				<LandingProtocols cardBg={cardBg} borderColor={borderColor} />

				{/* Core Products Section */}
				<LandingProducts
					cardBg={cardBg}
					cardHoverBg={cardHoverBg}
					borderColor={borderColor}
				/>

				{/* Features Section */}
				<LandingFeatures
					cardBg={cardBg}
					cardHoverBg={cardHoverBg}
					borderColor={borderColor}
				/>

				{/* For Developers Section */}
				<DevelopersSection cardBg={cardBg} borderColor={borderColor} />

				{/* For Traders Section */}
				<TradersSection cardBg={cardBg} borderColor={borderColor} />

				{/* Network Availability Section */}
				<LandingNetworks
					cardBg={cardBg}
					cardHoverBg={cardHoverBg}
					borderColor={borderColor}
				/>

				<LandingJoin />
			</VStack>
		</Container>
	);
}
