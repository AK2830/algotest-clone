# AlgoTest Clone - Setup Instructions

## 🚀 Running the Application

### Prerequisites
1. **Install Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Restart your terminal after installation

### Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd C:\Users\ARUN\.gemini\antigravity\scratch\algotest-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Navigate to: http://localhost:3000
   - Dashboard: http://localhost:3000/dashboard
   - Backtest: http://localhost:3000/backtest

## 📦 Implemented Features

### ✅ Complete Header Navigation
- Backtest dropdown (Strategies/Portfolios)
- Algo Trade dropdown (Forward Test, Heatmap, Analysis)
- Signals dropdown (AI Agent, Dashboard, Backtest)
- Builder + Simulator dropdown
- Webinars dropdown
- PA Credits display
- Promotional banner

### ✅ Dashboard Page
- 3-column layout
- Category tabs (Algo/Discretionary/Indicator Trading)
- Feature cards (Backtest AI, RA Algos, Algo Trade, Forward Test)
- Crypto LIVE & Groww integration sections
- Tutorial carousels
- Right sidebar (Signal Agent, Brokers, Help Centre, Courses)

### ✅ Ultra-Detailed Backtest Page
**Left Sidebar:**
- Saved strategies list
- Collapsible panel

**Main Form:**
- 4 instrument tabs (Weekly/Monthly, Stocks, Delta Exchange)
- Instrument settings (Cash/Futures toggle)
- Legwise settings (Square Off, Trail SL to Breakeven)
- Entry settings (Strategy Type, Entry/Exit times, No re-entry after, Overall Momentum)

**Leg Builder (Per-Leg Controls):**
1. **Target Profit** - Points/Percent with value input
2. **Stop Loss** - Points/Percent with validation
3. **Trail SL** - Lock at / Trail by inputs
4. **Re-entry on Target** - 4 strategies (RE ASAP, RE ASAP ↩, RE MOMENTUM, RE MOMENTUM ↩)
5. **Re-entry on SL** - Same 4 strategies with leg selector
6. **Simple Momentum** - 4 directions (↑↓ Pts/%), threshold, time constraint
7. **Range Breakout** - High/Low/Instrument selection

**Strike Options:**
- Complete ITM20 to OTM30 range (41 options)
- 11 Strike Criteria (Strike Type, Premium Range, Closest Premium, etc.)
- 4 Expiry options (Weekly, Next Weekly, Monthly, Next Monthly)

**Overall Strategy Settings:**
- Overall Stop Loss (Max Loss/Total Premium %)
- Overall Target (Max Profit/Total Premium %)
- Trailing Options (Lock/Lock and Trail/Overall Trail SL)
- Date range picker

### ✅ Results Dashboard
- Stats cards (Total Profit, Max Drawdown, Win Rate, Expectancy)
- Equity Curve chart
- Daily PnL bar chart
- Trade Log table with ROI calculation

### ✅ Other Pages
- Live Trading interface
- Forward Test page
- Portfolio management
- RA Algos marketplace

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project on https://vercel.com
3. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Import project on https://netlify.com
3. Build command: `npm run build`
4. Publish directory: `.next`

### Option 3: Local Network Access
After running `npm run dev`, access from other devices on your network:
- Find your local IP: `ipconfig` (look for IPv4 Address)
- Access via: `http://YOUR_IP:3000`

## 📝 Notes
- All data is simulated via mock engine
- No real broker connections
- For demo/educational purposes only
