import { Box, Button, Heading, HStack, Icon, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

type NetworkAvailabilityProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

export const NetworkAvailability = ({ cardBg, cardHoverBg, borderColor }: NetworkAvailabilityProps) => {
  const GRIX_WORMHOLE_ADDRESS = 'E8iWdPoeVDHJn1EHifeCAFWvKZyTN9WXrmccFEx1Hxa';
  const GRIX_ETH_ADDRESS = '0xa150376112dd24E873086b51347EddD5F2e147D5';
  const GRIX_ARBITRUM_ADDRESS = '0x812F2D5Ff6088ed7A655567dBcDf0d42cf07ca38';

  const networks = [
    {
      network: 'Ethereum',
      features: ['Cross-chain bridging', 'Enhanced security', 'Network stability'],
      address: GRIX_ETH_ADDRESS,
      scanUrl: `https://etherscan.io/token/${GRIX_ETH_ADDRESS}`,
    },
    {
      network: 'Arbitrum',
      features: ['Low transaction fees', 'Fast settlements', 'High liquidity pools'],
      address: GRIX_ARBITRUM_ADDRESS,
      scanUrl: `https://arbiscan.io/token/${GRIX_ARBITRUM_ADDRESS}`,
      tradeButton: {
        href: `https://app.camelot.exchange/?token2=${GRIX_ARBITRUM_ADDRESS}&swap=v2`,
        text: 'Trade on Camelot',
      },
    },
    {
      network: 'Solana',
      features: ['Ultra-fast execution', 'Minimal fees', 'Advanced trading options'],
      address: GRIX_WORMHOLE_ADDRESS,
      scanUrl: `https://solscan.io/token/${GRIX_WORMHOLE_ADDRESS}`,
      tradeButtons: [
        {
          href: `https://raydium.io/swap/?outputMint=${GRIX_WORMHOLE_ADDRESS}&inputMint=sol`,
          text: 'Raydium',
        },
        {
          href: `https://jup.ag/swap/SOL-${GRIX_WORMHOLE_ADDRESS}`,
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
              <Heading size="md" letterSpacing="tight">
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
