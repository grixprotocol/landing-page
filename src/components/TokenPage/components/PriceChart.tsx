import { Box } from '@chakra-ui/react';

type PriceChartProps = {
  cardBg: string;
  cardHoverBg: string;
  borderColor: string;
};

export const PriceChart = ({ cardBg, borderColor }: PriceChartProps) => (
  <Box
    bg={cardBg}
    borderRadius="xl"
    borderWidth={1}
    borderColor={borderColor}
    overflow="hidden"
    height="500px"
    position="relative"
  >
    <iframe
      height="100%"
      width="100%"
      id="geckoterminal-embed"
      title="GRIX Price Chart"
      src="https://www.geckoterminal.com/arbitrum/pools/0x25d3ce097e413eeab09bbda72cd87d8972e673d4?embed=1&info=1&swaps=1&grayscale=0&light_chart=0&chart_type=price&resolution=15m"
      style={{ border: 'none' }}
      allow="clipboard-write"
      allowFullScreen
    />
  </Box>
);
