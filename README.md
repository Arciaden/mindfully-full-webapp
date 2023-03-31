This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run 
```bash
npm i
```
to install all the packages that are needed to run the project successfully.

Next add the following into a .env file in the root of your project (replacing *placeholders* with your keys as neccessary)

.env file contents
  DATABASE_URL="*MONGO_DB_CONNECTION_STRING*"
  RESET_PASSWORD_TOKEN='*RANDOM_STRING*'
  SENDGRID_API_KEY="SG.*API_KEY*"
  FROM_EMAIL="*exampleemail@gmail.com*"
  FROM_NAME="*exampleUserName*"
  
Next run the development server with one of the commands below.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
