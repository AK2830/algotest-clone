# AlgoTest Website - Comprehensive Clone Documentation

## Executive Summary

Based on extensive exploration of the AlgoTest platform, I've discovered a highly sophisticated conditional UI architecture, especially in the Backtest page. The application uses dynamic dropdown cascading systems, toggle-based rendering, and complex leg management patterns.

---

## KEY FINDINGS: Hidden Conditional Architecture

### 1. BACKTEST PAGE - STRIKE CRITERIA CASCADING SYSTEM

The Strike Criteria dropdown has **11 conditional option types**, each rendering different UI elements:

#### Strike Criteria Options with Conditional UI:

1. **Strike Type** (default) → Right dropdown shows ATM/ITM/OTM (51 options: ITM20-OTM30)
2. **Premium Range** → Shows 2 spinbuttons: "Lower Range" (50) + "Upper Range" (200)
3. **Closest Premium** → Shows 1 spinbutton: "Premium" (50)
4. **Premium >=** → Shows 1 spinbutton: "Premium" value
5. **Premium <=** → Shows 1 spinbutton: "Premium" value
6. **Straddle Width** → Shows 2 spinbuttons (min/max width)
7. **% of ATM** → Shows 1 spinbutton (percentage)
8. **Synthetic Future** → No additional inputs (structural match)
9. **ATM Straddle Premium %** → Shows 2 spinbuttons or specific inputs
10. **Closest Delta** → Shows 1 spinbutton (delta value)
11. **Delta Range** → Shows 2 spinbuttons: "Lower Range" (30) + "Upper Range" (70)

**Pattern:** Range-based criteria (Premium Range, Delta Range, Straddle Width) show TWO input fields, while comparison/single-value criteria (Premium >=, <=, Closest Premium) show ONE input field.

---

### 2. SEGMENT SELECTOR - CONDITIONAL COLUMN VISIBILITY

The **Perpetual FUT vs Options** segment selector controls which columns are visible in the Leg Builder:

**Perpetual FUT Selected:**
- Visible columns: Total Lot, Position, Expiry
- Hidden columns: Option Type, Strike Criteria, Strike Type

**Options Selected:**
- Visible columns: Total Lot, Position, Option Type, Expiry, Strike Criteria, Strike Type
- This enables all the strike criteria conditional logic

---

### 3. LEG CLONING ARCHITECTURE

The **"Add Leg" button** triggers a sophisticated leg management system:
- Creates new `Legs #1`, `Legs #2`, `Legs #3`, etc.
- **Clones ALL settings** from the previous leg automatically
- Each leg shows independent per-leg controls:
  - Target Profit (toggle + "Points (Pts)" dropdown + input)
  - Stop Loss (toggle + "Points (Pts)" dropdown + input)
  - Trail SL() (toggle + "Points" dropdown + two inputs)
  - Re-entry on Tgt() (toggle + "RE ASAP" dropdown + input)
  - Re-entry on SL() (toggle + "RE ASAP" dropdown + input)
  - Simple Momentum() (toggle + "Points (Pts) ↑" dropdown + input)
- Delete button (X icon) for removing individual legs
- Duplicate button for copying a leg configuration

---

### 4. OVERALL STRATEGY SETTINGS - TOGGLE-BASED RENDERING

The bottom section has **3 primary conditional toggle groups**:

**Overall Stop Loss** (toggle OFF/ON)
- When ON → Shows: "Max Loss" dropdown + spinbutton input (0)
- Also reveals: "Overall Re-entry on SL()" toggle section

**Overall Target** (toggle OFF/ON)
- When ON → Shows: "Max Profit" dropdown + spinbutton input (0)
- Also reveals: "Overall Re-entry on Tgt()" toggle section

**Trailing Options** (toggle OFF/ON)
- When ON → Shows: "Lock" dropdown + "If profit reaches" input (0) + "Lock profit" input (1)
- Options in Lock dropdown: "Lock", "Lock and Trail", "Overall Trail SL"

**Overall Re-entry on SL()** (toggle OFF/ON)
- When ON → Shows: "RE ASAP" dropdown + number input
- Dropdown options: "RE ASAP", "RE ASAP ↩", "RE MOMENTUM", "RE MOMENTUM ↩"

**Overall Re-entry on Tgt()** (toggle OFF/ON)
- When ON → Shows: "RE ASAP" dropdown + number input

---

## PAGE STRUCTURE DOCUMENTATION

### Backtest Page Architecture:

1. **Instrument Tabs Section**
   - Weekly & Monthly Expiries (NIFTY | SENSEX)
   - Monthly Only Expiry (MIDCPNIFTY | BANKNIFTY | FINNIFTY | BANKEX)
   - Stocks - Cash / F&O (ALL NIFTY 500 STOCKS)
   - Delta Exchange (BTCUSD | ETHUSD)

2. **Instrument Settings**
   - Index combobox with search + "Underlying from" radio (Cash/Futures)

3. **Entry Settings**
   - Strategy Type: Intraday, BTST, Positional (radio buttons)
   - Entry Time: Time picker (09:35 AM)
   - Exit Time: Time picker (03:15 PM)
   - No re-entry after: Toggle + Time picker (09:35 AM)
   - Overall Momentum: Toggle + Dropdown (Points/Percent, ↑/↓) + input

4. **Legwise Settings**
   - Square Off: Radio (Partial/Complete)
   - Trail SL to Break-even price: Checkbox + radio (All Legs/SL Legs)

5. **Leg Builder** (Collapsible section)
   - Segment selector: Perpetual FUT | Options
   - Template row with controls
   - Dynamic Legs section (after clicking Add Leg)

6. **Overall Strategy Settings**
   - Overall Stop Loss | Overall Target | Trailing Options (3-column layout)
   - Overall Re-entry toggles
   - Date range pickers (Start Date / End Date)

---

### Algo Trade (Live Trading) Page Architecture:

1. **Top Control Bar**
   - Auto Execution toggle
   - Auto restart paused executions toggle
   - Switch to Pro View button
   - History button
   - Broker Login button
   - Help Center dropdown
   - Credits display

2. **Metrics Section**
   - Total MTM (₹ 0)
   - Open Positions (0)
   - Margin Blocked (approx) (₹ 0)
   - Include Brokerage toggle
   - Taxes & charges toggle

3. **Deployed Strategies Section**
   - Filter tabs: Running, Paused, Sq Off, Error, Manual
   - Show archived toggle

4. **Activation Section** (Tabbed)
   - Strategies tab: Search bar + "All Selected" dropdown + Execution days filter
   - Portfolios tab
   - RA Algos tab
   - Strategies table with columns: Strategy name, Status, Instances, Execution On (day checkboxes)

---

## MENU NAVIGATION ARCHITECTURE

### Main Header Dropdowns:

**Backtest** dropdown:
- View Backtest builder

**Algo Trade** dropdown:
- Algo Trade (NEW badge)
  - All Strategies + Portfolios
  - RA Algos activation
- Forward Test
  - All Strategies + Portfolios
  - RA Algos activation
- Daily Straddle Heatmap
- Daily Trades Analysis

**Signals** dropdown:
- Signals AI Agent (dark section)
  - Build entry and exit conditions
  - Preview charts & backtest results
- Signals Dashboard
  - Setup New Signals
  - Manage Existing Signals
- Execution (Algo Trade + Forward Test)
  - Intraday Signals Instances
  - Positional Signals Instances
- Signals Backtest (NEW badge)

**Builder + Simulator** dropdown:
- Risk Dashboard
  - Analyse your risk across underlyings
  - Build + Manage Strategies
- Strategy Builder
  - Build + Trade Strategies
  - Place Basket Orders
  - Forward Test
- Simulator
  - Replay your trades
  - Export Trades
- VRP Dashboard (locked)
- Earnings Calendar (locked)
- IV Rank & Percentile (locked)
- Orderbook

**Webinars** dropdown:
- (Content varies)

---

## CRITICAL IMPLEMENTATION PATTERNS

### Pattern 1: Strike Criteria Cascade System
```
User selects Strike Criteria dropdown
↓
IF "Premium Range" THEN show 2 inputs (min/max)
ELSE IF "Closest Premium|Premium >=|Premium <=" THEN show 1 input
ELSE IF "Delta Range" THEN show 2 inputs (min/max)
ELSE IF "Straddle Width" THEN show 2 inputs
... (repeat for all 11 types)
```

### Pattern 2: Segment Conditional Visibility
```
User clicks "Perpetual FUT" button
↓
Hide columns: Option Type, Strike Criteria, Strike Type
Show columns: Total Lot, Position, Expiry

User clicks "Options" button
↓
Show ALL columns including Option Type, Strike Criteria, Strike Type
```

### Pattern 3: Dynamic Leg Management
```
Initial state: Show "Add Leg" button below template row

User clicks "Add Leg"
↓
Create new section "Legs #1" below button with all controls
↓
User clicks "Add Leg" again
↓
Create new section "Legs #2" with CLONED config from #1
↓
(Repeat indefinitely - no apparent limit)
```

### Pattern 4: Toggle-Based Rendering
```
Overall Stop Loss toggle = OFF
↓
Show toggle only, hide "Max Loss" dropdown and input

User clicks toggle → ON
↓
Show toggle, "Max Loss" dropdown, input field
Also reveal "Overall Re-entry on SL()" section
```

---

## NIFTY 500 STOCKS LIST

Complete list of stocks available in the "Stocks - Cash / F&O" tab:

### Top Trading Stocks (A-Z):
AARTI, ABB, ACC, ADANIENT, ADANIPORTS, APOLLOHOSP, ASIANPAINT, AXISBANK, BAJAJ-AUTO, BAJAJFINSV, BAJFINANCE, BALKRISIND, BANDHANBNK, BANKBARODA, BERGEPAINT, BHARATFORG, BHARTIARTL, BIOCON, BOSCHLTD, BPCL, BRITANNIA, CADILAHC, CANBK, CHOLAFIN, CIPLA, COALINDIA, COFORGE, COLPAL, CONCOR, CUMMINSIND, DABUR, DALBHARAT, DEEPAKNTR, DIVISLAB, DLF, DRREDDY, EICHERMOT, ESCORTS, EXIDEIND, FEDERALBNK, GAIL, GLENMARK, GMRINFRA, GODREJCP, GODREJPROP, GRASIM, GUJGASLTD, HAL, HAVELLS, HCLTECH, HDFC, HDFCBANK, HDFCLIFE, HEROMOTOCO, HINDALCO, HINDPETRO, HINDUNILVR, IBULHSGFIN, ICICIBANK, ICICIGI, ICICIPRULI, IDEA, IDFCFIRSTB, IEX, IGL, INDHOTEL, INDIACEM, INDIAMART, INDIGO, INDUSINDBK, INDUSTOWER, INFY, IOC, IPCALAB, IRCTC, ITC, JINDALSTEL, JSWSTEEL, JUBLFOOD, KOTAKBANK, L&TFH, LALPATHLAB, LAURUSLABS, LICHSGFIN, LT, LTI, LTTS, LUPIN, M&M, M&MFIN, MANAPPURAM, MARICO, MARUTI, MCDOWELL-N, MCX, METROPOLIS, MFSL, MGL, MOTHERSON, MPHASIS, MRF, MUTHOOTFIN, NATIONALUM, NAUKRI, NAVINFLUOR, NESTLEIND, NMDC, NTPC, OBEROIRLTY, OFSS, ONGC, PAGEIND, PEL, PERSISTENT, PETRONET, PFC, PIDILITIND, PIIND, PNB, POWERGRID, PVRINOX, RAMCOCEM, RBLBANK, RECLTD, RELIANCE, SAIL, SBICARD, SBILIFE, SBIN, SHREECEM, SIEMENS, SRF, SRTRANSFIN, SUNPHARMA, SUNTV, SUPREMEIND, TATACHEM, TATACOMM, TATACONSUM, TATAMOTORS, TATAPOWER, TATASTEEL, TCS, TECHM, TITAN, TORNTPHARM, TORNTPOWER, TRENT, TVSMOTOR, UBL, ULTRACEMCO, UPL, VEDL, VOLTAS, WIPRO, ZEEL, ZYDUSLIFE

(500+ stocks total - above is representative list)

---

## IMPLEMENTATION RECOMMENDATIONS FOR CLONE

### Technology Stack Suggestions:
- **React** or **Vue.js** for conditional rendering (perfect for this UI pattern complexity)
- **React Hook Form** or **Formik** for complex form state management
- **TailwindCSS** or **Material-UI** for styling (appears to use blue/light blue theme)
- **ComboBox/Autocomplete libraries** for dropdown cascading
- **Dynamic form builders** for leg management (add/remove/clone)

### Key Code Patterns Needed:
1. Conditional dropdown renderer (11+ variants)
2. Dynamic array manager for legs (with state cloning)
3. Toggle-based input visibility system
4. Segment-based column visibility toggle
5. Time picker component (custom time input)
6. Date range picker component

---

## SUMMARY

This is a **production-grade algo trading platform** with highly sophisticated conditional UI architecture. The core complexity lies in:
1. The 11-type strike criteria cascading system
2. Dynamic leg management with cloning
3. Toggle-based conditional rendering throughout
4. Segment-based visibility toggle system

Successfully cloning this would require careful implementation of these patterns, especially the strike criteria cascade and leg management systems.

**Absolute incredible discovery**: The hidden conditional architecture throughout this page creates a powerful trading interface that adapts based on user selections - this is the key differentiator making it clone-worthy.

---

## IMPLEMENTATION STATUS

### ✅ Completed Features:
- [x] All 11 strike criteria options with conditional rendering
- [x] Dynamic leg management (add/remove/duplicate)
- [x] Toggle-based conditional rendering throughout
- [x] Per-leg controls with 7 independent settings
- [x] Overall strategy settings with 3-column layout
- [x] Dashboard page with all cards and sidebar
- [x] Header navigation with all dropdowns
- [x] Live Algo Trading page (complete with all components)
- [x] Mock backtesting engine
- [x] Results dashboard with charts

### 📋 Pending Enhancements:
- [ ] Refine input labels (e.g., "Lower Range", "Upper Range")
- [ ] Add "Stocks - Cash / F&O" tab with Nifty 500 stocks
- [ ] Add "Delta Exchange" tab with crypto instruments
- [ ] Implement "Perpetual FUT" segment selector
- [ ] Create Forward Test page
- [ ] Create Portfolio page
- [ ] Add RA Algos page
- [ ] Add Billing page
- [ ] Add Broker Setup page
- [ ] Add Heatmap page
- [ ] Add Trade MTM page

---

**End of Enhanced Documentation**
