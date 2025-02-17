import { Badge, Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

const MotionFlex = motion(Flex);
const MotionBadge = motion(Badge);

const glowKeyframes = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0.3) }
  70% { box-shadow: 0 0 0 10px rgba(66, 153, 225, 0) }
  100% { box-shadow: 0 0 0 0 rgba(66, 153, 225, 0) }
`;

export const HeroSection = () => (
  <MotionFlex
    direction={{ base: 'column', md: 'row' }}
    align="center"
    justify="space-between"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Box flex={1}>
      <MotionBadge
        colorScheme="blue"
        mb={4}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        px={3}
        py={1}
        borderRadius="full"
        fontSize="sm"
        letterSpacing="wide"
      >
        Native Token
      </MotionBadge>
      <Heading
        size="2xl"
        mb={6}
        bgGradient="linear(to-r, blue.400, teal.400)"
        bgClip="text"
        lineHeight="1.2"
        letterSpacing="tight"
        fontWeight="bold"
      >
        Power the Future of DeFi Derivatives with GRIX
      </Heading>
      <Text fontSize="xl" color="gray.300" maxW="600px" mb={8} lineHeight="tall">
        GRIX is the backbone of our ecosystem, offering premium access to advanced derivatives trading, exclusive
        analysis, and sophisticated strategy execution across multiple chains.
      </Text>
      <Button
        size="lg"
        colorScheme="blue"
        as="a"
        href="https://app.camelot.exchange/?token2=0x812F2D5Ff6088ed7A655567dBcDf0d42cf07ca38&swap=v2"
        target="_blank"
        px={8}
        fontSize="lg"
        height="56px"
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(66, 153, 225, 0.3)',
        }}
        transition="all 0.2s"
        animation={`${glowKeyframes} 2s infinite`}
      >
        Buy GRIX
      </Button>
    </Box>
  </MotionFlex>
);
