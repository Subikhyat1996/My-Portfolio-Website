# Portfolio Updates

## New Features Added

### 1. Dynamic Background Image
- Background image is now configurable via `portfolioData.backgroundImage` in `src/data/portfolioData.js`
- Simply update the URL to change the hero section background
- Current default: Modern gradient tech background

### 2. Text-to-Speech Welcome Feature
- Automatic welcome message using browser's built-in TTS
- Appears as a floating card in the bottom-right corner
- Features:
  - Play/Pause controls
  - Remembers if user has already heard the message (localStorage)
  - Dismissible
  - Customizable script via `portfolioData.welcomeScript`

### 3. GitHub-Powered Projects Section
- **Removed all mock/hardcoded project data**
- Projects section now automatically fetches ALL repositories from your GitHub account
- Displays both PUBLIC and PRIVATE repositories
- Features:
  - Public repos: Show full details with clickable GitHub links
  - Private repos: Display with 🔒 badge and disabled GitHub button (not accessible)
  - Repository stats (stars, forks) for public repos
  - Auto-generated project cards with:
    - Repository name (formatted)
    - Description
    - Primary language
    - Public/Private status badge
    - Topics as tags
    - Live demo link (if homepage URL exists)
  - Filters out forked repositories
  - Sorted by most recently updated

## Configuration

### Update Background Image
Edit `src/data/portfolioData.js`:
```javascript
backgroundImage: "YOUR_IMAGE_URL_HERE"
```

### Update Welcome Script
Edit `src/data/portfolioData.js`:
```javascript
welcomeScript: "Your custom welcome message here..."
```

### Update GitHub Username
Edit `src/data/portfolioData.js`:
```javascript
githubUsername: "YOUR_GITHUB_USERNAME"
```

## Key Changes
- Removed `portfolioData.projects` array (no longer needed)
- Projects are now dynamically loaded from GitHub API
- Private repositories are shown but cannot be opened by users
- Only public repositories have clickable GitHub links
- Automatic fallback images for private repos

## Components Modified
- `src/components/Projects.jsx` - Now fetches from GitHub API
- `src/components/ProjectCard.jsx` - Updated to handle private/public repos
- `src/components/TTSWelcome.jsx` - Text-to-speech welcome component
- `src/data/portfolioData.js` - Removed mock projects, added GitHub username

## Browser Compatibility
- TTS feature requires modern browsers with Web Speech API support
- Works in Chrome, Edge, Safari, and most modern browsers
- Gracefully degrades if not supported

## Usage
1. Update your GitHub username in `portfolioData.js`
2. Customize the welcome script
3. Change the background image URL
4. Run `npm run dev` to see the changes
5. All your GitHub repos (public and private) will be displayed automatically
