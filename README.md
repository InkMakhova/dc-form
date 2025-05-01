# 🎨 React Mini Design System

The project is focused on implementing a mini design system using **React**, **TypeScript**, and **react-aria-components**.

---

## 🧩 Components

All components are custom-built with accessibility in mind (via `react-aria-components`) and CSS Modules for styling.

### ✅ `FormButton`

- **Variants:** `contained`, `outlined`
- **Sizes:** `small`, `medium`
- **Themes:** `primary`, `secondary`
- **Content Support:** text, icon + text, icon-only
- **States:** default, hover/focus, disabled

### ✅ `FormInput`

- Text input with label
- **States:** default, focused, disabled

### ✅ `FormNumberInput`

- Numeric input with increment/decrement using `FormButton`
- **States:** default, focused, disabled
- Syncs with `FormSlider` in the Form

### ✅ `FormSlider`

- Accessible range slider
- **States:** default, hover
- Syncs with `FormNumberInput` in the Form

---

## 🔧 Running the project

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

## ✅ Running tests

```bash
npm run test
```

## 📦 Building for production

```bash
npm run build
```
