/** @type {import('next').NextConfig} */
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-heroku-url.com"
    : "http://localhost:4000";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/submitPostInfo/image",
        destination: `${API_URL}/api/submitPostInfo/image`,
      },
      {
        source: "/api/posts",
        destination: `${API_URL}/api/posts`,
      },
      {
        source: "/auth/resend-otp",
        destination: `${API_URL}/auth/resend-otp`,
      },
      {
        source: "/api/submitUserInfo/image",
        destination: `${API_URL}/api/submitUserInfo/image`,
      },
      {
        source: "/api/submitPostInfo",
        destination: `${API_URL}/api/submitPostInfo`,
      },
      {
        source: "/auth/google",
        destination: `${API_URL}/auth/google`,
      },
      {
        source: "/auth/reset-password",
        destination: `${API_URL}/auth/reset-password`,
      },
      {
        source: "/auth/verify-reset",
        destination: `${API_URL}/auth/verify-reset`,
      },
      {
        source: "/auth/register",
        destination: `${API_URL}/auth/register`,
      },
      {
        source: "/api/fetchUser",
        destination: `${API_URL}/api/fetchUser`,
      },
      {
        source: "/auth/verify-register",
        destination: `${API_URL}/auth/verify-register`,
      },
      {
        source: "/auth/login",
        destination: `${API_URL}/auth/login`,
      },
      {
        source: "/api/users/:id",
        destination: `${API_URL}/api/users/:id`,
      },
      {
        source: "/api/userInfoDone",
        destination: `${API_URL}/api/userInfoDone`,
      },
      {
        source: "/auth",
        destination: `${API_URL}/auth`,
      },
      {
        source: "/api/submitUserInfo",
        destination: `${API_URL}/api/submitUserInfo`,
      },
      {
        source: "/api/submitPreferences",
        destination: `${API_URL}/api/submitPreferences`,
      },
      {
        source: "/api/submitIndifferences",
        destination: `${API_URL}/api/submitIndifferences`,
      },
      {
        source: "/api/current_user",
        destination: `${API_URL}/api/current_user`,
      },
      {
        source: "/api/logout",
        destination: `${API_URL}/api/logout`,
      },
    ];
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "images-raging-incel.s3.us-east-1.amazonaws.com",
      "posts-raging-incel.s3.us-east-1.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
