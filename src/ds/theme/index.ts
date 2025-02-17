import { extendTheme } from "@chakra-ui/react";
import { badgeTheme } from "./components/Badge.theme";
import { buttonTheme } from "./components/Button.theme";
import { numberInputTheme } from "./components/NumberInput.theme";
import { TableTheme } from "./components/Table.theme";
import { foundations } from "./foundations";

export { colors } from "./foundations/colors";

export const theme = extendTheme({
	...foundations,
	components: {
		Button: buttonTheme,
		NumberInput: numberInputTheme,
		Badge: badgeTheme,
		Table: TableTheme,
	},
});
