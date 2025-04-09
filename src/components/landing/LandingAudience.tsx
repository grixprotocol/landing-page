import { Box, Heading, HStack, Icon, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { HiCode, HiDatabase, HiDocument } from "react-icons/hi";

interface AudienceProps {
	borderColor: string;
}

export const DevelopersSection = ({  borderColor }: AudienceProps) => (
	<section aria-label="For Developers">
		<VStack spacing={12} align="center" w="full" maxW="1200px" mx="auto">
			<Heading
				fontSize={{ base: "2xl", md: "3xl" }}
				textAlign="center"
				bgGradient="linear(to-r, purple.400, pink.400)"
				bgClip="text"
			>
				For Developers
			</Heading>

			{/* Main Container */}
			<Box
				w="full"
				bg="rgba(17, 25, 40, 0.75)"
				borderRadius="xl"
				borderWidth="1px"
				borderColor={borderColor}
				overflow="hidden"
				p={8}
			>
				{/* Plugin Cards */}
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
					{/* Eliza Plugin Card */}
					<Box
						p={6}
						borderRadius="lg"
						bg="rgba(56, 189, 248, 0.1)"
						borderWidth="1px"
						borderColor="blue.400"
						position="relative"
						transition="all 0.3s"
						_hover={{
							transform: "translateY(-4px)",
							boxShadow: "0 4px 12px rgba(56, 189, 248, 0.15)",
						}}
					>
						<VStack align="flex-start" spacing={4}>
							<HStack spacing={3}>
								<Icon as={HiDatabase} boxSize={7} color="blue.400" />
								<Text fontSize="xl" color="blue.400" fontWeight="bold">
									Grix Plugin for Eliza
								</Text>
							</HStack>
							<Text color="whiteAlpha.900" fontSize="lg">
								Seamless integration with Eliza for enhanced DeFi operations and
								automated trading strategies.
							</Text>
							<Box pt={2}>
								<Link
									href="https://github.com/grixprotocol/plugin-grix"
									display="inline-flex"
									alignItems="center"
									px={4}
									py={2}
									borderRadius="md"
									bg="rgba(56, 189, 248, 0.15)"
									color="blue.400"
									transition="all 0.2s"
									_hover={{
										bg: "rgba(56, 189, 248, 0.25)",
										transform: "translateX(4px)",
									}}
								>
									<HStack spacing={2}>
										<Icon as={FaGithub} />
										<Text>View on GitHub</Text>
									</HStack>
								</Link>
							</Box>
						</VStack>
					</Box>

					{/* MCP Plugin Card */}
					<Box
						p={6}
						borderRadius="lg"
						bg="rgba(168, 85, 247, 0.1)"
						borderWidth="1px"
						borderColor="purple.400"
						position="relative"
						transition="all 0.3s"
						_hover={{
							transform: "translateY(-4px)",
							boxShadow: "0 4px 12px rgba(168, 85, 247, 0.15)",
						}}
					>
						<VStack align="flex-start" spacing={4}>
							<HStack spacing={3}>
								<Icon as={HiCode} boxSize={7} color="purple.400" />
								<Text fontSize="xl" color="purple.400" fontWeight="bold">
									Grix Plugin for MCP
								</Text>
							</HStack>
							<Text color="whiteAlpha.900" fontSize="lg">
								Multi-chain Protocol integration enabling cross-chain operations and
								unified trading experience.
							</Text>
							<Box pt={2}>
								<Link
									href="https://github.com/grixprotocol/options-perps-derivatives-mcp"
									display="inline-flex"
									alignItems="center"
									px={4}
									py={2}
									borderRadius="md"
									bg="rgba(168, 85, 247, 0.15)"
									color="purple.400"
									transition="all 0.2s"
									_hover={{
										bg: "rgba(168, 85, 247, 0.25)",
										transform: "translateX(4px)",
									}}
								>
									<HStack spacing={2}>
										<Icon as={FaGithub} />
										<Text>View on GitHub</Text>
									</HStack>
								</Link>
							</Box>
						</VStack>
					</Box>
				</SimpleGrid>

				{/* Developer Resources */}
				<VStack spacing={6} align="center">
					<Text fontSize="xl" color="teal.400" fontWeight="bold">
						Developer Resources
					</Text>

					<HStack spacing={4} justify="center" flexWrap={{ base: "wrap", md: "nowrap" }}>
						<Link
							href="https://app.grix.finance/api"
							bg="rgba(147, 51, 234, 0.3)"
							color="white"
							px={6}
							py={3}
							borderRadius="full"
							transition="all 0.2s"
							_hover={{
								bg: "rgba(147, 51, 234, 0.4)",
								transform: "translateY(-2px)",
							}}
						>
							<HStack spacing={2}>
								<Icon as={HiDatabase} />
								<Text>API Dashboard</Text>
							</HStack>
						</Link>
						<Link
							href="https://docs.grix.finance"
							bg="rgba(59, 130, 246, 0.3)"
							color="white"
							px={6}
							py={3}
							borderRadius="full"
							transition="all 0.2s"
							_hover={{
								bg: "rgba(59, 130, 246, 0.4)",
								transform: "translateY(-2px)",
							}}
						>
							<HStack spacing={2}>
								<Icon as={HiDocument} />
								<Text>API Documentation</Text>
							</HStack>
						</Link>
						<Link
							href="https://github.com/grixprotocol"
							bg="rgba(17, 25, 40, 0.75)"
							color="white"
							px={6}
							py={3}
							borderRadius="full"
							borderWidth="1px"
							borderColor="whiteAlpha.200"
							transition="all 0.2s"
							_hover={{
								bg: "rgba(17, 25, 40, 0.9)",
								transform: "translateY(-2px)",
							}}
						>
							<HStack spacing={2}>
								<Icon as={FaGithub} />
								<Text>GitHub</Text>
							</HStack>
						</Link>
					</HStack>
				</VStack>
			</Box>
		</VStack>
	</section>
);

export const TradersSection = ({ borderColor }: AudienceProps) => (
	<section aria-label="For Traders">
		<VStack spacing={12} align="center" w="full" maxW="1200px" mx="auto">
			<Heading
				fontSize={{ base: "2xl", md: "3xl" }}
				textAlign="center"
				bgGradient="linear(to-r, green.400, teal.400)"
				bgClip="text"
			>
				For Traders
			</Heading>

			<Box
				w="full"
				bg="rgba(17, 25, 40, 0.75)"
				borderRadius="xl"
				borderWidth="1px"
				borderColor={borderColor}
				p={8}
			>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
					{/* Price Comparison */}
					<VStack align="flex-start" spacing={4}>
						<Heading size="lg" color="blue.400">
							Price Comparison
						</Heading>
						<Text color="whiteAlpha.900" fontSize="lg">
							Compare options prices across multiple DeFi platforms
						</Text>
						<Link
							href="https://app.grix.finance/compare"
							color="blue.400"
							fontSize="lg"
							display="flex"
							alignItems="center"
							_hover={{ textDecoration: "none", color: "blue.300" }}
						>
							Try Price Comparison →
						</Link>
					</VStack>

					{/* Options Matrix */}
					<VStack align="flex-start" spacing={4}>
						<Heading size="lg" color="purple.400">
							Options Matrix
						</Heading>
						<Text color="whiteAlpha.900" fontSize="lg">
							Comprehensive unified view of options prices
						</Text>
						<Link
							href="https://app.grix.finance/optionsMatrix?asset=BTC&optionType=call"
							color="purple.400"
							fontSize="lg"
							display="flex"
							alignItems="center"
							_hover={{ textDecoration: "none", color: "purple.300" }}
						>
							View Options Matrix →
						</Link>
					</VStack>

					{/* Dashboard */}
					<VStack align="flex-start" spacing={4}>
						<Heading size="lg" color="green.400">
							Dashboard
						</Heading>
						<Text color="whiteAlpha.900" fontSize="lg">
							Track positions and monitor orders in real-time
						</Text>
						<Link
							href="https://app.grix.finance/portfolio?ordersTableType=LiveOrders"
							color="green.400"
							fontSize="lg"
							display="flex"
							alignItems="center"
							_hover={{ textDecoration: "none", color: "green.300" }}
						>
							Open Dashboard →
						</Link>
					</VStack>
				</SimpleGrid>
			</Box>
		</VStack>
	</section>
);
