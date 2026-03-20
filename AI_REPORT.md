# AI Report

## Tool Used

- Codex (GPT-5 coding agent)

## Prompts / Requests Used

- Build a Lab 10 React Todo app with Jest and React Testing Library
- Add Jest configuration and tests for render, add, toggle, delete, and counter behavior
- Add production build configuration, Vercel configuration, and GitHub Actions CI
- Align the project with the course submission requirements

## How The AI Output Was Modified And Verified

- The generated project files were reviewed and adjusted inside the local workspace.
- Production build settings were updated to use `terser`, manual vendor chunking, and `dist` output.
- The GitHub Actions workflow was revised so the `build` job depends on the `test` job.
- Coverage was verified locally with `npm test -- --coverage`.
- The production build was verified locally with `npm run build`.

## What I Learned

- How to configure Jest with `ts-jest` and React Testing Library in a Vite + TypeScript project
- How to write user-focused component tests using `screen` and `userEvent`
- How to configure production builds in Vite
- How to set up a CI workflow where tests must pass before the build job runs
- What deployment settings Vercel expects for a Vite project

## Remaining Manual Steps

- Replace placeholder student information in the README files
- Push the project to a Git repository
- Deploy the app to Vercel or Netlify
- Replace the placeholder live URL with the real deployed URL
