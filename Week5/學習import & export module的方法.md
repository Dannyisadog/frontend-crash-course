# 學習 import & export module 的方法

## 導出模組
導出模組是將模組中的變數、函式或物件暴露給其他模組使用。可以使用 export 關鍵字來導出模組：

```javascript
// module.js

export const foo = 'foo';

export function bar() {
  console.log('bar');
}

export default function() {
  console.log('default');
}
```
在上面的範例中，我們使用了 export 來導出三個成員，其中一個是默認導出 (default export)，可以使用 default 關鍵字來定義，只能定義一個默認導出：

```javascript
// module.js

export default function() {
  console.log('default');
}
```

## 導入模組
導入模組是將另一個模組中的成員引入到當前模組中使用。可以使用 import 關鍵字來導入模組：

```javascript
// app.js

import { foo, bar } from './module.js';
import baz from './module.js';

console.log(foo); // 'foo'
bar(); // 'bar'
baz(); // 'default'
```
在上面的範例中，我們使用了 import 來導入 module.js 中的成員，其中 foo 和 bar 是使用命名導出 (named export) 的成員，而 baz 是使用默認導出的成員。