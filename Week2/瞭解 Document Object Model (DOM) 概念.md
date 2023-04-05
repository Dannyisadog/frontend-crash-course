## 什麼是 DOM？

DOM 是指 Document Object Model（文件物件模型），它是一種用來描述 HTML 和 XML 文檔的程式介面。簡單來說，DOM 將 HTML 或 XML 文檔轉換成一個由節點和對象組成的結構，開發者可以通過 JavaScript 操作這個結構，對文檔進行讀取、修改和更新等操作。

在 DOM 中，文檔被視為一個樹狀結構，每個節點代表文檔中的一個元素、屬性、文本內容或其他信息。開發者可以通過 JavaScript 獲取這些節點，並對它們進行操作。通過 DOM，開發者可以動態地更新網頁內容，改變網頁的樣式和行為，實現交互效果。

## DOM 樹的結構

DOM 樹的結構是指文檔的節點樹形結構，它由節點和對象組成，每個節點都有不同的屬性和方法，代表文檔中的不同元素、屬性、文本內容或其他信息。

舉例來說，以下是一個簡單的 HTML 文件：

```html
<!DOCTYPE html>
<html>
<head>
  <title>DOM Example</title>
</head>
<body>
  <h1>DOM Example</h1>
  <p>This is an example of the Document Object Model.</p>
</body>
</html>
```

這個文檔的 DOM 樹如下所示：

```
markdownCopy code
- Document
  - doctype
  - html
    - head
      - title
        - text: "DOM Example"
    - body
      - h1
        - text: "DOM Example"
      - p
        - text: "This is an example of the Document Object Model."
```

在這個 DOM 樹中，**`Document`** 是根節點，它有一個子節點 **`html`**。**`html`** 節點有兩個子節點 **`head`** 和 **`body`**，分別代表文檔的 head 和 body 部分。**`head`** 節點有一個子節點 **`title`**，代表文檔的標題。**`body`** 節點有兩個子節點 **`h1`** 和 **`p`**，分別代表文檔中的一個標題和一個段落。

在 DOM 樹中，每個節點都有對應的屬性和方法，開發者可以通過 JavaScript 獲取這些節點，並對它們進行操作。例如，可以通過以下 JavaScript 代碼獲取 **`h1`** 元素：

```jsx
const h1 = document.querySelector('h1');
```

在這個例子中，**`document`** 對象代表整個文檔，**`querySelector()`** 方法可以通過 CSS 選擇器獲取元素。這個代碼可以獲取文檔中的第一個 **`h1`** 元素，開發者可以通過 **`h1`** 對象的屬性和方法進行操作，例如修改它的文本內容或樣式。

## DOM 元素的屬性和方法

DOM 元素的屬性和方法是指開發者可以通過 JavaScript 操作的節點屬性和方法。以下是一些常用的 DOM 元素屬性和方法：

- **`element.innerHTML`**：獲取或設置元素的內容，通常用於獲取或設置元素的文本內容或 HTML 代碼。
- **`element.style`**：獲取或設置元素的樣式，通常用於修改元素的 CSS 屬性。
- **`element.className`**：獲取或設置元素的類名，通常用於修改元素的樣式。
- **`element.getAttribute()`**：獲取元素的屬性值。
- **`element.setAttribute()`**：設置元素的屬性值。
- **`element.addEventListener()`**：綁定事件監聽器，通常用於處理元素的事件。

舉例來說，以下是一個修改元素文本內容和樣式的 JavaScript 代碼：

```jsx
const h1 = document.querySelector('h1');
h1.innerHTML = 'New Title';  // 修改元素的文本內容
h1.style.color = 'red';     // 修改元素的文字顏色
```

在這個例子中，**`querySelector()`** 方法獲取了文檔中的第一個 **`h1`** 元素，然後通過 **`innerHTML`** 屬性修改了元素的文本內容，通過 **`style.color`** 屬性修改了元素的文字顏色。開發者還可以通過其他屬性和方法修改元素的其他屬性和樣式，實現更多的效果。