# Smartwatch & Agriculture App Design Guidelines

## Design Approach: Utility-Focused Wearable System

**Selected Approach:** Custom minimal design system optimized for wearable interfaces and agricultural workflows. Inspired by Material Design's clarity principles with adaptations for low-literacy, outdoor visibility, and quick-action requirements.

**Justification:** Agriculture-focused wearables prioritize functionality, outdoor readability, and speed over aesthetic differentiation. Farmers need instant access to critical information in varying light conditions with minimal interaction complexity.

---

## Core Design Elements

### A. Color Palette

**Primary Colors (Light & Dark Mode):**
- Primary Green: 142 70% 45% (agriculture/growth)
- Sky Blue: 200 85% 55% (water/irrigation) 
- Sunshine Yellow: 48 95% 60% (weather/alerts)
- Success Green: 140 60% 50%
- Alert Red: 5 80% 55%
- Warning Orange: 30 90% 55%

**Backgrounds:**
- Dark Mode: 220 15% 12% (smartwatch default), 220 13% 18% (cards)
- Light Mode: 0 0% 98%, 0 0% 100% (cards)

**Text:**
- Dark Mode: 0 0% 95% (primary), 0 0% 70% (secondary)
- Light Mode: 220 15% 15% (primary), 220 10% 40% (secondary)

### B. Typography

**Font Families:**
- Primary: Inter (CDN: Google Fonts) - excellent multilingual support for Urdu/English
- Headings: Bold 600-700 weight for high contrast
- Body: Regular 400-500 weight

**Smartwatch Sizes:**
- Large Icons/Numbers: text-4xl to text-5xl (36-48px)
- Primary Actions: text-2xl (24px)
- Labels: text-lg (18px)
- Metadata: text-sm (14px)

**Mobile App Sizes:**
- Hero/Dashboard: text-3xl to text-4xl
- Section Headings: text-xl to text-2xl
- Body Text: text-base to text-lg
- Captions: text-sm

### C. Layout System

**Spacing Primitives (Tailwind):** Use units of 2, 4, 6, and 8 consistently
- Component padding: p-4, p-6
- Card spacing: gap-4, space-y-6
- Screen margins: px-6, py-8
- Icon containers: w-16 h-16 (smartwatch), w-12 h-12 (mobile)

**Grid System:**
- Smartwatch: Single column, max 2x2 icon grid
- Mobile Dashboard: 2-column grid (md:grid-cols-2)
- Mobile Detail Views: Single column with max-w-2xl

### D. Component Library

**Smartwatch Components:**

1. **Home Screen Grid**
   - 2x2 large icon cards with labels
   - Each card: rounded-2xl, p-6, with 96x96px icon area
   - Icons: Emoji-style or simple illustrated (Weather ☀️🌧️, Camera 📷, Irrigation 💧, GPS 📍)
   - Background: subtle gradient from card color to darker shade

2. **Status Bar**
   - Fixed top bar: time (text-2xl bold), battery icon + percentage
   - Height: h-14, bg-opacity-95 for overlay persistence

3. **Alert Cards**
   - Full-width notifications with icon + text + action
   - Colored left border (4px) matching alert type
   - Large tap targets: min-h-20

4. **Action Buttons**
   - Primary: Large rounded-full buttons (h-14 to h-16)
   - Secondary: outline variant with blurred backdrop when on images
   - Text: Bold, minimum text-lg
   - Icon + Text combined for clarity

**Mobile App Components:**

1. **Dashboard Cards**
   - Rounded-xl cards with shadow-md
   - Header with icon + title + status indicator
   - Content area with data visualization or quick stats
   - Action button in footer

2. **Analysis Screen**
   - Image carousel at top (aspect-video)
   - AI diagnosis badge (colored pill with icon)
   - Recommendation cards with checkable actions
   - Historical data timeline

3. **Field Map Interface**
   - Full-width map container (min-h-96)
   - Floating controls with backdrop-blur
   - Color-coded zone markers (red circles for problems, green for healthy)
   - Bottom sheet for spot details

4. **Navigation**
   - Tab bar (mobile): 4-5 items with icons + labels
   - Swipe gestures for watch screens
   - Language toggle in top-right (flag icons)

### E. Iconography & Visual Elements

**Icon Strategy:**
- Use Heroicons for UI elements (CDN)
- Emoji-style for main features (Weather ☀️, Crops 🌾, Water 💧)
- Minimum 24x24px touch targets on watch
- High contrast against all backgrounds

**Status Indicators:**
- Animated pulse for "Analyzing..."
- Checkmark animation for completion
- Color-coded dots for zone health (🟥 🟩 🟡)

**Illustrations:**
- Weather: Large iconic representations (sun, rain cloud, storm)
- Crop health: Visual comparison cards (healthy vs diseased)
- Navigation arrows: Bold, directional with distance labels

### F. Interactions & Animations

**Smartwatch:**
- Swipe left/right for screen navigation
- Single tap for all primary actions
- Long-press for secondary options (minimal use)
- Haptic feedback for confirmations

**Mobile App:**
- Pull-to-refresh on lists
- Swipe cards for quick actions (Done/Snooze)
- Smooth transitions between screens (slide-in)
- Loading states with skeleton screens

**Animation Principles:**
- Minimal, purposeful only
- Fast transitions (200-300ms)
- Progress indicators for AI analysis
- Micro-interactions for successful actions (checkmark bounce)

---

## Accessibility & Localization

**Readability:**
- Minimum 18px text on smartwatch
- High contrast ratios (WCAG AAA for outdoor visibility)
- Bold weights for primary information

**Bilingual Support:**
- RTL layout support for Urdu
- Language toggle prominent in settings
- Voice feedback option (icon with speaker symbol)
- Icon-first design for low-literacy users

**Touch Targets:**
- Minimum 44x44px on mobile
- Minimum 40x40px on smartwatch
- Adequate spacing between interactive elements (min 8px gaps)

---

## Images

**Mobile App Hero/Dashboard:**
- Hero image: Agricultural field landscape (golden hour, crops in foreground)
- Placement: Top of dashboard, aspect-video ratio, with gradient overlay for text readability
- Alternative: Split-screen with farmer using app + crop close-up

**Feature Sections:**
- Crop analysis: Before/after comparison images showing diagnosis accuracy
- GPS map: Satellite view mockup of field with overlay zones
- Weather: Contextual backgrounds matching current conditions

**Smartwatch:**
- No hero images (space-constrained)
- Icons and emoji-style graphics only
- Use solid colors and gradients for backgrounds