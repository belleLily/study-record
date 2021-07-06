// 文档对象模型，针对 HTML 和 XML 文档的一个 API（应用程序编程接口）
// DOM 描绘了一个层次化的节点树，允许开发人员添加、移除和修改页面的某一部分。
// DOM 将文档描绘成一个由多层节点构成的结构。节点分为几种不同的类型，每种类型分别表示文档中不同的信息及（或）标记。
// 每个节点都拥有各自的特点、数据和方法，另外也与其他节点存在某种关系。
// 节点之间的关系构成了层次，而所有页面标记则表现为一个以特定节点为根节点的树形结构[html节点]
Node接口; //[native code]
Node.ELEMENT_NODE(1);
Node.TEXT_NODE(3);
Node.CDATA_SECTION_NODE(4); //只针对XML文档
Node.PROCESSING_INSTRUCTION_NODE(7);
Node.COMMENT_NODE(8);
Node.DOCUMENT_NODE(9);
Node.DOCUMENT_TYPE_NODE(10);
Node.DOCUMENT_FRAGMENT_NODE(11);

parentNode;
childNodes;
firstChild;
lastChild;
nextSibling;
previousSibling;

appendChild(); //将节点插入至父节点的最后
removeChild();
insertBefore(insertNode, referNode); //一为要插入的节点，二为参考节点，如果参考节点为空，插在最后面
replaceChild(newNode, oldNode);
cloneNode(true); //深复制

Document(9); //包含<!DOCTYPE html>
document.documentElement; //不含<!DOCTYPE html>，最外层<html></html>
document.documentElement.childNodes[0] === document.documentElement.firstChild; //指<html></html>
document.body; //指<body></body>
document.doctype;
document.title;
document.domain;
document.getElementById();
document.getElementsByTagName();
document.getElementsByName();
document.getElementsByClassName();
document.createElement("div");

Element(1);
nodeTyep;
nodeName;
nodeValue;
tagName;
nodeValues;
attributes[(getNamedItem, removeNamedItem, setNamedItem, item)];
id;
className;
title;
lang;
dir;
getAttribute();
setAttribute();

Text(3); //通过 nodeValue 属性或 data 属性访问 Text 节点中包含的文本
length;
appendData(text);
deleteData(offset, count);
insertDate(offset, text);
replaceData(offset, count, text);
splitText(offset);
substringDate(offset, count);
createTextNode();
//解析器的实现或 DOM 操作等原因，可能会出现文本节点不包含文本，或者接连出现两个文本节点的情况。
// 当在某个节点上调用这个方法时，就会在该节点的后代节点中查找上述两种情况。
// 如果找到了空文本节点，则删除它；如果找到相邻的文本节点，则将它们合并为一个文本节点。
normalize();

Comment(8); //同Text类型，但是无splitText方法
createComment();

// 虽然不能把文档片段直接添加到文档中，但可以将它作为一个“仓库”来使用，即可以在里面保存将来可能会添加到文档中的节点
// 可以通过 appendChild()或 insertBefore()将文档片段中内容添加到文档中。插入之后即删除文档片段
// 避免多次操作dom，导致浏览器反复渲染
DocumentFragment(11);
document.createDocumentFragement();

// 动态操作脚本
function loadScript(url) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.body.appendChild(script);
}
//动态样式
function loadCss(url) {
  var link = document.createElement("link");
  var head = document.getElementsByTagName("head")[0];
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  head.appendChild(link);
}

//操作表格
caption;
tBodies;
tFoot;
tHead;
rows;
createTHead();
createTFoot();
createCaption();
deleteTHead();
deleteTFoot();
deleteCaption();
deleteRow();
insertRow();

// DOMExtend
// 可传入body,#myDiv,.selected,img.button
querySelector();

querySelectorAll();

childElementCount();
firstElementChild();
lastElementChild();
previousElementSibling();
nextElementSibling();

// H5Extend
classList[(add, contains, remove, toggle)];

// 焦点管理
// 文档刚刚加载完成时，document.activeElement 中保存的是 document.body 元素的引用
document.activeElement; //引用DOM中当前获得焦点的元素
document.hasFocus(); //确定是否获得了焦点。
document.readState; //loading,complete
document.compatMode; //标准模式CSS1Compat->document.documentElement，混杂模式BackCompat->document.body
document.head;
document.charset; //字符集
div.dataset; //div属性data-前缀
//innerHTML会替换除div之外内部的所有元素，outerHTML包含div在内的所有元素
div.innerHTML;
div.outerHTML;
//第一个参数的值beforebegin，afterbegin，beforeend,afterend
//第二个参数element元素
div.insertAdjacentHTML();
// beforebegin
// <p>
// afterbegin
// beforeend
// </p>
// afterend

Element.scrollInotView(); //滚动至Element元素的位置

children;

contains();

// 兼容问题
innerText;
outerText;
//将页面主体滚动 5 行
document.body.scrollByLines(5);
//在当前元素不可见的时候，让它进入浏览器的视口
document.images[0].scrollIntoViewIfNeeded();
//将页面主体往回滚动 1 页
document.body.scrollByPages(-1);

//DOM1 DOM2 DOM3
// 任何支持 style 特性的 HTML 元素在 JavaScript 中都有一个对应的 style 属性。这个 style 对象是 CSSStyleDeclaration 的实例
// CSS 属性名，必须将其转换成驼峰大小写形式，才能通过 JavaScript 来访问。
div.style.width = "200px"; //只描述内联属性
cssText; //"position:absolute;left:0;top:0;"
length;
parentRule;
getPropertyCSSValue(propertyName);
getPropertyPriority(propertyName); //返回!important值，否则返回null
getPropertyValue(propertyName);
item(index);
removeProperty(propertyName);
setProperty(propertyName, value, priority);

document.defaultView;
document.defaultView.getComputedStyle(div, null);
div.currentStyle; //IE
document.styleSheets;

offsetParent;

document.querySelector("div").classList;

let div = document.getElementById("box");
let box2 = div.cloneNode(true);

MutationObserver;
node.contains(otherNode);
element.getBoundingClientRect(); //返回会一个矩形对象，包含 4 个属性：left、top、right 和 bottom。
insertAdjacentElement;

//视窗宽度 chrome
clientHeight = height + padding;
offsetHeight = height + padding + border;
scrollHeight = height + padding + 被隐藏在内容区域上方的像素数; //滚动高度（height为父元素/子元素两者最大高度）

clientTop = border;
offsetTop = margin + top;
scrollTop = 被隐藏在内容区域上方的像素数;

// 遍历 - 深度优先遍历
var filter = function (node) {
  return node.tagName.toLowerCase() == "li"
    ? NodeFilter.FILTER_ACCEPT
    : NodeFilter.FILTER_SKIP;
};
NodeIterator(root, whatToShow, filter, entityReferenceExpansion);
var iterator = document.createNodeIterator(
  document,
  NodeFilter.SHOW_ALL,
  null,
  false
);
nextNode();
previousNode();

// 基本功能同NodeIterator
TreeWalker;
var walker = document.createTreeWalker(
  div,
  NodeFilter.SHOW_ELEMENT,
  filter,
  false
);
currentNode;
parentNode();
firstChild();
lastChild();
nextSibling(); //当前节点的下一个同辈节点
previousSibling();

var range = document.createRange()
range.selectNode(element)
range.selectNodeContents(element)
range.cloneRange()
window.getSelection().addRange(range)
window.getSelection().removeAllRanges()

// textbox.setSelectionRange(startIndex, stopIndex);
var range = textbox.createTextRange();
//选择所有文本
range.collapse(true); 
range.moveStart("character", 0); 
range.moveEnd("character", textbox.value.length); //"Hello world!" 
range.select();