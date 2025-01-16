# mental-health-diary-app
- [mental-health-diary-app](#mental-health-diary-app)
  - [リサーチレポート](#リサーチレポート)
  - [環境構築](#環境構築)
    - [Next.js](#nextjs)
    - [React](#react)
  - [react-router-dom](#react-router-dom)
  - [tailwindをインストールする](#tailwindをインストールする)
  - [MUIのインストール](#muiのインストール)
    - [Drawer](#drawer)
    - [Django REST Framework](#django-rest-framework)

## リサーチレポート

[メンタルヘルスとは？](./design/research/README.md)

## 環境構築

### Next.js

```bash
npx create-next-app@latest mhd-next
```
### React

```bash
npx create-react-app@latest mhd-app --template typescript

```
## react-router-dom

* https://www.npmjs.com/package/react-router-dom

```bash
npm i react-router-dom
```

## tailwindをインストールする

* https://tailwindcss.com/docs/guides/create-react-app

1. tailwind cssのインストールと初期化

```bash
npm i -D tailwindcss
npx tailwindcss init
```

2. tailwind.config.jsの編集

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. index.cssの編集

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## MUIのインストール

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material npm install @mui/lab 
```

### Drawer

* https://mui.com/material-ui/react-drawer/

```bash
npm i axios
```

```bash
npm install @fullcalendar/react @fullcalendar/core @fullcalendar/daygrid @fullcalendar/interaction
```

```bash
npm install --save react-modal
```

```bash
npm install recharts
```

```bash
npm install @dnd-kit/core
```

### Django REST Framework
