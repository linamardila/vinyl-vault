## Transcript Highlights

### 1. Planning the app structure (Session 1, early)
Before writing any code, I asked Copilot to help me plan the React app structure with routing. We decided to use react-router-dom with separate pages for Home, Collection, Login, and Stats rather than building everything in one component.

### 2. Debugging the blank page (Session 1, midway)
The app was showing a completely blank page after converting from a static HTML file to React. The issue was that index.html still had the old landing page HTML in the body instead of a root div for React to mount to. I identified the problem and fixed it manually.

### 3. Switching from localStorage to Firestore (Session 2)
After getting the Collection page working with localStorage, I asked Copilot to help me migrate to Firestore. We had to restructure the data fetching logic to use onSnapshot with a userId filter so each user only sees their own records.

### 4. Setting up Firebase Auth (Session 2)
I asked Copilot to build the full auth flow including a React context, login/signup toggle, and protected collection page. When the auth/invalid-credential error appeared, I diagnosed that I was trying to login before creating an account and switched to Sign Up mode.

### 5. Rejecting inline styles (Session 2)
Copilot generated all the Collection page styles as inline JSX styles. I asked it to move everything into a separate CSS file to keep the code clean and consistent with the rest of the project structure.