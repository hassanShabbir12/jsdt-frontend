#!/bin/bash

# Vite React Enterprise Project Setup Script

# Exit on error
set -e

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check if Yarn and Git are installed
if ! command_exists yarn; then
    echo "Yarn is not installed. Please install Yarn and try again."
    exit 1
fi

if ! command_exists git; then
    echo "Git is not installed. Please install Git and try again."
    exit 1
fi

# Project name
read -p "Enter your project name: " PROJECT_NAME

# Create project
yarn create vite $PROJECT_NAME --template react-ts
cd $PROJECT_NAME

# Initialize Git repository
git init

# Install dependencies
yarn add react-router-dom @hookform/resolvers zod @radix-ui/react-icons class-variance-authority clsx tailwind-merge zustand
yarn add -D tailwindcss postcss autoprefixer @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-plugin-react-hooks eslint-plugin-react prettier prettier-plugin-tailwindcss

# Setup Tailwind CSS
npx tailwindcss init -p

# Update tailwind.config.js
cat > tailwind.config.js << EOL
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# Setup ESLint
cat > .eslintrc.js << EOL
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  root: true,
};
EOL

# Setup Prettier
cat > .prettierrc << EOL
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "all",
  "jsxSingleQuote": true,
  "bracketSpacing": true
}
EOL

# Setup Husky and lint-staged
yarn add -D husky lint-staged

# Initialize Husky
npx husky-init && yarn

# Configure lint-staged in package.json
npm pkg set scripts.lint="eslint 'src/**/*.{js,jsx,ts,tsx}'"
npm pkg set scripts.format="prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}'"
npm pkg set "lint-staged"."*.{ts,tsx}"="eslint --fix"
npm pkg set "lint-staged"."*.{ts,tsx,css,md,json}"="prettier --write"

# Update the Husky pre-commit hook
cat > .husky/pre-commit << EOL
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
EOL

# Update vite.config.ts
cat > vite.config.ts << EOL
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
EOL

# Create folder structure
mkdir -p src/{assets,components/ui,hooks,layouts,lib,pages,routes,services,store,styles,types,utils}

# Setup React Router
cat > src/routes/index.tsx << EOL
import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Layout from '@/layouts/MainLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
];

export function AppRoutes() {
  return useRoutes(routes);
}
EOL

# Setup Zod schema
cat > src/lib/schemas.ts << EOL
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginFormData = z.infer<typeof loginSchema>;
EOL

# Setup custom hook with useActionData
cat > src/hooks/useLoginAction.ts << EOL
import { useActionData, Form } from 'react-router-dom';
import { loginSchema, LoginFormData } from '@/lib/schemas';

export function useLoginAction() {
  const actionData = useActionData() as LoginFormData | undefined;

  const handleSubmit = async (formData: FormData) => {
    const rawData = Object.fromEntries(formData);
    const result = loginSchema.safeParse(rawData);

    if (!result.success) {
      return { errors: result.error.flatten() };
    }

    // Perform login logic here
    // ...

    return { success: true };
  };

  return { Form, actionData, handleSubmit };
}
EOL

# Setup Zustand store
cat > src/store/useStore.ts << EOL
import { create } from 'zustand';

interface AppState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;
EOL

# Create initial commit
git add .
git commit -m "Initial commit: Project setup"

echo "Project setup complete! CD into $PROJECT_NAME to get started."
echo "To add shadcn components manually, follow these steps:"
echo "1. cd $PROJECT_NAME"
echo "2. npx shadcn-ui@latest init"
echo "3. npx shadcn-ui@latest add <component-name>"
echo "Replace <component-name> with the desired component, e.g., 'button', 'card', etc."