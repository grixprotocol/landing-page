import { Box, Button, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaDiscord, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa";

interface SocialLinkProps {
	href: string;
	label: string;
	color: string;
	icon: React.ElementType;
}

const SocialLink = ({ href, label, color, icon: Icon }: SocialLinkProps) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		borderWidth="1px"
		borderColor={color}
		borderRadius="md"
		px={8}
		py={2}
		color={color}
		display="flex"
		alignItems="center"
		gap={2}
		_hover={{
			textDecoration: "none",
			bg: `${color}10`,
		}}
	>
		<Icon />
		{label}
	</Link>
);

export const LandingJoin = () => (
	<Box
		as="section"
		bg="rgba(17, 25, 40, 0.75)"
		borderRadius="xl"
		borderWidth="1px"
		borderColor="whiteAlpha.200"
		p={12}
		w="full"
		maxW="1200px"
		mx="auto"
		mt={16}
	>
		<VStack spacing={8} align="center">
			<Heading
				fontSize={{ base: "3xl", md: "4xl" }}
				textAlign="center"
				bgGradient="linear(to-r, purple.400, blue.400)"
				bgClip="text"
			>
				Join the Derivatives Intelligence Revolution
			</Heading>

			<Text
				fontSize={{ base: "lg", md: "xl" }}
				color="whiteAlpha.900"
				textAlign="center"
				maxW="900px"
			>
				Unlock the full potential of on-chain derivatives with Grix - powering the next
				generation of intelligent trading infrastructure for protocols, developers, and AI
				agents.
			</Text>

			<HStack spacing={4} flexWrap="wrap" justify="center" gap={4}>
				<SocialLink
					href="https://x.com/GrixFinance"
					label="Twitter"
					color="#1DA1F2"
					icon={FaTwitter}
				/>
				<SocialLink
					href="https://discord.com/invite/ZgPpr9psqp"
					label="Discord"
					color="#7289DA"
					icon={FaDiscord}
				/>
				<SocialLink
					href="https://medium.com/@grixfinance"
					label="Medium"
					color="#ffffff"
					icon={FaMedium}
				/>
				<SocialLink
					href="https://t.me/grixfinance"
					label="Telegram"
					color="#0088cc"
					icon={FaTelegram}
				/>
			</HStack>

			<Button
				as="a"
				href="https://app.grix.finance"
				size="lg"
				px={8}
				py={6}
				fontSize="xl"
				bgGradient="linear(to-r, blue.400, teal.400)"
				color="white"
				_hover={{
					bgGradient: "linear(to-r, blue.500, teal.500)",
				}}
				_active={{
					bgGradient: "linear(to-r, blue.600, teal.600)",
				}}
			>
				Launch App
			</Button>
		</VStack>
	</Box>
);
