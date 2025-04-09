import { Box, Button, Heading, HStack, Icon, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaBook, FaCode, FaGithub, FaRobot, FaServer } from 'react-icons/fa';

export const ForTradersSection = ({ cardBg, borderColor }: { cardBg: string; borderColor: string }) => (
  <section aria-label="For Traders">
    <VStack spacing={10} align="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, green.400, teal.400)"
        bgClip="text"
      >
        For Traders
      </Heading>

      <Box bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full" maxW="1000px">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <VStack align="start" spacing={4}>
            <Heading size="md" color="blue.400">
              Price Comparison
            </Heading>
            <Text color="white" fontSize="md">
              Compare options prices across multiple DeFi platforms
            </Text>
            <Link
              href="https://app.grix.finance/trade?positionType=long&asset=BTC&optionType=call&tradeType=vanilla"
              target="_blank"
              color="blue.300"
              fontWeight="bold"
              _hover={{ color: 'blue.400', textDecoration: 'none' }}
            >
              Try Price Comparison →
            </Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="md" color="purple.400">
              Options Matrix
            </Heading>
            <Text color="white" fontSize="md">
              Comprehensive unified view of options prices
            </Text>
            <Link
              href="https://app.grix.finance/optionsMatrix?asset=BTC&optionType=call"
              target="_blank"
              color="purple.300"
              fontWeight="bold"
              _hover={{ color: 'purple.400', textDecoration: 'none' }}
            >
              View Options Matrix →
            </Link>
          </VStack>

          <VStack align="start" spacing={4}>
            <Heading size="md" color="green.400">
              Dashboard
            </Heading>
            <Text color="white" fontSize="md">
              Track positions and monitor orders in real-time
            </Text>
            <Link
              href="https://app.grix.finance/portfolio?ordersTableType=LiveOrders"
              target="_blank"
              color="green.300"
              fontWeight="bold"
              _hover={{ color: 'green.400', textDecoration: 'none' }}
            >
              Open Dashboard →
            </Link>
          </VStack>
        </SimpleGrid>
      </Box>
    </VStack>
  </section>
);

export const ForDevelopersSection = ({ cardBg, borderColor }: { cardBg: string; borderColor: string }) => (
  <section aria-label="For Developers">
    <VStack spacing={10} align="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, purple.400, pink.400)"
        bgClip="text"
      >
        For Developers
      </Heading>

      <Box bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full" maxW="1000px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={10}>
          <VStack align="start" spacing={4} h="100%">
            <HStack spacing={3}>
              <Icon as={FaRobot} color="blue.400" fontSize="24px" />
              <Heading size="md" color="blue.400">
                Grix Plugin for Eliza
              </Heading>
            </HStack>
            <Text color="whiteAlpha.900" fontSize="md">
              Seamless integration with Eliza
            </Text>
            <Link
              href="https://github.com/grixprotocol/plugin-grix"
              target="_blank"
              color="blue.300"
              fontWeight="bold"
              _hover={{ color: 'blue.400', textDecoration: 'none' }}
            >
              <HStack>
                <Icon as={FaGithub} />
                <Text>View on GitHub</Text>
              </HStack>
            </Link>
          </VStack>

          <VStack align="start" spacing={4} h="100%">
            <HStack spacing={3}>
              <Icon as={FaCode} color="purple.400" fontSize="24px" />
              <Heading size="md" color="purple.400">
                Grix Plugin for MCP
              </Heading>
            </HStack>
            <Text color="whiteAlpha.900" fontSize="md">
              Multi-chain Protocol integration
            </Text>
            <Link
              href="https://github.com/grixprotocol/grix-mcp"
              target="_blank"
              color="purple.300"
              fontWeight="bold"
              _hover={{ color: 'purple.400', textDecoration: 'none' }}
            >
              <HStack>
                <Icon as={FaGithub} />
                <Text>View on GitHub</Text>
              </HStack>
            </Link>
          </VStack>
        </SimpleGrid>

        <VStack align="center" spacing={6}>
          <Heading size="md" color="teal.300">
            Developer Resources
          </Heading>

          <HStack spacing={6} flexWrap="wrap" justify="center">
            <Button
              as="a"
              href="https://app.grix.finance/api"
              target="_blank"
              size="md"
              leftIcon={<FaServer />}
              bgGradient="linear(to-r, purple.500, purple.600)"
              _hover={{ bgGradient: 'linear(to-r, purple.600, purple.700)', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              API Dashboard
            </Button>

            <Button
              as="a"
              href="https://grix.apidocumentation.com"
              target="_blank"
              size="md"
              leftIcon={<FaBook />}
              bgGradient="linear(to-r, blue.500, blue.600)"
              _hover={{ bgGradient: 'linear(to-r, blue.600, blue.700)', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              API Documentation
            </Button>

            <Button
              as="a"
              href="https://github.com/grixprotocol"
              target="_blank"
              size="md"
              leftIcon={<FaGithub />}
              bgGradient="linear(to-r, gray.700, gray.800)"
              _hover={{ bgGradient: 'linear(to-r, gray.800, gray.900)', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              GitHub
            </Button>
          </HStack>
        </VStack>
      </Box>
    </VStack>
  </section>
);
