import { extendTheme } from "@chakra-ui/react";

import { badgeTheme } from "./Badge.theme";
import { buttonTheme } from "./Button.theme";
import { colors } from "./colors.theme";
import { numberInputTheme } from "./NumberInput.theme";
import { TableTheme } from "./Table.theme";

export { colors } from "./colors.theme";

export const theme = extendTheme({
	styles: {
		global: {
			body: {
				bg: "base.black",
				color: "white",
			},
		},
	},
	borders: { "1px": `1px solid ${colors.gray[900]}` },
	colors,
	fonts: {
		heading: "'Poppins', sans-serif",
		body: "'Open Sans', sans-serif",
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "4rem",
	},
	components: {
		Button: buttonTheme,
		NumberInput: numberInputTheme,
		Badge: badgeTheme,
		Table: TableTheme,
	},
	icons: {
		show: {
			bg: "primary.500",
			color: "white",
			_hover: {
				bg: "primary.600",
			},
		},
	},
	breakpoints: {
		sm: "30em", // Mobile (small screens)
		md: "48em", // Tablet (medium screens)
		lg: "62em", // Desktop (large screens)
	},
});
