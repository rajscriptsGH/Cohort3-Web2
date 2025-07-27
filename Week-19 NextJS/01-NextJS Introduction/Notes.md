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

## 3.Waterfalling Problem

### Website built using react

- Fetching the index.html from the CDN
- Fetching script.js from CDN
- Checking if user is logged in (if not, redirect them to /login page)
- Fetching the actual blogs
- There are 4 round trips that happen one after the other (sequentially)

```md
The "waterfalling problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.
```

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
