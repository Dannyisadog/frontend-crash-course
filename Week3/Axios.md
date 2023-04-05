# Axios 的基礎使用

Axios 是一個基於 Promise 的 HTTP 客戶端，它可以讓開發人員在瀏覽器和 Node.js 環境中發送 AJAX 請求。它支援多種請求方式，例如 GET、POST、PUT、DELETE 等等。Axios 能夠透過設置配置選項來調整請求的設置，例如設置請求的超時時間、設置請求頭、轉換請求和回應數據、設置鉤子函數等等。

以下是 Axios 的基礎使用方式：

安裝 Axios：
在 Node.js 環境中，可以使用 npm 或 yarn 進行安裝。

```
npm install axios
```

```
yarn add axios
```
在瀏覽器中，可以在 HTML 文件中通過 script 標籤來引入 Axios：

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

發送 GET 請求：
使用 Axios 發送 GET 請求的方式如下：

```javascript
axios.get(url[, config])
  .then(function (response) {
    // 處理成功回應
  })
  .catch(function (error) {
    // 處理錯誤
  });
```
其中，url 是請求的網址，config 是一個配置對象，可以設置請求的一些選項。成功回應時，可以在 response 對象中獲取回應的數據；發生錯誤時，可以在 error 對象中獲取錯誤信息。

例如，下面是一個發送 GET 請求的例子：

```javascript
axios.get('/user?id=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
發送 POST 請求：
使用 Axios 發送 POST 請求的方式如下：

```javascript
axios.post(url[, data[, config]])
  .then(function (response) {
    // 處理成功回應
  })
  .catch(function (error) {
    // 處理錯誤
  });
```
其中，url 是請求的網址，data 是要發送的數據，config 是一個配置對象，可以設置請求的一些選項。成功回應時，可以在 response 對象中獲取回應的數據；發生錯誤時，可以在 error 對象中獲取錯誤信息。

例如，下面是一個發送 POST 請求的例子：

```javascript
axios.post('/user', {
    firstName: 'John',
    lastName: 'Doe'
  })
  .then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
});
```
 
4. 設置請求頭：

可以通過配置選項來設置請求頭，例如：

```javascript
axios.get('/user', {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

其中，headers 屬性用來設置請求頭，可以設置多個頭部信息，例如 Authorization、Content-Type 等。

設置請求超時：
可以通過配置選項來設置請求的超時時間，例如：

```javascript
axios.get('/user', {
    timeout: 5000
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
其中，timeout 屬性用來設置超時時間，單位是毫秒。

設置鉤子函數：
可以通過配置選項來設置請求的鉤子函數，例如：

```javascript
axios.get('/user', {
    onUploadProgress: function (progressEvent) {
      // 處理上傳進度
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
其中，onUploadProgress 屬性用來設置上傳進度的回調函數，可以在進度發生變化時調用。

以上是 Axios 的基礎使用方式及相關示例，開發人員可以根據具體的需求進行配置和使用。

# Axios 和 fetch API 的區別

Axios 和 fetch API 都是現代瀏覽器中用於發送 HTTP 請求的工具，但是在一些方面有所不同。

## API 設計
Axios 是一個基於 Promise 的 HTTP 客戶端，提供了簡潔和直觀的 API，並且易於使用。Axios 的 API 允許您配置 HTTP 請求的各個方面，例如請求方法、URL、標頭、參數、請求體、响應體、超時時間等等。而 fetch API 的 API 設計較為簡單，它僅僅只是一個發送請求的函數，並不能直接設置一些請求的詳細信息，例如超時時間等。

## 跨瀏覽器支持
fetch API 是一個原生的 Web API，並且被現代瀏覽器所支持。然而，一些較老的瀏覽器並不支持 fetch API，因此在使用 fetch API 時，需要先判斷是否支持此 API，並作出相應的兼容性處理。相比之下，Axios 則具有更好的跨瀏覽器支持性，因為它是一個第三方庫，可以通過 npm 安裝使用，並且被設計為與不同瀏覽器的版本兼容。

## 錯誤處理
在錯誤處理方面，Axios 提供了更好的支持，因為它能夠捕獲請求和響應的錯誤並進行處理。它還提供了一個方便的方式來設置全局的錯誤處理程序，使得在請求和響應過程中發生錯誤時，可以集中處理。相比之下，fetch API 處理錯誤相對較為困難，因為錯誤需要手動進行處理。

## 內置拦截器
Axios 內置了請求和響應的拦截器，可以在請求和響應過程中攔截、修改和處理請求和響應。這使得開發人員可以在發送請求和處理響應時，進行一些自定義的處理。相比之下，fetch API 沒有內置的拦截器，開發人員需要手動實現攔截器功能。

## 瀏覽器兼容性
由於 fetch API 是一個較新的 Web API，因此在一些舊的瀏覽器中可能不被支持或支持不完全。而 Axios 則可以兼容到 IE 11 等較舊的瀏覽器版本，並且通過對 XHR（XMLHttpRequest）和 Fetch API 的組合使用，實現了更好的瀏覽器兼容性。

## 其他功能
除了上述的差異，Axios 還提供了一些其他的功能，例如取消請求、自動轉換 JSON、基於 URL 的節流限流等等。而 fetch API 則沒有這些內置的功能，需要開發人員自己實現。

總體而言，Axios 提供了更為豐富的 API 設計，更好的錯誤處理和拦截器支持，更好的瀏覽器兼容性，以及一些其他的功能。而 fetch API 則較為簡單和輕量級，並且作為一個原生的 Web API，在一些現代的瀏覽器中有著良好的支持和性能表現。開發人員可以根據具體情況選擇使用哪一種工具。

# 支持請求的配置項
# 支持的攔截器和拦截器的使用
# Axios 的錯誤處理方式