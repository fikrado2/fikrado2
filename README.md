<p align="center">
  <img src="https://avatars.githubusercontent.com/u/72925343?s=200&v=4" width="120" height="120" alt="FIKRADO Logo" style="border-radius: 50%;" />
</p>

<h1 align="center">🛡️ FIKRADO</h1>
<p align="center"><strong>Cybersecurity & Technology Education Platform</strong></p>

<p align="center">
  <a href="https://fikrado2.github.io/fikrado/"><strong>Explore Live Demo »</strong></a>
</p>


---

## 📝 Description / Faahfaahin

**FIKRADO** is a modern, full-stack platform specializing in cybersecurity solutions and advanced technology training. The application delivers premium enterprise-grade security tools alongside an integrated, intuitive learning management ecosystem.

> 🇸🇴 **FIKRADO** waa shirkad ku takhasustay amniga cyber-ka (Cybersecurity) iyo bixinta koorsooyin teknoloji ah oo tignoolajiyada casriga ah ku saabsan. Madashani waxay bixisaa xalal amni oo heer sare ah iyo nidaam waxbarasho oo isku xidhan.

---

## 🚀 Key Features / Astaamaha Guud

* 🔒 **Secure Authentication:** Robust user authentication and session handling powered by `Passport.js`.
* 🎨 **Interactive UI/UX:** A beautiful, responsive interface engineered with `Tailwind CSS`, `Radix UI` primitives, and fluid animations via `Framer Motion`.
* 📚 **Course Management System:** An intuitive dashboard tracking modern tech and security training tracks.
* 🗄️ **Robust Database Layer:** High-performance data persistence utilizing `Neon PostgreSQL` paired with type-safe `Drizzle ORM`.
* ⚡ **Real-time Capabilities:** Embedded WebSocket (`ws`) support for instantaneous data updates and live communication.

---

## 💻 Tech Stack / Tignoolajiyada La Isticmaalay

| Frontend (Client) | Backend (Server) | Database & Tools |
| :--- | :--- | :--- |
| **React 18** & **TypeScript** | **Express.js** (Node.js) | **PostgreSQL** (Neon Database) |
| **Vite 6** (Build Tool) | **Passport.js** (Authentication) | **Drizzle ORM** & Drizzle Kit |
| **Tailwind CSS** (Styling) | **Express Session** & MemoryStore | **Zod** (Schema Validation) |
| **Wouter** (Lightweight Routing) | **TypeScript Execution** (`tsx`) | **TanStack Query** (Data Fetching) |

---

## 📂 Project Structure / Qaab-dhismeedka Galka

The project is structured as a streamlined, type-safe full-stack monorepo:

```text
├── attached_assets/    # Brand assets, logos, and static media files
├── client/             # Frontend application (React, Vite, Src)
│   └── src/            # App components, hooks, and state logic
├── server/             # Backend server architecture (Express, Auth, DB Config)
├── shared/             # Shared runtime types and cross-stack Zod schemas
├── public/             # Global static assets
├── dist/               # Optimized production build output
├── package.json        # Project workspace dependencies and deployment scripts
└── vite.config.ts      # Vite bundler configuration
