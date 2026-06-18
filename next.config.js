/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				port: '',
				pathname: '/tobest-foundation/image/upload/**/**',
			},
			{
				protocol: 'https',
				hostname: 'www.jotform.com',
			},
			{
				protocol: 'https',
				hostname: '**.jotform.com',
			},
			{
				protocol: 'https',
				hostname: 'example.com',
			},
		],
	},
	// output: 'export',
};

module.exports = nextConfig;
