import { Button, ButtonProps, forwardRef } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

const MotionButton = motion(Button);

type CustomButtonProps = Omit<ButtonProps, "transition"> &
	HTMLMotionProps<"button"> & {
		href: string;
		target?: string;
	};

const baseButtonStyles = {
	px: 8,
	height: { base: "48px", md: "56px" },
	fontSize: { base: "md", md: "lg" },
	fontWeight: "semibold",
	transform: "translateY(0)",
	_hover: {
		transform: "translateY(-2px)",
		boxShadow: "0 4px 20px rgba(66, 153, 225, 0.4)",
	},
};

const motionTransition = {
	duration: 0.3,
	ease: "easeInOut",
};

export const PrimaryButton = forwardRef<CustomButtonProps, "button">((props, ref) => (
	<MotionButton
		ref={ref}
		as="a"
		bgGradient="linear(to-r, blue.400, teal.400)"
		color="white"
		transition={motionTransition}
		{...baseButtonStyles}
		{...props}
		_hover={{
			...baseButtonStyles._hover,
			bgGradient: "linear(to-r, blue.500, teal.500)",
		}}
	/>
));

export const SecondaryButton = forwardRef<CustomButtonProps, "button">((props, ref) => (
	<MotionButton
		ref={ref}
		as="a"
		variant="outline"
		borderWidth="2px"
		borderColor="blue.400"
		color="blue.400"
		transition={motionTransition}
		{...baseButtonStyles}
		{...props}
		_hover={{
			...baseButtonStyles._hover,
			borderColor: "teal.400",
			color: "teal.400",
		}}
	/>
));
