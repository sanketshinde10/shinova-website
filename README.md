# Shinova Technologies Website

Official website for **Shinova Technologies**, built using modern web technologies with a focus on performance, scalability, and clean UI.

---

## 🚀 Tech Stack

- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **React Query (@tanstack/react-query)**
- **shadcn/ui**
- **Lucide Icons**

---

## 📁 Project Structure

```

shinova-next/
├─ public/
│  └─ images/
│     └─ logo.png
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ providers.tsx
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ privacy-policy/page.tsx
│  │  └─ terms/page.tsx
│  │
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  └─ Footer.tsx
│  │  ├─ ui/
│  │  │  ├─ button.tsx
│  │  │  ├─ input.tsx
│  │  │  ├─ textarea.tsx
│  │  │  ├─ form.tsx
│  │  │  ├─ hero.tsx
│  │  │  └─ toaster.tsx
│  │  └─ Section.tsx
│  │
│  ├─ hooks/
│  │  └─ use-toast.ts
│  │
│  ├─ lib/
│  │  ├─ utils.ts
│  │  └─ queryClient.ts
│  │
│  ├─ constants/
│  │  └─ navigation.ts
│  │
│  └─ styles/
│     └─ scroll.css
│
├─ .gitignore
├─ .env.example
├─ package.json
├─ package-lock.json
├─ next.config.ts
├─ tailwind.config.ts
├─ tsconfig.json
├─ postcss.config.mjs
└─ README.md

````

---

## ⚙️ Installation

```bash
npm install
````

---

## ▶️ Run Development Server

```bash
npm run dev
```

Open your browser at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🏗 Build for Production

```bash
npm run build
npm start
```

---

## 🌍 Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Shinova Technologies
```

> ⚠️ Do not commit `.env.local` to GitHub.

---

## 🚀 Deployment

This project is **Vercel-ready**.

Steps:

1. Push repository to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy 🚀

---

## 📄 License

© Shinova Technologies. All rights reserved.

```

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


