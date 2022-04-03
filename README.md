# check-deadline

A tool to deadline checking.

## Requirements

- Node.js
- npm (Node.js package manager)
- moment.js
```bash
npm install moment
```

```bash
npm install check-deadline
```

## Usage

ES6 import
```javascript
import { isDeadlineOver } from 'check-deadline'
```

## API

Follow the format to fill in your predict date & time & time zone, and you will get the response(boolean) if deadline is over or not.
```javascript
// e.g. If there has an ongoing campaign, and the deadline is 2022/4/10 23:59（Taiwan Standard Time, UTC+8）
// Current time is 2022/3/30 17:45
const isCampaignOver = isDeadlineOver('2022-04-10', '23:59', 8)

console.log(isCampaignOver) // false
```

- 1st argument(Date) is required
- 2nd, 3rd argument is optional
  - Default 2nd parameter is 23:59
  - Default 3rd parameter is 8（Taiwan Standard Time, UTC+8）
    - Input value should between 16 and -16 (positive sign is unnecessary)

## Dependency

- [moment.js](https://www.npmjs.com/package/moment)