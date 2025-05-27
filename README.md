# 🌐 PixelHunt - Image Search Engine

PixelHunt is a custom **image search engine** built using **HTML, CSS, and JavaScript**, powered by **Google Programmable Search Engine API**. It allows users to search images from the web and displays them beautifully in a responsive gallery layout.

---


## 🛠️ Features

- ✅ Search images from the entire web using Google CSE
- ✅ Beautiful, modern responsive design
- ✅ Lightweight and fast
- ✅ Easy to customize

---

## 📁 Project Structure

```
PixelHunt/
│
├── index.html       # Main HTML file
├── style.css        # Professional UI styling
└── script.js        # JavaScript logic for search and image rendering
```

---

## 🚀 How to Set Up the Project (Step-by-Step)

### ✅ 1. Create Google Programmable Search Engine (CSE)

1. Go to: [https://programmablesearchengine.google.com](https://programmablesearchengine.google.com)
2. Click **"Create a search engine"**
3. Under “Sites to search”, choose:
   - `Search the entire web` (recommended)
4. Name it something like `PixelHunt`
5. Enable **Image Search** under "Search features"
6. Click **Create**

> ✅ You'll get a **Search Engine ID (cx)** — Example: `622876f2c914446af`

---

### ✅ 2. Get Your API Key (for custom layout)

1. Visit: [https://console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable **"Custom Search API"**
   - Go to APIs & Services → Library → Search for "Custom Search API"
   - Click **Enable**
4. Go to **APIs & Services → Credentials**
5. Click **“Create Credentials” → API Key**
6. Copy the key — Example: `AIzaSyDxxxx...`

---

### ✅ 3. Connect API Key and Search Engine ID in `script.js`

```js
const API_KEY = "YOUR_GOOGLE_API_KEY";
const CX = "YOUR_SEARCH_ENGINE_ID";
```

Replace with your real keys.

---
