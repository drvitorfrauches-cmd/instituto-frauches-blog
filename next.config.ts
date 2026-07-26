import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/minoxidil-funciona",
        destination: "/blog/minoxidil-para-queda-de-cabelo",
        permanent: true,
      },
      {
        source: "/blog/preco-transplante-capilar",
        destination: "/blog/quanto-custa-transplante-capilar",
        permanent: true,
      },
      {
        source: "/blog/resultado-transplante-capilar",
        destination: "/blog/resultado-transplante-capilar-linha-do-tempo",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
