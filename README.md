# Premium E-commerce Website

## Overview

Premium Coffee is a modern, responsive web application built as a landing page for a premium coffee brand. This project showcases high-quality coffee products, provides an interactive menu, and includes e-commerce functionalities such as a shopping cart, product details, and user authentication. The application features a sleek design with support for both dark and light modes, smooth animations, and a fully responsive layout optimized for all devices.

The project is developed using React and Vite for fast development and building, with Tailwind CSS for styling, Framer Motion for animations, and React Router for navigation.

## Features and Functionalities

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices.
- **Dark/Light Mode Support**: Toggle between dark and light themes for better user experience.
- **Interactive Sections**: Includes Hero, About, Menu, Gallery, and Contact sections with engaging content.
- **E-commerce Features**:
  - Product catalog with detailed product pages.
  - Shopping cart functionality with add/remove items.
  - Checkout process with success confirmation.
- **User Authentication**: Login and Sign-Up pages for user accounts.
- **Routing**: Client-side routing using React Router for smooth navigation between pages.
- **Animations**: Smooth animations powered by Framer Motion for enhanced interactivity.
- **Icons**: Modern icons from Lucide React for a polished look.
- **Form Handling**: Custom input components for authentication and contact forms.
- **Context Management**: React Context for managing cart, authentication, and theme states.

## Web Design

![Website Screenshot 1](src/images/Website.png)

![Website Screenshot 2](src/images/Wbsite2.png)

## Libraries and Dependencies

### Dependencies

- **clsx**: ^2.1.1 - Utility for constructing conditional class names.
- **framer-motion**: ^12.34.1 - Animation library for React.
- **lucide-react**: ^0.574.0 - Icon library for React.
- **react**: ^19.2.0 - JavaScript library for building user interfaces.
- **react-dom**: ^19.2.0 - React package for DOM rendering.
- **react-router-dom**: ^7.13.0 - Declarative routing for React.
- **tailwind-merge**: ^3.4.1 - Utility for merging Tailwind CSS classes.

### DevDependencies

- **@eslint/js**: ^9.39.1 - ESLint configuration for JavaScript.
- **@tailwindcss/postcss**: ^4.1.18 - PostCSS plugin for Tailwind CSS.
- **@types/react**: ^19.2.7 - TypeScript definitions for React.
- **@types/react-dom**: ^19.2.3 - TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: ^5.1.1 - Vite plugin for React.
- **autoprefixer**: ^10.4.24 - PostCSS plugin for CSS vendor prefixes.
- **eslint**: ^9.39.1 - Linter for JavaScript and JSX.
- **eslint-plugin-react-hooks**: ^7.0.1 - ESLint rules for React hooks.
- **eslint-plugin-react-refresh**: ^0.4.24 - ESLint plugin for React Fast Refresh.
- **globals**: ^16.5.0 - Global variables for ESLint.
- **postcss**: ^8.5.6 - Tool for transforming CSS.
- **tailwindcss**: ^4.1.18 - Utility-first CSS framework.
- **vite**: ^7.3.1 - Fast build tool and development server.

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 4.1.18 with PostCSS 8.5.6
- **Animations**: Framer Motion 12.34.1
- **Icons**: Lucide React 0.574.0
- **Routing**: React Router DOM 7.13.0
- **Linting**: ESLint 9.39.1
- **TypeScript Support**: @types/react 19.2.7, @types/react-dom 19.2.3
- **State Management**: React Context API
- **Package Manager**: npm (or yarn/pnpm)

## Project Structure

```
coffee-website/
├── public/                 # Static assets
├── src/
│   ├── assets/
│   │   └── images/         # Image assets organized by product
│   │       ├── ColdBrew/
│   │       ├── Kenya/
│   │       └── SumatraReserve/
│   ├── components/
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   ├── sections/       # Page sections (Hero, About, Menu, etc.)
│   │   └── ui/             # Reusable UI components (AuthInput, etc.)
│   ├── context/            # React Context providers (Auth, Cart, Theme)
│   ├── pages/              # Page components (Cart, Login, ProductDetails, etc.)
│   ├── App.css             # Global styles
│   ├── App.jsx             # Main App component
│   ├── index.css           # Tailwind CSS imports
│   └── main.jsx            # App entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Environment and Setup Requirements

- **Node.js**: Version 18.x or higher (recommended: 20.x LTS)
- **npm**: Version 8.x or higher (comes with Node.js)
- **Git**: For cloning the repository
- **Browser**: Modern browser with JavaScript enabled (Chrome, Firefox, Safari, Edge)
- **Operating System**: Linux, macOS, or Windows

## Installation and Setup Guide

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/Jay-1107/ecommerce-react.git
```

Replace `your-username` with your actual GitHub username.

### 2. Navigate to the Project Folder

```bash
cd ecommerce-react
```

### 3. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This command will read the `package.json` file and install all dependencies listed in the `dependencies` and `devDependencies` sections.

### 4. Run the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port). Open this URL in your browser to view the application.

### 5. Build the Project (Optional)

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist/` directory.

### 6. Preview the Production Build (Optional)

To preview the production build locally:

```bash
npm run preview
```

This serves the built files from the `dist/` directory.

### 7. Lint the Code (Optional)

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## Usage Instructions

- **Navigation**: Use the navbar to navigate between different sections of the site.
- **Theme Toggle**: Click the theme toggle button in the navbar to switch between dark and light modes.
- **Menu Exploration**: Browse the menu section to view available coffee products.
- **Product Details**: Click on any product to view detailed information.
- **Shopping Cart**: Add items to cart from product pages or menu. View and manage cart contents.
- **Authentication**: Sign up or log in to access user-specific features.
- **Contact**: Use the contact form to send messages.

## Dark Mode / Light Mode Support

The application supports both dark and light themes:

- **Toggle**: Located in the top-right corner of the navbar.
- **Persistence**: Theme preference is saved in localStorage and persists across sessions.
- **Implementation**: Uses React Context for global theme management and Tailwind CSS for styling.

## Routing Information

The application uses React Router for client-side routing:

- `/` - Home page with all sections
- `/menu` - Explore menu page
- `/collections` - Shop collections page
- `/product/:id` - Individual product details page
- `/cart` - Shopping cart page
- `/login` - User login page
- `/signup` - User registration page

## Cart and Product Details Functionality

- **Cart Management**: Add, remove, and update quantities of items in the cart.
- **Product Details**: Detailed view of each coffee product including images, descriptions, and pricing.
- **Checkout**: Simple checkout process with success confirmation.
- **State Management**: Cart state is managed globally using React Context.

## Troubleshooting

### Common Issues

1. **Port Already in Use**:
   - Error: `Port 5173 is already in use`
   - Solution: Kill the process using the port or run on a different port:
     ```bash
     npm run dev -- --port 3000
     ```

2. **Dependencies Installation Fails**:
   - Ensure Node.js and npm are up to date.
   - Clear npm cache: `npm cache clean --force`
   - Delete `node_modules` and `package-lock.json`, then run `npm install` again.

3. **Build Errors**:
   - Check for ESLint errors: `npm run lint`
   - Ensure all dependencies are installed correctly.

4. **Browser Compatibility**:
   - Use a modern browser. If issues persist, clear browser cache.

5. **Theme Not Persisting**:
   - Check browser localStorage settings.
   - Ensure JavaScript is enabled.

### Getting Help

If you encounter issues not covered here:

- Check the GitHub Issues page for similar problems.
- Create a new issue with detailed information about your setup and the error.

## Future Improvements

- **Payment Integration**: Add real payment processing (Stripe, PayPal).
- **User Profiles**: Implement user profile management and order history.
- **Admin Panel**: Create an admin interface for managing products and orders.
- **Search Functionality**: Add product search and filtering.
- **Reviews and Ratings**: Allow users to leave reviews on products.
- **Multi-language Support**: Implement internationalization.
- **Progressive Web App (PWA)**: Make the app installable and work offline.
- **Performance Optimization**: Implement code splitting and lazy loading.
- **Testing**: Add unit and integration tests.

---

**Developed with ❤️ for coffee lovers everywhere.**
