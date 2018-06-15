// DOM要素を参照
const elementSelect = document.querySelector("#calcType");
const elementNum1 = document.querySelector("#num1");
const elementNum2 = document.querySelector("#num2");
const elementResult = document.querySelector("#result");

// イベントを登録
elementSelect.addEventListener("change", calc);
elementNum1.addEventListener("change", calc);
elementNum2.addEventListener("change", calc);
calc();

/** 計算し画面に結果を表示します。 */
function calc() {
  elementResult.innerHTML =
    calculate(
      Number(elementNum1.value),
      Number(elementNum2.value),
      elementSelect.value
    )
}

/** 計算します。 */
function calculate(num1, num2, calcType) {
  let result;
  switch (calcType) {
    case "type-add":
      result = add(num1, num2);
      break;
    case "type-substract":
      result = substract(num1, num2);
      break;
    case "type-multiply":
      result = multiply(num1, num2);
      break;
    case "type-divide":
      result = divide(num1, num2);
      break;
    default:
      throw new Error();
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