import { Box, Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { FaChartLine, FaDatabase, FaExchangeAlt, FaPlug, FaRobot, FaShieldAlt } from 'react-icons/fa';

import { ActionButton, FeatureCard } from '@/pages/TokenPage/components/TokenPageComponents';

export type SectionProps = {
  cardBg: string;
  cardHoverBg?: string;
  borderColor: string;
};

export type CtaSectionProps = SectionProps & {
  track: (name: string, props?: Record<string, unknown>) => void;
};

// Features section
export const renderFeaturesSection = ({ cardBg, cardHoverBg = '', borderColor }: SectionProps) => (
  <section aria-label="Platform Features">
    <VStack spacing={12} align="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, blue.400, purple.400)"
        bgClip="text"
      >
        Key Features
      </Heading>

      <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 4, md: 8 }} w="full" maxW="1000px">
        <FeatureCard
          icon={FaChartLine}
          title="Real-time Market Data"
          description="Live price feeds and market data across multiple derivatives protocols"
          color="blue"
          delay={0.1}
          borderColor={borderColor}
          cardBg={cardBg}
          cardHoverBg={cardHoverBg || cardBg}
        />

        <FeatureCard
          icon={FaDatabase}
          title="Trading Recommendations"
          description="AI-powered insights and strategy recommendations for optimized trading"
          color="teal"
          delay={0.2}
          borderColor={borderColor}
          cardBg={cardBg}
          cardHoverBg={cardHoverBg || cardBg}
        />

        <FeatureCard
          icon={FaExchangeAlt}
          title="Portfolio Analysis"
          description="Comprehensive portfolio tracking and performance metrics"
          color="cyan"
          delay={0.3}
          borderColor={borderColor}
          cardBg={cardBg}
          cardHoverBg={cardHoverBg || cardBg}
        />

        <FeatureCard
          icon={FaShieldAlt}
          title="Risk Management"
          description="Advanced tools for position hedging and risk minimization"
          color="green"
          delay={0.4}
          borderColor={borderColor}
          cardBg={cardBg}
          cardHoverBg={cardHoverBg || cardBg}
        />

        <FeatureCard
          icon={FaPlug}
          title="Cross-platform Support"
          description="Unified access to multiple DeFi derivatives protocols"
          color="purple"
          delay={0.5}
          borderColor="purple.500"
          cardBg="rgba(159, 122, 234, 0.15)"
          cardHoverBg="rgba(159, 122, 234, 0.25)"
        />

        <FeatureCard
          icon={FaRobot}
          title="AI-powered Signals"
          description="Advanced signals for optimal entry and exit points"
          color="orange"
          delay={0.6}
          borderColor={borderColor}
          cardBg={cardBg}
          cardHoverBg={cardHoverBg || cardBg}
        />
      </SimpleGrid>
    </VStack>
  </section>
);

// CTA section
export const renderCtaSection = ({ cardBg, borderColor, track }: CtaSectionProps) => (
  <section aria-label="Final Call to Action">
    <VStack spacing={6} align="center" bg={cardBg} p={12} borderRadius="xl" borderWidth="1px" borderColor={borderColor}>
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, purple.400, blue.400)"
        bgClip="text"
        mb={4}
      >
        Join the Derivatives Intelligence Revolution
      </Heading>

      <Text fontSize={{ base: 'md', md: 'lg' }} textAlign="center" color="whiteAlpha.900" maxW="800px" mb={6}>
        Unlock the full potential of on-chain derivatives with Grix - powering the next generation of intelligent
        trading infrastructure for protocols, developers, and AI agents.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4} w="full" maxW="800px">
        <Button
          as="a"
          href="https://x.com/GrixFinance"
          target="_blank"
          variant="outline"
          colorScheme="blue"
          size="md"
          w="full"
        >
          Twitter
        </Button>
        <Button
          as="a"
          href="https://t.co/YPGAhKlcUV"
          target="_blank"
          variant="outline"
          colorScheme="purple"
          size="md"
          w="full"
        >
          Discord
        </Button>
        <Button
          as="a"
          href="https://medium.com/@grixfinance"
          target="_blank"
          variant="outline"
          colorScheme="gray"
          size="md"
          w="full"
        >
          Medium
        </Button>
        <Button
          as="a"
          href="https://t.me/grixfinance"
          target="_blank"
          variant="outline"
          colorScheme="blue"
          size="md"
          w="full"
        >
          Telegram
        </Button>
      </SimpleGrid>

      <Box pt={6}>
        <ActionButton href="https://app.grix.finance" onClick={() => track('launch_app_bottom_click')}>
          Launch App
        </ActionButton>
      </Box>
    </VStack>
  </section>
);
