This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run 
```bash
npm i
```
to install all the packages that are needed to run the project successfully.

Next add the following into a .env file in the root of your project (replacing *placeholders* with your keys as neccessary)

.env file contents
<ul>
    <li>
       DATABASE_URL="*MONGO_DB_CONNECTION_STRING*"
    </li>
   <li>
     RESET_PASSWORD_TOKEN='*RANDOM_STRING*'
   </li>
   <li>
      SENDGRID_API_KEY="SG.*API_KEY*"
   </li>
   <li>
      FROM_EMAIL="*exampleemail@gmail.com*"
   </li>
   li>
       FROM_NAME="*exampleUserName*"
   </li>
 </ul>
  
Next run the development server with one of the commands below.

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
