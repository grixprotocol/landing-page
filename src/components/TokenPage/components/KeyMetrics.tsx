import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

type KeyMetricsProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

export const KeyMetrics = ({ cardBg, cardHoverBg, borderColor }: KeyMetricsProps) => (
  <SimpleGrid columns={{ base: 1, sm: 2, md: 2 }} spacing={8}>
    <MotionBox
      p={8}
      bg={cardBg}
      borderRadius="xl"
      borderWidth={1}
      borderColor={borderColor}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      _hover={{ bg: cardHoverBg }}
    >
      <Stat>
        <StatLabel color="gray.400" fontSize="md" mb={2}>
          Total Supply
        </StatLabel>
        <StatNumber fontSize="4xl" bgGradient="linear(to-r, blue.400, teal.400)" bgClip="text">
          1,000,000,000
        </StatNumber>
        <Text fontSize="sm" color="gray.400" mt={2} letterSpacing="wide">
          GRIX Tokens
        </Text>
      </Stat>
    </MotionBox>
    <MotionBox
      p={8}
      bg={cardBg}
      borderRadius="xl"
      borderWidth={1}
      borderColor={borderColor}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      _hover={{ bg: cardHoverBg }}
    >
      <Stat>
        <StatLabel color="gray.400" fontSize="md" mb={2}>
          Token Type
        </StatLabel>
        <StatNumber fontSize="4xl" bgGradient="linear(to-r, blue.400, teal.400)" bgClip="text">
          Multi-Chain
        </StatNumber>
        <Text fontSize="sm" color="gray.400" mt={2} letterSpacing="wide">
          ETH • ARB • SOL
        </Text>
      </Stat>
    </MotionBox>
  </SimpleGrid>
);
