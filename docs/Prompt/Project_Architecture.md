# Stayly Project Architecture & Folder Structure

Based on the provided Product Requirements Document (PRD) and Design System, Stayly encompasses a three-sided platform: a Guest mobile app, a Host web/mobile experience, and an Admin web panel. 

To ensure maximum code reuse, maintainability, and scalability across these platforms, a **Monorepo Architecture** (using tools like Turborepo, Nx, or Melos) is highly recommended. The following structure utilizes a **Feature-Driven (Domain-Driven) Architecture**, ensuring that each domain encapsulates its own logic, UI, and state.

## High-Level Monorepo Structure

```text
stayly-workspace/
├── apps/                   # End-user applications
│   ├── guest-app/          # Mobile application for Guests (Flutter / React Native)
│   ├── host-app/           # Web/Mobile application for Hosts (Next.js / React)
│   └── admin-panel/        # Web application for internal Trust & Safety (Next.js / React)
├── packages/               # Shared libraries and internal packages
│   ├── ui-kit/             # Reusable UI components & Design System tokens
│   ├── core-logic/         # Shared business logic, state, and services
│   ├── config/             # Shared linting, formatting, and compiler configs
│   └── types/              # Shared data models and interfaces
└── package.json
```

---

## Standardized App Architecture (`apps/guest-app/` or `apps/host-app/`)

Inside each application, we follow a scalable feature-based folder structure.

```text
src/ (or lib/ for Flutter)
├── app/                    # Entry point & Navigation structure (Routers, Navigators)
├── assets/                 # Static media (images, fonts, animations)
├── components/             # Global/Shared UI components (Buttons, Inputs)
├── config/                 # Environment and App configuration
├── constants/              # Global constants (Enums, Magic numbers)
├── features/               # Feature-based (Domain-driven) modules
├── helpers/                # Pure helper functions (formatting, calculations)
├── hooks/                  # Global custom hooks / composables
├── i18n/                   # Localization dictionaries and configuration
├── layouts/                # Global layout wrappers (Navbars, Footers, Sidebars)
├── models/                 # Global Types/Interfaces (TypeScript/Dart)
├── providers/              # Global State & Context Providers
├── services/               # API clients, WebSockets, Third-party SDKs
├── store/                  # Global State Management (Redux/Zustand/Riverpod)
├── styles/                 # Theme configuration & Design tokens (Colors, Typography)
├── tests/                  # Global Testing structure (e2e, integration)
├── utils/                  # Utility functions
└── validation/             # Schema validations (Zod, Yup)
```

### Detailed Folder Explanations

#### `app/` (or `screens/` / `pages/`)
- **Purpose**: Defines the navigation structure, routing, and entry points.
- **Contents**: Routing definitions (e.g., Next.js `app/` router or React Navigation stacks), screen/page components that aggregate features.
- **Why**: Keeps routing logic centralized. Screens shouldn't contain heavy business logic; they should act as orchestrators, composing components from the `features/` directory.

#### `features/` (Feature-Based Structure)
- **Purpose**: Encapsulates all domain-specific logic, UI, and state. This is the core of the scalable architecture.
- **Contents**: Sub-folders for each major domain as defined in the PRD (e.g., `auth`, `bookings`, `properties`, `ai-planner`, `chat`).
  ```text
  features/properties/
  ├── api/                  # Domain-specific API calls (e.g., getProperties)
  ├── components/           # Domain-specific UI (e.g., PropertyCard)
  ├── hooks/                # Domain-specific hooks (e.g., usePropertySearch)
  ├── models/               # Domain-specific types
  ├── store/                # Domain-specific local state
  └── utils/                # Domain-specific helpers
  ```
- **Why**: Prevents a monolithic codebase. When a developer works on "Bookings", everything related to bookings is localized in one place, minimizing context switching and merge conflicts.

#### `components/` (Reusable UI Components)
- **Purpose**: Houses dumb, reusable, global UI components.
- **Contents**: Base elements dictated by the Design System: `button-primary`, `button-secondary`, `text-input`, cards, `guest-favorite-badge`, and `search-bar-pill`.
- **Why**: Ensures design consistency across all screens and features.

#### `styles/` (Theme Configuration & Design Tokens)
- **Purpose**: Defines the visual identity of the app.
- **Contents**: 
  - `colors` (Rausch `#ff385c`, Ink `#222222`, Canvas `#ffffff`)
  - `typography` (Airbnb Cereal VF configurations)
  - `spacing` (Base 4px unit, section 64px)
  - `rounded` (none to full/pill)
  - `theme` (Aggregated theme provider config)
- **Why**: Provides a single source of truth for styling, strictly enforcing the exact design specs (no hard corners, specific typography hierarchy, pure white canvas).

#### `layouts/` (Layout Components)
- **Purpose**: Defines the structural scaffolding of pages.
- **Contents**: Main layout, Auth layout, Dashboard layout, `top-nav`, `footer-light`, and `legal-band`.
- **Why**: Prevents rewriting scaffolding code. Layouts wrap page content to provide consistent navigation frames.

#### `services/` (API Layer & Core Services)
- **Purpose**: Handles external communications and side effects.
- **Contents**: Axios/Fetch clients, WebSocket connections (for Chat), Firebase/FCM (for Push Notifications), and Stripe SDK setup.
- **Why**: Isolates network logic from UI components, allowing for easy mocking during testing and centralized error/token handling.

#### `providers/`
- **Purpose**: Wraps the application with necessary contexts.
- **Contents**: `ThemeProvider`, `AuthProvider`, `ToastProvider`, `StripeProvider`.
- **Why**: Injects global dependencies and state seamlessly down the component tree without prop drilling.

#### `store/` (State Management)
- **Purpose**: Manages global client state that spans multiple features.
- **Contents**: Global user session state, unread notification counts, UI toggle states.
- **Why**: Keeps complex state centralized. (Note: Domain-specific state should ideally live inside `features/`).

#### `hooks/` 
- **Purpose**: Reusable logic that ties into the framework's lifecycle.
- **Contents**: `useDebounce`, `useGeolocation`, `useMediaQuery`, `useAuth`.
- **Why**: Extracts complex lifecycle or side-effect logic out of UI components, keeping them declarative.

#### `models/` (Types)
- **Purpose**: Global interfaces and types.
- **Contents**: `User`, `Property`, `Booking`, `Review`, `APIResponse`.
- **Why**: Ensures type safety across the application and acts as the data contract between frontend and backend.

#### `validation/`
- **Purpose**: Centralized validation schemas.
- **Contents**: Zod/Yup validation schemas for Login, Registration, Listing creation, and custom rules (e.g., password constraints).
- **Why**: Ensures consistent validation logic on both client forms and API payloads.

#### `utils/` & `helpers/`
- **Purpose**: Pure functions for data manipulation.
- **Contents**: `formatCurrency` (USD vs IDR), `formatDate` (relative time for chat), `calculateTotal` (nightly rate + fees).
- **Why**: Keeps components clean. Pure functions are easy to unit test.

#### `constants/` & `config/`
- **Purpose**: Hardcoded values and environment setups.
- **Contents**: `ENV` variables, API URLs, Keys, Error Messages, enum mappings.
- **Why**: Prevents magic strings/numbers and centralizes environment switching.

#### `storage/`
- **Purpose**: Handles local persistence.
- **Contents**: Secure storage wrappers (Keychain/Keystore) for auth tokens, local storage caching for Wishlists or Session.
- **Why**: Abstracts away the specific storage mechanism, making it easy to swap implementations.

#### `assets/`
- **Purpose**: Static media files.
- **Contents**: `fonts/` (Airbnb Cereal VF), `icons/` (hand-illustrated 32px glyphs), `images/`, `animations/` (Lottie files for success states).
- **Why**: Keeps static binaries organized and easily pre-loadable.

#### `i18n/` (Localization)
- **Purpose**: Manages multi-language support.
- **Contents**: `en.json` (baseline), `id.json` (staged for Indonesia), localization initializer.
- **Why**: Prepares the app for the regional fast-follow expansion mentioned in the PRD.

#### `tests/` (Testing Structure)
- **Purpose**: Ensures application reliability.
- **Contents**: `unit/` (utilities, hooks), `integration/` (feature workflows), `e2e/` (booking flows).
- **Why**: Enforces OKRs (like 99.5% crash-free sessions and 98% payment success rate) by strictly verifying critical paths.

---

## Architectural Recommendations Based on the PRD

1. **Shared UI Package (`packages/ui-kit`)**:
   Because the Design System explicitly mentions exact styling rules (e.g., Rausch `#ff385c`, specific border radii, no hard corners, pure white canvas), extracting these into a shared UI package ensures the Guest App, Host App, and Admin Panel are perfectly synchronized visually.

2. **Feature-Sliced AI Integration**:
   The PRD highlights five core AI features (Smart Search, Trip Planner, Price Prediction, Review Summary, Chatbot). These should **not** be scattered across normal components. Create an `ai/` folder inside `features/` that exposes specialized hooks (e.g., `useSmartSearch`, `usePricePrediction`) to keep LLM interaction logic, loading states (shimmer/typing indicators), and fallback mechanisms isolated from the standard marketplace CRUD logic.

3. **Stripe & Payment Isolation**:
   Payment processing is highly critical. The Stripe integration should be isolated in a dedicated `features/payments/` module, abstracting the 3D-Secure challenge and PaymentIntent polling so the Checkout screen remains lightweight.

4. **Event-Driven Chat Layer**:
   The In-App Messaging feature requires WebSockets. It is recommended to use an event-driven architecture within the `features/chat/` domain. Include local optimistic UI updates and a queueing mechanism in `storage/` for offline message buffering (to handle intermittent connectivity on mobile gracefully).

5. **Server-Driven Pricing Logic Constraints**:
   The PRD strictly states: *"Total price... is always computed server-side and re-verified at booking time (never trusted from client state)."* The frontend architecture must reflect this by relying purely on backend calculation endpoints via the `services/` layer rather than writing overlapping recalculation logic inside the client state, effectively minimizing state drift.
