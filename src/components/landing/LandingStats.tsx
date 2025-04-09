import { Box, Heading, SimpleGrid, Text, VStack, Link, HStack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

interface StatsProps {
	cardBg?: string;
	borderColor?: string;
}

export const LandingStats = ({ cardBg, borderColor }: StatsProps) => (
	<section>
		<VStack spacing={8} align="center" w="full" maxW="1200px" mx="auto">
			<Heading
				fontSize={{ base: "3xl", md: "4xl" }}
				textAlign="center"
				bgGradient="linear(to-r, blue.400, purple.400)"
				bgClip="text"
				mb={8}
			>
				Driving Derivatives Innovation
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
				{/* AI Agent Activity */}
				<Box
					bg="rgba(11, 19, 31, 0.75)"
					p={8}
					borderRadius="xl"
					borderWidth="1px"
					borderColor="whiteAlpha.100"
				>
					<Text color="purple.400" fontSize="xl" fontWeight="bold" mb={6}>
						AI Agent Activity
					</Text>
					<SimpleGrid columns={2} spacing={8}>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Active Trade Agents
							</Text>
							<Text color="purple.400" fontSize="3xl" fontWeight="bold">
								117+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Active Social Agents
							</Text>
							<Text color="teal.400" fontSize="3xl" fontWeight="bold">
								9+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Trade Signals
							</Text>
							<Text color="blue.400" fontSize="3xl" fontWeight="bold">
								484+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Social Tasks
							</Text>
							<Text color="pink.400" fontSize="3xl" fontWeight="bold">
								21K+
							</Text>
						</Box>
					</SimpleGrid>
				</Box>
				{/* Transaction Activity */}
				<Box
					bg="rgba(11, 19, 31, 0.75)"
					p={8}
					borderRadius="xl"
					borderWidth="1px"
					borderColor="whiteAlpha.100"
				>
					<Text color="green.400" fontSize="xl" fontWeight="bold" mb={6}>
						Transaction Activity
					</Text>
					<SimpleGrid columns={2} spacing={8}>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Buy Options
							</Text>
							<Text color="green.400" fontSize="3xl" fontWeight="bold">
								1937+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Exercises
							</Text>
							<Text color="orange.400" fontSize="3xl" fontWeight="bold">
								390+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Limit Orders
							</Text>
							<Text color="blue.400" fontSize="3xl" fontWeight="bold">
								306+
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Refunds
							</Text>
							<Text color="purple.400" fontSize="3xl" fontWeight="bold">
								367+
							</Text>
						</Box>
					</SimpleGrid>
				</Box>

				{/* Main Stats Card */}
				<Box
					bg="rgba(11, 19, 31, 0.75)"
					p={8}
					borderRadius="xl"
					borderWidth="1px"
					borderColor="whiteAlpha.100"
					gridColumn={{ md: "span 2" }}
				>
					<SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Notional Volume
							</Text>
							<Text color="blue.400" fontSize="3xl" fontWeight="bold">
								$10.8M
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Active Traders
							</Text>
							<Text color="teal.400" fontSize="3xl" fontWeight="bold">
								285
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Integrated Protocols
							</Text>
							<Text color="blue.400" fontSize="3xl" fontWeight="bold">
								10
							</Text>
						</Box>
						<Box>
							<Text color="gray.400" fontSize="sm" mb={2}>
								Available Markets
							</Text>
							<Text color="purple.400" fontSize="3xl" fontWeight="bold">
								15
							</Text>
						</Box>
					</SimpleGrid>
				</Box>
			</SimpleGrid>
		</VStack>
	</section>
);
