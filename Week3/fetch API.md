# fetch API 的基礎使用

fetch API 是一種用於瀏覽器中發送網路請求的方法，它可以向網路資源（例如服務器）發送請求，並接收並處理來自該資源的響應。fetch API 支援 Promise，因此可以使用 Promise 的特性來處理非同步請求，而不需要使用回調函數。以下是 fetch API 的基礎使用：

發送 GET 請求
```javascript
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
這段程式碼會向 https://example.com/data 發送一個 GET 請求，然後將返回的 response 對象轉換為 JSON 格式的數據。最後，它會在控制台上輸出數據。如果發生錯誤，它會在控制台上輸出錯誤信息。

發送 POST 請求
```javascript
const data = {
  name: 'John Doe',
  age: 30
};

fetch('https://example.com/api/data', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```
這段程式碼會向 https://example.com/api/data 發送一個 POST 請求，並將 data 物件作為 JSON 字符串附加到請求中。這裡還設置了 Content-Type 的標頭，以便服務器知道請求中的數據是 JSON 格式的。然後，它會將返回的 response 對象轉換為 JSON 格式的數據。最後，它會在控制台上輸出數據。如果發生錯誤，它會在控制台上輸出錯誤信息。

發送帶有參數的 GET 請求
```javascript
const params = new URLSearchParams({
  search: 'example',
  limit: 10
});

fetch(`https://example.com/api/data?${params}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
這段程式碼會向 https://example.com/api/data 發送一個帶有 search 和 limit 參數的 GET 請求。使用 URLSearchParams 可以方便地創建 URL 參數。然後，它會將返回的 response 對象轉換為 JSON 格式的數據。最後，它會在控制台上輸出數據。如果發生錯誤，它會在控制台上輸出錯誤信息。

使用 async/await 處理 fetch API 的 Promise
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
```
這段程式碼是使用 async/await 語法來處理 fetch API 的 Promise。它首先使用 try/catch 構造來處理異常情況，然後使用 await 來等待 response 對象的返回。接下來，它使用 await 來等待數據的解析，然後在控制台上輸出數據。如果發生錯誤，它會在控制台上輸出錯誤信息。

這些都是 fetch API 的基礎使用方法。注意，這些示例只是展示 fetch API 的用法，實際上使用 fetch API 可能需要更多的代碼來處理各種情況。例如，需要檢查網路連接是否可用，處理 HTTP 錯誤響應等等。

# fetch API 和 XMLHttpRequest 物件的區別

fetch API 和 XMLHttpRequest（XHR）物件都是用於瀏覽器中發送網路請求的方法，但它們有一些區別：

語法和用法
fetch API 使用 Promise 和 async/await 語法來處理非同步請求，而 XHR 使用回調函數來處理非同步請求。
舉例來說，使用 fetch API 發送 GET 請求：

```javascript
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
使用 XHR 發送 GET 請求：

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.statusText);
  }
};
xhr.onerror = function() {
  console.error('Error:', xhr.statusText);
};
xhr.send();
```
可以看到，fetch API 使用 Promise 的語法，而 XHR 使用回調函數的語法。

跨域請求
fetch API 的默認行為是不發送或接收包含認證信息（例如 cookie）的跨域請求，而 XHR 可以使用 withCredentials 屬性來設置是否發送或接收包含認證信息的跨域請求。
舉例來說，使用 fetch API 發送跨域請求：

```javascript
fetch('https://example.com/data', { mode: 'cors' })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
使用 XHR 發送跨域請求：

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data');
xhr.withCredentials = true;
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.statusText);
  }
};
xhr.onerror = function() {
  console.error('Error:', xhr.statusText);
};
xhr.send();
```
可以看到，fetch API 需要使用 mode 屬性來設置跨域請求，而 XHR 可以使用 withCredentials 屬性。

取消請求
fetch API 目前沒有原生的取消請求的方法，需要使用第三方庫或手動實現。XHR 可以使用 abort 方法來取消請求。
舉例來說，使用 XHR 取消請求：

```javascript
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data');
xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.error('Error:', xhr.statusText);
  }
};
xhr.onerror = function() {
  console.error('Error:', xhr.statusText)
};
xhr.send();

// 取消請求
xhr.abort();
```
可以看到，使用 XHR 可以直接調用 abort 方法來取消請求，而 fetch API 目前需要使用其他方法來實現取消請求。

總結來說，fetch API 和 XHR 都是用於瀏覽器中發送網路請求的方法，但它們在語法和用法、跨域請求和取消請求等方面有所不同。在選擇使用哪一種方法時，需要考慮具體的需求和限制。例如，如果需要支持舊版瀏覽器，則需要使用 XHR；如果需要支持跨域請求，則需要使用 fetch API 的 mode 屬性或 XHR 的 withCredentials 屬性。

# Promise 對象的使用方式

JavaScript Promise 是一種非同步編程的技術，用於處理異步操作中的成功或失敗結果。Promise 是一個對象，它表示一個異步操作的最終完成（或失敗）和其結果的值。

Promise 有三種狀態：

Pending（等待）：Promise 對象創建時的初始狀態。
Fulfilled（實現）：異步操作成功完成時的狀態。
Rejected（拒絕）：異步操作失敗時的狀態。
一旦 Promise 進入到 Fulfilled 或 Rejected 狀態，就會永久停留在這兩種狀態中的一種，且無法再次變更狀態。

Promise 可以使用 then 方法來處理異步操作的成功結果，catch 方法來處理異步操作的失敗結果。

下面是 Promise 的基本使用方式：

```javascript
const promise = new Promise((resolve, reject) => {
  // 異步操作
  const result = Math.random() > 0.5 ? 'success' : 'failure';
  setTimeout(() => {
    if (result === 'success') {
      resolve(result);
    } else {
      reject(new Error('Failed'));
    }
  }, 1000);
});

promise
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
上面的代碼中，Promise 對象創建時使用了一個異步操作，該操作隨機返回成功或失敗的結果。如果操作成功，則使用 resolve 方法將結果傳遞給 then 方法；如果操作失敗，則使用 reject 方法將錯誤傳遞給 catch 方法。最後使用 then 方法和 catch 方法分別處理異步操作的成功和失敗結果。

fetch API 是一個基於 Promise 的 API，用於瀏覽器中發送網路請求。使用 fetch API 可以輕鬆地發送網路請求並處理其結果。

下面是使用 fetch API 的基本使用方式：

```javascript
fetch('https://example.com/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

上面的代碼中，使用 fetch 方法發送了一個 GET 請求，然後使用 then 方法處理網路請求的成功結果。如果網路請求成功，則使用 response.json() 方法將結果轉換為 JSON 格式；如果網路請求失敗，則使用 throw 方法將錯誤傳遞給 catch 方法處理。最後使用 then 方法和 catch 方法分別處理網路請求的成功和失敗結果。

需要注意的是，fetch API 並不會將網路錯誤（例如 404 或 500 錯誤）視為拒絕（rejected）狀態，而是將其視為成功（fulfilled）狀態，並且在 response 的 ok 屬性中提供了相關的信息。因此，需要使用 if (response.ok) 來判斷網路請求是否成功。

此外，fetch API 也提供了其他的方法來設置網路請求的選項，例如 mode 屬性、credentials 屬性等等，可以根據需要進行設置。

總結來說，Promise 是一種用於處理異步操作的技術，可以使用 then 方法和 catch 方法來處理異步操作的成功和失敗結果。fetch API 是一個基於 Promise 的 API，用於瀏覽器中發送網路請求。使用 fetch API 可以輕鬆地發送網路請求並處理其結果。

# Headers 和 Response 對象的使用方法

在 JavaScript 中，Headers 和 Response 是用於處理網路請求和響應的兩個對象。

Headers 對象是一個用於表示 HTTP 標頭的鍵值對集合。Headers 可以用於創建網路請求，也可以用於解析網路響應中的標頭。以下是一個使用 Headers 創建網路請求的例子：

```javascript
const headers = new Headers();
headers.append('Content-Type', 'application/json');

fetch('/api/data', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify({ name: 'John Doe' })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
在這個例子中，我們創建了一個 Headers 對象，並將 Content-Type 標頭設置為 application/json。接著，我們使用 fetch API 發送一個 POST 請求，並將 headers 屬性設置為剛才創建的 Headers 對象。最後使用 then 方法處理網路請求的成功結果。

Response 對象是一個用於表示網路響應的對象。Response 對象包含一些有用的方法和屬性，例如 text()、json()、status 和 ok 等。以下是一個使用 Response 對象處理網路響應的例子：

```javascript
fetch('/api/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
在這個例子中，我們使用 fetch API 發送一個 GET 請求，並使用 then 方法處理網路響應。在 then 方法中，我們首先檢查網路響應的狀態，如果是成功的，則使用 json() 方法解析響應的內容。如果網路響應的狀態不是成功的，則使用 throw 關鍵字拋出一個錯誤。

總結來說，Headers 和 Response 對象是用於處理網路請求和響應的兩個對象。使用 Headers 對象可以創建網路請求並設置標頭。使用 Response 對象可以處理網路響應的內容和狀態。
