import { Box, Container, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { PrimaryButton, SecondaryButton } from "./common/Buttons";

const MotionBox = motion(Box);

export const LandingHero = () => {
	return (
		<Container maxW="1400px" position="relative">
			{/* Background gradient effect */}
			<MotionBox
				position="absolute"
				top={0}
				left={0}
				right={0}
				height="100%"
				bgGradient="radial-gradient(circle at 50% 0%, rgba(46, 211, 183, 0.2) 0%, rgba(21, 183, 158, 0.15) 25%, rgba(0, 122, 255, 0.1) 50%, transparent 100%)"
				filter="blur(140px)"
				transform="translateZ(0)"
				animate={{
					opacity: [0.5, 1, 0.5],
				}}
				transition={{
					duration: 12,
					repeat: Infinity,
					ease: "linear",
				}}
			/>

			{/* Hero content */}
			<VStack spacing={8} align="center" textAlign="center" py={{ base: 24, md: 32 }}>
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
					Grix provides battle-tested toolkits that empower users and AI agents with
					comprehensive solutions for risk management, position optimization, and strategy
					execution across leading DeFi derivatives platforms.
				</Text>

				<HStack spacing={6} pt={4}>
					<PrimaryButton href="https://app.grix.finance">Launch App</PrimaryButton>
					<SecondaryButton href="https://app.grix.finance/calypso/lobby">
						AI Playground
					</SecondaryButton>
				</HStack>
			</VStack>
		</Container>
	);
};
