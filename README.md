# Revo Shop

## Overview

Revo Shop is a front-end e-commerce web application built using **Next.js (App Router)** as part of a **technical assignment**. The project demonstrates the ability to design a scalable front-end architecture for an online shop, including product listing, product detail navigation, state management, and API integration.

The application consumes public REST APIs to simulate real-world product and content data, focusing on clean data fetching, pagination, and predictable client-side state behavior. The project is deployed on Vercel and emphasizes modern React patterns, performance, and maintainability.

---

## Features Implemented

### Product Listing

* Fetches product data from a public REST API
* Displays products using a **card-based UI layout**
* Supports **pagination / load-more behavior** to avoid loading all products at once
* Optimized for better performance and user experience

### Product Detail Page

* Clicking on a product card navigates to a **product detail page**
* Uses dynamic routing with a URL structure like:

  ```
  /product/[slug]
  ```
* Client-side navigation using Next.js `Link`

### State Management

* Uses **Zustand** for global state management
* Prevents duplicated product data when navigating between pages

### API Integration

* Uses **Axios** for REST API communication
* Integrates public REST APIs:

  * **Fake Store API**: [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/) (product data)
  * **JSONPlaceholder**: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/) (static content / FAQ simulation)
* Handles asynchronous data fetching and error handling cleanly


---

## Technologies Used

### Core Framework

* **Next.js** – React framework with App Router for routing, layouts, and data fetching

### Libraries

* **Axios** – HTTP client for REST API requests
* **Zustand** – Lightweight and scalable state management solution

### Styling

* **Tailwind CSS** – utility-first CSS framework for rapid UI development and consistent styling

### Deployment

* **Vercel** – Hosting and continuous deployment

---

## Website Links

* **Live Website**: [https://revo-shop-pi.vercel.app](https://revo-shop-pi.vercel.app)
