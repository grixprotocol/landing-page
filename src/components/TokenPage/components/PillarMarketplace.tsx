import {
  Box,
  Button,
  Collapse,
  Heading,
  HStack,
  Icon,
  List,
  ListItem,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FaBalanceScale, FaBolt, FaBrain, FaChartLine, FaChevronDown, FaChevronUp, FaShieldAlt } from 'react-icons/fa';
import { analytics } from '../../../services/analytics';

type PillarMarketplaceProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

type PillarItem = {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
  color: string;
  unlockRequirement: string;
  agentInteractions: number;
  totalStaked: number;
};

export const PillarMarketplace = ({ cardBg, cardHoverBg, borderColor }: PillarMarketplaceProps) => {
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
    {
      icon: FaBalanceScale,
      title: 'Options Toolkit',
      description: 'Complete options trading infrastructure',
      features: [
        'Greeks analysis tools',
        'Volatility trading framework',
        'Options spread calculator',
        'Exercise optimization tools',
      ],
      color: 'cyan',
      unlockRequirement: '5,000 GRIX',
      agentInteractions: 8756,
      totalStaked: 1850000,
    },
    {
      icon: FaBrain,
      title: 'Perpetuals Framework',
      description: 'Comprehensive perpetual futures toolkit',
      features: [
        'Funding rate analysis tools',
        'Cross-exchange toolkit',
        'Leverage optimization system',
        'Index tracking framework',
      ],
      color: 'blue',
      unlockRequirement: '10,000 GRIX',
      agentInteractions: 12543,
      totalStaked: 3200000,
    },
    {
      icon: FaBolt,
      title: 'Basis Trading Tools',
      description: 'Advanced basis trading infrastructure',
      features: [
        'Spot-futures analysis tools',
        'Funding rate calculator',
        'Basis tracking system',
        'Spread execution toolkit',
      ],
      color: 'purple',
      unlockRequirement: '50,000 GRIX',
      agentInteractions: 9876,
      totalStaked: 1650000,
    },
    {
      icon: FaChartLine,
      title: 'Leverage Tools',
      description: 'Advanced leverage optimization toolkit',
      features: [
        'Options pricing tools',
        'Leverage calculation system',
        'Delta-gamma analysis toolkit',
        'Volatility surface tools',
      ],
      color: 'yellow',
      unlockRequirement: '75,000 GRIX',
      agentInteractions: 7845,
      totalStaked: 2800000,
    },
    {
      icon: FaShieldAlt,
      title: 'Insurance Tools',
      description: 'Comprehensive position protection toolkit',
      features: [
        'Collateral protection system',
        'Smart contract analysis tools',
        'Claim automation toolkit',
        'Risk assessment framework',
      ],
      color: 'orange',
      unlockRequirement: '150,000 GRIX',
      agentInteractions: 3245,
      totalStaked: 5200000,
    },
  ];

  const [openFeatures, setOpenFeatures] = React.useState<string[]>([]);

  const handlePillarClick = (item: PillarItem) => {
    analytics.trackPageInteraction('pillar_click', {
      pillar_name: item.title,
      unlock_requirement: item.unlockRequirement,
      total_staked: item.totalStaked,
      agent_interactions: item.agentInteractions
    });
  };

  const toggleFeatures = (item: PillarItem) => {
    const isCurrentlyOpen = openFeatures.includes(item.title);
    setOpenFeatures((prev) => 
      isCurrentlyOpen ? prev.filter((b) => b !== item.title) : [...prev, item.title]
    );

    analytics.trackPageInteraction('pillar_features_toggle', {
      pillar_name: item.title,
      action: isCurrentlyOpen ? 'hide' : 'show',
      unlock_requirement: item.unlockRequirement
    });
  };

  return (
    <VStack spacing={{ base: 12, md: 16, lg: 20 }} align="stretch">
      <VStack spacing={{ base: 6, md: 8 }}>
        <Heading
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          textAlign="center"
          bgGradient="linear(to-r, blue.400, purple.400)"
          bgClip="text"
          mb={{ base: 3, md: 4 }}
        >
          Derivatives Toolkits Marketplace for Agentic Trading
        </Heading>
        <Text
          fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
          textAlign="center"
          color="whiteAlpha.900"
          maxW="800px"
          px={4}
          lineHeight="1.6"
        >
          Unlock powerful derivatives trading toolkits that power up your trading agents across leading agentic
          platforms like ElizaOS.
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 8, md: 10 }}
        maxW="1200px"
        mx="auto"
        px={{ base: 2, md: 4 }}
      >
        {pillarItems.map((item) => (
          <Box
            key={item.title}
            p={6}
            bg={cardBg}
            borderRadius="2xl"
            borderWidth={1}
            borderColor={borderColor}
            position="relative"
            overflow="hidden"
            role="group"
            onClick={() => handlePillarClick(item)}
            _hover={{
              bg: cardHoverBg,
              transform: 'translateY(-4px)',
              boxShadow: `0 12px 40px -8px ${item.color}30`,
              borderColor: `${item.color}.400`,
              cursor: 'pointer'
            }}
            transition="all 0.3s ease"
          >
            <Box position="relative" zIndex={1}>
              <VStack spacing={4} align="start">
                <HStack spacing={3}>
                  <Icon as={item.icon} color={`${item.color}.400`} boxSize={6} />
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    bgGradient={`linear(to-r, ${item.color}.200, ${item.color}.400)`}
                    bgClip="text"
                  >
                    {item.title}
                  </Text>
                </HStack>

                <Text fontSize="sm" color="gray.400">
                  {item.description}
                </Text>

                <HStack spacing={4} width="full" justify="space-between">
                  <Text fontSize="sm" color="gray.500">
                    {(item.totalStaked / 1000000).toFixed(2)}M GRIX staked
                  </Text>
                  <Text fontSize="sm" color="gray.500">
                    {(item.agentInteractions / 1000).toFixed(1)}k interactions
                  </Text>
                </HStack>

                <Button
                  size="sm"
                  variant="ghost"
                  colorScheme={item.color}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent box click
                    toggleFeatures(item);
                  }}
                  width="full"
                  rightIcon={<Icon as={openFeatures.includes(item.title) ? FaChevronUp : FaChevronDown} />}
                >
                  {openFeatures.includes(item.title) ? 'Hide Features' : 'Show Features'}
                </Button>

                <Collapse in={openFeatures.includes(item.title)}>
                  <List spacing={2}>
                    {item.features.map((feature, idx) => (
                      <ListItem key={idx} fontSize="sm" color="gray.400">
                        • {feature}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>

                <Box
                  alignSelf="flex-end"
                  color={`${item.color}.400`}
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                  border="2px solid"
                  borderColor={`${item.color}.400`}
                >
                  {item.unlockRequirement} / month
                </Box>
              </VStack>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
