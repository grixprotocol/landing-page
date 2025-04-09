'use client';

import {
	Box,
	Button,
	Container,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { colors } from '@/ds/theme';
import { DEFAULT_TRADE_LINK } from '@/config/links';
import { analytics } from '@/services/analytics';

import { PillarMarketplace } from './components/PillarMarketplace';
import { NetworkAvailability } from './components/NetworkAvailability';
import { FaCheckCircle } from 'react-icons/fa';

const ActionButton = ({
	children,
	href,
	variant = 'primary',
	size = 'lg',
	onClick,
}: {
	children: React.ReactNode;
	href: string;
	variant?: 'primary' | 'secondary';
	size?: 'lg' | 'md';
	onClick?: () => void;
}) => (
	<Button
		size={size}
		as="a"
		href={href}
		target="_blank"
		px={8}
		fontSize={size === 'lg' ? 'lg' : 'md'}
		height={size === 'lg' ? '56px' : '48px'}
		bgGradient={variant === 'primary' ? 'linear(to-r, blue.400, teal.400)' : 'none'}
		border={variant === 'secondary' ? '2px solid' : 'none'}
		borderColor="blue.400"
		color={variant === 'primary' ? 'white' : 'blue.400'}
		_hover={{
			transform: 'translateY(-2px)',
			bgGradient: variant === 'primary' ? 'linear(to-r, blue.500, teal.500)' : 'none',
			borderColor: variant === 'secondary' ? 'teal.400' : 'none',
			color: variant === 'secondary' ? 'teal.400' : 'white',
			boxShadow: '0 4px 20px rgba(66, 153, 225, 0.4)',
		}}
		transition="all 0.3s"
		onClick={onClick}
	>
		{children}
	</Button>
);

export const TokenPage = () => {
	const cardBg = 'whiteAlpha.50';
	const cardHoverBg = 'whiteAlpha.100';
	const borderColor = 'whiteAlpha.200';

	const featureItems = [
		'Options Data: 10x Insight. Now.',
		'Perps Data: Predict the Moon.',
		'AI: Analysis Cheat Code.',
		'Connect DeFi: Instant Data Tap.',
		'Plug into AI: Supercharge Your Algos',
		'Edge: Data-Driven. Dominate.',
	];

	const [ref, inView] = useInView({
		threshold: 0.1,
		triggerOnce: true,
	});

	const handleFeatureClick = (feature: string, index: number) => {
		analytics.trackPageInteraction(`feature_click`, {
			feature_name: feature,
			position: index + 1,
		});
	};

	return (
		<>
			<Box
				as="main"
				role="main"
				backgroundColor={colors.base.black}
				minHeight="100vh"
				maxHeight="100vh"
				w="full"
				color="white"
				overflow={{ base: 'auto', md: 'auto' }}
				position="relative"
				css={{
					'&::-webkit-scrollbar': {
						width: '6px',
					},
					'&::-webkit-scrollbar-track': {
						background: 'rgba(0, 0, 0, 0.2)',
					},
					'&::-webkit-scrollbar-thumb': {
						background: 'rgba(255, 255, 255, 0.3)',
						borderRadius: '3px',
						'&:hover': {
							background: 'rgba(255, 255, 255, 0.4)',
						},
					},
				}}
			>
				{/* Enhanced gradient background */}
				<Box
					position="absolute"
					top={0}
					left={0}
					right={0}
					height="120%" // Increased height for better coverage
					bgGradient="radial-gradient(circle at 50% 0%, rgba(46, 211, 183, 0.2) 0%, rgba(21, 183, 158, 0.15) 25%, rgba(0, 122, 255, 0.1) 50%, transparent 100%)"
					filter="blur(140px)"
					transform="translateZ(0)"
					animation="pulse 12s infinite"
				/>

				<Container
					maxW="1400px"
					py={{ base: 16, md: 20, lg: 24 }}
					px={{ base: 4, md: 8 }}
					position="relative"
				>
					<VStack spacing={{ base: 16, md: 20, lg: 24 }} align="stretch">
						{/* Hero Section */}
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<VStack spacing={{ base: 8, md: 10, lg: 12 }} align="center">
								<motion.h1
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.2 }}
								>
									<Heading
										as="span"
										textAlign="center"
										bgGradient="linear(to-r, blue.400, teal.400)"
										bgClip="text"
										letterSpacing="tight"
										lineHeight={{ base: '1.1', md: '1.2' }}
										fontSize={{ base: '4xl', sm: '5xl', md: '6xl', lg: '7xl' }}
										maxW="1200px"
										mb={{ base: 4, md: 6 }}
										mx="auto"
										display="block"
									>
										AI-Powered DeFi MCP: 10x Your Derivatives Edge
									</Heading>
								</motion.h1>

								<motion.div
									initial={{ y: 20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{ duration: 0.8, delay: 0.4 }}
								>
									<Text
										as="p"
										fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
										textAlign="center"
										color="whiteAlpha.900"
										maxW="900px"
										fontWeight="medium"
										lineHeight="1.6"
										mb={{ base: 8, md: 10 }}
									>
										Get data-driven insights & battle-tested tools, accessible through leading AI agent development platforms and MCP.
									</Text>
								</motion.div>

								{/* Features Grid moved into hero section */}
								<motion.div
									ref={ref}
									initial={{ opacity: 0, y: 20 }}
									animate={inView ? { opacity: 1, y: 0 } : {}}
									transition={{ duration: 0.8, delay: 0.6 }}
								>
									<SimpleGrid
										columns={{ base: 1, md: 2, lg: 3 }}
										spacing={{ base: 4, md: 6 }}
										width="100%"
										maxW="1200px"
									>
										{featureItems.map((item, index) => (
											<HStack
												key={index}
												spacing={4}
												p={4}
												bg={cardBg}
												borderRadius="xl"
												borderWidth={1}
												borderColor={borderColor}
												_hover={{
													bg: cardHoverBg,
													transform: 'translateY(-2px)',
													boxShadow: '0 4px 20px rgba(66, 153, 225, 0.2)',
													cursor: 'pointer',
												}}
												transition="all 0.3s"
												role="listitem"
												onClick={() => handleFeatureClick(item, index)}
											>
												<Icon
													as={FaCheckCircle}
													color="teal.400"
													boxSize={5}
													aria-hidden="true"
												/>
												<Text color="white" fontSize="lg" fontWeight="medium">
													{item}
												</Text>
											</HStack>
										))}
									</SimpleGrid>
								</motion.div>
							</VStack>
						</motion.section>

						{/* Marketplace Section */}
						<section aria-label="Pillar Marketplace">
							<PillarMarketplace
								cardBg={cardBg}
								cardHoverBg={cardHoverBg}
								borderColor={borderColor}
							/>
						</section>

						{/* Token Section */}
						<section
							aria-label="GRIX Token Information"
							id="grix"
							itemScope
							itemType="https://schema.org/Product"
						>
							<VStack spacing={8} align="center">
								<meta itemProp="name" content="GRIX Token" />
								<meta
									itemProp="description"
									content="GRIX is the native token powering the Universal DeFi Derivatives Language platform"
								/>

								<Heading
									as="h2"
									fontSize={{ base: '3xl', md: '4xl' }}
									textAlign="center"
									bgGradient="linear(to-r, blue.400, teal.400)"
									bgClip="text"
									mb={4}
								>
									Get Started with GRIX Token
								</Heading>

								<Text
									fontSize={{ base: 'lg', md: 'xl' }}
									textAlign="center"
									color="whiteAlpha.900"
									maxW="800px"
									mb={6}
								>
									Access premium features and unlock powerful derivatives trading
									toolkits with GRIX token
								</Text>

								<VStack spacing={4} mt={6}>
									<ActionButton
										href={DEFAULT_TRADE_LINK}
										onClick={() => {
											analytics.trackPageInteraction('buy_grix_click', {
												section: 'token',
											});
										}}
									>
										Buy GRIX
									</ActionButton>
									<Text color="gray.400" fontSize="sm">
										Trade on your preferred network
									</Text>
								</VStack>
							</VStack>
						</section>

						{/* Network Availability Section */}
						<section aria-label="Network Availability">
							<NetworkAvailability borderColor={borderColor} />
						</section>
					</VStack>
				</Container>
			</Box>
		</>
	);
};



