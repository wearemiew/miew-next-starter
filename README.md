<img class="logo" src="https://github.com/wearemiew/.github/raw/main/static/miew-banner.png" alt="Miew Banner"/>

# Miew Next.js Starter Template

This is a template for Next.js projects for Miew, providing a modern development environment with essential tools and configurations.

## Pre-installed Libraries and Tools

### Core Dependencies

- Next.js 15.3.1
- React 19
- React DOM 19
- TypeScript 5

### Development Tools

- ESLint 9 (Code linting)
- Prettier 3.5.3 (Code formatting)
- TailwindCSS 4 (Styling)
- Turbopack (Next.js build tool)

### Development Features

- Hot Module Replacement (HMR)
- TypeScript support
- ESLint configuration with Next.js plugins
- Prettier integration for code formatting
- TailwindCSS for utility-first styling
- Turbopack for faster builds

## Getting Started

1. Clone this repository
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```
4. Build for production:
    ```bash
    npm run build
    ```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

The project follows a standard Next.js structure:

- `app/` - Next.js app directory (pages and components)
- `public/` - Static assets
- `lib/` - Utility functions and shared code
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
