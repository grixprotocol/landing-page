import { Box, Container, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useGrixMetrics } from "@/api/grixMetrics/useGrixMetrics";
import { NetworkAvailability } from "@/pages/TokenPage/components/NetworkAvailability";
import { ActionButton } from "@/pages/TokenPage/components/TokenPageComponents";
import {
	ForDevelopersSection,
	ForTradersSection,
} from "@/pages/TokenPage/components/TokenPageSections";
import { TokenPageSEO } from "@/pages/TokenPage/components/TokenPageSEO";

import { renderIntegratedProtocolsSection, renderKeyStatsSection } from "./renderTokenPageExtras";
import { renderCtaSection, renderFeaturesSection } from "./renderTokenPageSections";

const MotionBox = motion(Box);

export const TokenPage = () => {
	const cardBg = "whiteAlpha.50";
	const cardHoverBg = "whiteAlpha.100";
	const borderColor = "whiteAlpha.200";

	return (
		<>
			<TokenPageSEO />
			<Box
				position="absolute"
				top={0}
				left={0}
				right={0}
				height="100%"
				bgGradient="radial-gradient(circle at 50% 0%, rgba(46, 211, 183, 0.2) 0%, rgba(21, 183, 158, 0.15) 25%, rgba(0, 122, 255, 0.1) 50%, transparent 100%)"
				filter="blur(140px)"
				transform="translateZ(0)"
				animation="pulse 12s infinite"
			/>

			<Container
				maxW="1400px"
				py={{ base: 24, md: 32, lg: 36 }}
				px={{ base: 4, md: 8 }}
				position="relative"
			>
				<VStack spacing={{ base: 28, md: 32, lg: 36 }} align="stretch">
					{/* Hero Section */}
					<VStack spacing={8} align="center" textAlign="center">
						<Heading
							fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
							lineHeight={1.2}
							bgGradient="linear(to-r, blue.400, teal.400)"
							bgClip="text"
							mb={4}
						>
							The Universal Language for
							<br />
							DeFi Derivatives Interactions
						</Heading>
						<Text
							fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
							maxW="800px"
							color="whiteAlpha.900"
							lineHeight={1.6}
						>
							Grix provides battle-tested toolkits that empower users and AI agents
							with comprehensive solutions for risk management, position optimization,
							and strategy execution across leading DeFi derivatives platforms.
						</Text>
						<HStack spacing={6} pt={4}>
							<ActionButton
								href="https://app.grix.finance"
 							>
								Launch App
							</ActionButton>
							<ActionButton
								href="https://app.grix.finance/calypso/lobby"
								variant="primary"
 							>
								AI Playground
							</ActionButton>
						</HStack>
					</VStack>

					{/* Key Stats Section */}
					{renderKeyStatsSection({ cardBg, borderColor, grixMetrics })}

					{/* Integrated Protocols Section */}
					{renderIntegratedProtocolsSection({ cardBg, borderColor })}

					{/* Core Products Section */}
					<section aria-label="Core Products">
						<VStack spacing={12} align="center">
							<Heading
								fontSize={{ base: "2xl", md: "3xl" }}
								textAlign="center"
								bgGradient="linear(to-r, teal.400, blue.400)"
								bgClip="text"
							>
								Core Products
							</Heading>

							<SimpleGrid
								columns={{ base: 1, md: 2 }}
								spacing={8}
								w="full"
								maxW="1200px"
							>
								<MotionBox
									p={8}
									bg={cardBg}
									borderRadius="xl"
									borderWidth="1px"
									borderColor={borderColor}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 }}
									_hover={{
										bg: cardHoverBg,
										transform: "translateY(-4px)",
										boxShadow: "0 12px 30px -10px rgba(46, 164, 79, 0.2)",
										borderColor: "green.400",
									}}
									h="100%"
								>
									<VStack spacing={6} align="center" textAlign="center">
										<Heading size="lg" fontWeight="800">
											<Text as="span" color="green.200" fontSize="2xl" mr={2}>
												🖥️
											</Text>
											<Text
												as="span"
												bgGradient="linear(to-r, green.200, teal.200)"
												bgClip="text"
											>
												Trading Interface
											</Text>
										</Heading>
										<Text color="white" fontSize="lg">
											Compare options prices, view options matrices, and
											manage positions
										</Text>
										<ActionButton href="https://app.grix.finance" size="md">
											Launch App
										</ActionButton>
									</VStack>
								</MotionBox>

								<MotionBox
									p={8}
									bg={cardBg}
									borderRadius="xl"
									borderWidth="1px"
									borderColor={borderColor}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
									_hover={{
										bg: cardHoverBg,
										transform: "translateY(-4px)",
										boxShadow: "0 12px 30px -10px rgba(74, 21, 75, 0.2)",
										borderColor: "purple.400",
									}}
									h="100%"
								>
									<VStack spacing={6} align="center" textAlign="center">
										<Heading size="lg" fontWeight="800">
											<Text
												as="span"
												color="purple.200"
												fontSize="2xl"
												mr={2}
											>
												🤖
											</Text>
											<Text
												as="span"
												bgGradient="linear(to-r, purple.200, pink.200)"
												bgClip="text"
											>
												AI Agent Playground
											</Text>
										</Heading>
										<Text color="white" fontSize="lg">
											API access and plugins for LLM platforms
										</Text>
										<ActionButton
											href="https://app.grix.finance/calypso/lobby"
 											size="md"
										>
											Start Building
										</ActionButton>
									</VStack>
								</MotionBox>
							</SimpleGrid>
						</VStack>
					</section>

					{/* Features Section */}
					{renderFeaturesSection({
						cardBg,
						cardHoverBg,
						borderColor,
					})}

					{/* For Developers Section */}
					<ForDevelopersSection cardBg={cardBg} borderColor={borderColor} />

					{/* For Traders Section */}
					<ForTradersSection cardBg={cardBg} borderColor={borderColor} />

					{/* Network Availability Section */}
					<section aria-label="Network Availability">
						<VStack spacing={8} align="center">
							<Heading
								fontSize={{ base: "2xl", md: "3xl" }}
								textAlign="center"
								bgGradient="linear(to-r, blue.300, teal.300)"
								bgClip="text"
								fontWeight="bold"
							>
								Available Across Leading Networks
							</Heading>
							<NetworkAvailability
								cardBg={cardBg}
								cardHoverBg={cardHoverBg}
								borderColor={borderColor}
							/>
						</VStack>
					</section>

					{/* Final CTA Section */}
					{/* {renderCtaSection({
						cardBg,
						borderColor,
						track,
					})} */}
				</VStack>
			</Container>
		</>
	);
};
