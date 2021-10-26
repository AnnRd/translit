let translitButton = document.getElementById('button');
let userWord = document.getElementById('input');

function translitUserWord(){
  let userWordValue = userWord.value;
  console.log(userWordValue);
  let rusWord = document.createElement('div');
  rusWord.innerText = userWordValue;
  let rusWordBlock = document.getElementById('russian')
  rusWordBlock.appendChild(rusWord)
};

translitButton.addEventListener('click', translitUserWord);


