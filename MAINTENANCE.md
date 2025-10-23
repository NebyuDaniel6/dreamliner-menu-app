# Dreamliner Hotel Menu App - Maintenance Guide

This guide will train your IT team to maintain and update the menu application.

## 📋 Table of Contents

1. [Understanding the Application](#understanding-the-application)
2. [Making Menu Updates](#making-menu-updates)
3. [Git Workflow](#git-workflow)
4. [Deploying Changes](#deploying-changes)
5. [Troubleshooting](#troubleshooting)
6. [Common Tasks](#common-tasks)

## Understanding the Application

### File Structure Overview

```
components/
├── menu-section.tsx         # Zaika Restaurant menu items
├── room-menu-section.tsx   # Zaika Room (17% markup)
├── oak-menu-section.tsx    # Oak Restaurant menu items
└── oak-room-menu-section.tsx # Oak Room (17% markup)

public/
└── *.png                   # All menu item images
```

### Key Concepts

- **4 Separate Menus**: Each has its own component file
- **Automatic Markup**: Room service menus add 17% to prices
- **Image Management**: All images stored in `public/` folder
- **Responsive Design**: Works on all device sizes

## Making Menu Updates

### 1. Updating Menu Items

**Location**: Each menu has its own component file

**Zaika Restaurant** (`components/menu-section.tsx`):
```typescript
const menuItems = [
  {
    name: "Chicken tikka",
    description: "Tender chicken marinated in yogurt and spices",
    price: "450br",
    image: "/chicken-tikka.png"
  },
  // ... more items
]
```

**Zaika Room** (`components/room-menu-section.tsx`):
- Same structure as Zaika Restaurant
- Prices automatically marked up by 17%

**Oak Restaurant** (`components/oak-menu-section.tsx`):
```typescript
const menuItems = [
  {
    name: "Buffet Breakfast",
    description: "Cold cut, freshly made bakeries, cereals...",
    price: "889.56",
    image: "/breakfast.png"
  },
  // ... more items
]
```

**Oak Room** (`components/oak-room-menu-section.tsx`):
- Same structure as Oak Restaurant
- Prices automatically marked up by 17%

### 2. Adding New Menu Items

1. **Open the appropriate component file**
2. **Find the `menuItems` array**
3. **Add new item following the format**:

```typescript
{
  name: "New Item Name",
  description: "Item description here",
  price: "299br", // or "299" for Oak menu
  image: "/new-item.png"
}
```

4. **Add the image file to `public/` folder**
5. **Use lowercase filename with hyphens**

### 3. Updating Prices

**For Zaika Restaurant & Oak Restaurant**:
- Edit the `price` field directly in the component
- Format: `"450br"` for Zaika, `"450"` for Oak

**For Room Service Menus**:
- Edit the `price` field in the component
- The 17% markup is calculated automatically
- No need to calculate manually

### 4. Updating Images

1. **Add new image to `public/` folder**
2. **Use lowercase filename with hyphens** (e.g., `chicken-tikka.png`)
3. **Update the `image` field in the component**
4. **Recommended size**: 400x300px or similar aspect ratio

### 5. Changing Menu Categories

Each menu is organized by categories (e.g., "Main Dishes", "Appetizers"). To modify:

1. **Find the category section in the component**
2. **Update the category name**:
```typescript
<h2 className="text-2xl font-bold mb-4">New Category Name</h2>
```
3. **Move items between categories** by cutting and pasting

## Git Workflow

### 1. Before Making Changes

```bash
# Navigate to project directory
cd /path/to/menu-app

# Pull latest changes
git pull origin main

# Check current status
git status
```

### 2. Making Changes

1. **Edit the component files** (see sections above)
2. **Test changes locally** (if possible):
```bash
npm run dev
# Visit http://localhost:3000 to test
```

### 3. Committing Changes

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "Update Zaika menu: Add new chicken dish, update prices"

# Push to GitHub
git push origin main
```

### 4. Good Commit Messages

- `"Update Zaika menu: Add new chicken dish, update prices"`
- `"Fix Oak restaurant: Correct spelling in menu items"`
- `"Update images: Replace old photos with new ones"`
- `"Price update: Increase Zaika room service prices"`

## Deploying Changes

### Automatic Deployment (if configured)

If your server is set up with automatic deployment:
1. **Push changes to GitHub**
2. **Server automatically pulls and rebuilds**
3. **Changes go live within 5-10 minutes**

### Manual Deployment

```bash
# SSH into your server
ssh username@your-server

# Navigate to application directory
cd /path/to/menu-app

# Pull latest changes
git pull origin main

# Install any new dependencies
npm install

# Rebuild the application
npm run build

# Restart the application
pm2 restart dreamliner-menu
```

### Verify Deployment

1. **Visit the website**: `https://menu.dreamlinerhotel.com`
2. **Test all 4 menu routes**:
   - `/` (Zaika Restaurant)
   - `/zaika-room` (Zaika Room)
   - `/oak-restaurant` (Oak Restaurant)
   - `/oak-room` (Oak Room)
3. **Check that changes are visible**

## Troubleshooting

### Application Won't Start

```bash
# Check PM2 status
pm2 status

# View application logs
pm2 logs dreamliner-menu

# Restart application
pm2 restart dreamliner-menu
```

### Changes Not Visible

1. **Check if changes were committed and pushed**
2. **Verify deployment completed successfully**
3. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
4. **Check application logs for errors**

### Build Errors

```bash
# Check for syntax errors
npm run build

# If errors occur, check:
# 1. Missing commas in menu items
# 2. Incorrect image paths
# 3. Typos in component names
```

### Image Not Loading

1. **Check image filename** (must be lowercase with hyphens)
2. **Verify image is in `public/` folder**
3. **Check image path in component** (should start with `/`)
4. **Ensure image file exists and is not corrupted**

## Common Tasks

### Adding a New Dish to Zaika Restaurant

1. **Open `components/menu-section.tsx`**
2. **Find the appropriate category**
3. **Add new item to the array**:
```typescript
{
  name: "New Dish Name",
  description: "Description of the dish",
  price: "350br",
  image: "/new-dish.png"
}
```
4. **Add image to `public/` folder**
5. **Commit and push changes**

### Updating All Prices by 10%

1. **Open the component file**
2. **Use find/replace to update prices**:
   - Find: `"(\d+)br"`
   - Replace: `"${Math.round(parseInt('$1') * 1.1)}br"`
3. **Test the changes**
4. **Commit and push**

### Changing Restaurant Hours

1. **Open the appropriate page file** (`app/page.tsx`, `app/zaika-room/page.tsx`, etc.)
2. **Find the hours section**
3. **Update the hours text**
4. **Commit and push changes**

### Adding a New Menu Category

1. **Open the component file**
2. **Add new category section**:
```typescript
<h2 className="text-2xl font-bold mb-4">New Category</h2>
<div className="grid gap-4">
  {/* Add menu items here */}
</div>
```
3. **Add menu items to the new category**
4. **Commit and push changes**

## Best Practices

### Before Making Changes

1. **Always pull latest changes first**
2. **Test changes locally if possible**
3. **Make small, focused changes**
4. **Use descriptive commit messages**

### When Updating Prices

1. **Update all menus consistently**
2. **Remember room service adds 17% automatically**
3. **Test price calculations**
4. **Update images if needed**

### Image Management

1. **Use consistent naming convention** (lowercase, hyphens)
2. **Optimize images for web** (compress if needed)
3. **Use appropriate aspect ratios**
4. **Keep file sizes reasonable** (< 500KB per image)

## Emergency Procedures

### If Website Goes Down

1. **Check PM2 status**: `pm2 status`
2. **View logs**: `pm2 logs dreamliner-menu`
3. **Restart application**: `pm2 restart dreamliner-menu`
4. **Check server resources**: `htop` or `top`
5. **Contact hosting provider if needed**

### If Changes Break the Site

1. **Revert to previous version**:
```bash
git log --oneline
git reset --hard HEAD~1
pm2 restart dreamliner-menu
```
2. **Fix the issue**
3. **Test thoroughly before deploying again**

## Support Contacts

- **Technical Issues**: Contact the development team
- **Hosting Problems**: Contact your hosting provider
- **Domain Issues**: Contact your domain registrar

## Training Checklist

- [ ] Understand the 4 menu structure
- [ ] Know how to edit menu items
- [ ] Understand Git workflow
- [ ] Know how to deploy changes
- [ ] Can troubleshoot common issues
- [ ] Know how to add new images
- [ ] Understand price markup system
- [ ] Can handle emergency procedures
