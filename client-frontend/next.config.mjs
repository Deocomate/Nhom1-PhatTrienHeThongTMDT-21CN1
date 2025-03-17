/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'thumbs.dreamstime.com', // port: '',       // Optional, only if your image URLs have a specific port
            // pathname: '/**', // Optional, allows all paths from this hostname.  You can restrict it if needed.
        }, // Add any other domains you use images from:
            {
                protocol: 'http', // Or 'https' as needed
                hostname: 'localhost', // Example: For local development images
            },
        ],
    },
};

export default nextConfig;