function appendText() {
  // テキストボックス内の文字を取得するにはvalueを使う
  var textInBox = document.getElementById('textBox').value;
  var Lists = document.getElementById('lists');
  var newText = document.createTextNode(textInBox);
  var newList = document.createElement('li');
  newList.appendChild(newText);
  Lists.appendChild(newList);
}