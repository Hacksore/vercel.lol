import toolbarPlugin from "@vercel/toolbar/plugins/next";
/** @type {import('next').NextConfig} */
const nextConfig = {};

const withVercelToolbar = toolbarPlugin();

export default withVercelToolbar(nextConfig);
