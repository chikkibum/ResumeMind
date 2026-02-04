# ResumeMind - AI-Powered Resume Builder

A modern, full-stack SaaS application for building professional resumes with AI assistance. Built with Next.js 15, React 19, and integrated with Stripe for subscription management, Clerk for authentication, and OpenAI for AI-powered content generation.

![ResumeMind](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5.22-green?style=for-the-badge&logo=prisma)

## 🚀 Features

- **Multi-step Form Builder**: Intuitive step-by-step resume creation process using React Hook Form
- **Drag-and-Drop Interface**: Reorder sections and content with dnd-kit
- **AI Auto-Fill**: Generate professional summaries and work experience descriptions using OpenAI GPT
- **Subscription Tiers**: Multiple subscription levels with Stripe integration (Free, Pro, Pro Plus)
- **Real-time Preview**: Live preview of your resume as you edit
- **Print & PDF Export**: Save or print your resume using react-to-print
- **Auto-save**: Automatic saving of your work with debounced updates
- **URL State Management**: Shareable URLs with resume state in query parameters
- **Mobile Responsive**: Beautiful, responsive design with Tailwind CSS and Shadcn UI
- **Dark Mode**: Theme toggle for light/dark mode support
- **File Uploads**: Profile photo uploads to Vercel Blob storage
- **Database Persistence**: PostgreSQL database with Prisma ORM

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality component library
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **dnd-kit** - Drag and drop functionality
- **react-to-print** - PDF/Print functionality
- **Zustand** - State management

### Backend
- **Next.js API Routes** - Server-side API endpoints
- **Prisma** - Database ORM
- **PostgreSQL** - Relational database
- **Clerk** - Authentication and user management
- **Stripe** - Payment processing and subscriptions
- **OpenAI API** - AI content generation
- **Vercel Blob** - File storage

### Development Tools
- **Docker & Docker Compose** - Database containerization
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 20.x or higher
- **npm** or **yarn** package manager
- **Docker** and **Docker Compose** (for local database)
- **Git**

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chikkibum/ResumeMind.git
   cd ResumeMind
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in all the required environment variables (see [Environment Variables](#environment-variables) section below).

4. **Start the PostgreSQL database**
   ```bash
   npm run db:up
   # or
   docker compose up -d
   ```

5. **Set up the database schema**
   ```bash
   npm run db:push
   # or for migrations
   npm run db:migrate
   ```

6. **Generate Prisma Client**
   ```bash
   npm run db:generate
   ```

7. **Start the development server**
   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000)

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Database Configuration
```env
POSTGRES_URL=postgresql://postgres:password@localhost:5432/mydb
POSTGRES_PRISMA_URL=postgresql://postgres:password@localhost:5432/mydb?pgbouncer=true
POSTGRES_URL_NO_SSL=postgresql://postgres:password@localhost:5432/mydb?sslmode=disable
POSTGRES_URL_NON_POOLING=postgresql://postgres:password@localhost:5432/mydb
POSTGRES_USER=postgres
POSTGRES_HOST=localhost
POSTGRES_PASSWORD=password
POSTGRES_DATABASE=mydb
```

### Clerk Authentication
```env
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### OpenAI API
```env
OPENAI_API_KEY=sk-...
```

### Stripe Configuration
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY=price_...
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_PLUS_MONTHLY=price_...
```

### Vercel Blob Storage
```env
BLOB_READ_WRITE_TOKEN=vercel_blob_...
```

### Application URL
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## 🗄️ Database Setup

### Using Docker Compose (Recommended)

The project includes a `docker-compose.yml` file for easy database setup:

```bash
# Start PostgreSQL container
npm run db:up
# or
docker compose up -d

# Stop PostgreSQL container
npm run db:down
# or
docker compose down
```

### Manual PostgreSQL Setup

If you prefer to use a local PostgreSQL installation:

1. Install PostgreSQL on your system
2. Create a new database:
   ```sql
   CREATE DATABASE mydb;
   ```
3. Update the `POSTGRES_*` environment variables in `.env.local` with your database credentials

### Database Schema

The database schema is defined in `prisma/schema.prisma`. Key models include:

- **Resume** - Main resume data with personal info, summary, and settings
- **WorkExperience** - Work history entries
- **Education** - Educational background
- **UserSubscription** - Stripe subscription management

To view and edit your database:
```bash
npm run db:studio
```

## 📁 Project Structure

```
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── (main)/           # Main application routes
│   │   │   ├── billing/      # Stripe subscription management
│   │   │   ├── editor/       # Resume editor interface
│   │   │   └── resumes/      # Resume list and management
│   │   ├── api/
│   │   │   └── stripe-webhook/  # Stripe webhook handler
│   │   └── layout.tsx        # Root layout
│   ├── components/
│   │   ├── premium/          # Premium subscription components
│   │   ├── ui/               # Shadcn UI components
│   │   └── ResumePreview.tsx # Resume preview component
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility libraries
│   │   ├── prisma.ts         # Prisma client
│   │   ├── stripe.ts         # Stripe client
│   │   ├── openai.ts         # OpenAI client
│   │   └── subscription.ts   # Subscription utilities
│   └── middleware.ts         # Next.js middleware
├── docker-compose.yml        # Docker database setup
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push Prisma schema to database
- `npm run db:generate` - Generate Prisma Client
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open Prisma Studio (database GUI)
- `npm run db:up` - Start PostgreSQL with Docker
- `npm run db:down` - Stop PostgreSQL container

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add all environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to set all environment variables in your hosting platform:
- Update `NEXT_PUBLIC_BASE_URL` to your production URL
- Use production Stripe keys
- Configure production Clerk keys
- Set up production PostgreSQL database
- Configure Vercel Blob storage

### Stripe Webhook Setup

1. Create a webhook endpoint in Stripe Dashboard
2. Point it to: `https://yourdomain.com/api/stripe-webhook`
3. Select events: `checkout.session.completed`, `customer.subscription.created`, `customer.subscription.updated`, `customer.subscription.deleted`
4. Copy the webhook secret to `STRIPE_WEBHOOK_SECRET`

## 🔑 Key Features Explained

### AI-Powered Content Generation

The application uses OpenAI's GPT models to help users:
- Generate professional resume summaries
- Create compelling work experience descriptions
- Improve content quality with AI suggestions

### Subscription Tiers

- **Free**: Basic resume creation
- **Pro**: Advanced features and unlimited resumes
- **Pro Plus**: All features plus priority support

### Auto-save Functionality

Resume data is automatically saved as you type, with debouncing to prevent excessive API calls.

### URL State Management

Resume state is stored in URL query parameters, allowing users to share direct links to specific resume configurations.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Authentication by [Clerk](https://clerk.com/)
- Payments by [Stripe](https://stripe.com/)
- AI by [OpenAI](https://openai.com/)

## 📧 Support

For support, email support@resumemind.com or open an issue in the GitHub repository.

---

Made with ❤️ by [chikkibum](https://github.com/chikkibum)
