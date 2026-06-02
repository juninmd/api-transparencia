# api-transparencia
API com serviços do Portal da Transparência

![CI/CD Pipeline](https://github.com/alvarollmenezes/base-nodejs-api/actions/workflows/ci.yml/badge.svg)

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment.

### Workflow

The CI/CD pipeline consists of the following stages:

1. **Lint**: Runs ESLint to ensure code quality.
2. **Test**: Runs Jest tests and uploads coverage to Codecov.
3. **Build**: Prepares the application for deployment.
4. **Deploy**: Deploys the application to the production environment (only from the `main` branch).

### Getting Started

To set up the project locally:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the application: `npm start`

### Running Tests

To run the test suite:

```bash
npm test
```

### Linting

To run the linter:

```bash
npm run lint
```
