# 🎫 Eventer — FestVerse 2024 Registration Portal

A full-stack registration platform built with **Next.js 15**, styled with **Tailwind CSS**, and powered by **Server Actions**, **CSV/Redis-based storage**, and **PDF e-ticket generation**. Users can register, get confirmation, and download a personalized QR-enabled ticket.

![Registration Flow](https://iili.io/FE7fA3F.jpg)

---

## 🚀 Features

- ✅ Registration form with validation using **Zod**
- ✅ Photo upload (stored locally)
- ✅ CSV data storage (Redis option also available)
- ✅ Dynamic E-ticket with:
  - Name
  - College
  - QR Code
  - Ticket ID
- ✅ PDF ticket export (minimal layout)
- ✅ Admin panel:
  - Password protected
  - View all entries in table view
  - Export to Excel
  - Delete individual entries
- ✅ Fully responsive + Dark mode supported

---

## 🔐 Note on Environment File

> Yeah, I know I mentioned my credentials in `.env` and pushed them to GitHub. Don’t worry about it — I just did it on purpose to **host the website properly on Vercel**. It’s all good for demo purposes. 😎

---

## 📦 Tech Stack

| Layer      | Tech                  |
|------------|------------------------|
| Framework  | Next.js 15             |
| Styling    | Tailwind CSS + ShadCN  |
| Storage    | CSV File / Upstash Redis |
| UI         | React Components       |
| PDF Export | `html2pdf.js`          |
| QR Code    | `react-qr-code`        |

---

## 📁 Project Structure

