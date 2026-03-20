# Lab 10: Testing and Deployment

This project is a React + TypeScript Todo application built with Vite. It includes unit tests written with Jest and React Testing Library, plus a GitHub Actions workflow for automated testing and build verification.

## Student Information

- Name: `YOUR_NAME`
- Student ID: `YOUR_STUDENT_ID`
- Date: `2026-03-20`
- Live URL: `PENDING_DEPLOYMENT`

## Features

- Add a todo with the `Add` button
- Add a todo by pressing `Enter`
- Toggle todo completion with a checkbox
- Delete todos
- View a live todo counter
- Test coverage for render, add, toggle, delete, and counter behavior

## Project Structure

- `src/components/TodoList.tsx` - Todo component
- `src/components/TodoList.test.tsx` - Jest + React Testing Library tests
- `jest.config.ts` - Jest configuration
- `jest.setup.ts` - Jest DOM setup
- `.github/workflows/ci.yml` - GitHub Actions CI pipeline

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Test Commands

Run tests once:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run coverage
```

Build for production:

```bash
npm run build
```

## Coverage Report

Latest local coverage result:

```text
All files     | 100% statements | 100% branches | 100% functions | 100% lines
TodoList.tsx  | 100% statements | 100% branches | 100% functions | 100% lines
```

## Testing Notes

The tests use:

- `render` to mount the component
- `screen` to query rendered output
- `userEvent` for realistic user interactions
- `data-testid` attributes for stable element selection

Covered behaviors:

- Rendering an empty list
- Rendering initial todos
- Adding todos by click
- Adding todos with `Enter`
- Rejecting empty todos
- Toggling completion
- Deleting todos
- Updating the counter

## Deployment

This app is ready to deploy as a static frontend.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Use these build settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

After deployment, replace `PENDING_DEPLOYMENT` above with the actual Vercel URL.

### Netlify

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Use these build settings:

```text
Build Command: npm run build
Publish Directory: dist
```

### Environment Variables

This lab project does not require runtime environment variables. If a deployment platform asks for them, none are needed for the current app.

## CI/CD

GitHub Actions is configured to run on every push and pull request to `main`.

The workflow:

- installs dependencies with `npm ci`
- runs the Jest test suite
- generates a coverage report
- verifies the production build with Vite

## Submission Checklist

- React project with Jest and RTL setup
- `src/components/TodoList.tsx`
- `src/components/TodoList.test.tsx`
- Jest configuration
- README with commands and coverage report
- GitHub Actions workflow for automated testing
- Production env file and Vercel configuration
- Live deployment URL after publishing
