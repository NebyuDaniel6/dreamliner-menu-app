# Dreamliner Hotel Menu Application

A modern, responsive menu application for Dreamliner Hotel featuring four distinct restaurant menus accessible via QR codes.

## 🏨 Menu Routes

The application provides four different menu experiences:

1. **Zaika Restaurant** (`/`) - Main restaurant menu with original pricing
2. **Zaika Room** (`/zaika-room`) - Same menu as Zaika Restaurant with 17% room service markup
3. **Oak Restaurant** (`/oak-restaurant`) - Oak restaurant menu with dark theme and golden accents
4. **Oak Room** (`/oak-room`) - Oak restaurant menu with 17% room service markup

## 🛠 Tech Stack

- **Framework**: Next.js 15.2.4
- **Frontend**: React 19
- **Styling**: Tailwind CSS 4.1.9
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Language**: TypeScript
- **Package Manager**: NPM

## 📁 Project Structure

```
dreamliner-menu-app/
├── app/                          # Next.js app router pages
│   ├── page.tsx                  # Zaika Restaurant (main page)
│   ├── zaika-room/
│   │   └── page.tsx              # Zaika Room service
│   ├── oak-restaurant/
│   │   └── page.tsx              # Oak Restaurant
│   └── oak-room/
│       └── page.tsx              # Oak Room service
├── components/                   # React components
│   ├── menu-section.tsx         # Zaika Restaurant menu items
│   ├── room-menu-section.tsx     # Zaika Room (17% markup)
│   ├── oak-menu-section.tsx      # Oak Restaurant menu items
│   ├── oak-room-menu-section.tsx # Oak Room (17% markup)
│   └── ui/                       # Reusable UI components
├── public/                       # Static assets
│   └── *.png                     # Menu item images
├── lib/                          # Utility functions
└── styles/                       # Global CSS
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- NPM or Yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/NebyuDaniel6/dreamliner-menu-app.git

# Navigate to project directory
cd dreamliner-menu-app

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📱 Menu Features

### Zaika Restaurant Menu
- Traditional Indian cuisine
- Original pricing
- Clean, modern design
- Pagination for easy browsing

### Zaika Room Service
- Identical menu to Zaika Restaurant
- Automatic 17% price markup
- Room service styling
- Same user experience

### Oak Restaurant Menu
- International cuisine
- Dark blue-black theme
- Golden accent colors
- Premium restaurant feel

### Oak Room Service
- Same menu as Oak Restaurant
- 17% room service markup
- Consistent dark theme
- Room service pricing

## 🎨 Design System

### Zaika Theme
- **Primary Color**: Orange (#f97316)
- **Background**: White
- **Typography**: Serif fonts for headings
- **Layout**: Clean, minimal design

### Oak Theme
- **Primary Color**: Golden (#f59e0b)
- **Background**: Dark slate (#0f172a)
- **Typography**: Modern sans-serif
- **Layout**: Premium, sophisticated design

## 🔧 Development

### Local Development

```bash
# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables required for basic functionality.

## 📊 Menu Management

### Adding New Menu Items

1. **Zaika Restaurant**: Edit `components/menu-section.tsx`
2. **Zaika Room**: Edit `components/room-menu-section.tsx`
3. **Oak Restaurant**: Edit `components/oak-menu-section.tsx`
4. **Oak Room**: Edit `components/oak-room-menu-section.tsx`

### Updating Prices

Prices are defined in the menu data arrays within each component file. The room service menus automatically apply a 17% markup.

### Adding Images

1. Add image files to `public/` directory
2. Use lowercase filenames with hyphens (e.g., `chicken-tikka.png`)
3. Update image references in component files

## 🔒 Security & SEO

- **Search Engine Blocking**: robots.txt prevents indexing
- **QR Code Access Only**: Menus accessible only via QR codes
- **No Public Discovery**: Not listed in search engines

## 📞 Support

For technical support or questions:
- Check the `MAINTENANCE.md` guide for common tasks
- Review `DEPLOYMENT.md` for server setup
- Contact the development team for advanced issues

## 📄 License

This project is proprietary software for Dreamliner Hotel.
