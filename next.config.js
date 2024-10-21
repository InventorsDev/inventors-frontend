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
		],
	},
	output: 'export',
};

module.exports = nextConfig;
