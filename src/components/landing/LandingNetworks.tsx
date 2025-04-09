import { Box, Button, Heading, HStack, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

interface NetworkCardProps {
	title: string;
	features: string[];
	tokenAddress: string;
	explorerUrl: string;
	buttons?: { label: string; href: string }[];
}



const NetworkCard = ({ title, features, tokenAddress, explorerUrl, buttons }: NetworkCardProps) => {
	const displayAddress = tokenAddress.slice(0, 6) + "..." + tokenAddress.slice(-4);

	return (
		<Box
			bg="rgba(11, 19, 31, 0.95)"
			p={6}
			borderRadius="xl"
			borderWidth="1px"
			borderColor="whiteAlpha.100"
		>
			<Heading size="lg" mb={6} color="white">
				{title}
			</Heading>

			<VStack align="start" spacing={4} mb={6}>
				<Text color="gray.400" fontSize="md">
					Premium Features:
				</Text>
				{features.map((feature, index) => (
					<Text key={index} color="gray.300" fontSize="md">
						• {feature}
					</Text>
				))}
			</VStack>

			<Link
				href={explorerUrl}
				isExternal
				display="inline-flex"
				alignItems="center"
				color="blue.400"
				fontSize="sm"
				mb={4}
				_hover={{
					color: "blue.300",
					textDecoration: "none",
				}}
			>
				<HStack spacing={1}>
					<Text>{displayAddress}</Text>
					<FiExternalLink />
				</HStack>
			</Link>

			{buttons && buttons.length > 0 && (
				<SimpleGrid columns={buttons.length} spacing={4} w="full">
					{buttons.map((button, index) => (
						<Button
							key={index}
							as={Link}
							href={button.href}
							isExternal
							variant={index === 0 ? "solid" : "outline"}
							colorScheme={index === 0 ? "teal" : "gray"}
							size="md"
							w="full"
							rightIcon={<FiExternalLink />}
						>
							{button.label}
						</Button>
					))}
				</SimpleGrid>
			)}
		</Box>
	);
};

export const LandingNetworks = () => (
	<section aria-label="Networks">
		<VStack spacing={12} align="center" w="full" maxW="1200px" mx="auto">
			<Heading
				fontSize={{ base: "2xl", md: "3xl" }}
				textAlign="center"
				bgGradient="linear(to-r, blue.400, teal.400)"
				bgClip="text"
			>
				Available Across Leading Networks
			</Heading>

			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
				<NetworkCard
					title="Ethereum"
					features={["Cross-chain bridging", "Enhanced security", "Network stability"]}
					tokenAddress="0xa150376112dd24E873086b51347EddD5F2e147D5"
					explorerUrl="https://etherscan.io/token/0xa150376112dd24E873086b51347EddD5F2e147D5"
				/>
				<NetworkCard
					title="Arbitrum"
					features={["Low transaction fees", "Fast settlements", "High liquidity pools"]}
					tokenAddress="0x812F2D5Ff6088ed7A655567dBcDf0d42cf07ca38"
					explorerUrl="https://arbiscan.io/token/0x812F2D5Ff6088ed7A655567dBcDf0d42cf07ca38"
					buttons={[
						{
							label: "Trade on Camelot",
							href: "https://app.camelot.exchange/?token2=0x812F2D5Ff6088ed7A655567dBcDf0d42cf07ca38&swap=v2",
						},
					]}
				/>
				<NetworkCard
					title="Solana"
					features={["Ultra-fast execution", "Minimal fees", "Advanced trading options"]}
					tokenAddress="E8iWdPoeVDHJn1EHifeCAFWvKZyTN9WXrmccFEx1Hxa"
					explorerUrl="https://solscan.io/token/E8iWdPoeVDHJn1EHifeCAFWvKZyTN9WXrmccFEx1Hxa"
					buttons={[
						{
							label: "Raydium",
							href: "https://raydium.io/swap/?outputMint=E8iWdPoeVDHJn1EHifeCAFWvKZyTN9WXrmccFEx1Hxa&inputMint=sol",
						},
						{
							label: "Jupiter",
							href: "https://jup.ag/swap/SOL-E8iWdPoeVDHJn1EHifeCAFWvKZyTN9WXrmccFEx1Hxa",
						},
					]}
				/>
			</SimpleGrid>
		</VStack>
	</section>
);
