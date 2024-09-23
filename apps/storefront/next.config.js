/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // add the hostname of YOUR the SAP Commerce Cloud backend
        hostname:
          "api.c1jvi8hu9a-vsfspzooa1-d1-public.model-t.cc.commerce.ondemand.com",
        port: "",
      },
    ],
  },
};
