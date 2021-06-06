function remove() {
  var parentElement = document.getElementById('lists');
  var elements = parentElement.getElementsByTagName('li');

  // 最後の要素のインデックスを取得
  var removeIndex = elements.length - 1;
  parentElement.removeChild(elements[removeIndex]);
}