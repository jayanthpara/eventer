# 🎫 Eventer — FestVerse 2024 Registration Portal

A full-stack registration platform built with **Next.js 15**, styled with **Tailwind CSS**, and powered by **Server Actions**, **CSV/Redis-based storage**, and **PDF e-ticket generation**. Users can register, get confirmation, and download a personalized QR-enabled ticket.



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

eventer/
├── app/
│ ├── register/ # Registration page
│ └── admin-panel/ # Admin dashboard
├── components/
│ ├── e-ticket.tsx # E-ticket component
│ ├── registration-form.tsx # Form UI
│ └── data-table.tsx # Admin table view
├── actions/
│ └── save-registration.ts # Server action to save data
├── lib/
│ └── redis.ts # Redis client setup (optional)
├── public/
│ └── registrations/ # Uploaded images
├── src/data/
│ └── registrations.csv # CSV file storing all entries
├── .env.local # Contains UPSTASH credentials




---

## 🔧 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/jayanthpara/eventer.git
cd eventer

# Install dependencies
npm install

# Create .env.local file (already present in demo)
# Or optionally:
# echo "UPSTASH_REDIS_REST_URL=..." >> .env.local
# echo "UPSTASH_REDIS_REST_TOKEN=..." >> .env.local

# Run locally
npm run dev


🔐 Admin Access

Visit /admin-panel
Password will be asked using a prompt() alert
Default password: "try in the code"
📦 Export Features

    CSV Download: Admin panel includes an "Export to Excel" button.

    PDF Ticket: Each registered user can save/download their ticket as PDF.

📸 Placeholder Photo

If no photo is uploaded, a default placeholder image is used in the ticket:
Placeholder
🌍 Live Deployment

🔗 Vercel Hosted Link
https://festverse.vercel.app
📜 License

MIT — Free to use, modify, and share.

    Made with ❤️ by Jayanth
    Thanks for checking out the project!
