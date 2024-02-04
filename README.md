# Dashboard

Simple dashboad with auth and rendering dashboard toolbar.
JWT Authentication with Next.js and Tailwind CSS.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## About Project

JWT Authentication with Next.js and Tailwind CSS

Objective: Develop a Next.js application that integrates JWT (JSON Web Token) authentication, enabling user login and access to a protected dashboard page.

Specifications:

1. Login Page:

- Design a clean and intuitive login page using Tailwind CSS and Shadcn UI components.
- The page should have input fields for username and password, along with a "Login" button.
- Implement client-side validation to ensure that the input fields are not empty before submitting.
- Display appropriate error messages for incorrect credentials or server errors.

2. Authentication:

- Implement JWT authentication on the server-side.
- On successful authentication, a JWT should be created and sent to the client.
- Store the JWT securely on the client-side and use it to manage the session.

3. Dashboard Page:

- Upon successful login, redirect the user to a dashboard page.
- Display a welcome message on the dashboard, mentioning the username of the logged-in user.
- Implement a "Logout" button that clears the JWT and redirects the user back to the login page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Copyright

All images, icons used in the project are downloaded from https://www.flaticon.com/
