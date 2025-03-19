# jsonplaceholder

A Next.js application that consumes the JSONPlaceholder API (https://jsonplaceholder.typicode.com) to display users, posts, and comments in a user-friendly interface.

## Key Features

- View a list of users with infinite scrolling
- View detailed user information including contact details and company information
- View comments on posts
- Responsive and user-friendly design

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/)

## Installation

#### Clone the repository:

```bash
git clone git@github.com:MohammadShehadeh/jsonplaceholder.git
cd jsonplaceholder
```

#### Select the desired Node.js version:

```bash
nvm use
```

- nvm: [Installing and Updating](https://github.com/nvm-sh/nvm#installing-and-updating)

#### Install dependencies:

```bash
pnpm install
```

#### Run the project:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

In the project directory, you can run:

#### Build for Production:

```bash
pnpm build
```

Builds the app for production to the `.next` folder.\
It correctly bundles Next in production mode and optimizes the build for the best performance.

#### Run in Production Mode:

```bash
pnpm start
```

Execute this script to run the Next.js app in production mode. Once the app is running,\
you can access it in the browser at [http://localhost:3000](http://localhost:3000)\
This command is typically used after running the `pnpm build` script.

#### Format Code with Prettier:

```bash
pnpm format
pnpm format:fix
```

Prettier is used for code formatting. To ensure consistent formatting throughout the project.\
This command will automatically format the code based on the rules defined in the `.prettierrc.js`\
configuration file.

#### Run Linter:

```bash
pnpm lint
pnpm lint:fix
```

Run the linter to analyze the code for potential errors.

#### Run Unit tests:

```bash
pnpm test
pnpm test:watch
pnpm test:coverage
```

Run the tests to analyze the code for potential bugs.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
