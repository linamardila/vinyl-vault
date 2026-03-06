# Vinyl Vault

A full-stack vinyl record collection tracker. Organize, rate, and manage your analog music collection with ease.

## Project Description

Vinyl Vault is a web application designed for vinyl record enthusiasts to catalog and manage their personal collections. Users can add records with detailed metadata, rate and review albums, search and filter by genre/artist/decade, and track ownership status. Built as a Complete Tier mid-term project for DIG 4503C.

The app combines modern design principles with warm, editorial styling to create a premium experience that celebrates the analog music format.

## Tech Stack

- **Frontend:** React + Vite
- **Authentication:** Firebase Auth
- **Database:** Firebase Firestore
- **Deployment:** Vercel
- **Fonts:** Playfair Display (headings), DM Mono (body/labels)

## Planned Features

1. **Add, edit, and delete vinyl records** — capture artist, album, year, genre, and cover art URL
2. **Rate and review** — leave 1-5 star ratings with written reviews for each record
3. **Search and filter** — find records by genre, artist name, or decade
4. **Status tracking** — mark records as Owned, Wishlist, or Loaned Out
5. **Collection stats dashboard** — visualize your collection with charts and metrics
6. **User authentication** — secure sign up, login, and logout via Firebase Auth
7. **Private vault** — each user account has its own secure, private collection
8. **Responsive design** — optimized for mobile, tablet, and desktop displays

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- A Firebase project with Auth and Firestore enabled

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/linamardila/vinyl-vault.git
   cd vinyl-vault
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

## Known Limitations

To be updated during development.

## What I Learned

To be updated after Week 8 development.
