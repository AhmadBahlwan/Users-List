# Angular Quiz App

This project is an Angular application that serves as a quiz app. It allows users to view a list of users, details of individual users, and implements various features such as caching, loading spinner, and search functionality.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/)   (V 12.11.0)
- [Npm](https://nodejs.org/)   (V 6.11.3)
- [Angular CLI](https://angular.io/cli)  (V 9.1.0)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/angular-quiz-app.git


2. Navigate to the project directory:

   ```bash
   cd angular-quiz-app

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   ng serve


## Usage

- **View Users:**
  - Open your browser and go to `http://localhost:4200/` to view the list of users.

- **User Details:**
  - Click on a user card to view detailed information about that user.

- **Search Users:**
  - Use the search bar to filter users by ID.

## Features

- **Caching:**
  - Users list and details are cached to avoid unnecessary API requests.

- **Loading Spinner:**
  - A loading spinner is displayed during network requests.

- **Pagination:**
  - Users list is paginated for better performance.

- **Search Functionality:**
  - Users can be searched by ID.   



## Folder Structure
```bash
/angular-quiz-app
|-- /src
| |-- /app
| | |-- /user-details
| | | |-- user-details.component.ts
| | | |-- user-details.component.html
| | | |-- user-details.component.css
| | |-- /users
| | | |-- users.component.ts
| | | |-- users.component.html
| | | |-- app.component.spec.ts
| | | |-- users.component.css
| | |-- app.component.ts
| | |-- app.component.html
| | |-- app.component.css
| | |-- /app.module.ts
| | |-- /id-filter.pipe.ts
| | |-- /users.service.ts
| | |-- /spinner-interceptor.service.ts
| | |-- /user.model.ts
|-- angular.json
|-- package.json
|-- README.md



