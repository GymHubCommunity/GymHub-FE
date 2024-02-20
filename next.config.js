/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  images: {
    domains: [
      'k.kakaocdn.net',
      'lh3.googleusercontent.com',
      'github.com',
      'avatars.githubusercontent.com',
      '52.79.247.31',
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  sentry: {
    hideSourceMaps: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  env: {
    NEXTAUTH_SECRET: process.env.AUTH_SECRET,
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
