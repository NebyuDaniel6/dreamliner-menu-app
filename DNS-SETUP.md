# DNS Configuration Guide - Dreamliner Hotel Menu

This guide explains how to configure DNS settings to make the menu application accessible at `menu.dreamlinerhotel.com`.

## 🌐 Overview

The menu application needs to be accessible at:
- **Primary Domain**: `menu.dreamlinerhotel.com`
- **All 4 Menu Routes**:
  - `menu.dreamlinerhotel.com/` (Zaika Restaurant)
  - `menu.dreamlinerhotel.com/zaika-room` (Zaika Room)
  - `menu.dreamlinerhotel.com/oak-restaurant` (Oak Restaurant)
  - `menu.dreamlinerhotel.com/oak-room` (Oak Room)

## 🔧 DNS Configuration Steps

### Step 1: Access Your DNS Management

**Common DNS Providers:**
- **Bluehost**: cPanel → DNS Zone Editor
- **Cloudflare**: Dashboard → DNS → Records
- **GoDaddy**: My Products → DNS Management
- **Namecheap**: Domain List → Manage → Advanced DNS

### Step 2: Add CNAME Record

**Record Type**: CNAME  
**Name**: `menu`  
**Value**: `your-server-domain.com` (or your server's IP address)  
**TTL**: 3600 (1 hour)  

**Example Configuration:**
```
Type: CNAME
Name: menu
Value: your-server.com
TTL: 3600
```

### Step 3: Alternative - A Record

If CNAME doesn't work, use an A record:

**Record Type**: A  
**Name**: `menu`  
**Value**: `YOUR_SERVER_IP_ADDRESS`  
**TTL**: 3600  

**Example Configuration:**
```
Type: A
Name: menu
Value: 192.168.1.100
TTL: 3600
```

## 📋 DNS Provider Specific Instructions

### Bluehost

1. **Login to Bluehost cPanel**
2. **Go to "DNS Zone Editor"**
3. **Select your domain**
4. **Click "Add Record"**
5. **Fill in the form**:
   - **Type**: CNAME
   - **Name**: `menu`
   - **Value**: `your-server.com`
   - **TTL**: 3600
6. **Click "Add Record"**

### Cloudflare

1. **Login to Cloudflare Dashboard**
2. **Select your domain**
3. **Go to "DNS" → "Records"**
4. **Click "Add record"**
5. **Configure**:
   - **Type**: CNAME
   - **Name**: `menu`
   - **Target**: `your-server.com`
   - **TTL**: Auto
6. **Click "Save"**

### GoDaddy

1. **Login to GoDaddy**
2. **Go to "My Products" → "DNS Management"**
3. **Click "Add"**
4. **Configure**:
   - **Type**: CNAME
   - **Host**: `menu`
   - **Points to**: `your-server.com`
   - **TTL**: 1 Hour
5. **Click "Save"**

## ⏱️ DNS Propagation

### Timeline
- **Local**: 5-15 minutes
- **Global**: 1-24 hours
- **Full propagation**: Up to 48 hours

### Check Propagation

**Online Tools:**
- [whatsmydns.net](https://whatsmydns.net)
- [dnschecker.org](https://dnschecker.org)

**Command Line:**
```bash
# Check DNS resolution
nslookup menu.dreamlinerhotel.com

# Check from different locations
dig menu.dreamlinerhotel.com
```

## 🔒 SSL Certificate Setup

### Automatic SSL (Recommended)

Most hosting providers offer automatic SSL certificates:

**Let's Encrypt (Free):**
```bash
# Install Certbot
sudo apt install certbot

# Get certificate
sudo certbot --nginx -d menu.dreamlinerhotel.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Manual SSL Certificate

1. **Generate CSR** (Certificate Signing Request)
2. **Purchase SSL certificate** from your provider
3. **Install certificate** on your server
4. **Configure web server** to use SSL

## 🧪 Testing DNS Configuration

### Step 1: Check DNS Resolution

```bash
# Test DNS resolution
nslookup menu.dreamlinerhotel.com

# Expected output:
# Name: menu.dreamlinerhotel.com
# Address: YOUR_SERVER_IP
```

### Step 2: Test Website Access

1. **Open browser**
2. **Visit**: `http://menu.dreamlinerhotel.com`
3. **Should redirect to**: `https://menu.dreamlinerhotel.com`
4. **Test all 4 menu routes**:
   - `/` (Zaika Restaurant)
   - `/zaika-room` (Zaika Room)
   - `/oak-restaurant` (Oak Restaurant)
   - `/oak-room` (Oak Room)

### Step 3: Verify SSL Certificate

1. **Check SSL certificate** in browser
2. **Look for green lock icon**
3. **Verify certificate is valid**
4. **Check certificate expiration date**

## 🚨 Troubleshooting

### DNS Not Resolving

**Possible Causes:**
- DNS changes not propagated yet
- Incorrect DNS record configuration
- DNS provider issues
- Server configuration problems

**Solutions:**
1. **Wait for propagation** (up to 48 hours)
2. **Double-check DNS record** configuration
3. **Contact DNS provider** for support
4. **Verify server is running** and accessible

### SSL Certificate Issues

**Common Problems:**
- Certificate not installed correctly
- Domain name mismatch
- Certificate expired
- Server configuration issues

**Solutions:**
1. **Check certificate installation**
2. **Verify domain name** matches certificate
3. **Renew certificate** if expired
4. **Check server SSL configuration**

### Website Not Loading

**Check List:**
1. **DNS is resolving** correctly
2. **Server is running** and accessible
3. **Firewall allows** traffic on ports 80/443
4. **Web server** is configured correctly
5. **Application** is running on the server

## 📞 Support Contacts

### DNS Provider Support
- **Bluehost**: 1-888-401-4678
- **Cloudflare**: Support ticket system
- **GoDaddy**: 1-480-505-8877
- **Namecheap**: Live chat support

### Server/Hosting Support
- **cPanel Support**: Your hosting provider
- **Server Issues**: Your hosting provider's technical support
- **SSL Issues**: Your hosting provider or SSL certificate provider

## 📋 DNS Configuration Checklist

- [ ] DNS record added (CNAME or A record)
- [ ] DNS propagation completed (checked with online tools)
- [ ] Website accessible via domain name
- [ ] SSL certificate installed and working
- [ ] All 4 menu routes working correctly
- [ ] HTTPS redirect working
- [ ] No mixed content warnings
- [ ] Mobile access working
- [ ] QR codes tested and working

## 🔄 Maintenance

### Regular Checks
- **Monthly**: Check SSL certificate expiration
- **Quarterly**: Verify DNS configuration
- **Annually**: Review and update DNS settings

### SSL Certificate Renewal
- **Automatic**: Set up auto-renewal if possible
- **Manual**: Renew 30 days before expiration
- **Monitoring**: Set up alerts for expiration

## 📚 Additional Resources

### DNS Learning
- [DNS Basics](https://www.cloudflare.com/learning/dns/what-is-dns/)
- [CNAME vs A Record](https://support.dnsimple.com/articles/differences-between-a-cname-alias-and-url-records/)

### SSL/TLS
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
- [SSL Certificate Best Practices](https://www.ssl.com/article/ssl-certificate-best-practices/)

### Testing Tools
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)
- [DNS Propagation Checker](https://dnschecker.org/)
- [Website Speed Test](https://gtmetrix.com/)
