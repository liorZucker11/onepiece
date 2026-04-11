/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pure frontend — no server features used.
  // `output: 'export'` generates a fully static site under /out.
  // Remove this line if you prefer the standard Next.js dev/prod server.
  output: 'export',
  images: {
    unoptimized: true, // Required when using output: 'export'
  },
  // Silence the workspace-root lockfile warning when a parent dir also has node_modules
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
