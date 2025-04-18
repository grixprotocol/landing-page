"use client";

import { Box, Flex, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { FaBook } from "react-icons/fa";
import GrixLogoImg from "../../../public/GrixLogo.svg";
import { analytics } from "../../services/analytics";

const APP_LINK = "https://app.grix.finance/trade";
const DOCS_LINK = 'https://grix-1.gitbook.io/grix';

export const Header = () => (
	<Box
		as="header"
		position="fixed"
		top={0}
		left={0}
		right={0}
		zIndex={100}
		bg="rgba(0, 0, 0, 0.85)"
		backdropFilter="blur(10px)"
		borderBottom="1px solid"
		borderColor="whiteAlpha.100"
		height="64px"
		transition="all 0.3s ease"
		_hover={{
			bg: "rgba(0, 0, 0, 0.9)",
			borderColor: "whiteAlpha.200",
		}}
	>
		<Flex
			maxW="1440px"
			mx="auto"
			px={{ base: 4, md: 6 }}
			h="100%"
			align="center"
			justify="space-between"
		>
			<Link href="/" passHref>
				<Box
					position="relative"
					transition="transform 0.3s ease"
					ml={{ base: 0, md: "-12px" }}
					_hover={{
						transform: "scale(1.05)",
					}}
				>
					<Image
						src={GrixLogoImg}
						alt="Grix Logo"
						width={100}
						height={44}
						priority
						style={{
							objectFit: "contain",
							maxWidth: "100%",
							filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
						}}
					/>
				</Box>
			</Link>
			<HStack spacing={4}>
				<Button
					as="a"
					href={DOCS_LINK}
					target="_blank"
					variant="ghost"
					size={{ base: "sm", md: "md" }}
					height={{ base: "32px", md: "40px" }}
					fontSize={{ base: "sm", md: "md" }}
					color="gray.300"
					leftIcon={<FaBook />}
					onClick={() => {
						analytics.trackPageInteraction('docs_click', {
							section: 'header',
						});
					}}
					_hover={{
						transform: "translateY(-2px)",
						color: "blue.400",
						bg: "whiteAlpha.100"
					}}
					transition="all 0.3s"
				>
					Docs
				</Button>
				<Button
					as="a"
					href={APP_LINK}
					target="_blank"
					bgGradient="linear(to-r, blue.400, teal.400)"
					size={{ base: "sm", md: "md" }}
					px={{ base: 4, md: 6 }}
					height={{ base: "32px", md: "40px" }}
					fontSize={{ base: "sm", md: "md" }}
					color="white"
					onClick={() => {
						analytics.trackLaunchApp('header_button');
					}}
					_hover={{
						transform: "translateY(-2px)",
						bgGradient: "linear(to-r, blue.500, teal.500)",
						boxShadow: "0 4px 20px rgba(66, 153, 225, 0.4)",
					}}
					transition="all 0.3s"
				>
					Launch App
				</Button>
			</HStack>
		</Flex>
	</Box>
);
