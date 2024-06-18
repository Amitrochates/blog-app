# Medium App
## Live Deployment
Access the live version of the Blog App [here](https://blog-app-psi-tawny.vercel.app/signin).
## Overview
The Medium App is a blogging platform that enables users to authenticate, publish, and view blogs. It is designed to provide a seamless experience for both content creators and readers.

## Frontend

### Technologies
- **React**: Utilizes functional components along with hooks like `useState`, `useEffect`, and `useNavigate` for state management and navigation.
- **TypeScript**: Enhances code quality and maintainability with static type definitions.
- **Tailwind CSS**: Facilitates efficient styling with a utility-first approach.

### Features
- Custom hooks are implemented to fetch data from the backend, streamlining data retrieval and state management.
- Auxiliary functionalities like network requests, date-time manipulation, and routing are handled by libraries such as axios, moment.js, and react-router-dom respectively.
- Skeleton components used for loading pages when data is being fetched from the backend.

## Backend

### Technologies
- **Cloudflare Workers**: Provides a serverless execution environment for backend code.
- **Hono**: Offers a fast and straightforward web framework for Cloudflare Workers.
- **Prisma**: Serves as an ORM for safe and structured database interactions.
- **PostgreSQL**: Managed through Neon, serves as the relational database for storing user and blog data.

### Features
- Implements CRUD routes for managing user accounts and blog posts separately, ensuring a robust API structure.
- CORS is configured to enable secure cross-origin requests.
- JWT is used for secure authentication.

## Input Validation
Uniform input validation is achieved across both frontend and backend using `@amitrochates/blog-common`, a custom npm package which employs Zod for schema validation.


