import { Box, Heading, SimpleGrid, Stat, StatGroup, StatLabel, StatNumber, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { GrixMetricsData } from '@/pages/StatsPage/types';

import { SectionProps } from './renderTokenPageSections';

const MotionBox = motion(Box);

export const renderKeyStatsSection = ({
  cardBg,
  borderColor,
  grixMetrics,
}: SectionProps & {
  grixMetrics?: GrixMetricsData;
}) => (
  <section aria-label="Key Stats">
    <VStack spacing={12} align="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, blue.400, purple.400)"
        bgClip="text"
      >
        Driving Derivatives Innovation
      </Heading>

      <Box w="full" maxW="1200px">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
          {/* Main Stats */}
          <StatGroup bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full">
            <SimpleGrid columns={{ base: 2, md: 2 }} spacing={8} w="full">
              <Stat>
                <StatLabel color="blue.100" fontSize="sm" fontWeight="bold">
                  Notional Volume
                </StatLabel>
                <StatNumber
                  fontSize="3xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, blue.400, teal.400)"
                  bgClip="text"
                >
                  $
                  {grixMetrics?.graphStatistics.totalNotionalValue
                    ? (Number(grixMetrics.graphStatistics.totalNotionalValue) / 1000000).toFixed(1) + 'M'
                    : '10.8M+'}
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="teal.100" fontSize="sm" fontWeight="bold">
                  Active Traders
                </StatLabel>
                <StatNumber
                  fontSize="3xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, teal.400, cyan.400)"
                  bgClip="text"
                >
                  {grixMetrics?.graphStatistics.uniqueUserCount || '285+'}
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="cyan.100" fontSize="sm" fontWeight="bold">
                  Integrated Protocols
                </StatLabel>
                <StatNumber
                  fontSize="3xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, cyan.400, blue.400)"
                  bgClip="text"
                >
                  {grixMetrics?.integratedProtocolsList.length || '10+'}
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="purple.100" fontSize="sm" fontWeight="bold">
                  Available Markets
                </StatLabel>
                <StatNumber
                  fontSize="3xl"
                  fontWeight="bold"
                  bgGradient="linear(to-r, purple.400, blue.400)"
                  bgClip="text"
                >
                  {grixMetrics?.availableMarket.length || '15+'}
                </StatNumber>
              </Stat>
            </SimpleGrid>
          </StatGroup>

          {/* Activity Stats */}
          <StatGroup bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full">
            <VStack spacing={4} w="full" align="start">
              <Heading size="md" color="green.300" mb={2}>
                Transaction Activity
              </Heading>
              <SimpleGrid columns={{ base: 2, md: 2 }} spacing={8} w="full">
                <Stat>
                  <StatLabel color="green.100" fontSize="sm" fontWeight="bold">
                    Buy Options
                  </StatLabel>
                  <StatNumber fontSize="2xl" fontWeight="bold" color="green.300">
                    {grixMetrics?.graphStatistics.numberOfBuyOptionTransactions || '0'}+
                  </StatNumber>
                </Stat>

                <Stat>
                  <StatLabel color="orange.100" fontSize="sm" fontWeight="bold">
                    Exercises
                  </StatLabel>
                  <StatNumber fontSize="2xl" fontWeight="bold" color="orange.300">
                    {grixMetrics?.graphStatistics.numberOfExerciseTransactions || '0'}+
                  </StatNumber>
                </Stat>

                <Stat>
                  <StatLabel color="blue.100" fontSize="sm" fontWeight="bold">
                    Limit Orders
                  </StatLabel>
                  <StatNumber fontSize="2xl" fontWeight="bold" color="blue.300">
                    {grixMetrics?.graphStatistics.numberOfOrderLimitTransactions || '0'}+
                  </StatNumber>
                </Stat>

                <Stat>
                  <StatLabel color="purple.100" fontSize="sm" fontWeight="bold">
                    Refunds
                  </StatLabel>
                  <StatNumber fontSize="2xl" fontWeight="bold" color="purple.300">
                    {grixMetrics?.graphStatistics.numberOfRefundFromProtocolTransactions || '0'}+
                  </StatNumber>
                </Stat>
              </SimpleGrid>
            </VStack>
          </StatGroup>
        </SimpleGrid>

        {/* AI Agent Stats */}
        <StatGroup bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full" mt={8}>
          <VStack spacing={4} w="full" align="start">
            <Heading size="md" color="purple.300" mb={2}>
              AI Agent Activity
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              <Stat>
                <StatLabel color="purple.100" fontSize="sm" fontWeight="bold">
                  Active Trade Agents
                </StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold" color="purple.300">
                  {grixMetrics?.agentsMetrics?.activeTradeAgents || '0'}+
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="teal.100" fontSize="sm" fontWeight="bold">
                  Active Social Agents
                </StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold" color="teal.300">
                  {grixMetrics?.agentsMetrics?.socialAgentTasksCount || '0'}+
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="blue.100" fontSize="sm" fontWeight="bold">
                  Trade Signals
                </StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold" color="blue.300">
                  {grixMetrics?.agentsMetrics?.numberOfCompletedTradeAgentSignals || '0'}+
                </StatNumber>
              </Stat>

              <Stat>
                <StatLabel color="pink.100" fontSize="sm" fontWeight="bold">
                  Social Tasks
                </StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold" color="pink.300">
                  {grixMetrics?.agentsMetrics?.numberOfCompletedSocialAgentTaskActions
                    ? grixMetrics.agentsMetrics.numberOfCompletedSocialAgentTaskActions > 1000
                      ? Math.floor(grixMetrics.agentsMetrics.numberOfCompletedSocialAgentTaskActions / 1000) + 'K+'
                      : grixMetrics.agentsMetrics.numberOfCompletedSocialAgentTaskActions + '+'
                    : '0+'}
                </StatNumber>
              </Stat>
            </SimpleGrid>
          </VStack>
        </StatGroup>
      </Box>
    </VStack>
  </section>
);

export const renderIntegratedProtocolsSection = ({ cardBg, borderColor }: SectionProps) => (
  <section aria-label="Integrated Protocols">
    <VStack spacing={10} align="center">
      <Heading
        fontSize={{ base: '2xl', md: '3xl' }}
        textAlign="center"
        bgGradient="linear(to-r, blue.400, blue.600)"
        bgClip="text"
      >
        Integrated Protocols
      </Heading>

      <Box bg={cardBg} p={8} borderRadius="xl" borderWidth="1px" borderColor={borderColor} w="full" maxW="1200px">
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={8}>
          {['Hyperliquid', 'Powertrade', 'Deribit', 'GMX', 'Premia', 'Rysk', 'Aevo', 'Derive', 'Itacha', 'Zomma'].map(
            (protocol, index) => (
              <MotionBox
                key={protocol}
                p={5}
                borderRadius="lg"
                borderWidth="1px"
                borderColor="whiteAlpha.300"
                textAlign="center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                _hover={{
                  borderColor: 'blue.400',
                  transform: 'translateY(-2px)',
                  bg: 'whiteAlpha.100',
                }}
              >
                <Text fontWeight="bold" color="whiteAlpha.900" fontSize="lg">
                  {protocol}
                </Text>
              </MotionBox>
            )
          )}
        </SimpleGrid>
      </Box>
    </VStack>
  </section>
);
