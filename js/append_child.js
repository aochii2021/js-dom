function append() {
  // li要素を生成
  var li = document.createElement('li');

  // テキストノードを生成
  var text = document.createTextNode('追加文字列');

  // liタグの要素にテキストノードを追加
  li.appendChild(text);

  // idがlistsのulタグにliを追加（getElementById()を使ってIDから要素取得する方が一般的だが，これでもOK）
  lists.appendChild(li);
}