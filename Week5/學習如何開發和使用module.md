# 學習如何開發和使用模組

## 開發模組
開發模組的基本步驟是定義模組中的變數、函式或物件，然後使用 export 關鍵字將需要導出的成員導出。例如，我們可以定義一個算術模組，其中包含加法、減法、乘法和除法的函式：

```javascript
// arithmetic.js

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}
```
然後在其他文件中可以使用 import 來導入模組，使用模組中的成員：

```javascript
// app.js

import { add, subtract } from './arithmetic.js';

const result1 = add(2, 3); // 5
const result2 = subtract(5, 2); // 3
```

##　使用模組
使用模組的基本步驟是使用 import 關鍵字導入需要的模組，然後使用模組中的成員。例如，我們可以使用之前定義的算術模組來進行計算：

```javascript
// app.js

import { add, multiply } from './arithmetic.js';

const result1 = add(2, 3); // 5
const result2 = multiply(5, 2); // 10
```
需要注意的是，導入的模組路徑必須是相對於當前文件的路徑。如果導入的模組位於另一個目錄中，則需要使用相對路徑或絕對路徑。

以上是基本的 ES6 模組開發和使用的方法和概念，它可以幫助我們更好地組織和管理 JavaScript 代碼。值得注意的是，由於 ES6 模組的靜態分析特性，一些瀏覽器和 Node.js 環境可能需要額外的配置才能正確支持 ES6 模組。