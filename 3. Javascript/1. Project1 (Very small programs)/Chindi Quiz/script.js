const questions = [
  {
    prompt:
      'What is the secret of the universe?\n(a)42\n(b)It is truth itself\n(c)Om Tat Sat',
    answer: 'c',
  },
  {
    prompt: 'What is my favorite fruit?\n(a)Banana\n(b)Dragonfruit\n(c)Oranges',
    answer: 'c',
  },
  {
    prompt: 'What is my favourite chocolate?\n(a)Dark\n(b)Milk\n(c)White',
    answer: 'a',
  },
  {
    prompt:
      'If I did kill you, how would I do it?\n(a)Blunt force\n(b)Poison\n(c)Death by Snu snu',
    answer: 'c',
  },
];
let score = 0;

for (i = 0; i < questions.length; i++) {
  console.log(questions[i].prompt);
  let response = window.prompt(questions[i].prompt);
  if (response == questions[i].answer) {
    score++;
    alert('Correct');
  } else {
    alert('No you sucker');
  }
}
alert(`You only got ${score}/${questions.length}`);
