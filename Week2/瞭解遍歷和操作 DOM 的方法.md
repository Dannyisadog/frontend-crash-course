## 遍歷 DOM 樹的方法

JavaScript 遍歷 DOM 樹的方法，可以使用 DOM API 中提供的遍歷方法或是自己實作遞迴函式進行遍歷。

以下是幾種常用的方法：

### **1. `getElementsByTagName`**

使用 **`getElementsByTagName`** 可以獲得指定標籤名稱的所有元素，並返回一個 NodeList，可以用迭代或者 for 循環遍歷 NodeList。例如：

```jsx
const elements = document.getElementsByTagName('div');
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
```

### **2. `querySelectorAll`**

使用 **`querySelectorAll`** 可以獲得匹配指定 CSS 選擇器的所有元素，同樣返回一個 NodeList。例如：

```jsx
const elements = document.querySelectorAll('div, p');
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}
```

### **3. `childNodes`**

使用 **`childNodes`** 可以獲得當前節點的所有子節點，包括文本節點和元素節點，返回一個 NodeList。然後可以使用迭代或 for 循環遍歷 NodeList。例如：

```jsx
const parent = document.getElementById('parent');
const children = parent.childNodes;
for (let i = 0; i < children.length; i++) {
  console.log(children[i]);
}
```

## 操作 DOM 元素的屬性和樣式

在 JavaScript 中，可以通過以下方法來操作 DOM 元素的屬性和樣式：

### **操作元素屬性**

元素屬性包括 **`id`**、**`class`**、**`src`**、**`href`**、**`value`** 等。可以使用以下方法訪問和修改元素的屬性：

### 1. 使用 **`getAttribute`** 和 **`setAttribute`** 方法

可以使用 **`getAttribute`** 方法獲取元素的屬性值，使用 **`setAttribute`** 方法修改元素的屬性值。例如：

```jsx
const element = document.getElementById('example');
const idValue = element.getAttribute('id'); // 獲取元素的 id 屬性值
element.setAttribute('class', 'new-class'); // 修改元素的 class 屬性值
```

### 2. 直接訪問元素的屬性

在 JavaScript 中，也可以直接訪問元素的屬性。例如：

```jsx
const element = document.getElementById('example');
const idValue = element.id; // 獲取元素的 id 屬性值
element.class = 'new-class'; // 直接修改元素的 class 屬性值
```

### **操作元素樣式**

可以使用以下方法來操作元素的樣式：

### 1. 使用 **`style`** 屬性

可以使用元素的 **`style`** 屬性來修改元素的樣式。例如：

```jsx
const element = document.getElementById('example');
element.style.color = 'red'; // 修改元素的文字顏色
element.style.backgroundColor = '#ccc'; // 修改元素的背景色
```

### 2. 使用 **`classList`** 屬性

可以使用元素的 **`classList`** 屬性來添加、刪除和切換元素的 class。例如：

```jsx
const element = document.getElementById('example');
element.classList.add('new-class'); // 添加一個新的 class
element.classList.remove('old-class'); // 刪除一個舊的 class
element.classList.toggle('active'); // 切換一個 class
```

上述是一些常用的 JavaScript 操作 DOM 元素的屬性和樣式的方法。要注意的是，這些方法都會直接影響 DOM，因此操作前要確保對元素屬性和樣式的修改是必要的，並確保修改後的元素樣式不會對其他元素產生影響。

## 操作 DOM 的文件內容和 HTML 結構

在 JavaScript 中，可以使用以下方法來操作 DOM 的文件內容和 HTML 結構：

### **操作文件內容**

可以使用以下方法來操作 DOM 文件內容：

### 1. 使用 **`innerHTML`** 屬性

可以使用元素的 **`innerHTML`** 屬性來設置或獲取元素的內容。例如：

```jsx
const element = document.getElementById('example');
element.innerHTML = '<h1>Hello, World!</h1>'; // 設置元素的內容
const content = element.innerHTML; // 獲取元素的內容
```

### 2. 使用 **`textContent`** 屬性

可以使用元素的 **`textContent`** 屬性來設置或獲取元素的文本內容。例如：

```jsx
const element = document.getElementById('example');
element.textContent = 'Hello, World!'; // 設置元素的文本內容
const content = element.textContent; // 獲取元素的文本內容
```

### **操作 HTML 結構**

可以使用以下方法來操作 HTML 結構：

### 1. 使用 **`createElement`** 和 **`appendChild`** 方法

可以使用 **`createElement`** 方法創建新的 HTML 元素，使用 **`appendChild`** 方法將新元素添加到 DOM 中。例如：

```jsx
const element = document.getElementById('example');
const newElement = document.createElement('p'); // 創建一個新的 p 元素
newElement.textContent = 'This is a new paragraph.'; // 設置新元素的文本內容
element.appendChild(newElement); // 將新元素添加到 #example 元素中
```

### 2. 使用 **`insertBefore`** 方法

可以使用 **`insertBefore`** 方法在指定元素前面插入新元素。例如：

```jsx
const element = document.getElementById('example');
const newElement = document.createElement('p'); // 創建一個新的 p 元素
newElement.textContent = 'This is a new paragraph.'; // 設置新元素的文本內容
const existingElement = element.querySelector('h1');
element.insertBefore(newElement, existingElement); // 將新元素插入到 #example 元素中 h1 元素之前
```

### 3. 使用 **`removeChild`** 方法

可以使用 **`removeChild`** 方法從 DOM 中刪除指定的元素。例如：

```jsx
const element = document.getElementById('example');
const childElement = element.querySelector('p'); // 獲取 #example 元素中的第一個 p 元素
element.removeChild(childElement); // 刪除該 p 元素
```

上述是一些常用的 JavaScript 操作 DOM 文件內容和 HTML 結構的方法。要注意的是，這些方法都會直接影響 DOM，因此操作前要確保對文件內容和 HTML 結構的修改是必要的，並確保修改後的結構不會對其他元素產生影響。