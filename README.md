# Kaelen Starkman Logbook

A static in-universe EVE Online roleplay blog for Kaelen Starkman, Vanguard of the Restoration. Built with Next.js, React, TypeScript, Tailwind CSS, and local MDX files. No database is required.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Adding New Posts

Create a new `.mdx` file in `content/posts/`.

Use this frontmatter format:

```mdx
---
title: "New Entry Title"
date: "2026-06-13"
category: "Patrol Log"
tags: ["arzad", "rifter"]
excerpt: "Short summary shown on index cards and in metadata."
cover: "/images/kaelen-hero-1.png"
featured: false
---

Write the post body here using Markdown or MDX.
```

The filename becomes the URL slug. For example, `content/posts/new-entry-title.mdx` becomes `/logbook/new-entry-title`.

## Images

Place screenshots and art in `public/images/`, then reference them in MDX:

```md
![Recovered interface fragment](/images/example.png)
```

The About page profile card uses this dedicated portrait path:

```txt
public/images/kaelen-profile.png
```

## Vercel Deployment

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New Project**.
3. Import the repository.
4. Keep the default framework preset: **Next.js**.
5. Build command: `npm run build`.
6. Output directory: leave blank for standard Next.js deployment.
7. Deploy.

The site uses local MDX content and static generation where possible, so no database or environment variables are required.

## Project Structure

```txt
content/posts/          Local MDX blog entries
public/images/          Theme images and post screenshots
src/app/                Next.js App Router pages
src/components/         Shared UI components
src/lib/                Site config and post loading utilities
src/types/              TypeScript types
```
