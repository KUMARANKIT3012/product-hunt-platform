# 🚀 ProductHunt Clone - Next.js Full Stack Platform

A modern, feature-rich Product Hunt clone built with Next.js 15, featuring authentication, database integration, and a sleek UI. Discover and showcase innovative products in a beautifully designed platform.

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Authentication-purple?logo=auth0&logoColor=white)](https://next-auth.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- 🔐 **Secure Authentication** - OAuth integration with NextAuth.js
- 🎨 **Modern UI/UX** - Clean, responsive design with Tailwind CSS and Shadcn/UI
- 📊 **Product Management** - Submit, vote, and discover new products
- 👤 **User Profiles** - Personalized user experiences
- 🔍 **Advanced Search** - Find products with intelligent search functionality
- 📱 **Mobile Responsive** - Seamless experience across all devices
- ⚡ **Performance Optimized** - Server-side rendering with Next.js App Router
- 🗄️ **Database Integration** - Prisma ORM with type-safe database operations

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React

### Backend
- **API Routes**: Next.js API Routes
- **Authentication**: NextAuth.js
- **Database ORM**: Prisma
- **Middleware**: Custom authentication middleware

### Development
- **Code Quality**: ESLint, Prettier
- **Type Safety**: TypeScript strict mode
- **Package Manager**: npm/yarn/pnpm

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm, yarn, or pnpm
- Database (PostgreSQL/MySQL recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/KUMARANKIT3012/product-hunt-platform.git
   cd product-hunt-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL="your-database-url"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   
   # OAuth Provider Keys (Google, GitHub, etc.)
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
product-hunt-clone/
├── app/                    # Next.js App Router
│   ├── (home)/            # Home page group
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── navbar/           # Navigation components
│   ├── ui/               # UI components (Shadcn)
│   └── modals/           # Modal components
├── lib/                  # Utility libraries
│   ├── db.ts            # Database connection
│   └── utils.ts         # Helper functions
├── prisma/              # Database schema
│   └── schema.prisma    # Prisma schema
├── public/              # Static assets
├── auth.config.ts       # Auth configuration
├── auth.ts             # NextAuth setup
└── middleware.ts       # Custom middleware
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npx prisma studio    # Open Prisma Studio
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema changes
npx prisma migrate   # Run migrations
```

## 🎨 UI Components

This project uses **Shadcn/UI** components for a consistent and accessible design system:

- Button variants and sizes
- Dropdown menus
- Modal dialogs
- Navigation components
- Form elements
- And more...

## 🔐 Authentication

Authentication is handled by **NextAuth.js** with support for:

- OAuth providers (Google, GitHub, etc.)
- Email/Password authentication
- Session management
- Protected routes via middleware

## 📊 Database Schema

The application uses **Prisma** as the ORM with models for:

- Users and profiles
- Products and submissions
- Votes and interactions
- Categories and tags

## 🌟 Key Features Walkthrough

### Product Discovery
- Browse trending products
- Category-based filtering
- Advanced search functionality

### Product Submission
- Rich product descriptions
- Image uploads
- Category selection
- Launch scheduling

### Community Features
- Upvoting system
- Comments and discussions
- User profiles
- Following system

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Other Platforms
- Netlify
- Railway
- Heroku
- Self-hosted

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Shadcn/UI](https://ui.shadcn.com/) - Beautiful UI Components
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [NextAuth.js](https://next-auth.js.org/) - Authentication for Next.js
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📧 Contact

Ankit Kumar - [@KUMARANKIT3012](https://github.com/KUMARANKIT3012)

Project Link: [https://github.com/KUMARANKIT3012/product-hunt-platform](https://github.com/KUMARANKIT3012/product-hunt-platform)

---

⭐ Star this repository if you find it helpful!
