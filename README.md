# Alaya The Women Store - Official Website

A professional, modern single-page business website for Alaya The Women Store, a premier women's fashion destination in Khammam, Telangana specializing in curated kurtis, ethnic wear, and designer outfits.

![Alaya Women Store](https://img.shields.io/badge/Status-Production-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Screenshots](#screenshots)
- [Contact](#contact)
- [License](#license)
- [Credits](#credits)

## 🌟 About

Alaya The Women Store is a prominent retail outlet in Khammam, Telangana, specializing in contemporary and traditional women's fashion. The store is known for its curated collections of kurtis, ethnic wear, and designer outfits. This website serves as their digital presence, showcasing their collections, store information, and facilitating customer engagement.

**Store Location:** VDOs Colony, Khammam, Telangana 507002  
**Business Hours:** Monday - Saturday (10:30 AM - 8:30 PM), Sunday Closed  
**Specialties:** Kurtis, Ethnic Wear, Designer Outfits, Traditional & Contemporary Fashion

## ✨ Features

### Core Functionality
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices
- **Dynamic Open/Closed Status**: Real-time store status indicator based on current time and day
- **Interactive Gallery**: Lightbox functionality for viewing product images
- **Star Rating System**: Customer review submission with interactive star rating
- **Smooth Navigation**: Smooth scrolling navigation with active link highlighting
- **Contact Forms**: Working contact and review forms with validation
- **Google Maps Integration**: Embedded map with directions functionality
- **Click-to-Call**: Direct phone calling functionality for mobile users
- **Social Media Integration**: Instagram and other social media links throughout

### Sections
1. **Header/Navigation**: Logo, navigation links, mobile hamburger menu, Call Now button
2. **Hero Section**: Large banner with tagline, open status badge, and quick action buttons
3. **AI Profile Summary**: Business overview with Instagram integration
4. **About Business**: Detailed description with feature highlights
5. **Products/Collections**: Grid layout showcasing product categories
6. **Gallery**: Photo gallery with lightbox viewer
7. **Amenities & Facilities**: Payment options and store facilities
8. **Operating Hours**: Weekly schedule with dynamic status indicator
9. **Location & Map**: Address, embedded Google Maps, and directions
10. **Reviews**: Customer review display and submission form
11. **Call-to-Action**: Instagram promotion and store visit buttons
12. **Contact**: Contact information and message form
13. **Footer**: Quick links, contact info, social media, and copyright

## 🛠 Tech Stack

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (Vanilla)**: Interactive functionality without frameworks
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Playfair Display (headings) and Poppins (body text)
- **Google Maps API**: Embedded location mapping

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhanush-devsecops/ALAYA_WOMEN_STORE.git
   cd ALAYA_WOMEN_STORE
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser, OR
   - Use a local web server:
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

3. **No build process required** - The website uses vanilla HTML, CSS, and JavaScript with no dependencies to install.

## 🚀 Usage

### Development
- Edit `index.html` for content changes
- Modify `styles.css` for design updates
- Update `script.js` for functionality changes
- Refresh browser to see changes

### Deployment
The website can be deployed to any static hosting service:
- **GitHub Pages**: Free hosting via GitHub
- **Netlify**: Drag-and-drop deployment
- **Vercel**: Zero-config deployment
- **AWS S3**: Static website hosting
- **Traditional hosting**: Upload files to any web server

### Customization

#### Update Contact Information
Edit the following in `index.html`:
- Phone numbers (search for `tel:+91...`)
- Email addresses (search for `mailto:...`)
- Social media links (search for Instagram URLs)
- Google Maps coordinates (search for `17.25601300,80.15789100`)

#### Update Business Hours
Edit the hours in `script.js`:
```javascript
const openHour = 10;
const openMinute = 30;
const closeHour = 20;
const closeMinute = 30;
```

#### Update Images
Replace placeholder image URLs in `index.html` with your own images:
- Hero banner
- Product images
- Gallery images
- About section image

## 📁 Project Structure

```
ALAYA_WOMEN_STORE/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive design
├── script.js           # JavaScript functionality and interactivity
├── README.md           # Project documentation
└── .git/               # Git repository (hidden)
```

### File Descriptions

- **index.html**: Single-page HTML structure containing all 13 sections with semantic markup and SEO optimization
- **styles.css**: Comprehensive styling with elegant feminine color scheme, responsive layouts, animations, and cross-browser compatibility
- **script.js**: Interactive features including mobile menu, smooth scrolling, dynamic status, lightbox gallery, form handling, and scroll effects

## ⚙️ Configuration

### Color Scheme
The website uses an elegant feminine color palette defined in CSS variables:
- Primary: Pink/Coral (#E91E63)
- Secondary: Purple (#9C27B0)
- Accent: Gold (#D4AF37)
- Background: White/Soft Pink (#FFE4E9)

Modify these in `styles.css` under `:root`:
```css
:root {
    --primary-color: #E91E63;
    --secondary-color: #9C27B0;
    --accent-color: #FFD700;
    /* ... more variables */
}
```

### Google Maps
To update the map location:
1. Go to Google Maps
2. Find your location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in `index.html` (Location section)

### Forms
Currently, forms are frontend-only. To enable backend functionality:
1. Set up a server (Node.js, PHP, Python, etc.)
2. Create API endpoints for form submission
3. Update `script.js` to send data to your server
4. Add database storage for reviews and messages

## 📸 Screenshots

### Desktop View
- Hero section with elegant banner
- Product collections grid
- Gallery with lightbox
- Contact form and information

### Mobile View
- Responsive hamburger menu
- Touch-friendly buttons
- Optimized layouts for small screens

*(Add actual screenshots when deploying)*

## 📞 Contact

### Store Information
- **Store Name**: Alaya The Women Store
- **Address**: NST Rd, Bank Colony, Khammam, Telangana 507002
- **Area**: VDOs Colony, Khammam
- **Phone**: +91 98765 43210
- **Email**: info@alayawomenstore.com
- **Instagram**: [@alayawomenstore](https://instagram.com/alayawomenstore)

### Project Contact
- **Repository**: https://github.com/dhanush-devsecops/ALAYA_WOMEN_STORE
- **Issues**: Report bugs via GitHub Issues

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Credits

### Development
- Designed and developed for Alaya The Women Store
- Built with vanilla HTML, CSS, and JavaScript

### Resources
- **Images**: Unsplash (placeholder fashion images)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Playfair Display, Poppins)
- **Maps**: Google Maps Embed API

### Special Thanks
- Alaya The Women Store for the opportunity to create their digital presence
- The open-source community for excellent tools and resources

---

**Made with ❤️ in Khammam, Telangana**

© 2026 Alaya The Women Store. All rights reserved.
