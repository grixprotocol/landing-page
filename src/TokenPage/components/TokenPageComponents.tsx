import { Box, Button, Flex, Heading, Icon, Text, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { IconType } from 'react-icons';

const MotionBox = motion(Box);

export const ActionButton = ({
  children,
  href,
  variant = 'primary',
  size = 'lg',
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  size?: 'lg' | 'md';
  onClick?: () => void;
}) => (
  <Button
    size={size}
    as="a"
    href={href}
    target="_blank"
    px={8}
    fontSize={size === 'lg' ? 'lg' : 'md'}
    height={size === 'lg' ? '56px' : '48px'}
    bgGradient={variant === 'primary' ? 'linear(to-r, blue.400, teal.400)' : 'none'}
    border={variant === 'secondary' ? '2px solid' : 'none'}
    borderColor="blue.400"
    color={variant === 'primary' ? 'white' : 'blue.400'}
    _hover={{
      transform: 'translateY(-2px)',
      bgGradient: variant === 'primary' ? 'linear(to-r, blue.500, teal.500)' : 'none',
      borderColor: variant === 'secondary' ? 'teal.400' : 'none',
      color: variant === 'secondary' ? 'teal.400' : 'white',
      boxShadow: '0 4px 20px rgba(66, 153, 225, 0.4)',
    }}
    transition="all 0.3s"
    onClick={onClick}
  >
    {children}
  </Button>
);

export const FeatureCard = ({
  icon,
  title,
  description,
  color = 'blue',
  delay = 0,
  borderColor,
  cardBg,
  cardHoverBg,
}: {
  icon: IconType;
  title: string;
  description: string;
  color?: string;
  delay?: number;
  borderColor: string;
  cardBg: string;
  cardHoverBg: string;
}) => (
  <MotionBox
    p={6}
    bg={cardBg}
    borderRadius="xl"
    borderWidth="1px"
    borderColor={borderColor}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    _hover={{
      bg: cardHoverBg,
      transform: 'translateY(-4px)',
      boxShadow: `0 12px 30px -10px ${color}.100`,
      borderColor: `${color}.400`,
    }}
    h="100%"
  >
    <VStack spacing={4} align="flex-start">
      <Flex
        w="50px"
        h="50px"
        bg={`${color}.900`}
        color={`${color}.300`}
        borderRadius="lg"
        align="center"
        justify="center"
        mb={2}
      >
        <Icon as={icon} fontSize="24px" />
      </Flex>
      <Heading size="md" fontWeight="700" color={`${color}.300`}>
        {title}
      </Heading>
      <Text color="white" fontSize="md">
        {description}
      </Text>
    </VStack>
  </MotionBox>
);
