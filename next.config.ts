import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  headers: async () => ([
      {
          source: "/post/:id",
          headers: [
              {
                  key: "Vary",
                  value: "Accept-Language"
              },
              {
                  key: "x-custom",
                  value: "test"
              }
          ]
      }
  ])
};

export default nextConfig;
