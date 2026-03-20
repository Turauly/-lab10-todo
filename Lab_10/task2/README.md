# Lab 10 Task 2

## Student Information

- Name: `Muhammaddin`
- Student ID: `250788`
- Date: `2026-03-20`
- Live URL: `https://lab10-todo.vercel.app`

## Objective

Task 2 covers production build configuration, deployment preparation, and CI/CD.

## Deployment Files

- `vite.config.ts`
- `.env.production`
- `vercel.json`
- `.github/workflows/ci.yml`

## Deployment Instructions

### Vercel

1. Push the project to GitHub.
2. Open the Vercel dashboard.
3. Import the repository.
4. Use:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

5. Deploy and use the production URL:

```text
https://lab10-todo.vercel.app
```

## CI/CD

The GitHub Actions workflow runs:

- tests with coverage
- coverage artifact upload
- production build after tests pass
- build artifact upload

## Verification Commands

```bash
npm test -- --coverage
npm run build
```

## Notes

Tests are configured to pass before the build job runs through `needs: test`.
