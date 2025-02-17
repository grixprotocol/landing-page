"use client";

import React, { useEffect, useState } from "react";
import { Box, BoxProps, Flex, HStack, Icon, IconButton, Text, Tooltip } from "@chakra-ui/react";
import { FaDiscord, FaGithub, FaMedium, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLinktree } from "react-icons/si";

export const DotSeparator = (props: BoxProps) => (
	<Box
		w="4px"
		h="4px"
		bgColor="gray.800"
		borderRadius="50%"
		display="inline-block"
		{...props}
	></Box>
);

const socialLinks = [
	{ icon: FaXTwitter, label: "Twitter", href: "https://twitter.com/GrixFinance" },
	{
		icon: FaGithub,
		label: "Github",
		href: "https://github.com/grixprotocol/defi-options-hub",
	},
	{ icon: FaDiscord, label: "Discord", href: "https://t.co/YPGAhKlcUV" },
	{ icon: FaMedium, label: "Medium", href: "https://medium.com/@grixfinance" },
	{ icon: SiLinktree, label: "Linktree", href: "https://linktr.ee/grixfinance" },
	{ icon: FaTelegram, label: "Telegram", href: "https://t.me/grixfinance" },
];

export const FooterLinks = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<Flex
			width="100%"
			justify="space-between"
			px={{ base: 4, md: 6 }}
			py={5}
			bg="rgba(0, 0, 0, 0.6)"
			backdropFilter="blur(16px)"
			borderTop="1px solid"
			borderColor="whiteAlpha.100"
			data-gr-ext-installed={undefined}
			data-new-gr-c-s-check-loaded={undefined}
		>
			<HStack spacing={{ base: 3, md: 5 }}>
				<Text fontSize={{ base: "12px", md: "14px" }} fontWeight="500" color="gray.400">
					© Grix® 2024
				</Text>
				<HStack spacing={{ base: 3, md: 4 }}>
					{socialLinks.map(({ icon, label, href }) =>
						isClient ? (
							<Tooltip
								key={label}
								label={label}
								hasArrow
								placement="top"
								bg="gray.700"
								fontSize="sm"
							>
								<IconButton
									size="md"
									variant="ghost"
									color="gray.400"
									bg="whiteAlpha.50"
									as="a"
									target="_blank"
									icon={<Icon as={icon} boxSize={5} />}
									aria-label={label}
									href={href}
									_hover={{
										transform: "translateY(-2px)",
										bg: "whiteAlpha.100",
										color: "blue.400",
									}}
									transition="all 0.2s"
								/>
							</Tooltip>
						) : (
							<IconButton
								key={label}
								size="md"
								variant="ghost"
								color="gray.400"
								bg="whiteAlpha.50"
								as="a"
								target="_blank"
								icon={<Icon as={icon} boxSize={5} />}
								aria-label={label}
								href={href}
								_hover={{
									transform: "translateY(-2px)",
									bg: "whiteAlpha.100",
									color: "blue.400",
								}}
								transition="all 0.2s"
							/>
						)
					)}
				</HStack>
			</HStack>
		</Flex>
	);
};

export default FooterLinks;
