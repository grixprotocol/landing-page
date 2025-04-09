import { Helmet } from 'react-helmet-async';

import { links } from '@/pages/TokenPage/config/links';

export const TokenPageSEO = () => (
  <Helmet>
    <title>GRIX Token - Universal DeFi Derivatives Toolkit | Grix Finance</title>
    <meta
      name="description"
      content="Empower your AI agents with battle-tested toolkits for risk management, position optimization, and strategy execution across leading agentic platforms like ElizaOS"
    />
    <meta
      name="keywords"
      content="GRIX token, DeFi derivatives, risk management, position optimization, strategy execution, ElizaOS, AI agents"
    />
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "GRIX Token",
          "description": "Universal DeFi Derivatives Toolkit for AI agents with risk management and strategy execution capabilities",
          "brand": {
            "@type": "Brand",
            "name": "Grix Finance"
          },
          "offers": {
            "@type": "Offer",
            "url": "${links.trade.arbitrum}",
            "priceCurrency": "ETH",
            "availability": "https://schema.org/InStock"
          }
        }
      `}
    </script>
  </Helmet>
);
