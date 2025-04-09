import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

interface ProtocolsProps {
	cardBg: string;
	borderColor: string;
}

const protocols = [
	"Hyperliquid",
	"Powertrade",
	"Deribit",
	"GMX",
	"Premia",
	"Rysk",
	"Aevo",
	"Derive",
	"Itacha",
	"Zomma",
];

export const LandingProtocols = ({ cardBg, borderColor }: ProtocolsProps) => (
	<section aria-label="Integrated Protocols">
		<VStack spacing={10} align="center">
			<Heading
				fontSize={{ base: "2xl", md: "3xl" }}
				textAlign="center"
				bgGradient="linear(to-r, blue.400, blue.600)"
				bgClip="text"
			>
				Integrated Protocols
			</Heading>

			<Box
				bg={cardBg}
				p={8}
				borderRadius="xl"
				borderWidth="1px"
				borderColor={borderColor}
				w="full"
				maxW="1200px"
			>
				<SimpleGrid columns={{ base: 2, md: 5 }} spacing={8}>
					{protocols.map((protocol, index) => (
						<MotionBox
							key={protocol}
							p={5}
							borderRadius="lg"
							borderWidth="1px"
							borderColor="whiteAlpha.300"
							textAlign="center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							_hover={{
								borderColor: "blue.400",
								transform: "translateY(-2px)",
								bg: "whiteAlpha.100",
							}}
						>
							<Text fontWeight="bold" color="whiteAlpha.900" fontSize="lg">
								{protocol}
							</Text>
						</MotionBox>
					))}
				</SimpleGrid>
			</Box>
		</VStack>
	</section>
);
