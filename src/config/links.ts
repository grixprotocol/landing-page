import { GRIX_ADDRESSES } from "./tokens";

export const links = {
	trade: {
		ethereum: `https://app.uniswap.org/#/swap?outputCurrency=${GRIX_ADDRESSES.ethereum}`,
		arbitrum: `https://app.camelot.exchange/?token2=${GRIX_ADDRESSES.arbitrum}&swap=v2`,
		solana: {
			raydium: `https://raydium.io/swap/?outputMint=${GRIX_ADDRESSES.solana}&inputMint=sol`,
			jupiter: `https://jup.ag/swap/SOL-${GRIX_ADDRESSES.solana}`,
		},
	},
	scan: {
		ethereum: `https://etherscan.io/token/${GRIX_ADDRESSES.ethereum}`,
		arbitrum: `https://arbiscan.io/token/${GRIX_ADDRESSES.arbitrum}`,
		solana: `https://solscan.io/token/${GRIX_ADDRESSES.solana}`,
	},
	social: {
		twitter: "https://twitter.com/GrixFinance",
		github: "https://github.com/grixprotocol/defi-options-hub",
		discord: "https://t.co/YPGAhKlcUV",
		medium: "https://medium.com/@grixfinance",
		linktree: "https://linktr.ee/grixfinance",
		telegram: "https://t.me/grixfinance",
	},
} as const;

export const DEFAULT_TRADE_LINK = links.trade.arbitrum;
