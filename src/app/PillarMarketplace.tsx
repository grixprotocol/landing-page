'use client';

import {
	Box,
	Button,
	Heading,
	HStack,
	Icon,
	List,
	ListItem,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

type PillarMarketplaceProps = {
	cardBg: string;
	cardHoverBg: string;
	borderColor: string;
};

export const PillarMarketplace = ({ cardBg, cardHoverBg, borderColor }: PillarMarketplaceProps) => {
	const [openFeatures, setOpenFeatures] = useState<string[]>([]);

	const toggleFeatures = (badge: string) => {
		setOpenFeatures((prev) =>
			prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge],
		);
	};

	return (
		<VStack gap={{ base: 12, md: 16, lg: 20 }} alignItems="stretch">
			<VStack gap={{ base: 6, md: 8 }}>
				<Heading
					fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
					textAlign="center"
					bgGradient="linear(to-r, blue.400, purple.400)"
					bgClip="text"
					mb={{ base: 3, md: 4 }}
				>
					Derivatives Toolkits Marketplace for Agentic Trading
				</Heading>
				{/* ... rest of the marketplace content ... */}
			</VStack>
		</VStack>
	);
};
