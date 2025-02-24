"use client";

import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	Link,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GRIX_ADDRESSES, links } from "@/config";
import { analytics } from '../../../services/analytics';

const MotionBox = motion(Box);

type NetworkAvailabilityProps = {
	borderColor: string;
};

export const NetworkAvailability = ({ borderColor }: NetworkAvailabilityProps) => {
	const networks = [
		{
			network: "Ethereum",
			features: ["Cross-chain bridging", "Enhanced security", "Network stability"],
			address: GRIX_ADDRESSES.ethereum,
			scanUrl: links.scan.ethereum,
			tradeButton: {
				href: links.trade.ethereum,
				text: "Trade on Uniswap",
			},
		},
		{
			network: "Arbitrum",
			features: ["Low transaction fees", "Fast settlements", "High liquidity pools"],
			address: GRIX_ADDRESSES.arbitrum,
			scanUrl: links.scan.arbitrum,
			tradeButton: {
				href: links.trade.arbitrum,
				text: "Trade on Camelot",
			},
		},
		{
			network: "Solana",
			features: ["Ultra-fast execution", "Minimal fees", "Advanced trading options"],
			address: GRIX_ADDRESSES.solana,
			scanUrl: links.scan.solana,
			tradeButtons: [
				{
					href: links.trade.solana.raydium,
					text: "Raydium",
				},
				{
					href: links.trade.solana.jupiter,
					text: "Jupiter",
					outline: true,
				},
			],
		},
	];

	const handleNetworkBoxClick = (network: string) => {
		analytics.trackPageInteraction('network_box_click', {
			network,
			section: 'network_availability'
		});
	};

	const handleAddressClick = (network: string, address: string) => {
		analytics.trackPageInteraction('network_address_click', {
			network,
			address,
			section: 'network_availability',
			action: 'view_contract'
		});
	};

	const handleTradeClick = (network: string, exchange: string) => {
		analytics.trackPageInteraction('network_trade_click', {
			network,
			exchange,
			section: 'network_availability',
			action: 'trade'
		});
	};

	return (
		<Box>
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
				{networks.map((network, index) => (
					<MotionBox
						key={network.network}
						p={6}
						bg="rgba(0, 0, 0, 0.6)"
						borderRadius="xl"
						borderWidth="1.5px"
						borderColor={borderColor}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 * (index + 1) }}
						onClick={() => handleNetworkBoxClick(network.network)}
						sx={{
							backdropFilter: "blur(16px)",
							_hover: {
								bg: "rgba(0, 0, 0, 0.75)",
								transform: "translateY(-4px)",
								boxShadow: "0 8px 28px rgba(0, 0, 0, 0.4)",
								borderColor: "whiteAlpha.400",
								transition: "all 0.3s ease-in-out",
								cursor: "pointer"
							},
						}}
					>
						<VStack spacing={4} align="start">
							<Heading
								size="md"
								letterSpacing="tight"
								bgGradient="linear(to-r, blue.400, teal.400)"
								bgClip="text"
								fontWeight="extrabold"
							>
								{network.network}
							</Heading>
							<Text color="gray.200" fontSize="sm" fontWeight="semibold">
								Premium Features:
							</Text>
							<VStack spacing={3} align="start" w="full">
								{network.features.map((feature) => (
									<HStack key={feature} spacing={2}>
										<Box
											w="3px"
											h="3px"
											bgGradient="linear(to-r, blue.400, teal.400)"
											borderRadius="full"
										/>
										<Text color="gray.100" fontSize="sm" fontWeight="medium">
											{feature}
										</Text>
									</HStack>
								))}
							</VStack>
							<Link
								href={network.scanUrl}
								isExternal
								color="blue.300"
								fontSize="xs"
								fontWeight="semibold"
								_hover={{
									textDecoration: "none",
									color: "teal.300",
									transform: "translateY(-1px)",
								}}
								transition="all 0.2s"
								onClick={(e) => {
									e.stopPropagation();
									handleAddressClick(network.network, network.address);
								}}
							>
								<HStack spacing={2}>
									<Text>{`${network.address.slice(
										0,
										6
									)}...${network.address.slice(-4)}`}</Text>
									<Icon as={FaExternalLinkAlt} boxSize={2.5} />
								</HStack>
							</Link>
							{network.tradeButton && (
								<Button
									as="a"
									href={network.tradeButton.href}
									target="_blank"
									bgGradient="linear(to-r, blue.400, teal.400)"
									size="sm"
									width="100%"
									fontWeight="bold"
									py={4}
									_hover={{
										bgGradient: "linear(to-r, blue.500, teal.500)",
										transform: "translateY(-2px)",
										boxShadow: "0 6px 20px rgba(66, 153, 225, 0.4)",
									}}
									onClick={(e) => {
										e.stopPropagation();
										handleTradeClick(network.network, network.tradeButton.text.split(' ')[2]);
									}}
								>
									{network.tradeButton.text}
								</Button>
							)}
							{network.tradeButtons && (
								<HStack spacing={3} width="100%">
									{network.tradeButtons.map((button) => (
										<Button
											key={button.text}
											as="a"
											href={button.href}
											target="_blank"
											bgGradient={
												button.outline
													? "none"
													: "linear(to-r, blue.400, teal.400)"
											}
											variant={button.outline ? "outline" : "solid"}
											size="sm"
											flex={1}
											fontWeight="bold"
											py={4}
											borderWidth={button.outline ? "1.5px" : "0"}
											color={button.outline ? "white" : "white"}
											borderColor={button.outline ? "teal.400" : "none"}
											_hover={{
												transform: "translateY(-2px)",
												bgGradient: button.outline
													? "none"
													: "linear(to-r, blue.500, teal.500)",
												borderColor: button.outline ? "teal.300" : "none",
												color: "white",
												boxShadow: button.outline
													? "0 6px 20px rgba(45, 211, 183, 0.2)"
													: "0 6px 20px rgba(66, 153, 225, 0.4)",
											}}
											onClick={(e) => {
												e.stopPropagation();
												handleTradeClick(network.network, button.text);
											}}
										>
											{button.text}
										</Button>
									))}
								</HStack>
							)}
						</VStack>
					</MotionBox>
				))}
			</SimpleGrid>
		</Box>
	);
};
