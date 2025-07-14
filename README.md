# Nova Desk – Modern SaaS Dashboard Template

Nova Desk is a modern, extensible SaaS dashboard template built with [Next.js](https://nextjs.org), [shadcn/ui](https://ui.shadcn.com), and [Tailwind CSS](https://tailwindcss.com). It provides a beautiful, production-ready foundation for SaaS products, admin panels, and internal tools.

---

## ✨ Features

- **Responsive Dashboard Layout**: Sidebar navigation, header with theme and notification controls, and adaptive design for all devices.
- **Dashboard Home**: Summary cards (revenue, customers, accounts, growth) and interactive charts (Recharts) for key metrics.
- **Analytics**: Tabbed analytics with area charts for users and bounce rate.
- **Products**: Product listing with sortable/filterable table, product detail view, and add product modal (side sheet).
- **Customers**: Customer listing with table, customer detail view, and add customer modal (side sheet).
- **Orders**: Orders table with status badges and amount formatting.
- **Reports**: Reports table with actions (download, view, delete) and search.
- **Team**: Team management table with roles, status, and actions.
- **Notifications**: List of recent alerts/messages.
- **Settings**: Profile, appearance (theme & color), security, and notification preferences.
- **Email Templates**: Ready-to-use transactional email templates (order placed, shipped, password reset, etc.).
- **Theming**: Light/dark mode, color themes, and system preference support.
- **Accessible UI**: Built with [shadcn/ui](https://ui.shadcn.com) and [Radix UI](https://www.radix-ui.com/) primitives for accessibility and composability.
- **TypeScript**: Fully typed codebase for safety and DX.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org)
- **UI Kit**: [shadcn/ui](https://ui.shadcn.com) (Radix UI, Tailwind CSS)
- **Table**: [TanStack Table](https://tanstack.com/table/v8)
- **Charts**: [Recharts](https://recharts.org/)
- **Drag & Drop**: [dnd-kit](https://dndkit.com/)
- **Icons**: [Lucide](https://lucide.dev/), [Tabler Icons](https://tabler.io/icons)
- **Validation**: [zod](https://zod.dev/)
- **Email**: [react-email](https://react.email/)

---

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to view the dashboard.

---

## 🧩 Project Structure

- `src/app/` – Next.js app directory (routing, layouts, pages)
- `src/components/` – Reusable UI components (sidebar, header, table, etc.)
- `src/features/` – Feature modules (products, customers, orders, analytics, team, reports, notifications, settings, email)
- `src/features/[feature]/client.tsx` – Client-side UI for each feature
- `src/features/[feature]/service.ts` – Data fetching/mocking for each feature
- `src/features/[feature]/types.ts` – TypeScript types for each feature
- `src/features/[feature]/components/` – Feature-specific UI (skeletons, widgets)

---

## 🖥️ Main Features & Pages

- **Dashboard Home**: Overview cards, interactive area chart
- **Products**: List, view, and add products (with modal form)
- **Customers**: List, view, and add customers (with modal form)
- **Orders**: List and status of orders
- **Reports**: Downloadable and searchable reports
- **Team**: Manage team members, roles, and invitations
- **Notifications**: Recent alerts/messages
- **Settings**: Profile, appearance, security, notifications
- **Email Templates**: Transactional email previews
- **Analytics**: Tabbed charts for users and bounce rate

---

## 🎨 Theming & Customization

- **Light/Dark Mode**: Toggle in the header, respects system preference
- **Color Themes**: Select from multiple color themes in settings
- **Fully Customizable**: Built with Tailwind CSS and shadcn/ui for easy design changes

---

## 📦 Extending & Customizing

- Add new features by creating a folder in `src/features/` and wiring up a page in `src/app/(dashboard)/dashboard/`
- Use the provided UI components or add your own in `src/components/ui/`
- Replace mock data in `service.ts` files with real API calls
- Customize the sidebar, header, and theme as needed

---

## 📄 License

This template is provided as a starting point for SaaS dashboards and admin panels. Please review the license before using in production.

---

## 🙏 Credits

- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com/)
- [Next.js](https://nextjs.org)
- [TanStack Table](https://tanstack.com/table/v8)
- [Recharts](https://recharts.org/)
- [Lucide Icons](https://lucide.dev/)
- [Tabler Icons](https://tabler.io/icons)
- [react-email](https://react.email/)
- [zod](https://zod.dev/)

---

## 💡 Inspiration

This template is inspired by modern SaaS dashboards and admin panels, and is designed to help you ship beautiful, accessible, and scalable products faster.
