```markdown
# AGENTS.md Guidelines

## 1. Purpose

This document outlines the guidelines for the creation and maintenance of the AGENTS.md repository. These guidelines are crucial for ensuring code quality, maintainability, and a sustainable development process.  The goal is to establish a consistent and effective approach to developing and utilizing AI coding agents.

## 2. DRY (Don't Repeat Yourself)

*   All functions, classes, and modules should have clear, single responsibilities.
*   Avoid duplicating logic across multiple files.
*   Implement common patterns and abstractions once, and reuse them throughout the project.

## 3. KISS (Keep It Simple, Stupid)

*   Strive for simplicity in design and implementation.
*   Favor clear and concise code over complex solutions.
*   Minimize unnecessary complexity.
*   Avoid unnecessary abstractions or over-engineered designs.

## 4. SOLID Principles

*   **Single Responsibility Principle:** Each class/module should have one well-defined purpose.
*   **Open/Closed Principle:**  The code should be extensible without modification.  New functionality should be added via API.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to rely on methods they do not use.
*   **Dependency Inversion Principle:**  High-level modules should not depend on low-level modules.  Instead, they should depend on abstractions.

## 5. YAGNI (You Aren't Gonna Need It)

*   Implement only the necessary features.
*   Refactor code only when it is no longer needed.
*   Avoid adding functionality that is not currently required.

## 6. Code Style & Formatting

*   Use a consistent code style (e.g., PEP 8).
*   Employ a code formatter (e.g., Black, Autopep8) to automatically enforce formatting rules.
*   Follow the established documentation style.
*   Maintain a consistent naming convention.

## 7. File Structure & Organization

*   **Modules:**  Organize code into logical modules (e.g., `data_processing`, `agent_management`, `communication`).
*   **Functions:** Use clear and descriptive function names.
*   **Classes:**  Employ appropriate encapsulation and methods.
*   **Data Structures:** Utilize well-defined data structures for efficient data handling.
*   **Dependencies:** Specify dependencies with clear documentation.
*   **Tests:**  All tests should be self-contained and easily runnable.

## 8. Testing – Emphasis on Mocking

*   **All tests must be purely functional, verifying the behavior of the agent itself.**
*   **Use mocks and stubs extensively.**  No use of real implementation details.
*   Testing must be automated and repeatable.
*   Each test case should have a clearly defined input and expected output.
*   Test coverage should be 80% or higher.
*   Test cases should be independent and isolated.

## 9. Code Length Limit

*   The total length of all code within the AGENTS.md repository should be no more than 180 lines of code.

## 10. Documentation

*   Each file should have a clear README with a brief description, purpose, and dependencies.
*   Include documentation for all classes, functions, and modules.

## 11.  Version Control

*   Use Git for version control.
*   Commit frequently with clear commit messages.
*   Follow established branching strategies.

## 12.  Project Goals & Structure

*   **Data Pipelines:**  Modular data processing routines.
*   **Agent Management:**  Tools for creating, managing, and monitoring agents.
*   **Communication:**  Mechanisms for agent communication.
*   **Logging:**  Robust logging system.
*   **Configuration:**  Flexible configuration mechanism.

## 13.  Testing Frameworks**

*   Utilize a testing framework (e.g., pytest, unittest) for all tests.
*   Ensure tests are easily runnable and repeatable.

## 14.  Continuous Integration (CI)**

*   Implement a CI pipeline that automatically tests the code.
*   Automated linting and code formatting.

## 15.  Documentation Updates**

*   Any changes to the code must be documented clearly.
*   Update documentation whenever the code changes.

## 16.  Feedback Loop**

*   Encourage developers to provide feedback on the guidelines.
*   Regularly review and update the guidelines as needed.

## 17.  Focus on Maintainability**

*   Prioritize code that is easy to understand, modify, and extend.
*   Avoid overly complex or convoluted logic.

```