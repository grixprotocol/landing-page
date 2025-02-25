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

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

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
		'Universal DeFi Derivatives Toolkit',
		'Standardized Protocol Integration Tools',
		'Enterprise-Grade Risk Management Tools',
		'Cross-Protocol Position Tools',
		'Automated Strategy Implementation Tools',
		'Real-Time Market Analysis Framework',
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
					py={{ base: 24, md: 32, lg: 40 }}
					px={{ base: 4, md: 8 }}
					position="relative"
				>
					<VStack spacing={{ base: 28, md: 36, lg: 44 }} align="stretch">
						{/* Hero Section */}
						<motion.section
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1 }}
						>
							<VStack spacing={{ base: 12, md: 16, lg: 20 }} align="center">
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
										mb={{ base: 8, md: 10 }}
										mx="auto"
										display="block"
									>
										The Universal Language for DeFi Derivatives Interactions
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
									>
										Empower your AI agents with battle-tested toolkits for risk
										management, position optimization, and strategy execution
										across leading agentic platforms like ElizaOS
									</Text>
								</motion.div>
							</VStack>
						</motion.section>

						{/* Features Section */}
						<section aria-labelledby="features-heading">
							<MotionSimpleGrid
								ref={ref}
								columns={{ base: 1, md: 2 }}
								spacing={8}
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
							>
								{featureItems.map((item, index) => (
									<HStack
										key={index}
										spacing={6}
										p={8}
										bg={cardBg}
										borderRadius="2xl"
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
											boxSize={6}
											aria-hidden="true"
										/>
										<Text color="white" fontSize="xl">
											{item}
										</Text>
									</HStack>
								))}
							</MotionSimpleGrid>
						</section>

						{/* Marketplace Section */}
						<section aria-label="Pillar Marketplace">
							<PillarMarketplace
								cardBg={cardBg}
								cardHoverBg={cardHoverBg}
								borderColor={borderColor}
							/>
						</section>

						{/* Buy GRIX Section */}
						<section aria-label="Buy GRIX Token" id="grix">
							<VStack spacing={6} align="center">
								<ActionButton
									href={DEFAULT_TRADE_LINK}
									onClick={() => {
										analytics.trackPageInteraction('buy_grix_click', {
											section: 'cta',
										});
									}}
								>
									Buy GRIX
								</ActionButton>
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
