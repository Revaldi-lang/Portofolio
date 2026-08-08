# Design System Inspired by Rivet

## 1. Visual Theme & Atmosphere

Rivet's design system embodies a sophisticated, forward-thinking aesthetic tailored for creative technologists and design-focused developers. The visual language combines a dark, minimalist foundation with vibrant accent colors that pop against neutral backgrounds, creating a sense of exploration and discovery. The system balances technical precision with human-centered design, leveraging generous whitespace, modern typography, and carefully orchestrated color accents to guide attention without overwhelming. The mood is confident yet approachable—professional enough for serious design work, playful enough to inspire experimentation. This is a system designed for agents, developers, and designers who value clarity, modularity, and the freedom to iterate rapidly.

**Key Characteristics**
- High contrast dark/light composition for accessibility and visual impact
- Vibrant accent colors (coral red, cyan, warm yellow, fresh green) used sparingly to highlight actions and states
- Generous spacing and breathing room throughout layouts
- Geometric precision in corners and edges (mix of sharp and rounded forms)
- Monospace code typography for technical contexts
- Shadow and elevation used subtly to define layer separation
- Responsive, touch-friendly interactive surfaces

## 2. Color Palette & Roles

### Primary
- **Midnight** (`#18181B`): Dominant background color for dark surfaces, cards, and containers. Used extensively throughout the interface as the primary neutral dark base.
- **Charcoal** (`#0A0A0A`): Deep black used for text, headlines, and the darkest UI elements where maximum contrast is needed.

### Accent Colors
- **Coral Red** (`#FF5F57`): Primary call-to-action color and highlight accent. Commands attention for primary actions and interactive states.
- **Cyan** (`#22D3EE`): Secondary accent for secondary actions and visual interest. Creates vibrancy against dark backgrounds.
- **Warm Amber** (`#FEBC2E`): Warning and cautionary states. Used for non-critical alerts and informational highlights.
- **Fresh Green** (`#28C840`): Success states, confirmations, and positive feedback indicators.

### Interactive
- **Soft Grey** (`#4B5563`): Interactive element backgrounds and hover states for muted interactions.
- **Light Grey Border** (`#232328`): Subtle borders and dividers that separate content without high contrast.
- **Dark Border** (`#1E1E22`): Borders for inputs, containers, and defined regions requiring definition.

### Neutral Scale
- **White** (`#FFFFFF`): Primary text color on dark backgrounds. Used for body text, headings on dark surfaces, and light backgrounds for content areas.
- **Light Grey** (`#E5E5E5`): Secondary text, labels, and lower-priority content on dark backgrounds.
- **Medium Grey** (`#D1D5DB`): Tertiary text, captions, and disabled states.
- **Dark Grey** (`#71717A`): Muted text for helper text and secondary information.
- **Stone Grey** (`#737373`): Additional neutral tone for varied grey needs.
- **Pale Grey** (`#CCCCCC`): Light borders and subtle separators.

### Surface & Borders
- **Surface Dark** (`#1C1C20`): Alternative dark surface color for secondary containers and background variations.
- **Overlay Dark** (`#000000`): Semi-transparent overlays and modal backdrops.
- **Transparent Clear** (`#0000`): Transparent backgrounds and no-fill interactive states.

### Semantic / Status
- **Error** (`#E14017`): Error states and destructive actions requiring user caution.
- **Success** (`#28C840`): Positive confirmations and successful operations.
- **Warning** (`#FEBC2E`): Warning states and non-critical alerts.

## 3. Typography Rules

### Font Family
- **Primary**: `Satoshi, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` — Modern geometric sans-serif with excellent screen legibility.
- **Secondary**: `ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, sans-serif` — System font fallback for broad compatibility.
- **Monospace**: `ui-monospace, 'Menlo', 'Monaco', 'Courier New', monospace` — Technical and code contexts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display | Satoshi | 32px | 400 | 36px | 0px | Large hero headlines and page titles |
| Heading 1 | Satoshi | 28px | 400 | 32px | 0px | Section headings and major titles |
| Heading 2 | Satoshi | 24px | 400 | 28px | 0px | Subsection headings |
| Heading 3 | ui-sans-serif | 20px | 400 | 28px | 0px | Tertiary headings and section breaks |
| Body | ui-sans-serif | 18px | 400 | 30px | 0px | Primary content and descriptive text |
| Body Large | ui-sans-serif | 16px | 400 | 24px | 0px | List items and secondary body content |
| Label | Satoshi | 14px | 400 | 20px | 0px | Form labels, tags, and metadata |
| Label Bold | Satoshi | 14px | 500 | 20px | 0px | Emphasized labels and link text |
| Button Text | Satoshi | 14px | 400 | 20px | 0px | Button labels and compact actions |
| Input Text | Satoshi | 12px | 400 | 16px | 0px | Form input text and small UI text |
| Code | ui-monospace | 14px | 400 | 21px | 0px | Inline code and code blocks |
| Caption | Satoshi | 12px | 400 | 16px | 0px | Captions, helper text, and footnotes |

### Principles
- Hierarchy is established through size, weight, and color contrast rather than excessive weight variations.
- All type uses consistent line-height ratios (1.25–1.5x size) for optical balance.
- Satoshi is preferred for UI labels, buttons, and structured content; system fonts for long-form body text.
- Monospace is reserved for code blocks, terminal output, and technical identifiers.
- Avoid using lowercase for primary headings; preserve sentence case for accessibility.
- Ensure sufficient contrast: white text on dark backgrounds meets WCAG AA minimum 7:1 ratio.

## 4. Component Stylings

### Buttons

#### Primary Button
- **Background**: `#171717` (dark charcoal)
- **Text Color**: `#FFFFFF` (white)
- **Padding**: `12px 16px`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `Satoshi`
- **Line Height**: `20px`
- **Border Radius**: `8px`
- **Border**: `1px solid rgba(255, 255, 255, 0.15)` (subtle light border)
- **Box Shadow**: `none`
- **Height**: `46px`
- **Width**: `173px`
- **Hover**: Background `#232328`, border `1px solid rgba(255, 255, 255, 0.25)`
- **Active**: Background `#0A0A0A`, border `1px solid rgba(255, 255, 255, 0.35)`
- **Disabled**: Background `rgba(0, 0, 0, 0.2)`, color `rgba(255, 255, 255, 0.5)`

#### Secondary Button (Ghost)
- **Background**: `transparent`
- **Text Color**: `#FFFFFF`
- **Padding**: `12px 16px`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: `Satoshi`
- **Border Radius**: `8px`
- **Border**: `1px solid rgba(255, 255, 255, 0.2)`
- **Hover**: Background `rgba(255, 255, 255, 0.1)`, border `1px solid rgba(255, 255, 255, 0.3)`
- **Active**: Background `rgba(255, 255, 255, 0.15)`, border `1px solid rgba(255, 255, 255, 0.4)`

#### Icon Button
- **Background**: `transparent`
- **Text Color**: `#D1D5DB` (light grey)
- **Width**: `24px`
- **Height**: `24px`
- **Padding**: `4px`
- **Border Radius**: `4px`
- **Border**: `none`
- **Box Shadow**: `none`
- **Font Size**: `16px`
- **Hover**: Background `rgba(255, 255, 255, 0.1)`, color `#FFFFFF`
- **Active**: Background `rgba(255, 255, 255, 0.2)`, color `#FFFFFF`

#### Status Indicator Buttons
- **Error State**: Background `#FF5F57`, border-radius `9999px`, padding `0px`, width `12px`, height `12px`
- **Warning State**: Background `#FEBC2E`, border-radius `9999px`, padding `0px`, width `12px`, height `12px`
- **Success State**: Background `#28C840`, border-radius `9999px`, padding `0px`, width `12px`, height `12px`

### Cards & Containers

#### Standard Card
- **Background**: `#18181B`
- **Border**: `1px solid #232328`
- **Border Radius**: `8px`
- **Padding**: `24px`
- **Box Shadow**: `0px 1px 3px rgba(0, 0, 0, 0.1)`
- **Hover Shadow**: `0px 4px 12px rgba(0, 0, 0, 0.15)`

#### Surface Container
- **Background**: `#1C1C20`
- **Border**: `none`
- **Border Radius**: `6px`
- **Padding**: `16px`

#### Overlay / Modal
- **Background**: `#18181B`
- **Border**: `2px solid #171717`
- **Border Radius**: `12px`
- **Padding**: `32px`
- **Box Shadow**: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(23, 23, 23) 0px 0px 0px 2px, rgba(0, 0, 0, 0.25) 0px 18px 40px -12px`

### Inputs & Forms

#### Text Input (Default)
- **Background**: `rgba(46, 46, 46, 0.4)` (semi-transparent dark)
- **Border**: `1px solid #232328`
- **Border Radius**: `6px`
- **Padding**: `6px 8px` (left/right), `6px 28px` (with icon)
- **Font Size**: `12px`
- **Font Weight**: `400`
- **Font Family**: `Satoshi`
- **Line Height**: `16px`
- **Color**: `#FFFFFF`
- **Height**: `30px` (compact) or `auto` (flexible)
- **Placeholder Color**: `rgba(255, 255, 255, 0.4)`
- **Hover Border**: `1px solid #3B3B41`
- **Focus Border**: `1px solid #22D3EE`
- **Focus Ring**: `0px 0px 0px 2px rgba(34, 211, 238, 0.2)`

#### Input with Icon
- **Padding Left**: `28px` (to accommodate left-side icon)
- **Icon Color**: `#71717A`
- **Icon Position**: Absolute left at `8px`, centered vertically

#### Textarea
- **Same as Text Input**
- **Min Height**: `100px`
- **Resize**: `vertical`

### Navigation

#### Navigation Bar
- **Background**: `#FFFFFF`
- **Height**: `60px`
- **Padding**: `0px`
- **Width**: `100%` (full width)
- **Border**: `none`
- **Border Bottom**: `1px solid #E5E5E5`
- **Box Shadow**: `none`
- **Display**: `flex`
- **Align Items**: `center`
- **Position**: `sticky` (top: 0)
- **Z-Index**: `40`

#### Navigation Link
- **Color**: `#000000`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Font Family**: `Satoshi`
- **Line Height**: `20px`
- **Padding**: `8px 16px`
- **Border Radius**: `8px`
- **Background**: `transparent`
- **Hover**: Background `rgba(0, 0, 0, 0.05)`, color `#000000`
- **Active**: Background `rgba(0, 0, 0, 0.1)`, color `#FF5F57`

#### Logo / Brand
- **Color**: `#FF5F57`
- **Font Size**: `20px`
- **Font Weight**: `600`
- **Font Family**: `Satoshi`

### Links

#### Text Link (Dark Context)
- **Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Font Family**: `Satoshi`
- **Line Height**: `20px`
- **Text Decoration**: `none`
- **Padding**: `6px 8px`
- **Border Radius**: `8px`
- **Background**: `transparent`
- **Hover**: Background `rgba(255, 255, 255, 0.1)`, text-decoration `underline`
- **Active**: Color `#22D3EE`

#### Text Link (Light Context)
- **Color**: `#000000`
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Font Family**: `Satoshi`
- **Padding**: `8px 16px`
- **Border Radius**: `8px`
- **Hover**: Background `rgba(0, 0, 0, 0.05)`

## 5. Layout Principles

### Spacing System
- **Base Unit**: `4px`
- **Scale**: `4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px, 152px`
- **Padding (Containers)**: `16px` (compact), `24px` (standard), `32px` (generous), `56px` (hero), `64px` (major section), `96px` (page margin)
- **Gaps (Flex/Grid)**: `8px` (tight), `12px` (standard), `16px` (comfortable), `20px` (loose), `32px` (section), `80px` (major break)
- **Margins (Text)**: `12px` (between inline elements), `16px` (between text blocks), `24px` (between sections)

### Grid & Container
- **Max Width**: `1440px` (full page container)
- **Column Strategy**: 12-column grid at desktop; 6-column at tablet; 4-column at mobile
- **Gutter**: `16px` (gap between columns)
- **Section Patterns**: Hero (full-bleed), content container (max 1200px centered), sidebar layout (main + aside)
- **Breakpoint Containers**: Flex-based responsive stacking; grid adapts from horizontal to vertical below tablet width

### Whitespace Philosophy
Whitespace is generously employed to create breathing room and guide visual hierarchy. Large gaps (`32px`–`80px`) separate major sections. Consistent internal padding (`24px`–`32px`) ensures content never feels cramped. The system favors "vertical rhythm"—consistent line-height multiples establish a baseline grid that harmonizes typography and spacing. This creates a calm, organized aesthetic that reduces cognitive load.

### Border Radius Scale
- **Sharp**: `0px` — Technical containers, code blocks, grid items
- **Tight**: `4px` — Icon buttons, small controls, input labels
- **Standard**: `6px` — Form inputs, small cards, badge elements
- **Rounded**: `8px` — Buttons, large cards, navigation items, modal overlays
- **Pill**: `9999px` — Status indicators, small badge buttons, circular elements

### Border Widths
- **Thin**: `1px` — Default borders on inputs, subtle dividers, card edges
- **Medium**: `2px` — Focused states, prominent modal outlines
- **Thick**: `3px` — Accent borders on highlighted sections (rare)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat | No shadow; border only | Inputs, flat buttons, background surfaces |
| Raised (sm) | `rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset` | Subtle inset effect for button focus states |
| Lifted (md) | `0px 2px 4px rgba(0, 0, 0, 0.1)` | Cards, small floating elements |
| Floating (lg) | `rgb(255, 255, 255) 0px 0px 0px 0px, rgb(23, 23, 23) 0px 0px 0px 2px, rgba(0, 0, 0, 0) 0px 0px 0px 0px` | Prominent cards, popovers |
| Modal (xl) | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.25) 0px 18px 40px -12px` | Modals, overlays, dropdown menus |

**Shadow Philosophy**: Shadows are minimal and subtle, relying on border contrast and elevation layering rather than dramatic drop shadows. The system uses inset shadows for interactive feedback and larger outer shadows only for modals and overlays. This maintains visual clarity while establishing hierarchy through subtle depth cues.

### Opacity Levels
- **Disabled**: `0.20` (20%) — Inactive UI elements, disabled buttons
- **Secondary**: `0.24` (24%) — Muted backgrounds, secondary surfaces
- **Hover**: `0.42` (42%) — Hover state overlays, interactive feedback
- **Active**: `0.45` (45%) — Active state overlays, pressed buttons
- **Subtle**: `0.22` (22%) — Borders, subtle dividers
- **Overlay**: `0.60` (60%) — Semi-transparent background overlays, modal backdrops

### Z-index / Layering
- **Base**: `0` — Standard content, cards, default surfaces
- **Dropdown**: `10` — Floating dropdowns, tooltips
- **Sticky**: `20` — Sticky navigation, fixed sidebars
- **Overlay**: `30` — Modal background (content layer)
- **Modal**: `36` — Modal content itself
- **Dialog**: `40` — Alert dialogs, confirm popovers
- **Toast**: `70` — Toast notifications, temporary alerts
- **Tooltip**: `75` — Floating tooltips, contextual hints

## 7. Do's and Don'ts

### Do
- Use the coral red (`#FF5F57`) exclusively for primary call-to-action buttons and error states; it commands attention naturally.
- Maintain consistent `24px` padding in card containers to ensure predictable, breathable layouts.
- Apply `8px` border-radius to buttons and form inputs for a modern, accessible rounded aesthetic.
- Combine dark backgrounds with white text for maximum contrast and readability in the main interface.
- Use `12px` font size for form input text to remain scannable yet compact on smaller screens.
- Stack components vertically with `32px` gaps between major content sections for clear visual hierarchy.
- Employ `1px solid` borders sparingly; use them to define container edges and input fields without visual noise.
- Test all interactive states (hover, active, focus, disabled) on both light and dark backgrounds.
- Always include accessible focus rings (2px colored outline) on keyboard-navigable elements.

### Don't
- Avoid using multiple accent colors (cyan, amber, green) in close proximity; they compete for attention.
- Never reduce padding below `12px` on clickable elements; maintain WCAG touch target minimums of `44px × 44px`.
- Don't mix serif and sans-serif fonts within a single component; maintain typographic consistency per role.
- Avoid excessive nesting of shadows; limit to one or two layers of elevation to prevent visual clutter.
- Never apply fully opaque overlays on modals; use `0.25` opacity for dark backdrops to maintain context awareness.
- Don't use all-caps for body text; reserve uppercase only for labels and abbreviations (preserving readability).
- Avoid thin, 1px borders on dark-on-dark surfaces; increase contrast with `#232328` or brighter borders.
- Never apply more than two weights of a font family within a single view; weight variation should be intentional.
- Don't use the status colors (red, yellow, green) for decorative purposes; reserve them for semantic meaning only.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–640px | Single column, stacked navigation, full-width cards, `16px` padding |
| Tablet | 641px–1024px | 2-column grid, collapsible sidebar, `24px` padding, adjusted typography (h2 → 24px) |
| Desktop | 1025px–1440px | Full 3+ column layouts, sticky navigation, `32px` padding, standard typography |
| Wide | 1441px+ | Max-width container (1440px), centered layout, generous margins |

### Touch Targets
- **Minimum Size**: `44px × 44px` for all interactive elements (buttons, links, inputs, icons)
- **Recommended Size**: `48px × 48px` for primary actions and frequently-tapped controls
- **Minimum Spacing**: `8px` between adjacent touch targets to prevent accidental presses
- **Icon Button**: `24px × 24px` for desktop; `32px × 32px` for mobile-optimized versions
- **Input Fields**: `44px` minimum height on mobile, `30px` acceptable on desktop with sufficient padding

### Collapsing Strategy
- **Navigation**: Full horizontal menu on desktop → hamburger drawer on tablet/mobile
- **Sidebar**: Fixed side column on desktop → bottom drawer or hidden on mobile
- **Cards Grid**: 3-column on desktop → 2-column on tablet → 1-column stacked on mobile
- **Typography**: Display (32px) on desktop → 24px on tablet → 20px on mobile
- **Padding**: `32px` desktop → `24px` tablet → `16px` mobile
- **Gaps**: `80px` desktop sections → `48px` tablet → `32px` mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Coral Red (`#FF5F57`)
- **Background (Dark)**: Midnight (`#18181B`)
- **Background (Light)**: White (`#FFFFFF`)
- **Text (on Dark)**: White (`#FFFFFF`)
- **Text (on Light)**: Charcoal (`#0A0A0A`)
- **Secondary Accent**: Cyan (`#22D3EE`)
- **Input Border**: Dark Grey (`#232328`)
- **Success**: Fresh Green (`#28C840`)
- **Warning**: Warm Amber (`#FEBC2E`)
- **Error**: Error Red (`#E14017`)
- **Disabled**: Medium Grey (`#D1D5DB`)

### Iteration Guide

1. **Start with the color base**: All dark backgrounds default to `#18181B` (`Midnight`). Use `#FFFFFF` for text. Coral red (`#FF5F57`) is the only primary accent for calls-to-action.

2. **Establish hierarchy through spacing**: Use `24px` padding for standard containers, `32px` for generous sections, `56px–96px` for major breaks. Maintain consistent vertical rhythm with line-height multiples.

3. **Apply typography as defined**: Satoshi font for UI labels and buttons (14px); system fonts (ui-sans-serif) for body text (18px). Use monospace (ui-monospace) only for code blocks. Never deviate from the size scale without justification.

4. **Build interactive states methodically**: Every button must have hover, active, and focus states. Hover background shifts to `#232328` with adjusted borders; active shifts to `#0A0A0A`. Focus states receive a `2px` ring of `rgba(34, 211, 238, 0.2)`.

5. **Maintain touch-target minimums**: All clickable elements (buttons, links, icon buttons) must be at least `44px × 44px`. Spacing between targets is minimum `8px`. This ensures mobile usability without compromise.

6. **Use borders strategically**: Input fields and cards use `1px solid #232328` borders for definition. Modals receive `2px solid #171717` for emphasis. Avoid borders on low-contrast dark surfaces; increase visibility with lighter greys.

7. **Layer with z-index discipline**: Navigation and sticky elements stay at `20`–`40`. Modals use `36`. Toasts use `70`. Never exceed z-index `75` unless justified; high z-index layers indicate priority and must be intentional.

8. **Opacity for feedback**: Use `0.20` for disabled states, `0.42` for hover overlays, `0.60` for modal backdrops. Opacity creates hierarchical distinction without adding new colors.

9. **Test dark and light contexts**: Components must work in both dark (primary) and light (landing pages) contexts. Ensure sufficient contrast (WCAG AA minimum 7:1) and verify that all interactive states remain distinguishable in both themes.

10. **Prioritize responsive stacking**: On mobile, reduce padding to `16px`, stack components vertically, collapse sidebars to drawers, and increase gaps to `32px` for breathing room. Use `24px` padding on tablet as a middle ground.