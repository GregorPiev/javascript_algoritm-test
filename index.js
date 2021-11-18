// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var arTest = [1, 2, 3, 4, 4, 3, 2, 1];

function solution(A) {
  if (A.length % 2 != 0) {
    return false;
  }

  let arCurrent = [...A];

  for (let i = 0; i < arCurrent.length; i++) {
    console.log('i :', i);
    console.log('length:', arCurrent.length);
    let firstVal = arCurrent[0];
    console.log('firstVal:', firstVal);

    arCurrent.shift();
    let index = arCurrent.indexOf(firstVal);
    console.log('index:', index);

    if (index == -1) {
      return false;
    }
    arCurrent.splice(index);
    console.log('Array after splice: ', arCurrent);
    i -= 1;
  }

  return true;
}

let result = solution(arTest);

console.log('Array:', result);
