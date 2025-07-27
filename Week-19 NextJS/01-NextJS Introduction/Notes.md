# NEXT JS

## Pre-requisites

- Basic frontend
- React

## 1.What is Next.js?

Next.js is a React framework for building full-stack web applications with features like:

- Routing

- Server-side rendering (SSR)

- Static site generation (SSG)

- API routes

- Optimized performance

- File-based routing system

## 2. SEO Optimization

SEO (Search Engine Optimization) in Next.js (App Router) is very powerful because it supports both Server-Side Rendering (SSR) and Static Site Generation (SSG).

## 3. Waterfalling Problem

### i. Website built using React (CRA or Vite)

#### Sequence

- Fetch index.html from CDN or dev server.

- Fetch script.js (your React bundle).

- React mounts on client and renders.

- React runs effect to check auth → redirects if unauthenticated.

- After checking auth, fetch blogs via API.

#### Result

This causes multiple sequential round trips:

- HTML → JS → Auth → Blogs → Render
This is the waterfalling problem.

```md
The "waterfalling problem" refers to when several network requests are made sequentially, leading to slower page loads. In client-rendered React apps, data like authentication state and blog content are often fetched after JS loads, creating delays.
```

### ii. Website built using Next.js (SSR or SSG)

#### Scenario (with SSR or static rendering)

- Request hits the Next.js server or edge function.

- Server pre-fetches the blog content and checks auth (if implemented on server).

- Returns index.html with content already rendered.

- Client fetches script.js for hydration.

#### Result

Less roundtrip

- Only 1 round trip gives the user most of the page.

- Scripts load after content is shown.

- No waterfalling because data was fetched server-side before rendering.



## Step 4 - Next.js offerings

Next.js provides you the following upsides over React

- Server side rendering - Get’s rid of SEO problems
- API routes - Single codebase with frontend and backend
- File based routing (no need for react-router-dom)
- Bundle size optimisations, Static site generation
- Maintained by the Vercel team

## Downsides

- Can’t be distributed via a CDN, always needs a server running that does server side rendering and hence is expensive
- Very opinionated, very hard to move out of it
