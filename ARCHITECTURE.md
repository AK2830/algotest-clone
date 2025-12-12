# ALGOTEST - CONDITIONAL ARCHITECTURE IMPLEMENTATION NOTES

## Critical Discovery: Dynamic Dropdown Cascading

### The Hidden Pattern

**Strike Criteria Selection** → **Completely Different Right-Side UI**

When user selects from "Strike Criteria" dropdown, the right dropdown/input field(s) **completely transform**:

```
Strike Criteria: "Strike Type" 
  → Right side shows: Dropdown with 51 options (ITM20-OTM30)

Strike Criteria: "Premium Range"
  → Right side shows: TWO inputs (Min Premium | Max Premium)

Strike Criteria: "Closest Premium"
  → Right side shows: Single number input (Target premium value)

Strike Criteria: "Premium >=" or "Premium <="
  → Right side shows: Single number input (Threshold)

Strike Criteria: "Straddle Width"
  → Right side shows: Single number input (Width in points)

Strike Criteria: "% of ATM"
  → Right side shows: Single number input (Percentage)

Strike Criteria: "Synthetic Future"
  → Right side shows: NOTHING (disabled/hidden)

Strike Criteria: "ATM Straddle Premium %"
  → Right side shows: Single number input (Percentage)

Strike Criteria: "Closest Delta"
  → Right side shows: Single number input (Delta 0.0-1.0)

Strike Criteria: "Delta Range"
  → Right side shows: TWO inputs (Min Delta | Max Delta)
```

### Implementation Architecture

```typescript
interface StrikeCriteriaConfig {
  type: 'dropdown' | 'single-input' | 'dual-input' | 'none';
  inputType?: 'number' | 'text' | 'select';
  placeholder1?: string;
  placeholder2?: string;
  min?: number;
  max?: number;
  step?: number;
  options?: string[]; // For dropdown type
}

const STRIKE_CRITERIA_MAPPINGS: Record<string, StrikeCriteriaConfig> = {
  'Strike Type': {
    type: 'dropdown',
    options: generateStrikeOptions() // ITM20-OTM30
  },
  'Premium Range': {
    type: 'dual-input',
    inputType: 'number',
    placeholder1: 'Min Premium',
    placeholder2: 'Max Premium',
    min: 1
  },
  'Closest Premium': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Target Premium',
    min: 1
  },
  'Premium >=': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Min Premium',
    min: 1
  },
  'Premium <=': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Max Premium',
    min: 1
  },
  'Straddle Width': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Width (points)',
    min: 50,
    step: 50
  },
  '% of ATM': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Percentage',
    min: 0,
    max: 100,
    step: 0.1
  },
  'Synthetic Future': {
    type: 'none' // No additional input needed
  },
  'ATM Straddle Premium %': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Premium %',
    min: 0,
    max: 100,
    step: 0.1
  },
  'Closest Delta': {
    type: 'single-input',
    inputType: 'number',
    placeholder1: 'Target Delta',
    min: 0,
    max: 1,
    step: 0.01
  },
  'Delta Range': {
    type: 'dual-input',
    inputType: 'number',
    placeholder1: 'Min Delta',
    placeholder2: 'Max Delta',
    min: 0,
    max: 1,
    step: 0.01
  }
};
```

### Component Rendering Logic

```tsx
function renderStrikeCriteriaInput(strikeCriteria: string, value: any, onChange: Function) {
  const config = STRIKE_CRITERIA_MAPPINGS[strikeCriteria];
  
  switch (config.type) {
    case 'dropdown':
      return (
        <select value={value} onChange={onChange}>
          {config.options.map(opt => <option key={opt}>{opt}</option>)}
        </select>
      );
      
    case 'single-input':
      return (
        <input
          type="number"
          placeholder={config.placeholder1}
          min={config.min}
          max={config.max}
          step={config.step}
          value={value}
          onChange={onChange}
        />
      );
      
    case 'dual-input':
      return (
        <>
          <input
            type="number"
            placeholder={config.placeholder1}
            min={config.min}
            value={value?.min}
            onChange={(e) => onChange({ ...value, min: e.target.value })}
          />
          <input
            type="number"
            placeholder={config.placeholder2}
            min={config.min}
            value={value?.max}
            onChange={(e) => onChange({ ...value, max: e.target.value })}
          />
        </>
      );
      
    case 'none':
      return null;
  }
}
```

### Additional Hidden Features Discovered

1. **ORB Range Unit Type**
   - Only appears in Leg #2 and beyond
   - Not available in first leg
   - Conditional rendering based on leg index

2. **Range Breakout Default State**
   - First leg: DEFAULT OFF
   - Additional legs: DEFAULT ON
   - Different initialization based on leg number

3. **RE COST Strategy**
   - Only visible in per-leg controls
   - Not visible in base leg builder section
   - Leg-specific feature

### State Management Pattern

```typescript
interface LegState {
  strikeCriteriaValue: string | number | { min: number; max: number };
  // Changes type based on Strike Criteria selected
}

// When Strike Criteria changes:
function handleStrikeCriteriaChange(newCriteria: string) {
  const config = STRIKE_CRITERIA_MAPPINGS[newCriteria];
  
  // Reset value to appropriate default
  if (config.type === 'dual-input') {
    setStrikeCriteriaValue({ min: 0, max: 0 });
  } else if (config.type === 'single-input') {
    setStrikeCriteriaValue(0);
  } else if (config.type === 'dropdown') {
    setStrikeCriteriaValue('ATM');
  } else {
    setStrikeCriteriaValue(null);
  }
}
```

### Validation Rules

```typescript
function validateStrikeCriteriaInput(criteria: string, value: any): boolean {
  const config = STRIKE_CRITERIA_MAPPINGS[criteria];
  
  if (config.type === 'dual-input') {
    return value?.min !== undefined && value?.max !== undefined && value.min < value.max;
  }
  
  if (config.type === 'single-input') {
    return value !== undefined && value >= (config.min || 0);
  }
  
  return true; // dropdown or none always valid
}
```

## Implementation Priority

**HIGH PRIORITY:**
1. ✅ Implement dynamic Strike Criteria rendering system
2. ✅ Add conditional unit type options (ORB Range in Leg #2+)
3. ✅ Fix Range Breakout default states (ON for new legs)
4. ✅ Update TradeLeg interface to support dual-value inputs

**MEDIUM PRIORITY:**
5. Add comprehensive validation for each strike criteria type
6. Handle edge cases (min/max validation, delta ranges, etc.)
7. Add proper TypeScript types for dynamic values

**LOW PRIORITY:**
8. Add tooltips explaining each strike criteria option
9. Add visual indicators for which input type will appear
10. Add examples/placeholders for each option

---

This architecture document will guide the implementation of the hidden conditional dropdown system.
