# mental-health-diary-app
1. [リサーチレポート](#リサーチレポート)
2. [環境構築](#環境構築)
   1. [Next.js](#nextjs)
   2. [React](#react)
3. [react-router-dom](#react-router-dom)
4. [tailwindをインストールする](#tailwindをインストールする)
5. [MUIのインストール](#muiのインストール)
   1. [Drawer](#drawer)
6. [OpenAPI](#openapi)
   1. [OpenAPIからMarkdownを作成する](#openapiからmarkdownを作成する)

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
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/lab 
```

```bash
npm install @mui/material-nextjs @emotion/cache
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

```bash
npm install prisma @prisma/client
```

## OpenAPI

### OpenAPIからMarkdownを作成する

* [Markdown形式のAPI設計書を作る方法](https://note.shironekoworks.com/how-to-create-an-api-definition-in-markdown-format/)

* 