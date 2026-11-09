# BookLent

BookLent is a modern book discovery and lending platform built with Next.js. Browse a curated collection of books, explore categories, view detailed information, and manage your account through a clean, responsive interface.

## Features

- Browse featured and all available books
- Filter books by category
- View detailed book information
- Create an account and sign in with email/password
- Sign in with Google
- View and update profile information
- Responsive layouts for mobile, tablet, and desktop
- Toast notifications for authentication and user actions

## Tech Stack

- **Framework:** Next.js 16 with the App Router
- **UI:** React 19, Tailwind CSS 4, DaisyUI, HeroUI
- **Authentication:** Better Auth
- **Database:** MongoDB
- **Forms:** React Hook Form
- **Icons and UI:** React Icons, Gravity UI Icons, Swiper, React Fast Marquee
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm
- A MongoDB database
- Google OAuth credentials (optional, for Google sign-in)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/antick-arch/category-A8-mango.git
   cd category-A8-mango
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the project root:

   ```env
   MONGO_URI="your-mongodb-connection-string"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

   Keep this file private and never commit credentials to source control. Google OAuth can be omitted if you only need email/password authentication.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |

## Application Routes

| Route | Description |
| --- | --- |
| `/` | Landing page with featured books and platform information |
| `/all-books` | Complete book catalog with category filtering |
| `/book-details/:id` | Details for a selected book |
| `/login` | Email/password and Google sign-in |
| `/register` | Account registration |
| `/profile` | Authenticated user profile |
| `/api/auth/*` | Better Auth API handlers |

## Project Structure

```text
src/
├── app/
│   ├── (auth)/                 # Login and registration pages
│   ├── (main)/                 # Public and authenticated app pages
│   └── api/auth/               # Better Auth API route
├── assets/                     # Brand and banner assets
├── components/                 # Reusable UI components
└── lib/
    ├── auth.js                 # Better Auth and MongoDB configuration
    ├── auth-client.js          # Client-side authentication helpers
    └── data.js                 # Book data fetching
```

Book data is loaded from `public/book.json` through the data helper in `src/lib/data.js`. If the source URL changes, update that helper before deploying.

## Deployment

The project can be deployed to [Vercel](https://vercel.com). Import the repository, configure the environment variables from `.env.local` in the project settings, and deploy. Make sure your MongoDB deployment allows connections from the hosting environment and that your Google OAuth callback URLs include the production domain.

## License

This project is intended for educational and demonstration purposes.
