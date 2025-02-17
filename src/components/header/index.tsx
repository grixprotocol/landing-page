"use client";

import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import GrixLogoImg from "../../../public/GrixLogo.svg";

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
			justify="flex-start"
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
		</Flex>
	</Box>
);
