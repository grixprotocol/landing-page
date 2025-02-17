export const configDesign = {
	layoutConstants: {
		headerHeight: "6vh",
		footerHeight: "6vh",
		mainContentHeight: "88vh",
	},
	colors: {
		callOption: {
			text: '#2ED3B7',
			border: '#15B79E',
			background: '#0A2926',
		},
		putOption: {
			text: '#f08d8d',
			border: 'red.600',
			background: '#ff00002b',
		},
	},
	styles: {
		text: {
			default: {
				color: '#98A2B3',
				fontSize: '12px',
				fontFamily: 'Inter',
				fontWeight: '600',
			},
		},
		hover: {
			transform: "translateY(-4px)",
			boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
			transition: "all 0.3s",
		},
	},
};

export const { layoutConstants } = configDesign;
