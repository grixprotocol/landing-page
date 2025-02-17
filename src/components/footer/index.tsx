import { Box } from "@chakra-ui/react";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => (
	<Box
		as="footer"
		role="contentinfo"
		aria-label="Site footer"
		position="fixed"
		bottom={0}
		left={0}
		right={0}
		width="100%"
		bg="base.black"
		borderTop="1px solid"
		borderColor="whiteAlpha.100"
	>
		<FooterLinks />
	</Box>
);
