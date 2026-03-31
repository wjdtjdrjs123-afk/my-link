# GEMINI.md - Project Context for Gemini CLI

## Project Overview
This project, located in the `my-profile/` directory, is a modern web application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. It appears to be a personal profile or portfolio site, bootstrapped with `create-next-app`.

**Note:** This project uses Next.js 16, which contains breaking changes compared to earlier versions. Refer to `my-profile/AGENTS.md` for specific instructions regarding these changes.

### Key Technologies
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Linting:** ESLint 9

## Project Structure
The core application logic is located within the `my-profile/` subdirectory.

- `my-profile/app/`: Contains the application's routes, layouts, and components (App Router).
  - `layout.tsx`: Root layout with font and metadata configuration.
  - `page.tsx`: The main landing page.
  - `globals.css`: Global CSS styles including Tailwind directives.
- `my-profile/public/`: Static assets such as images and SVGs.
- `my-profile/next.config.ts`: Next.js configuration file.
- `my-profile/package.json`: Project metadata, dependencies, and scripts.
- `my-profile/tsconfig.json`: TypeScript compiler configuration.

## Building and Running
All commands should be executed within the `my-profile/` directory.

- **Development:** `npm run dev` - Starts the development server at `http://localhost:3000`.
- **Build:** `npm run build` - Builds the application for production.
- **Start:** `npm run start` - Starts the production server.
- **Lint:** `npm run lint` - Runs ESLint to check for code quality issues.

## Development Conventions
- **App Router:** Use the Next.js App Router conventions for routing and data fetching.
- **Tailwind CSS:** Use Tailwind CSS 4 for styling. Note the new syntax and features in v4.
- **TypeScript:** Ensure all new code is properly typed for better maintainability.
- **AI Agent Instructions:** Refer to `my-profile/AGENTS.md` for specific rules when interacting with this version of Next.js.
