"use client";

import { Box, Container, VStack } from "@chakra-ui/react";
import { colors } from "@/ds/theme";
import { layoutConstants } from "@/ds/theme/foundations/config";
import { HeroSection } from "./components/HeroSection";
import { KeyMetrics } from "./components/KeyMetrics";
import { NetworkAvailability } from "./components/NetworkAvailability";
import { PriceChart } from "./components/PriceChart";
import { TokenUtility } from "./components/TokenUtility";

export const TokenPage = () => {
	const cardBg = "whiteAlpha.50";
	const cardHoverBg = "whiteAlpha.100";
	const borderColor = "whiteAlpha.200";

	return (
		<Box
			backgroundColor={colors.base.black}
			minHeight={layoutConstants.mainContentHeight}
			maxHeight={layoutConstants.mainContentHeight}
			w="full"
			color="white"
			overflow="auto"
			css={{
				"&::-webkit-scrollbar": {
					width: "4px",
				},
				"&::-webkit-scrollbar-track": {
					background: "transparent",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "rgba(255, 255, 255, 0.2)",
					borderRadius: "2px",
				},
			}}
		>
			<Container maxW="1200px" py={12}>
				<VStack spacing={16} align="stretch">
					<HeroSection />
					<KeyMetrics
						cardBg={cardBg}
						cardHoverBg={cardHoverBg}
						borderColor={borderColor}
					/>
					<PriceChart
						cardBg={cardBg}
						cardHoverBg={cardHoverBg}
						borderColor={borderColor}
					/>
					<TokenUtility
						cardBg={cardBg}
						cardHoverBg={cardHoverBg}
						borderColor={borderColor}
					/>
					<NetworkAvailability
						cardBg={cardBg}
						cardHoverBg={cardHoverBg}
						borderColor={borderColor}
					/>
				</VStack>
			</Container>
		</Box>
	);
};
