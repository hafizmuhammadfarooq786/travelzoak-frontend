const nextConfig = {
  env: {
    APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
