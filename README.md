# Mammothzy: The Next.js App

## Project Overview
Mammothzy is a SaaS platform designed to help HR professionals and team leaders book engaging activities for their teams. This project is a form-based Next.js application that allows users to create a new activity entry by filling out a multi-step form.

## Tech Stack
- **Programming Language**: TypeScript
- **Framework**: Next.js
- **Form Handling**: React Hook Form
- **Styling**:  CSS
- **State Management**: React Context API

## Features

### 1. Multi-Page Form with Tabs
- Users fill out activity details in a structured, tabbed layout.
- Two tabs: **Activity Details** and **Location Details**.
- Navigation is restricted unless required fields are correctly filled.

### 2. Persistent Form Data
- Form data is retained when switching between steps.

### 3. Pixel-Perfect Design
- The UI follows the provided Figma design precisely.

### 4. Form Submission & Reset
- On successful submission:
  - The collected form data is logged to the console.
  - A success modal is displayed.
  - The form resets to its initial state.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/prashant21b/Mammothzy.git
   ```
2. Navigate into the project directory:
   ```sh
   cd Mammothzy
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000`.

## Deployment
The application is deployed on Vercel.

Live Demo: [https://mammothzy-lyart.vercel.app/]

## Repository
GitHub Repository: [ https://github.com/prashant21b/Mammothzy.git]

## License
This project is licensed under the MIT License.

