function show(){
  // idを指定して，中身を取得（タグ込みで取得される）
  var result = document.getElementById('result');
  // タグを除いた中身のテキストを表示
  console.log(result.innerText);

  var nowDate = new Date();
  result.innerText = nowDate.toLocaleString();
}