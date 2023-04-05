# XMLHttpRequest 物件的創建和使用

XMLHttpRequest 是一個在 JavaScript 中用來發送 HTTP 或 HTTPS 請求並接收伺服器回應的物件。它是一個非同步的方法，可以在網頁載入時向伺服器請求資料而不會導致網頁凍結。

以下是在 JavaScript 中創建和使用 XMLHttpRequest 物件的詳細說明和範例：

創建 XMLHttpRequest 物件

要創建 XMLHttpRequest 物件，可以使用下列語法：

```
var xhr = new XMLHttpRequest();
```
這會建立一個新的 XMLHttpRequest 物件，並將它儲存在名為 xhr 的變數中。

使用 XMLHttpRequest 物件

一旦建立了 XMLHttpRequest 物件，就可以使用它來發送 HTTP 或 HTTPS 請求。以下是使用 XMLHttpRequest 物件的一般步驟：

呼叫 XMLHttpRequest 物件的 open() 方法，以建立與伺服器的連線。

```
xhr.open('GET', 'https://www.example.com/api/data', true);
```
這個例子中，使用了 GET 方法並且發送到 https://www.example.com/api/data 這個 API 的 URL。第三個參數為 true，表示此請求為非同步請求。

如果需要，可以為請求設置 HTTP 標頭。

```
xhr.setRequestHeader('Content-Type', 'application/json');
```
這個例子中，設置了 Content-Type 標頭，指定傳輸資料的格式為 JSON。

監聽 XMLHttpRequest 物件的 readyStateChange 事件。

```javascript
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
```
這個例子中，使用了匿名函式來監聽 readyStateChange 事件。當 readyState 屬性為 4 且 status 屬性為 200 時，表示回應成功，此時可以處理回應內容。

呼叫 XMLHttpRequest 物件的 send() 方法，以發送請求。
```javascript
xhr.send();
```
這個例子中，send() 方法不接受任何參數，表示此請求不包含任何資料。

完整範例

以下是一個完整的 XMLHttpRequest 物件的使用範例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```
這個例子中，使用了 GET 方法並且發送到 https://www.example.com/api/data 這個 API 的 URL。

# readyState、status、responseText 等屬性的含義

XMLHttpRequest 物件中有一些重要的屬性，包括 readyState、status 和 responseText。以下是這些屬性的詳細說明和範例：

1. readyState
readyState 屬性表示 XMLHttpRequest 物件的狀態，它是一個整數值，從 0 到 4，代表了 XMLHttpRequest 物件在發送和接收資料時的各個階段：

0 (未初始化)：XMLHttpRequest 物件已經建立，但尚未呼叫 open() 方法。
1 (載入中)：open() 方法已經被呼叫，但 send() 方法尚未被呼叫。
2 (載入完成)：send() 方法已經被呼叫，並且已經接收到回應標頭。
3 (交互中)：正在接收回應內容。
4 (完成)：回應已經完成，且已經可以處理回應內容。
以下是一個範例，展示了如何使用 readyState 屬性：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log('Request finished');
  }
};
xhr.send();
```
在這個範例中，當 readyState 等於 4 時，顯示了一個訊息，表示請求已經完成。

2. status
status 屬性表示伺服器回應的 HTTP 狀態碼，它是一個整數值，代表了伺服器對請求的回應：

2xx (成功)：表示請求成功。
3xx (重定向)：表示請求被重新導向。
4xx (客戶端錯誤)：表示伺服器無法處理請求。
5xx (伺服器錯誤)：表示伺服器發生錯誤。
以下是一個範例，展示了如何使用 status 屬性：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('Request successful');
  }
};
xhr.send();
```
在這個範例中，當 readyState 等於 4 且 status 等於 200 時，顯示了一個訊息，表示請求成功。

3. responseText
responseText 屬性表示伺服器回應的內容，它是一個字串值，包含了伺服器傳回的資料。

以下是一個範例，展示了如何使用 responseText 屬性：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```
在這個範例中，當 readyState 等於 4 且 status 等於 200 時，輸出了回應的內容，即伺服器傳回的資料。

需要注意的是，如果伺服器回應的資料不是純文字，而是二進位資料，那麼就需要使用其他屬性，例如 responseXML 或者 responseType。此外，需要使用 CORS（跨來源資源共用）時，可能會遇到安全性問題，需要使用相關的安全性設置才能正常使用 XMLHttpRequest 物件。

# onreadystatechange 和 onload 事件的使用

在使用 XMLHttpRequest 物件時，可以使用事件處理程序來處理 XMLHttpRequest 物件的各種事件。其中，最常用的事件是 onreadystatechange 和 onload 事件，下面是對它們的詳細解釋和範例：

onreadystatechange 事件
onreadystatechange 事件在 XMLHttpRequest 物件的 readyState 屬性改變時觸發。通常在這個事件處理程序中，我們會檢查 readyState 和 status 屬性，以確定請求是否已經完成，然後處理回應資料。

下面是一個使用 onreadystatechange 事件的範例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
```
在這個範例中，當 readyState 等於 4 且 status 等於 200 時，顯示了回應的內容，即伺服器傳回的資料。

onload 事件
onload 事件在 XMLHttpRequest 物件的請求完成後觸發。通常在這個事件處理程序中，我們會直接處理回應資料，而不需要檢查 readyState 和 status 屬性。

下面是一個使用 onload 事件的範例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true);
xhr.onload = function() {
  console.log(xhr.responseText);
};
xhr.send();
```
在這個範例中，當請求完成時，直接輸出了回應的內容，即伺服器傳回的資料。

需要注意的是，當使用 onload 事件時，如果請求發生錯誤，例如網路連接問題，那麼就不會觸發事件。因此，在使用 onload 事件時，建議同時使用 onerror 事件處理程序，以處理可能的錯誤情況。

# 非同步和同步請求的區別

在 JavaScript 中，請求資源時可以使用同步和非同步兩種方式。這兩種方式的區別在於請求發送後程式碼是否會等待回應資料返回。

同步請求
當使用同步請求時，JavaScript 程式碼會在請求發送後一直等待伺服器回應，直到收到回應後才會繼續執行下一行程式碼。因此，在使用同步請求時，程式碼的執行會被阻塞，直到請求完成為止。

下面是一個使用同步請求的範例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', false); // 同步請求
xhr.send();
console.log(xhr.responseText); // 在收到回應前會一直等待，直到收到回應後才輸出內容
```
在這個範例中，使用了同步請求，因此程式碼會在收到回應前一直等待，直到收到回應後才會繼續執行並輸出回應內容。

非同步請求
當使用非同步請求時，JavaScript 程式碼會在請求發送後立即繼續執行，而不會等待伺服器回應。當伺服器回應完成後，程式碼會透過事件處理程序處理回應資料。因此，在使用非同步請求時，程式碼的執行不會被阻塞，可以繼續執行下一行程式碼。

下面是一個使用非同步請求的範例：

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.example.com/api/data', true); // 非同步請求
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send();
console.log('請求已發送，但還沒有收到回應'); // 程式碼會繼續執行
```
在這個範例中，使用了非同步請求，因此程式碼會在請求發送後立即繼續執行，並輸出一條訊息。當伺服器回應完成後，才會觸發 onreadystatechange 事件，並處理回應資料。
