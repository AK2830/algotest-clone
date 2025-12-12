# Quick Start Guide - AlgoTest Clone

## ⚠️ Prerequisites

You need to install **Node.js** before running this project.

### Step 1: Install Node.js

1. **Download Node.js**
   - Visit: https://nodejs.org/
   - Download the **LTS version** (recommended)
   - Current LTS: v20.x or v18.x

2. **Run the Installer**
   - Double-click the downloaded `.msi` file
   - Follow the installation wizard
   - ✅ Check "Automatically install necessary tools"
   - Click "Install"

3. **Verify Installation**
   - Open a **new** Command Prompt or PowerShell
   - Run:
     ```bash
     node --version
     npm --version
     ```
   - You should see version numbers (e.g., v20.10.0 and 10.2.3)

---

## 🚀 Running the AlgoTest Clone

Once Node.js is installed:

### Step 2: Install Dependencies

```bash
cd C:\Users\ARUN\.gemini\antigravity\scratch\algotest-clone
npm install
```

This will install all required packages (~2-3 minutes).

### Step 3: Start Development Server

```bash
npm run dev
```

You should see:
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Ready in 2.5s
```

### Step 4: Open in Browser

Navigate to: **http://localhost:3000**

---

## 📱 What You'll See

### Page Routes:

- **Dashboard**: http://localhost:3000/dashboard
- **Backtest**: http://localhost:3000/backtest
- **Live Trading**: http://localhost:3000/live
- **Forward Test**: http://localhost:3000/forward-test
- **Portfolio**: http://localhost:3000/portfolio
- **Signals**: http://localhost:3000/signals

---

## 🧪 Quick Test Checklist

After opening http://localhost:3000:

### 1. Dashboard
- [ ] Navigate to `/dashboard`
- [ ] See 11 feature cards
- [ ] Check right sidebar displays
- [ ] Category tabs switch content

### 2. Backtest
- [ ] Navigate to `/backtest`
- [ ] Click "Stocks - Cash / F&O" tab
- [ ] Type "RELIANCE" in search → Should filter stocks
- [ ] Click "Add Leg" → New leg appears
- [ ] Change Strike Criteria → UI changes dynamically
- [ ] Click "Start Backtest" → Results appear

### 3. Live Trading
- [ ] Navigate to `/live`
- [ ] Toggle "Auto Execution" → Background changes color
- [ ] Toggle "Include Brokerage" → MTM value changes
- [ ] Click status tabs → Strategies filter
- [ ] Search strategies → List filters
- [ ] Click "Deploy" → Alert shows

### 4. Forward Test
- [ ] Navigate to `/forward-test`
- [ ] Verify "PAPER TRADING" badge shows
- [ ] Check info banner displays
- [ ] All Live features work

### 5. Portfolio
- [ ] Navigate to `/portfolio`
- [ ] See 3 portfolio cards
- [ ] Search "Conservative" → Filters to 1
- [ ] Hover portfolio name → Turns blue

### 6. Signals
- [ ] Navigate to `/signals`
- [ ] See empty state (no signals yet)
- [ ] Click English/हिन्दी toggle → Language switches
- [ ] Expand FAQ accordion → Question expands
- [ ] Click "+ New Signal" → Routes to /signals/new

---

## 🛠️ Troubleshooting

### Issue: "npm is not recognized"
**Solution**: Node.js not installed or PATH not updated
- Install Node.js from nodejs.org
- Restart your terminal/IDE
- Open a NEW terminal window

### Issue: "Port 3000 already in use"
**Solution**: Another app is using port 3000
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Pages not loading
**Solution**: Check the development server is running
- Look for "Ready in X.Xs" message in terminal
- Check http://localhost:3000 (not https)
- Clear browser cache (Ctrl+Shift+Delete)

### Issue: Styles not applying
**Solution**: Tailwind CSS not building
```bash
# Stop the server (Ctrl+C)
# Rebuild
npm run build
npm run dev
```

---

## 📦 Build for Production

When ready to deploy:

```bash
# Build production version
npm run build

# Test production build locally
npm start

# Or export as static site
npm run build && npm run export
```

---

## 🎯 Next Steps

1. **Install Node.js** (if not done)
2. **Run `npm install`**
3. **Run `npm run dev`**
4. **Open http://localhost:3000**
5. **Test all 6 pages**
6. **Deploy to Vercel** (optional)

---

## 🌐 Deployment Options

### Option 1: Vercel (Easiest, Recommended)

1. Push code to GitHub
2. Visit https://vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"
6. Done! Live in ~2 minutes

### Option 2: Netlify

1. Run `npm run build`
2. Visit https://netlify.com
3. Drag & drop the `out` folder
4. Done!

### Option 3: Manual Hosting

1. Run `npm run build`
2. Upload `.next` folder to your server
3. Run `npm start` on server
4. Configure reverse proxy (nginx/Apache)

---

## 📞 Support

If you encounter any issues:

1. Check this guide's Troubleshooting section
2. Review `README.md` in the project root
3. Check `DOCUMENTATION.md` for feature details
4. Verify Node.js version: `node --version` (should be v18+)

---

**You're all set! Happy trading! 📈🚀**
