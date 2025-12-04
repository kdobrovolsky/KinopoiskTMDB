# 🎬 Kinopoisk TMDB — Movie Explorer

A modern movie discovery app built with **React**, **TypeScript**, **RTK Query**, and **Feature-Sliced Design**, styled with **CSS Modules** and deployed to **Vercel**.

👉 **Live Demo:** https://pet-project-kinopoisk.vercel.app/

---

## 🌟 Features

- 🔎 Browse movie categories (Popular, Trending, Top Rated)  
- 🎯 Advanced filters: genres, rating range, sorting  
- 📱 Fully responsive and adaptive layout  
- 🧩 Mobile-friendly filter panel  
- 🎥 Movie details: description, cast, trailers, similar movies  
- 💡 Light / Dark mode  
- ⚡ Skeleton loading states  
- 🚀 Super-fast API requests via RTK Query  

---

## 🛠 Tech Stack

- **React 19 + TypeScript**
- **Redux Toolkit (Slices + RTK Query)**
- **React Router v7**
- **CSS Modules**
- **Feature-Sliced Design (FSD)**
- **Prettier**
- **Vercel Deployment**

---

## 🧱 Project Architecture (FSD)

src/
├── app/ # App initialization, providers
├── pages/ # Route-level pages
├── widgets/ # Layout-level UI blocks (Header, FilterPanel)
├── features/ # User interactions (filters, search, sorting)
├── entities/ # Domain entities (Movie, Genre)
└── shared/ # UI components, helpers, config, styles

---

## 🚀 Getting Started

```bash
git clone https://github.com/USERNAME/REPO.git
cd REPO
pnpm install
pnpm run dev
