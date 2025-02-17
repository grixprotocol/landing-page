"use client";

 import { Box } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { TokenPage } from "@/components/TokenPage";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

export default function Page() {
		const Footer = dynamic(() => import("@/components/footer").then((mod) => mod.Footer), {
			ssr: false,
		});
	return (
		<Box>
			<Header />
			<Box
				as={motion.div}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				pt="72px"
				minH="100vh"
				pb="80px"
			>
				<TokenPage />
			</Box>
			<Footer />
		</Box>
	);
}
