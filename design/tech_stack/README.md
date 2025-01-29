# 技術スタック
1. [1. UI](#1-ui)
   1. [カレンダー](#カレンダー)
      1. [1.1. FullCalendar](#11-fullcalendar)
         1. [DateClickArg](#dateclickarg)
         2. [EventClickArg](#eventclickarg)
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

##### DateClickArg

```json
{
    "date": "2024-12-31T15:00:00.000Z",
    "dateStr": "2025-01-01",
    "allDay": true,
    "dayEl": {},
    "jsEvent": {
        "isTrusted": true
    },
    "view": {
        "type": "dayGridMonth",
        "dateEnv": {
            "timeZone": "local",
            "canComputeOffset": true,
            "calendarSystem": {},
            "locale": {
                "codeArg": "ja",
                "codes": [
                    "ja"
                ],
                "week": {
                    "dow": 0,
                    "doy": 4
                },
                "simpleNumberFormat": {},
                "options": {
                    "direction": "ltr",
                    "buttonText": {
                        "prev": "prev",
                        "next": "next",
                        "prevYear": "prev year",
                        "nextYear": "next year",
                        "year": "year",
                        "today": "today",
                        "month": "month",
                        "week": "week",
                        "day": "day",
                        "list": "list"
                    },
                    "weekText": "W",
                    "weekTextLong": "Week",
                    "closeHint": "Close",
                    "timeHint": "Time",
                    "eventHint": "Event",
                    "allDayText": "all-day",
                    "moreLinkText": "more",
                    "noEventsText": "No events to display",
                    "buttonHints": {
                        "prev": "Previous $0",
                        "next": "Next $0"
                    },
                    "viewHint": "$0 view",
                    "navLinkHint": "Go to $0"
                }
            },
            "weekDow": 0,
            "weekDoy": 4,
            "weekText": "W",
            "weekTextLong": "Week",
            "cmdFormatter": null,
            "defaultSeparator": " - "
        }
    }
}
```

##### EventClickArg

```json
{
    "el": {
        "l": {},
        "fcSeg": {
            "row": 0,
            "firstCol": 3,
            "lastCol": 3,
            "isStart": true,
            "isEnd": true,
            "eventRange": {
                "def": {
                    "title": "test1",
                    "groupId": "",
                    "publicId": "1",
                    "url": "",
                    "recurringDef": null,
                    "defId": "112",
                    "sourceId": "9",
                    "allDay": true,
                    "hasEnd": false,
                    "ui": {
                        "display": null,
                        "constraints": [],
                        "overlap": null,
                        "allows": [],
                        "backgroundColor": "",
                        "borderColor": "",
                        "textColor": "",
                        "classNames": []
                    },
                    "extendedProps": {
                        "description": "test1"
                    }
                },
                "ui": {
                    "display": "auto",
                    "startEditable": false,
                    "durationEditable": false,
                    "constraints": [],
                    "overlap": null,
                    "allows": [],
                    "backgroundColor": "",
                    "borderColor": "",
                    "textColor": "",
                    "classNames": []
                },
                "instance": {
                    "instanceId": "113",
                    "defId": "112",
                    "range": {
                        "start": "2025-01-01T00:00:00.000Z",
                        "end": "2025-01-02T00:00:00.000Z"
                    },
                    "forcedStartTzo": null,
                    "forcedEndTzo": null
                },
                "range": {
                    "start": "2025-01-01T00:00:00.000Z",
                    "end": "2025-01-02T00:00:00.000Z"
                },
                "isStart": true,
                "isEnd": true
            }
        }
    },
    "event": {
        "allDay": true,
        "title": "test1",
        "start": "2025-01-01",
        "id": "1",
        "extendedProps": {
            "description": "test1"
        }
    },
    "jsEvent": {
        "isTrusted": true
    },
    "view": {
        "type": "dayGridMonth",
        "dateEnv": {
            "timeZone": "local",
            "canComputeOffset": true,
            "calendarSystem": {},
            "locale": {
                "codeArg": "ja",
                "codes": [
                    "ja"
                ],
                "week": {
                    "dow": 0,
                    "doy": 4
                },
                "simpleNumberFormat": {},
                "options": {
                    "direction": "ltr",
                    "buttonText": {
                        "prev": "prev",
                        "next": "next",
                        "prevYear": "prev year",
                        "nextYear": "next year",
                        "year": "year",
                        "today": "today",
                        "month": "month",
                        "week": "week",
                        "day": "day",
                        "list": "list"
                    },
                    "weekText": "W",
                    "weekTextLong": "Week",
                    "closeHint": "Close",
                    "timeHint": "Time",
                    "eventHint": "Event",
                    "allDayText": "all-day",
                    "moreLinkText": "more",
                    "noEventsText": "No events to display",
                    "buttonHints": {
                        "prev": "Previous $0",
                        "next": "Next $0"
                    },
                    "viewHint": "$0 view",
                    "navLinkHint": "Go to $0"
                }
            },
            "weekDow": 0,
            "weekDoy": 4,
            "weekText": "W",
            "weekTextLong": "Week",
            "cmdFormatter": null,
            "defaultSeparator": " - "
        }
    }
}
```

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