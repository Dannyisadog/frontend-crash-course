## **JavaScript的用途和應用場景**

JavaScript 是一種網頁前端程式語言，用於開發互動式網頁。JavaScript 被廣泛用於許多網站、網頁應用和手機應用程式，下面是 JavaScript 的一些主要應用場景：

1. **網頁前端開發**：JavaScript 是網頁前端開發的重要語言，可以實現動態網頁效果、用戶交互和數據驅動等功能。JavaScript 可以與 HTML 和 CSS 一起使用，實現豐富的網頁內容。
2. **瀏覽器中的擴充外掛**：JavaScript 可以用於開發瀏覽器擴展，例如 Chrome、Firefox 等瀏覽器的擴充和外掛，提供額外的功能和服務。
3. **後端開發** : JavaScript 也可以用於後端開發，例如使用 Node.js 開發後端應用，如網站後端和 API 服務。
4. **手機APP開發**：JavaScript 還可以用於開發手機APP，例如使用 React Native 框架開發跨平台的移動應用程式，或使用 Apache Cordova 等工具將 JavaScript 程式碼轉換為原生移動應用程式。

## **JavaScript的語法和基本結構**

當我們在網頁上想要添加互動性和動態效果時，我們可以使用JavaScript這個腳本語言。JavaScript的語法和基本結構如下：

- 語句需要以分號結尾，但如果語句在程式碼中，可以省略分號。
- 宣告變數名稱的大小寫必須與其使用時的大小寫相同。
- 使用雙斜線（//）表示單行註解，使用斜線星號（/*）和星號斜線（*/）表示多行註解。

## **基本結構**

JavaScript程式碼通常放置在HTML文檔的<head>或<body>標記中。以下是一個簡單的JavaScript程式碼範例：

```html
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
</head>
<body>
    <!-- 其他HTML內容 -->
		<script>
        // JavaScript 程式碼
        var message = "Hello, World!";
        alert(message);
    </script>
</body>
</html>
```

在上面的程式碼中，JavaScript程式碼位於`<body>`標記中，使用`<script>`標記括起來。程式碼使用alert()函數顯示一個消息框，其中包含“Hello, World!”消息。程式碼中還宣告一個變數message儲存了Hello, World 這個訊息。

## ****變數聲明方式：****

使用 **`~~var~~`**、**`let`** 或 **`const`** 關鍵字來宣告變數。

```jsx
// 使用 var 關鍵字宣告變數
var x = 10;

// 使用 let 關鍵字宣告變數
let y = "hello";

// 使用 const 關鍵字宣告常數
const z = 3.14;
```

## ****函數聲明方式：****

使用 **`function`** 關鍵字來宣告函數。

```jsx
// 使用 function 關鍵字聲明函數
function add(a, b) {
  return a + b;
}

// 使用箭頭函數聲明函數
const subtract = (a, b) => {
  return a - b;
};
```

## **JavaScript使用註解 :**

在 JavaScript 中，有兩種註解方式，分別是單行註解和多行註解。

- **單行註解**

使用雙斜線 **`//`** 來進行單行註解。

```jsx
// 這是一個單行註解
let x = 10; // 這也是一個單行註解
```

- **多行註解**

使用斜線星號 **`/* */`** 來進行多行註解。

```jsx
/* 
這是一個多行註解
這個註解可以有多行
*/
let y = "hello"; /* 這也是一個多行註解 */
```