# 技術スタック
1. [1. UI](#1-ui)
   1. [カレンダー](#カレンダー)
      1. [1.1. FullCalendar](#11-fullcalendar)
   2. [モーダル](#モーダル)
      1. [MUI](#mui)
   3. [スライダー](#スライダー)
      1. [Swiper](#swiper)
      2. [Splide](#splide)
   4. [ページネーション](#ページネーション)
2. [認証](#認証)
3. [2. 使えるサイト](#2-使えるサイト)
4. [3. エラー解消](#3-エラー解消)
   1. [3.1. Warning: React Hook useCallback has a missing dependency](#31-warning-react-hook-usecallback-has-a-missing-dependency)


## 1. UI

### カレンダー

#### 1.1. FullCalendar

[FullCalendar Documentation](https://fullcalendar.io/docs)

### モーダル

#### MUI

* [Material UI](https://mui.com/material-ui/getting-started/)
* [Modal](https://mui.com/material-ui/react-modal/?srsltid=AfmBOorWTMCYU7ZG2EKC9pSZDneWIvwXACksA50qdfsWX5UDOMQcM5eQ)

### スライダー

#### Swiper

* [Swiper](https://swiperjs.com/)

#### Splide

* [Splide](https://ja.splidejs.com/) 

### ページネーション

## 認証

* NextAuth

## 2. 使えるサイト

* [Flowrift](https://flowrift.com)


## 3. エラー解消

### 3.1. Warning: React Hook useCallback has a missing dependency

```typescript
  const arrFunc = useCallback(() => {

    //react-hooks/exhaustive-deps
  }, []);
```

[useEffect has a missing dependencyのwarningを解消する](https://zenn.dev/mackay/articles/1e8fcce329336d)