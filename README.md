# 🌐 Personal Portfolio — Ramesh M

This is my personal developer portfolio built using **React.js**, **Vite**, **Tailwind CSS**, and **EmailJS**.  
It highlights my projects, skills, and provides an easy way to contact me.

---

## 🚀 Tech Stack

### **Frontend**
- ⚛️ React.js  
- ⚡ Vite  
- 🎨 Tailwind CSS  

### **Tools & Services**
- 📬 EmailJS (Contact form)
- 🖥️ VS Code
- 🌐 Netlify (Deployment)

---

## 📌 Features

- Fully responsive UI  
- Tailwind CSS modern design  
- EmailJS integrated contact form  
- Mobile-friendly navbar  
- Clean and simple layout  

---

## 📁 Project Structure

```
portfolio/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTopButton.jsx
│   │   ├── Skills.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│── package.json
│── vite.config.js
│── README.md
```

---

## 🛠️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/rameshmuthu-dev/portfolio.git
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📬 EmailJS Setup (Contact Form)

This project uses **EmailJS** to send messages directly from your portfolio.

### Steps:

1. Visit https://www.emailjs.com  
2. Create a **New Email Service**  
3. Create an **Email Template**  
4. Copy:
   - `SERVICE_ID`
   - `TEMPLATE_ID`
   - `PUBLIC_KEY`
5. Add inside your `Contact.jsx`:

```js
import emailjs from "@emailjs/browser";

emailjs.sendForm(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  formRef.current,
  "YOUR_PUBLIC_KEY"
);
```

---

## 🌐 Live Demo  
🚀 **Live URL:** https://ramesh-muthu-portfolio.netlify.app/

---

## 🧑‍🎨 Author

**Ramesh M**  
Frontend / MERN Developer  

📧 Email: rameshmuthu01996@gmail.com  
🔗 GitHub: https://github.com/rameshmuthu-dev  
🔗 Portfolio: https://ramesh-muthu-portfolio.netlify.app/  
🔗 LinkedIn: https://www.linkedin.com/in/rameshmuthu-dev/

---

## ⭐ Support  
If you like this project, please ⭐ the repository!
