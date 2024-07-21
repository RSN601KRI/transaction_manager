# Transaction Manager

A transaction management application built with React. This application allows users to manage and track their financial transactions, including income and expenses. It features a clean user interface and supports both light and dark themes.

## Features

- Add, edit, and delete transactions
- Categorize transactions into income and expenses
- View transactions in a clean, organized manner
- Toggle between light and dark themes
- Responsive design for various screen sizes

## Technologies Used

- React
- Styled-components
- React Hooks
- Context API
- SVG Icons
- CSS for styling

## Installation

To get started with the `transaction-manager` application, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:
- Node.js (version 14 or higher)
- npm or yarn (Node package managers)

![Website](https://github.com/user-attachments/assets/ba9a5714-2b88-4d2f-ab41-c94103321397)

### Clone the Repository

```bash
git clone https://github.com/your-username/transaction-manager.git
cd transaction-manager
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Start the Application

![website4](https://github.com/user-attachments/assets/af8f7a42-06c1-41e7-850c-11e98df40a90)

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`.

![website3](https://github.com/user-attachments/assets/2b1aae16-2e51-4d9a-80be-8feba163a6cb)

## Usage

1. **Adding Transactions**: Click on the "Add Transaction" button to open the form, where you can input details of your transaction, including amount, category, and type (income or expense).
2. **Editing Transactions**: Click on a transaction to edit its details.
3. **Deleting Transactions**: Click on the delete icon next to a transaction to remove it.
4. **Theme Toggle**: Use the toggle switch to switch between light and dark themes.

## Project Structure

- `src/`: Contains the source code for the application
  - `components/`: Reusable React components (e.g., `Navigation`, `Dashboard`, `TransactionForm`, `TransactionList`)
  - `context/`: Context providers and hooks for global state management
  - `styles/`: Styled-components and CSS files
  - `App.js`: Main application component
  - `index.js`: Entry point for React application
- `public/`: Public assets and index.html file

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
