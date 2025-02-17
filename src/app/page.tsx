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
import React from 'react';
import {
	FaCheckCircle,
	FaShieldAlt,
	FaBalanceScale,
	FaBrain,
	FaBolt,
	FaChartLine,
} from 'react-icons/fa';
import { PillarMarketplace } from './PillarMarketplace';

const GRIX_UNISWAP_LINK =
	'https://app.uniswap.org/#/swap?outputCurrency=0xa150376112dd24E873086b51347EddD5F2e147D5';
const APP_LINK = 'https://app.grix.finance/trade';

type PillarItem = {
	icon: typeof FaShieldAlt;
	title: string;
	description: string;
	features: string[];
	color: string;
	unlockRequirement: string;
	agentInteractions: number;
	totalStaked: number;
};

const pillarItems: PillarItem[] = [
	{
		icon: FaShieldAlt,
		title: 'Risk Shield Tools',
		description: 'Enterprise-grade risk management toolkit',
		features: [
			'Position hedging tools',
			'Delta-neutral frameworks',
			'Liquidation protection system',
			'Stop-loss automation tools',
		],
		color: 'green',
		unlockRequirement: '1,000 GRIX',
		agentInteractions: 15234,
		totalStaked: 2450000,
	},
];

const ActionButton = ({
	children,
	href,
	variant = 'primary',
	onClick,
}: {
	children: React.ReactNode;
	href: string;
	variant?: 'primary' | 'secondary';
	onClick?: () => void;
}) => (
	<Button
		as="a"
		px={8}
		height="56px"
		fontSize="lg"
		bgGradient={variant === 'primary' ? 'linear(to-r, blue.400, teal.400)' : 'none'}
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

export default function TokenPage() {
	const cardBg = 'whiteAlpha.50';
	const cardHoverBg = 'whiteAlpha.100';
	const borderColor = 'whiteAlpha.200';
	const [openFeatures, setOpenFeatures] = React.useState<string[]>([]);

	const toggleFeatures = (badge: string) => {
		setOpenFeatures((prev) =>
			prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge],
		);
	};

	return (
		<Box
			as="main"
			role="main"
			backgroundColor="black"
			minHeight="100vh"
			w="full"
			color="white"
			overflow="auto"
			position="relative"
		>
			<Container
				maxW="1400px"
				py={{ base: 24, md: 32, lg: 40 }}
				px={{ base: 4, md: 8 }}
				position="relative"
			>
				<VStack gap={{ base: 28, md: 36, lg: 44 }} alignItems="stretch">
					{/* Hero Section */}
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1 }}
					>
						{/* ... existing hero section content ... */}
					</motion.section>

					{/* Features Section */}
					<section aria-labelledby="features-heading">
						{/* ... existing features section content ... */}
					</section>

					{/* Marketplace Section */}
					<section aria-label="Pillar Marketplace">
						<PillarMarketplace
							cardBg={cardBg}
							cardHoverBg={cardHoverBg}
							borderColor={borderColor}
						/>
					</section>

					{/* Final CTA Section */}
					<section aria-label="Final Call to Action">
						<VStack gap={6} alignItems="center">
							<ActionButton href={GRIX_UNISWAP_LINK}>Buy GRIX</ActionButton>
						</VStack>
					</section>
				</VStack>
			</Container>
		</Box>
	);
}
