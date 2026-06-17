# KFTR Client

A React client application built with Vite, Tailwind CSS, React Redux, and React Router.

## Project Setup

### Prerequisites

- Node.js (>=18 recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:

```bash
npm run build
```

The built assets will be in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint for code quality checks:

```bash
npm run lint
```

## Technology Stack

- **React** ^19.1.1
- **Vite** ^7.1.2
- **Tailwind CSS** ^4.3.1
- **React Redux** ^9.3.0
- **React Router DOM** ^7.18.0
- **Axios** ^1.18.0
- **ESLint** ^9.33.0

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Folder Structure

```
src/
  ├── assets/       # Static assets
  ├── components/   # Reusable components
  ├── pages/        # Page components
  ├── store/        # Redux store configuration
  ├── routes/       # Route definitions
  ├── App.jsx       # Main App component
  ├── main.jsx      # Entry point
  ├── index.css     # Global CSS
  └── App.css       # App-specific styles
```

## Environment Variables

Create a `.env` file in the root directory for environment variables. Prefix variables with `VITE_` to expose them to the client-side code.

Example:
```
VITE_API_URL=http://localhost:8000/api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is private and proprietary.