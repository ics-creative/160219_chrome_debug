// DOM要素を参照
const elementSelect = document.querySelector("#calcType");
const elementNum1 = document.querySelector("#num1");
const elementNum2 = document.querySelector("#num2");
const elementResult = document.querySelector("#result");

// イベントを登録
elementSelect.addEventListener("change", update);
elementNum1.addEventListener("change", update);
elementNum2.addEventListener("change", update);
update();

/** 計算し画面に結果を表示します。 */
function update() {
  // 計算結果を求める
  const result = calculate(
    Number(elementNum1.value), // 1番目のテキスト入力フォームの値
    Number(elementNum2.value), // 2番目のテキスト入力フォームの値
    elementSelect.value // セレクトボックスの値（計算の種類）
  );

  // 画面に表示
  elementResult.innerHTML = result; // テキストを代入
}

/** 計算します。 */
function calculate(num1, num2, calcType) {
  let result;
  // 計算の種類で処理を分岐
  switch (calcType) {
    case "type-add": // 足し算の場合
      result = add(num1, num2);
      break;
    case "type-substract": // 引き算の場合
      result = substract(num1, num2);
      break;
    case "type-multiply": // 掛け算の場合
      result = multiply(num1, num2);
      break;
    case "type-divide": // 割り算の場合
      result = divide(num1, num2);
      break;
  }
  return result;
}

/** 足し算をします。 */
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

/** 引き算をします。 */
function substract(num1, num2) {
  const result = num1 - num2;
  return result;
}

/** 掛け算をします。 */
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}

/** 割り算をします。 */
function divide(num1, num2) {
  const result = num1 / num2;
  return result;
}
