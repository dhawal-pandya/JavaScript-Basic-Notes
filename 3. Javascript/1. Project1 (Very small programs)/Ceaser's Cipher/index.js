let button = document.querySelector('#button');
let answer = document.querySelector('#answer');
//
let alph = 'abcdefghijklmnopqrstuvwxyz';
//
function encrypt() {
  //
  let n = document.querySelector('#number').value;
  if (n > 26) n = n % 26;
  console.log(n);
  //
  let word = document.querySelector('#word').value;
  console.log(word);
  let dick = '';
  for (let j = 0; j < word.length; j++) {
    for (let i = 0; i < alph.length; i++) {
      if (word[j] == alph[i]) {
        let m = i + n;
        dick += alph[m];
      }
    }
    if (word[j] == ' ') dick += ' ';
  }
  console.log(dick);
  // for (let j = 0; j < wordArr.length; j++) {
  //   for (let i = 0; i < alphArr.length; i++) {
  //     if (wordArr[j] == alphArr[i]) {
  //       wordArr[j] = alphArr[i + n];
  //       break;
  //     }
  //   }
  // // }
  // console.log(wordArr);
  //
  // let ans = '';
  // for (let j = 0; j < wordArr.length; j++) ans += wordArr[j];
  // answer.textContent = `${ans}`;
}

button.addEventListener('click', function (n, wordArr) {
  encrypt(n, wordArr);
});
