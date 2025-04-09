import { Button, ButtonProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionButton = motion(Button);

interface CustomButtonProps extends Omit<ButtonProps, "as"> {
	href: string;
	children: React.ReactNode;
}

const baseButtonStyles = {
	px: 8,
	height: { base: "48px", md: "56px" },
	fontSize: { base: "md", md: "lg" },
	fontWeight: "semibold",
	transition: "all 0.3s ease",
	_hover: {
		transform: "translateY(-2px)",
		boxShadow: "0 4px 20px rgba(66, 153, 225, 0.4)",
	},
};

export const PrimaryButton = ({ children, href, ...props }: CustomButtonProps) => (
	<MotionButton
		as="a"
		href={href}
		target="_blank"
		bgGradient="linear(to-r, blue.400, teal.400)"
		color="white"
		_hover={{
			...baseButtonStyles._hover,
			bgGradient: "linear(to-r, blue.500, teal.500)",
		}}
		{...baseButtonStyles}
		{...props}
	>
		{children}
	</MotionButton>
);

export const SecondaryButton = ({ children, href, ...props }: CustomButtonProps) => (
	<MotionButton
		as="a"
		href={href}
		target="_blank"
		variant="outline"
		borderWidth="2px"
		borderColor="blue.400"
		color="blue.400"
		_hover={{
			...baseButtonStyles._hover,
			borderColor: "teal.400",
			color: "teal.400",
		}}
		{...baseButtonStyles}
		{...props}
	>
		{children}
	</MotionButton>
);
