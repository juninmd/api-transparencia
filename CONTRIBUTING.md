# Contributing to api-transparencia

Thank you for considering contributing to this project! Please follow these guidelines to help maintain code quality and streamline the development process.

## Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/<your-username>/api-transparencia.git`
3. Install dependencies: `npm install`
4. Create a new branch for your feature or bugfix: `git checkout -b feature/your-feature-name`

## Code Style

We use ESLint for code quality. Please ensure your code passes the linter before submitting a pull request.

To run the linter:
```bash
npm run lint
```

## Testing

We aim for high test coverage. Please write tests for any new functionality and ensure existing tests pass.

To run the test suite:
```bash
npm test
```

To run tests with coverage report:
```bash
npm test -- --coverage
```

## Pull Request Process

1. Ensure your code passes the linter and tests.
2. Update the README.md if necessary to reflect changes.
3. Submit your pull request to the `main` branch.
4. Your PR will be automatically checked by our CI/CD pipeline.
5. Address any feedback from the CI/CD pipeline or reviewers.
6. Once approved, your PR will be merged and deployed automatically (if from `main` branch).

## CI/CD Pipeline

Our project uses GitHub Actions for continuous integration and deployment. The pipeline includes:

- **Lint**: Runs ESLint to ensure code quality.
- **Test**: Runs Jest tests and uploads coverage to Codecov.
- **Build**: Prepares the application for deployment.
- **Deploy**: Deploys the application to the production environment (only from the `main` branch).

### Workflow Triggers

The workflow runs on:
- Push to `main` and `develop` branches
- Pull requests targeting `main`

### Quality Gates

The pipeline enforces the following quality gates:
- Linting (ESLint)
- Unit tests (Jest)
- Code coverage (minimum 80% via Codecov)
- Dependency security (via npm audit in CI)

### Deployment

- Automatic deployment to staging on PR merge to `develop` (to be implemented)
- Manual approval required for production deployment from `main`
- Rollback capability via GitHub Releases
- Health checks post-deployment (to be implemented)

## Reporting Issues

Please use the GitHub issue tracker to report bugs or request features. When reporting a bug, include:
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Any relevant logs or error messages

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.