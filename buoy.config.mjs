/** @type {import('@buoy-design/cli').BuoyConfig} */
export default {
  project: {
    name: 'subsequent-saturn',
  },
  sources: {
    react: {
      enabled: true,
      include: ['src/**/*.tsx', 'src/**/*.jsx'],
      exclude: ['**/*.test.*', '**/*.spec.*', '**/*.stories.*'],
      designSystemPackage: 'tailwindcss',
    },
    figma: {
      enabled: false,
      // accessToken: process.env.FIGMA_ACCESS_TOKEN,
      // fileKeys: [],
    },
  },
  output: {
    format: 'table',
    colors: true,
  },
};
