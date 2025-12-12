# ALGOTEST - COMPLETE HIGH-LEVEL DOCUMENTATION FOR ALL PAGES
## Complete Feature Parity & Implementation Guide

Based on exhaustive exploration of the entire AlgoTest platform, here's the definitive documentation for all pages.

---

## TABLE OF CONTENTS

1. [Global Architecture](#global-architecture)
2. [Page 1: Dashboard](#page-1-dashboard)
3. [Page 2: Backtest](#page-2-backtest)
4. [Page 3: Live Algo Trading](#page-3-live-algo-trading)
5. [Page 4: Forward Test](#page-4-forward-test)
6. [Page 5: Portfolio](#page-5-portfolio)
7. [Page 6: RA Algos](#page-6-ra-algos)
8. [Page 7: Billing](#page-7-billing)
9. [Page 8: Broker Setup](#page-8-broker-setup)
10. [Page 9: Heatmap](#page-9-heatmap)
11. [Page 10: Trade MTM](#page-10-trade-mtm)
12. [Hidden Conditional Architecture](#hidden-conditional-architecture)
13. [Implementation Checklist](#implementation-checklist)

---

## GLOBAL ARCHITECTURE

### Header Navigation (Fixed, Present on All Pages)

**Structure:**
```
[Logo] | [Dropdown Buttons] | [Right-aligned Controls]
```

**Components:**
- **Backtest** (Dropdown)
  - Strategies (Create, Backtest)
  - Portfolios (Backtest, Optimize)

- **Algo Trade** (Dropdown) [NEW badge]
  - Algo Trade (All Strategies + Portfolios)
  - Forward Test (All Strategies + Portfolios)
  - Daily Straddle Heatmap
  - Daily Trades Analysis

- **Signals** (Dropdown)
  - Signals AI Agent [NEW badge]
  - Signals Dashboard
  - Execution (Algo Trade + Forward Test)
  - Signals Backtest [NEW badge]

- **Builder + Simulator** (Dropdown)
  - Risk Dashboard
  - Strategy Builder
  - Simulator
  - VRP Dashboard [Locked]
  - Earnings Calendar [Locked]
  - IV Rank & Percentile [Locked]
  - Orderbook

- **Webinars** (Dropdown)
  - List of upcoming webinars

- **Static Links:**
  - Pricing (→ /billing)
  - Broker Setup (→ /broker)

- **Credits Display:** [PA] [Credits: 43]

---

## PAGE 1: DASHBOARD

### URL: /dashboard

### Layout Structure

**3-Column Layout:**
```
Left (2/3): Main Content
│
├── Tab Switcher
│   ├── Algo Trading (Active)
│   ├── Discretionary Trading
│   └── Indicator Algo Trading
│
├── Main Cards Grid (5 columns)
│   ├── Backtest AI Powered [New badge]
│   ├── RA Algos [New Updates badge]
│   ├── Algo Trade
│   ├── Forward Test
│   ├── Portfolios
│   ├── Daily Straddle Heatmap
│   ├── Daily Trades Analysis
│   ├── Crypto LIVE Section
│   └── Groww Integration
│
└── Educational Content
    ├── Tutorials in English (Carousel)
    └── Tutorials in Hindi (Carousel)

Right (1/3): Sidebar
├── Signal Agent Promotion
├── Static IP Plan
├── Option Selling Webinar
├── InvestHQ Integration
├── Your Brokers
├── Help Centre
└── Learn/Courses
```

### Key Components

**Tab Switching Logic:**
```
Active Tab → Filters displayed cards
Shows different content for each trading type
Maintains state in URL or component state
```

**Card Structure (Standard):**
```
[Icon] [Title] [Badge]
─────────────────────
Description text area
─────────────────────
Mini Chart / Data Display (Optional)
─────────────────────
[CTA Button →]
```

**Sidebar Panels:**
```
Each panel has:
- Title
- Description
- CTA Button/Link
- Optional: Navigation dots (carousel)
- Optional: Additional UI controls
```

---

## PAGE 2: BACKTEST

### URL: /backtest

### Critical: CONDITIONAL DROPDOWN CASCADING ARCHITECTURE ⭐

**THIS IS THE HIDDEN ARCHITECTURE THAT TRANSFORMS THE PAGE:**

#### Dynamic Strike Criteria System

When user selects from "Select Strike Criteria" dropdown, the **rightmost dropdown completely changes** based on selection:

```typescript
Strike Criteria Selection Mapping:

"Strike Type" (Default)
├─ Right Dropdown Shows: [ATM | ITM20-1 | OTM1-30] (51 options)
├─ Additional Inputs: NONE
└─ Use Case: Fixed strike relative to ATM

"Premium Range"
├─ Right Dropdown Shows: [Min Premium Input] [Max Premium Input]
├─ Additional Inputs: TWO number inputs
└─ Use Case: Select options within premium band

"Closest Premium"
├─ Right Dropdown Shows: [Premium Value Input]
├─ Additional Inputs: Single number input
└─ Use Case: Select option closest to premium value

"Premium >="
├─ Right Dropdown Shows: [Threshold Input]
├─ Additional Inputs: Single number input
└─ Use Case: All options with premium ≥ value

"Premium <="
├─ Right Dropdown Shows: [Threshold Input]
├─ Additional Inputs: Single number input
└─ Use Case: All options with premium ≤ value

"Straddle Width"
├─ Right Dropdown Shows: [Width Value Input]
├─ Additional Inputs: Single number input
└─ Use Case: Straddle distance between strikes

"% of ATM"
├─ Right Dropdown Shows: [Percentage Input]
├─ Additional Inputs: Single percentage input
└─ Use Case: Strike % away from ATM

"Synthetic Future"
├─ Right Dropdown Shows: [DISABLED - No dropdown]
├─ Additional Inputs: NONE
└─ Use Case: Treat position as synthetic future

"ATM Straddle Premium %"
├─ Right Dropdown Shows: [Percentage Input]
├─ Additional Inputs: Single percentage input
└─ Use Case: Straddle premium percentage

"Closest Delta"
├─ Right Dropdown Shows: [Delta Value Input]
├─ Additional Inputs: Single decimal input (0.0-1.0)
└─ Use Case: Option with closest delta

"Delta Range"
├─ Right Dropdown Shows: [Min Delta Input] [Max Delta Input]
├─ Additional Inputs: TWO decimal inputs
└─ Use Case: Options within delta band
```

### Page Layout

```
┌─────────────────────────────────────┐
│ Instrument Tabs (4 tabs)            │
│ Weekly & Monthly | Monthly Only |   │
│ Stocks - Cash/F&O | Delta Exchange  │
├─────────────────────────────────────┤
│ Left Column (Instrument/Legwise)    │ Right Column (Entry)
├─────────────────────────────────────┤
│ • Index Selector                    │ • Strategy Type (Toggle)
│ • Underlying from                   │ • Entry Time
│   (Cash/Futures)                    │ • Exit Time
│ • Square Off                        │ • No re-entry after (Conditional)
│   (Partial/Complete)                │ • Overall Momentum (Conditional)
│ • Trail SL to Break-even            │
│   (Checkbox + legs toggle)          │
├─────────────────────────────────────┤
│ Leg Builder (REPEATABLE SECTION)    │
├─────────────────────────────────────┤
│ PER-LEG CONTROLS (Multiple)         │
│ ├─ Target Profit (Toggle)           │
│ ├─ Stop Loss (Toggle)               │
│ ├─ Trail SL (Toggle)                │
│ ├─ Re-entry on Tgt (Toggle)         │
│ ├─ Re-entry on SL (Toggle)          │
│ ├─ Simple Momentum (Toggle)         │
│ └─ Range Breakout (Toggle)          │
├─────────────────────────────────────┤
│ Overall Strategy Settings           │
├─────────────────────────────────────┤
│ • Overall Stop Loss                 │
│ • Overall Target                    │
│ • Trailing Options                  │
├─────────────────────────────────────┤
│ Date Range Selection                │
├─────────────────────────────────────┤
│ [Save Strategy] [Start Backtest]    │
└─────────────────────────────────────┘
```

### Leg Builder with Dynamic Rendering

**Base Leg Builder (Static):**
```
Select segments: [Futures] [Options]
Total Lot: [Spinbutton]
Position: [Buy] [Sell]
Option Type: [Call] [Put]
Expiry: [Weekly ▼] (Dropdown: 4 options)
Strike Criteria: [Strike Type ▼] (Dropdown: 11 options) ← TRIGGERS CASCADING
Strike Type: [DYNAMIC DROPDOWN] ← CHANGES BASED ON CRITERIA

[Add Leg] Button
```

**When "Add Leg" Clicked:**
```
→ New leg cloned with defaults
→ Leg gets unique ID (#1, #2, #3...)
→ All toggles OFF except Range Breakout (ON)
→ Can add unlimited legs
```

### Per-Leg Controls (Repeating for Each Leg)

**Toggle-Based Conditional Rendering:**

```
Target Profit
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Unit Dropdown: [Points | Underlying Pts | % | Underlying %]
│  └─ Value Input: Spinbutton
└─ When OFF: Hidden

Stop Loss
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Unit Dropdown: [Points | Underlying Pts | % | Underlying %]
│  └─ Value Input: Spinbutton
└─ When OFF: Hidden

Trail SL (Trailing Stop Loss)
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Unit Dropdown: [Points | Percentage]
│  ├─ Lock Value Input: Spinbutton
│  └─ Trail Value Input: Spinbutton
└─ When OFF: Hidden/Disabled

Re-entry on Tgt (Target)
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Strategy Dropdown: [RE ASAP | RE ASAP ↩ | RE MOMENTUM | RE MOMENTUM ↩]
│  ├─ Leg Selector: [1, 2, 3...]
│  └─ Qty Adjuster: [+/- buttons]
└─ When OFF: Hidden

Re-entry on SL (Stop Loss)
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Strategy Dropdown: [RE ASAP | RE ASAP ↩ | RE MOMENTUM | RE MOMENTUM ↩]
│  ├─ Leg Selector: [1, 2, 3...]
│  └─ Qty Adjuster: [+/- buttons]
└─ When OFF: Hidden

Simple Momentum
├─ Toggle: ON/OFF
├─ When ON shows:
│  ├─ Direction Dropdown: [Points(Pts)↑ | Points(Pts)↓ | %(%)↑ | %(%)↓ | Underlying...]
│  ├─ Value Input: Spinbutton
│  └─ Time Picker: HH:MM AM/PM format
└─ When OFF: Hidden

Range Breakout
├─ Toggle: ON/OFF (Default ON for Leg #2+)
├─ When ON shows:
│  ├─ Time Picker: HH:MM AM/PM
│  ├─ Direction: [High] [Low]
│  └─ Instrument: [Underlying] [Instrument]
└─ When OFF: Hidden
```

### Overall Strategy Settings

```
Overall Stop Loss
├─ Toggle: ON/OFF (Default ON)
├─ Type: [Max Loss | Total Premium %]
└─ Value: Spinbutton
  └─ With Re-entry SL options

Overall Target
├─ Toggle: ON/OFF (Default ON)
├─ Type: [Max Profit | Total Premium %]
└─ Value: Spinbutton
  └─ With Re-entry Target options

Trailing Options
├─ Toggle: ON/OFF (Default ON)
├─ Strategy: [Lock | Lock and Trail | Overall Trail SL]
├─ If profit reaches: [Input ≥ 500]
└─ Lock profit: [Default: 1]
```

### Advanced Features

**Re-entry Strategies (7 Total):**
- RE ASAP (Immediate)
- RE ASAP ↩ (Cyclic)
- RE MOMENTUM (Momentum-gated)
- RE MOMENTUM ↩ (Cyclic + Momentum)
- RE COST (At cost price)
- RE COST ↩ (Cyclic cost)
- Lazy Leg (Delayed entry)

**Momentum Directions (8 Total):**
- Points (Pts) ↑ (Up movement)
- Points (Pts) ↓ (Down movement)
- Percent (%) ↑ (Percentage up)
- Percent (%) ↓ (Percentage down)
- Underlying Pts ↑
- Underlying Pts ↓
- Underlying % ↑
- Underlying % ↓

---

## PAGE 3: LIVE ALGO TRADING

### URL: /live

### Key Features

```
Top Controls:
├─ Auto Execution (Button)
├─ Auto restart paused executions (Toggle)
├─ Switch to Pro View (Button)
├─ History (Link)
├─ Broker Login X/Y (Status)
├─ Help Center (Dropdown)
├─ Add (Button)
└─ Add Plan (Button)

MTM Metrics Section:
├─ Total MTM: ₹ 0
├─ Open Positions: 0
├─ Margin Blocked: ₹ 0
├─ Include Brokerage (Toggle)
└─ Taxes & charges (Toggle)

Deployed Strategies Section:
├─ Status Tabs: Running | Paused | Sq Off | Error | Manual
├─ Show archived (Toggle)
└─ Strategy Cards (Empty state in new account)

Activation Section:
├─ Tab Navigation: [Strategies] [Portfolios] [RA Algos]
├─ Search Bar: "Search Strategies"
├─ Filters:
│  ├─ Execution Days: [All Selected ▼]
│  ├─ Filter: [Weekdays] [DTE]
│  └─ Day Selectors: M, T, W, Th, F
└─ Strategy List (Disabled until strategies deployed)
```

---

## PAGE 4: FORWARD TEST

### URL: /forward-test

**Identical structure to Live Trading** with:
```
- Same deployed strategies section
- Same activation panel
- Same deployment controls
- Different purpose: Simulates future strategy performance
```

---

## PAGE 5: PORTFOLIO

### URL: /portfolio

```
Header:
├─ [Import] Button
└─ [Create new portfolio] Button (Green/Primary)

Main Area:
├─ Search: "Search Portfolio"
└─ Portfolio Cards Grid
   └─ (Empty state or portfolio cards)
```

---

## PAGE 6: RA ALGOS

### URL: /ra-algos

```
Page Title: "RA Algos"
Subtitle: "Ready to use algo strategies created by experts"

Strategy Cards Grid:
├─ Each card shows:
│  ├─ Strategy Name
│  ├─ Performance Metrics
│  ├─ Risk Indicators
│  └─ [Subscribe] or [Deploy] Button
```

---

## PAGE 7: BILLING

### URL: /billing

```
Current Plan Section:
├─ Plan Name
├─ Features List
├─ Expiry Date
└─ [Upgrade] Button

Available Plans Grid:
├─ Free Plan
├─ Basic Plan
├─ Pro Plan
└─ Enterprise Plan

Each plan card shows:
├─ Plan Name
├─ Price
├─ Features List
├─ Limitations
└─ [Select Plan] Button
```

---

## PAGE 8: BROKER SETUP

### URL: /broker

```
Supported Brokers Grid:
├─ Broker Cards (15+ brokers)
│  ├─ Broker Logo
│  ├─ Broker Name
│  ├─ Connection Status
│  └─ [Login] or [Configure] Button

Configuration Panel:
├─ API Credentials Input
├─ Connection Testing
└─ [Save] Button
```

---

## PAGE 9: HEATMAP

### URL: /heatmap

```
Title: "Daily Straddle Heatmap"

Controls:
├─ Index Selector: [NIFTY | BANKNIFTY | FINNIFTY]
├─ Date Range Picker
└─ [Generate] Button

Visualization:
├─ Calendar Heatmap
├─ Color-coded cells (Red/Green for Loss/Profit)
├─ Hover tooltips with exact values
└─ Legend
```

---

## PAGE 10: TRADE MTM

### URL: /trade-mtm

```
Title: "Daily Trades Analysis"

Filters:
├─ Date Range
├─ Index Filter
└─ Strategy Filter

Trade Table:
├─ Columns:
│  ├─ Date
│  ├─ Strategy
│  ├─ Entry Time
│  ├─ Exit Time
│  ├─ PnL
│  ├─ Max Drawdown
│  └─ Win/Loss Status
└─ Pagination Controls

Summary Statistics:
├─ Total Trades
├─ Win Rate
├─ Average PnL
└─ Sharpe Ratio
```

---

## HIDDEN CONDITIONAL ARCHITECTURE

### Key Principles

1. **Dropdown Cascading**: One dropdown selection completely transforms adjacent UI
2. **Toggle Dependencies**: Enabling one control reveals related sub-controls
3. **Leg-Based Conditions**: Leg #1 vs Leg #2+ have different default states
4. **Dynamic Value Types**: Same field can accept different data types based on context
5. **State Preservation**: Duplicating legs preserves all toggle states

### Implementation Patterns

```typescript
// Pattern 1: Conditional Rendering
{isEnabled && <div>{/* Conditional Content */}</div>}

// Pattern 2: Dynamic Types
type StrikeValue = string | number | { min: number; max: number } | null;

// Pattern 3: Leg Index Checks
{leg.legIndex > 0 && <option value="ORB Range">ORB Range</option>}

// Pattern 4: Default States
const defaultRangeBreakout = legIndex === 0 ? false : true;
```

---

## IMPLEMENTATION CHECKLIST

### Phase 1: Core Pages (Already Implemented ✅)
- [x] Dashboard
- [x] Backtest (with full conditional logic)
- [x] Header Navigation
- [x] Mock Backtesting Engine

### Phase 2: Trading Pages
- [ ] Live Algo Trading (/live)
- [ ] Forward Test (/forward-test)
- [ ] Portfolio (/portfolio)

### Phase 3: Utility Pages
- [ ] RA Algos (/ra-algos)
- [ ] Billing (/billing)
- [ ] Broker Setup (/broker)
- [ ] Heatmap (/heatmap)
- [ ] Trade MTM (/trade-mtm)

### Phase 4: Backend Integration
- [ ] User Authentication
- [ ] Database Schema
- [ ] Broker API Integration
- [ ] Real Backtesting Engine
- [ ] Payment Gateway

### Phase 5: Production Readiness
- [ ] Error Handling
- [ ] Loading States
- [ ] Responsive Design
- [ ] Performance Optimization
- [ ] SEO Optimization
- [ ] Analytics Integration

---

**End of Documentation**

This documentation serves as the single source of truth for implementing a complete AlgoTest clone with pixel-perfect feature parity.
