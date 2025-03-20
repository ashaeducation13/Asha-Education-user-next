// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     devIndicators: false,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
      },

    basePath: '/asha', // Set the basePath for the app
    assetPrefix: '/asha', // Ensure static files are correctly referenced
    devIndicators: false,
};

export default nextConfig;
