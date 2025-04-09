import { Box, Flex, Heading, Icon, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
	FaChartLine,
	FaDatabase,
	FaExchangeAlt,
	FaPlug,
	FaRobot,
	FaShieldAlt,
} from "react-icons/fa";

const MotionBox = motion(Box);

interface FeaturesProps {
	cardBg: string;
	cardHoverBg: string;
	borderColor: string;
}

const features = [
	{
		icon: FaChartLine,
		title: "Real-time Market Data",
		description: "Live price feeds and market data across multiple derivatives protocols",
		color: "blue",
	},
	{
		icon: FaDatabase,
		title: "Trading Recommendations",
		description: "AI-powered insights and strategy recommendations for optimized trading",
		color: "teal",
	},
	{
		icon: FaExchangeAlt,
		title: "Portfolio Analysis",
		description: "Comprehensive portfolio tracking and performance metrics",
		color: "cyan",
	},
	{
		icon: FaShieldAlt,
		title: "Risk Management",
		description: "Advanced tools for position hedging and risk minimization",
		color: "green",
	},
	{
		icon: FaPlug,
		title: "Cross-platform Support",
		description: "Unified access to multiple DeFi derivatives protocols",
		color: "purple",
		customBg: "rgba(159, 122, 234, 0.15)",
		customHoverBg: "rgba(159, 122, 234, 0.25)",
		customBorder: "purple.500",
	},
	{
		icon: FaRobot,
		title: "AI-powered Signals",
		description: "Advanced signals for optimal entry and exit points",
		color: "orange",
	},
];

export const LandingFeatures = ({ cardBg, cardHoverBg, borderColor }: FeaturesProps) => (
	<section aria-label="Platform Features">
		<VStack spacing={12} align="center">
			<Heading
				fontSize={{ base: "2xl", md: "3xl" }}
				textAlign="center"
				bgGradient="linear(to-r, blue.400, purple.400)"
				bgClip="text"
			>
				Key Features
			</Heading>

			<SimpleGrid
				columns={{ base: 2, md: 3 }}
				spacing={{ base: 4, md: 8 }}
				w="full"
				maxW="1000px"
			>
				{features.map((feature, index) => (
					<MotionBox
						key={feature.title}
						p={6}
						bg={feature.customBg || cardBg}
						borderRadius="xl"
						borderWidth="1px"
						borderColor={feature.customBorder || borderColor}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						_hover={{
							bg: feature.customHoverBg || cardHoverBg,
							transform: "translateY(-4px)",
							boxShadow: `0 12px 30px -10px ${feature.color}.100`,
							borderColor: `${feature.color}.400`,
						}}
						h="100%"
					>
						<VStack spacing={4} align="flex-start">
							<Flex
								w="50px"
								h="50px"
								bg={`${feature.color}.900`}
								color={`${feature.color}.300`}
								borderRadius="lg"
								align="center"
								justify="center"
								mb={2}
							>
								<Icon as={feature.icon} fontSize="24px" />
							</Flex>
							<Heading size="md" fontWeight="700" color={`${feature.color}.300`}>
								{feature.title}
							</Heading>
							<Text color="white" fontSize="md">
								{feature.description}
							</Text>
						</VStack>
					</MotionBox>
				))}
			</SimpleGrid>
		</VStack>
	</section>
);
