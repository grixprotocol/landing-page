import { Box, Button, Heading, HStack, Icon, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { links } from '@/pages/TokenPage/config/links';
import { GRIX_ADDRESSES } from '@/pages/TokenPage/config/tokens';

const MotionBox = motion(Box);

type NetworkAvailabilityProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

export const NetworkAvailability = ({ cardBg, cardHoverBg, borderColor }: NetworkAvailabilityProps) => {
  const networks = [
    {
      network: 'Ethereum',
      features: ['Cross-chain bridging', 'Enhanced security', 'Network stability'],
      address: GRIX_ADDRESSES.ethereum,
      scanUrl: links.scan.ethereum,
    },
    {
      network: 'Arbitrum',
      features: ['Low transaction fees', 'Fast settlements', 'High liquidity pools'],
      address: GRIX_ADDRESSES.arbitrum,
      scanUrl: links.scan.arbitrum,
      tradeButton: {
        href: links.trade.arbitrum,
        text: 'Trade on Camelot',
      },
    },
    {
      network: 'Solana',
      features: ['Ultra-fast execution', 'Minimal fees', 'Advanced trading options'],
      address: GRIX_ADDRESSES.solana,
      scanUrl: links.scan.solana,
      tradeButtons: [
        {
          href: links.trade.solana.raydium,
          text: 'Raydium',
        },
        {
          href: links.trade.solana.jupiter,
          text: 'Jupiter',
          outline: true,
        },
      ],
    },
  ];

  return (
    <Box>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {networks.map((network, index) => (
          <MotionBox
            key={network.network}
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
              <Heading size="md" letterSpacing="tight" color="whiteAlpha.900" fontWeight="800">
                {network.network}
              </Heading>
              <Text color="gray.400" fontSize="sm">
                Premium Features:
              </Text>
              <VStack spacing={3} align="start" w="full">
                {network.features.map((feature) => (
                  <HStack key={feature} spacing={3}>
                    <Box w="2px" h="2px" bg="blue.400" borderRadius="full" />
                    <Text color="gray.300">{feature}</Text>
                  </HStack>
                ))}
              </VStack>
              <Link
                href={network.scanUrl}
                isExternal
                color="blue.400"
                fontSize="sm"
                _hover={{ textDecoration: 'none', color: 'blue.300' }}
              >
                <HStack spacing={2}>
                  <Text>{`${network.address.slice(0, 6)}...${network.address.slice(-4)}`}</Text>
                  <Icon as={FaExternalLinkAlt} boxSize={3} />
                </HStack>
              </Link>
              {network.tradeButton && (
                <Button
                  as="a"
                  href={network.tradeButton.href}
                  target="_blank"
                  colorScheme="blue"
                  size="sm"
                  width="100%"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(66, 153, 225, 0.3)',
                  }}
                >
                  {network.tradeButton.text}
                </Button>
              )}
              {network.tradeButtons && (
                <HStack spacing={2} width="100%">
                  {network.tradeButtons.map((button) => (
                    <Button
                      key={button.text}
                      as="a"
                      href={button.href}
                      target="_blank"
                      colorScheme="blue"
                      variant={button.outline ? 'outline' : 'solid'}
                      size="sm"
                      flex={1}
                      _hover={{
                        transform: 'translateY(-2px)',
                        boxShadow: button.outline ? 'none' : '0 4px 12px rgba(66, 153, 225, 0.3)',
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
