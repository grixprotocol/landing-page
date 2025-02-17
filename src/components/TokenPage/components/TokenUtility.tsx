import { Badge, Box, Heading, Icon, SimpleGrid, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaChartLine, FaLock, FaUsers } from 'react-icons/fa';

const MotionBox = motion(Box);

type TokenUtilityProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

export const TokenUtility = ({ cardBg, cardHoverBg, borderColor }: TokenUtilityProps) => {
  const utilityItems = [
    {
      icon: FaChartLine,
      badge: 'Premium Access',
      title: 'Advanced Derivatives Suite',
      description: 'Unlock sophisticated DeFi derivatives trading with institutional-grade execution tools:',
      features: [
        'Complex derivatives strategies',
        'Custom execution parameters',
        'Priority order routing',
        'Cross-chain settlement',
      ],
      color: 'blue',
    },
    {
      icon: FaUsers,
      badge: 'Intelligence',
      title: 'Market Analysis',
      description: 'Access comprehensive market intelligence and strategy tools:',
      features: [
        'Real-time market analytics',
        'Professional strategy playbooks',
        'Performance tracking',
        'Risk assessment tools',
      ],
      color: 'purple',
    },
    {
      icon: FaLock,
      badge: 'Signals',
      title: 'Trading Signals',
      description: 'Get actionable insights for complex DeFi derivatives:',
      features: [
        'Market opportunity alerts',
        'Strategy execution signals',
        'Risk management indicators',
        'Position optimization',
      ],
      color: 'orange',
    },
  ];

  return (
    <Box>
      <Heading size="lg" mb={8} letterSpacing="tight">
        Token Utility
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {utilityItems.map((item, index) => (
          <MotionBox
            key={item.title}
            p={8}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={borderColor}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * (index + 1) }}
            sx={{
              _hover: {
                bg: cardHoverBg,
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s',
              },
            }}
          >
            <VStack spacing={4} align="start">
              <Icon as={item.icon} boxSize={6} color={`${item.color}.400`} />
              <Badge colorScheme={item.color} px={3} py={1} borderRadius="full">
                {item.badge}
              </Badge>
              <Heading size="md">{item.title}</Heading>
              <Box color="gray.400" fontSize="sm">
                {item.description}
                <VStack as="ul" spacing={2} mt={4} align="start">
                  {item.features.map((feature) => (
                    <Box as="li" key={feature}>
                      {feature}
                    </Box>
                  ))}
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
