// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  staticPageGenerationTimeout: 1000,
  images: {
    domains: [
      'https://www.notion.so',
      'https://notion.so',
      'www.notion.so',
      'images.unsplash.com',
      's3.us-west-2.amazonaws.com',
      'www.sivan.fun',
      'file.notion.so',
      'www.sivand.notion.site',
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
