import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PrimaryButton } from "./common/Buttons";

const MotionBox = motion(Box);

interface ProductsProps {
	cardBg: string;
	cardHoverBg: string;
	borderColor: string;
}

const products = [
	{
		title: "Trading Interface",
		description: "Compare options prices, view options matrices, and manage positions",
		icon: "🖥️",
		color: "green",
		buttonText: "Launch App",
		href: "https://app.grix.finance",
	},
	{
		title: "AI Agent Playground",
		description: "API access and plugins for LLM platforms",
		icon: "🤖",
		color: "purple",
		buttonText: "Start Building",
		href: "https://app.grix.finance/calypso/lobby",
	},
];

export const LandingProducts = ({ cardBg, cardHoverBg, borderColor }: ProductsProps) => (
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

			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full" maxW="1200px">
				{products.map((product, index) => (
					<MotionBox
						key={product.title}
						p={8}
						bg={cardBg}
						borderRadius="xl"
						borderWidth="1px"
						borderColor={borderColor}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 }}
						_hover={{
							bg: cardHoverBg,
							transform: "translateY(-4px)",
							boxShadow: `0 12px 30px -10px ${
								product.color === "green"
									? "rgba(46, 164, 79, 0.2)"
									: "rgba(74, 21, 75, 0.2)"
							}`,
							borderColor: `${product.color}.400`,
						}}
						h="100%"
					>
						<VStack spacing={6} align="center" textAlign="center">
							<Heading size="lg" fontWeight="800">
								<Text
									as="span"
									color={`${product.color}.200`}
									fontSize="2xl"
									mr={2}
								>
									{product.icon}
								</Text>
								<Text
									as="span"
									bgGradient={`linear(to-r, ${product.color}.200, ${
										product.color === "green" ? "teal" : "pink"
									}.200)`}
									bgClip="text"
								>
									{product.title}
								</Text>
							</Heading>
							<Text color="white" fontSize="lg">
								{product.description}
							</Text>
							<PrimaryButton href={product.href} size="md">
								{product.buttonText}
							</PrimaryButton>
						</VStack>
					</MotionBox>
				))}
			</SimpleGrid>
		</VStack>
	</section>
);
