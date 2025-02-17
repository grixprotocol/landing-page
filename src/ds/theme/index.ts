import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";

export { colors } from "./foundations/colors";

export const theme = extendTheme({
	...foundations,
});
