# SIGNALS PAGE - Comprehensive Documentation

## Page Overview

The **Signals** page (`/signals`) is a TradingView signal integration platform with 2 main tab sections and rich educational content.

### Top Navigation Section:
- **Tabs**: "Your Signal" (active) | "Trade Signals"
- **Execution link**: Links to `/live/signals?type=LIVE`
- **Help Center dropdown**: Accessible help resources
- **"View Signals Plan" button**: Premium plan upgrade

### Main Interface Elements:

**Search & Filter Bar:**
- Search Signal textbox
- Filter buttons: "All", "Intraday", "Positional" (toggle style)
- "Broker Login 0/1" link
- "Pinescripts Templates" button
- "+ New Signal" button (primary CTA)

**Empty State Message:**
- "No Signals created yet"
- "Start automating your indicator based TradingView strategies"
- "Create your first Signal" button (blue)

**Bottom Sections:**
- **Tutorials**: Video sections with language toggle (English / हिन्दी)
  - 4 YouTube video cards visible
- **FAQ's**: Accordion-style disclosure buttons with 11+ questions:
  - How does AlgoTest Signals work? What does it do?
  - How many signals can I generate using this?
  - What is the advantage of using AlgoTest Signals?
  - Can I backtest a TradingView strategy on AlgoTest using Signals Plan?
  - Can I trade stocks and commodities using the AlgoTest Signals Plan?
  - Do I need to activate my strategy daily for live trading?
  - Why was my trade executed in AlgoTest without any alert in TradingView?
  - Can I trade positional strategies using AlgoTest Signals Plan?
  - Do I need to purchase a TradingView Premium plan to use Signals?
  - How can I create an alert on multiple indicators?
  - How many strategies can I deploy in the AlgoTest Signals Plan?
  - Why is execution in forward testing delayed?
  - Will the AlgoTest Signal work if I turn off my internet connection?

---

## Signal Creation Flow - 4-Step Wizard

### Step 1/4: "Listen to my signal from"

**6 Signal Source Options:**

**Left Column:**
1. **TradingView Indicators** - Use standard TradingView indicators to generate signals
2. **Chartink** - Integration with Chartink alerts
3. **GoCharting** - Integration with GoCharting platform

**Right Column:**
4. **TradingView Strategy (Pinescript)** - Pine Script strategy-based signals
5. **Multi Stocks from Chartink** - Bulk multi-stock Chartink signals
6. **Custom Scripts** - Custom webhook-based signals

**Right Sidebar - "Points to remember":**
- Requirement 1: You must have a TradingView Pro or Chartink Premium account
- Requirement 2: You cannot connect the same strategy with TradingView Indicators, TradingView Strategy, Chartink and Custom Scripts

---

### Step 2/4: "Select the Execution Type for the Strategy"

**2 Execution Type Options:**

1. **Algo Trade**
   - "Deploy your strategies LIVE with your indicator-based signals."
   - Real-money trading mode

2. **Forward Test**
   - "Test your strategy performance without risking real capital with your indicator-based signals."
   - Paper trading / backtesting mode

---

### Step 2/4 (Continued): "Select a Strategy"

**Interface Elements:**
- Search Strategy textbox
- "+ Create Strategy" button (opens form to create new strategy)
- **Tabs**: "Intraday" (selected) | "Positional"

**Strategy List** (examples):
- midcap1044, miD1059, mid1112, MID1214, NIFTY930, BNF952, BNF1044, BNF1109, BNF0959
- NIFTY922 RENRTY 25%sl ITM1, NIFTY930 RENRTY 25%sl OTM1, etc.

**Right Sidebar - "Create" Section:**
- **Create**: "Create a strategy with trades. These trades will be executed as signal is received."
- **Strategy Examples**:
  - ATM Call Buy
  - ATM Put Buy
  - Short Straddle

---

### Step 3/4: "Select Broker"

**Interface Elements:**
- **Broker Selection Card**: Shows broker selection with checkbox
- **Upgrade Message**: "Want to connect multiple brokers to execute your signals? Upgrade your plan" with "View Plans" button
- **Selected Brokers Section**: Shows selected brokers count
- **"Setup Execution for strategy" button** (blue, primary action)

**Right Sidebar:**
- Description: "After receiving an indicator-based signal for this strategy, the broker will execute the corresponding trades."

---

### Step 3/4 (Final Config): "Setup execution for AlgoTest Strategy"

This is the **most complex page** with multi-leg execution configuration.

#### Top-Level Controls:

**Quantity Multiplier:**
- Decrease button
- Spinbutton: value="1" (range: aria-valuemin="1")
- Increase button

**Auto Sq Off on Margin Error:**
- Toggle switch: checked

**Trade Monitoring:**
- Radio button group:
  - "on LTP" (selected)
  - "on Candle Close"
- "Know more" link → Documentation link

---

#### Leg Configuration Sections:

**Leg Tabs:** 
- Tab buttons: "Leg 1" | "Leg 2"
- "Copy To Legs" button - Copies Leg 1 settings to Leg 2

**Per-Leg Configuration (Leg 1 & Leg 2):**

Each leg has identical structure with the following controls:

**Order Configuration:**
- **NRML/MIS Dropdown**
  - Options: "NRML" (selected) | "MIS"
  
- **Tgt/SL Ref Price Section:**
  - Trigger dropdown: "Trigger" (selected) | "Traded"
  - Delay: Spinbutton with "sec" unit
  - Entry by: (field)

**Entry Order Configuration:**
- **Entry Order Type Dropdown**
  - Value: "Trigger"
  - NOTE: Conditionally rendered based on Tgt/SL Ref Price

- **Buffer type Dropdown**
  - Options: "Points" | "%" (selected)
  - Trigger buffer: Spinbutton value=0
  - Limit buffer: Spinbutton value=10
  - Convert to Market After: Spinbutton (range: 1-20) value=10, unit="sec"

**Exit Order Configuration:**
- **Exit Order Type Dropdown**
  - Options: "Market" | "Limit" (selected)

- **Buffer type Dropdown**
  - Options: "Points" | "%" (selected)
  - Trigger buffer: Spinbutton value=0
  - Limit buffer: Spinbutton value=10
  - Convert to Market After: Spinbutton (range: 1-20) value=10, unit="sec"

**Monitoring & Frequency:**
- **Monitoring Dropdown**
  - Options: "Continuous" (selected) | "Delayed"
- **Frequency Spinbutton**
  - Range: aria-valuemin="5"
  - Value: 5 sec

---

#### Right Sidebar - Product Type Explanations:

**NRML**
- Description: "The 'NRML' product type allows traders to carry their positions until expiry day."

**CNC**
- Description: "The 'CNC' product type allows traders to carry their position..."

**MIS**
- Description: "The broker squares off all open positions that are designated as MIS at the Broker defined MIS Time. These trades are intraday only."

**Market**
- Description: "The 'Market' order type will Buy or Sell an instrument at the available price."

**Limit**
- Description: "The 'Limit' order type will Buy or Sell an instrument at the defined limit price."

**Link**: "Click here to learn more about execution settings"

---

#### Action Button:

**"Start Listening" Button**
- Primary blue button at bottom-right
- Initiates signal listening/execution

---

## Key Conditional UI Patterns in Signals

### Pattern 1: Entry Order Type Conditional Rendering
The "Entry Order Type" dropdown changes based on Tgt/SL Ref Price "Trigger" selection:
- If "Trigger" selected → "Entry Order Type" shows "Trigger" as default
- If "Traded" selected → May change available options or defaults

### Pattern 2: Buffer Type Dynamic Dropdowns
The buffer type dropdown (Points vs %) affects how trigger/limit buffer values are interpreted:
- "Points" mode → Raw point values
- "%" mode → Percentage values

### Pattern 3: Monitoring Type Impact
"Monitoring" dropdown (Continuous vs Delayed) likely controls:
- Frequency polling interval visibility/requirements
- Re-evaluation strategy of order status

### Pattern 4: Leg Cloning
"Copy To Legs" button duplicates all settings from current leg to other legs:
- Leg 1 → All settings copied to Leg 2
- Maintains order type, buffer, timing, all parameters

---

## Complete Signal Creation Flow Map

```
Step 1: Select Signal Source
  ↓
Step 2: Select Execution Type (Algo Trade / Forward Test)
  ↓
Step 2: Select Strategy (Intraday / Positional)
  ↓
Step 3: Select Broker(s)
  ↓
Step 3/4: Configure Execution (Quantity, Monitoring, Multi-Leg Orders)
  ↓
"Start Listening" → Signal goes LIVE
```

---

## Implementation Recommendations

### For Signal Platform Clone:

1. **4-Step Wizard Component**
   - Progress indicator (Step X/4)
   - Back button navigation
   - Conditional step rendering

2. **Conditional Dropdown System**
   - Entry Order Type changes based on Tgt/SL Ref Price
   - Buffer type controls numerical input interpretation
   - Monitoring type affects frequency visibility

3. **Multi-Leg Management**
   - Tabbed leg interface (Leg 1, Leg 2, ...)
   - "Copy To Legs" functionality for bulk configuration
   - Independent per-leg control sections

4. **Execution Configuration Form**
   - 5+ conditional dropdowns with dependent chains
   - Spinbutton groups with min/max ranges
   - Real-time validation and dependency handling

5. **Right Sidebar Context**
   - Dynamic descriptions based on selected option
   - Contextual help text and explanations
   - Link to full documentation

---

## Technical Architecture Notes

**Data Flow:**
- Signal Source → Execution Type → Strategy Selection → Broker Selection → Execution Config → Active Listening

**State Management Requirements:**
- Multi-step form state (4 steps)
- Conditional field visibility based on selections
- Multi-leg configuration state (Leg 1, Leg 2)
- Dropdown dependency chains

**API Integration Points:**
- Signal source validation (TradingView Auth, Chartink API)
- Strategy list loading (filtered by Intraday/Positional)
- Broker connection status
- Execution order placement on signal trigger

---

## FAQ Section (11 Questions)

1. **How does AlgoTest Signals work? What does it do?**
2. **How many signals can I generate using this?**
3. **What is the advantage of using AlgoTest Signals?**
4. **Can I backtest a TradingView strategy on AlgoTest using Signals Plan?**
5. **Can I trade stocks and commodities using the AlgoTest Signals Plan?**
6. **Do I need to activate my strategy daily for live trading?**
7. **Why was my trade executed in AlgoTest without any alert in TradingView?**
8. **Can I trade positional strategies using AlgoTest Signals Plan?**
9. **Do I need to purchase a TradingView Premium plan to use Signals?**
10. **How can I create an alert on multiple indicators?**
11. **How many strategies can I deploy in the AlgoTest Signals Plan?**
12. **Why is execution in forward testing delayed?**
13. **Will the AlgoTest Signal work if I turn off my internet connection?**

---

This Signals feature represents the **bridge between TradingView/Chartink analysis and live trading execution** - a critical feature for traders automating their indicator-based strategies.
