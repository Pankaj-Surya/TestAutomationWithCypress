E:\Cypress>npx  cypress run --browser chrome --headed --spec .\cypress\e2e\signup_login_spec.cy.js  


# Automated Testing Project

## Overview

This project showcases automated testing using Cypress, focusing on validating a user signup and login flow with various scenarios and validations.


## Test Scenarios

### Test Case 1: User Signup and Login
1. Validates user signup with unique email generation.
2. Verifies password requirements and OTP authentication.
3. Ensures successful login and navigation to the community page.

### Test Case 2: Form Validations
1. Checks all fields for required inputs.
2. Validates email format and password strength requirements.
3. Captures error messages correctly on invalid inputs.


## Github Action CICD Result

Check the [CI/CD results](https://github.com/Pankaj-Surya/TestAutomationWithCypress/actions/runs/9930202210/job/27428652638) for the latest build status and logs.

## Test Case Execution Result

![Test Case Execution](https://github.com/Pankaj-Surya/TestAutomationWithCypress/raw/main/cypress/reports/mochawesome/assets/image.png)



## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (version latest)
- npm or yarn package manager

### Clone the Repository

```bash
git clone <repository_url>
cd <project_directory>
```

### Install Dependencies
npm install
### or
yarn install

## Running Tests

npm run cypress:open
### or
yarn cypress:open

## Running Tests With Report

### All Tests
npx  cypress run --browser chrome --headed  

### Specific Tests
npx  cypress run --browser chrome --headed --spec .\cypress\e2e\signup_login_spec.cy.js 





