# Dreamliner Hotel Menu App - Deployment Guide

## Server Requirements

- **Node.js**: Version 18 or higher
- **NPM**: Latest version
- **PM2**: Process manager for Node.js applications
- **Web Server**: Nginx or Apache (for reverse proxy)
- **SSL Certificate**: Let's Encrypt or commercial certificate
- **Domain**: `menu.dreamlinerhotel.com`

## cPanel Deployment Steps

### 1. Access Your Server

**Option A: SSH Access (Recommended)**
```bash
ssh username@your-server-ip
```

**Option B: cPanel Terminal**
- Login to cPanel
- Find "Terminal" in the Advanced section
- Open terminal

### 2. Install Node.js (if not already installed)

```bash
# Check Node.js version
node --version

# If Node.js is not installed or version < 18:
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 3. Install PM2 Process Manager

```bash
sudo npm install -g pm2
```

### 4. Clone and Setup Application

```bash
# Navigate to your web directory (usually public_html or subdomain folder)
cd /home/username/public_html

# Clone the repository
git clone https://github.com/NebyuDaniel6/dreamliner-menu-app.git menu-app

# Navigate to application directory
cd menu-app

# Install dependencies
npm install

# Build the application
npm run build
```

### 5. Configure PM2

Create PM2 configuration file:

```bash
# Create ecosystem file
nano ecosystem.config.js
```

Add the following content:

```javascript
module.exports = {
  apps: [{
    name: 'dreamliner-menu',
    script: 'npm',
    args: 'start',
    cwd: '/home/username/public_html/menu-app',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

Start the application:

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 6. Configure Reverse Proxy (Nginx)

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/menu.dreamlinerhotel.com
```

Add the following configuration:

```nginx
server {
    listen 80;
    server_name menu.dreamlinerhotel.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/menu.dreamlinerhotel.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 7. Setup SSL Certificate

**Using Let's Encrypt (Free):**

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d menu.dreamlinerhotel.com
```

**Manual SSL Certificate:**
- Upload your SSL certificate files
- Update Nginx configuration to include SSL settings

### 8. Configure DNS

In your domain registrar or DNS provider:

1. Add CNAME record:
   - **Name**: `menu`
   - **Value**: `your-server-ip` or `your-server-domain.com`
   - **TTL**: 3600

2. Wait for DNS propagation (5-30 minutes)

### 9. Verify Deployment

1. Visit `https://menu.dreamlinerhotel.com`
2. Test all 4 menu routes:
   - `/` (Zaika Restaurant)
   - `/zaika-room` (Zaika Room)
   - `/oak-restaurant` (Oak Restaurant)
   - `/oak-room` (Oak Room)

## Troubleshooting

### Application Won't Start
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs dreamliner-menu

# Restart application
pm2 restart dreamliner-menu
```

### Port Already in Use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill process if needed
sudo kill -9 PID_NUMBER
```

### Nginx Issues
```bash
# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx

# Check Nginx status
sudo systemctl status nginx
```

### SSL Certificate Issues
```bash
# Check certificate status
sudo certbot certificates

# Renew certificate
sudo certbot renew
```

## Maintenance Commands

### Update Application
```bash
cd /home/username/public_html/menu-app
git pull origin main
npm install
npm run build
pm2 restart dreamliner-menu
```

### View Application Logs
```bash
pm2 logs dreamliner-menu
```

### Restart Application
```bash
pm2 restart dreamliner-menu
```

### Stop Application
```bash
pm2 stop dreamliner-menu
```

## Security Considerations

1. **Firewall**: Ensure only necessary ports are open (80, 443, 22)
2. **SSL**: Always use HTTPS in production
3. **Updates**: Keep Node.js and dependencies updated
4. **Backups**: Regular backups of application and database
5. **Monitoring**: Set up monitoring for application health

## Support

For technical support or questions about deployment:
- Check application logs: `pm2 logs dreamliner-menu`
- Verify all services are running: `pm2 status`
- Test DNS resolution: `nslookup menu.dreamlinerhotel.com`
