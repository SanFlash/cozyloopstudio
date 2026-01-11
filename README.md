# 🧶 CozyLoop Studio – Handmade Craft Website  
### Customer Storefront + Admin Dashboard

---

## 📌 Project Overview

**CozyLoop Studio** is a fully responsive, frontend-driven handmade craft website built to showcase crochet and embroidery products and manage custom customer requests.

The system includes:

- 🛍️ A **customer-facing website** for browsing products and submitting custom orders with reference images  
- 🧑‍💼 A **secure admin dashboard** for managing products and reviewing customer requests, including uploaded images  

The entire application runs **client-side only** using **HTML, CSS, JavaScript, and IndexedDB (via `db.js`)** —  
✅ no backend  
✅ no server  
✅ no dependencies  

---

## 🧩 Key Features

### 👩‍🎨 Customer Side
- Elegant, animated landing page  
- Custom order form with:
  - Product details
  - Notes & preferences
  - **Image upload (reference design)**
- Live image preview before submission  
- Fully responsive across all devices  

### 🧑‍💼 Admin Dashboard
- Secure admin login (passcode-based)
- Tab-based navigation:
  - **Manage Products**
  - **Custom Requests**
- Add products with image upload (stored as Base64)
- View customer requests with:
  - Uploaded reference images
  - Click-to-open full image
- Delete products or requests
- Clean, card-based UI for clarity and readability  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Structure | HTML5 |
| Styling | CSS3 + inline animations |
| Logic | Vanilla JavaScript |
| Storage | IndexedDB (via `db.js`) |
| Image Handling | Base64 Encoding (FileReader API) |

---

## 📁 Project Structure

```text
/cozyloop-studio
│
├── index.html        # Customer-facing website
├── admin.html        # Admin dashboard
├── db.js             # IndexedDB logic (products & requests)
├── styles.css        # Global styles
├── animations.css    # Animation utilities
├── script.js         # Customer-side logic
└── README.md
