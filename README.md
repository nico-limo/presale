# PRESALE - Challenge

The aim of the project is to create a Web3 App simulating a token presale App working on Polygon Testnet.
There is an ERC-20 token smart contract, this is the token that will be on sale (symbol: TSTK, decimals: 18).
The presale smart contract will have an unlimited number of stages (to keep it running forever), each stage will have a one day duration (43,200 blocks) and a token amount limit of 1,000,000 tokens.
Find the contract addresses on the Github [repository](https://github.com/Beincrypto/web3-assignment-contracts)
For simplicity, the tokens will be purchased with Testnet MATIC.
Each wallet can buy a maximum of 10,000 tokens per stage.
The price of the tokens will be 0.00010 MATIC and the price will increase by 0.00001 MATIC for each stage.
The App should display the token amount that the user has purchased and the remaining amount and price of the sale stage. There will also be a countdown to the end of the stage.
The App will allow the user to enter the amount to buy, calculate the price to pay, and make the purchase.

## Objectives

1. Build a Web3 app that interacts with the presale and token smart contracts.
2. Display the token amount that the user has purchased.
3. Show the remaining amount and price of the sale stage.
4. Include a countdown until the sale stage ends.
5. After one sale stage ends, a new one will begin with a new amount, price, and end date.
6. Allow the user to enter the amount to buy, calculate the price to pay, and make the purchase.
7. The app should be deployed on Vercel and should run with the smart contracts provided on Polygon Testnet.

## Challenge Requirements

1. [x] NextJS: The app needs to be built using the Next.js framework. This is a production-ready framework that allows for building static sites, server-rendered apps, or a combination of both.
2. [x] React: You should have a good understanding of React and its concepts like hooks, context, and components lifecycle.
3. [x] Mantine UI components library: You are expected to use this library for designing the UI of the app. You may start with the provided template: https://github.com/mantinedev/next-pages-template
4. [x] TypeScript: The application should be fully typed with TypeScript.
5. [x] ESLint and Prettier: Code should be linted with ESLint and formatted with Prettier.
6. [x] Jest: Write tests for your components using Jest.
7. [x] Wagmi and ConnectKit: Use these tools to facilitate the blockchain-related operations in the application.
8. [x] Github: Use Github for version control and code collaboration.
9. [x] Vercel: Deploy the app on Vercel.
10. [x] Polygon Testnet: Use the provided smart contracts on the Polygon Testnet.

## Submission

Upon completion, please provide the following:

1. A link to the GitHub repository containing the app code.
2. A link to the deployed application on Vercel.
3. A brief outline of your design and development process, detailing any key decisions or assumptions made.
4. Instructions on how to install, run, and test the app locally (readme file on repository).

## Evaluation

Your work will be evaluated based on:

1. Functionality: Does the app meet all requirements and function as intended?
2. Code Quality: Is the code well-structured, easy to understand, and adequately commented?
3. UI/UX: Is the app user-friendly and aesthetically appealing?
4. Testing: Are there sufficient tests, and are they carried out using Jest?
5. Documentation: Does the readme file effectively explain the project, how to run it, and any key decisions or assumptions made?

## Task Board

To show the progress on the project. I created a [Github Board](https://github.com/users/nico-limo/projects/6/views/1), where I link the PR with the ticket.

## Requirements

To run this project, you'll need:

- Node.js version 18 or higher installed on your computer.
- Yarn package manager installed on your computer.
- Metamask wallet extension installed on your browser. You can download and install it from [metamask.io](https://metamask.io/).

## Prettier and ESLint Configuration

To ensure that Prettier and ESLint are properly configured and operational in your project, follow these steps:

1. Install the relevant Prettier and ESLint extensions for your chosen Code Editor.
2. If you're using Visual Studio Code, modify your `settings.json` with the following configurations:

```json
  // Disable automatic formatting for JS and JSX files, as this will be handled by ESLint
  "[javascript, javascriptreact]": {
    "editor.formatOnSave": false
  },
  // Enable ESLint to perform automatic fixes on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
```

## Getting Started

To get started with this project, follow these steps:

1. Install Node.js 18 or higher on your computer. You can download it from [nodejs.org](https://nodejs.org/).
2. Install the project dependencies using either Yarn, npm.

```bash
npm install
# or
yarn add
```

3. Start the development server by running one of this command in the terminal.

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

List of tools, frameworks, libraries, or APIs used in the project. You can also include any development environment or text editor used.

- [Next.js 13](https://nextjs.org/docs/getting-started)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Husky](https://typicode.github.io/husky/)
- [Jest](https://jestjs.io/)
- [Mantine](https://mantine.dev/)
- [Viem](https://viem.sh/)
- [Wagmi](https://wagmi.sh/)
- [react-countdown](https://www.npmjs.com/package/react-countdown)

## Vercel Deployment

[DEMO](https://presale-virid.vercel.app/)
