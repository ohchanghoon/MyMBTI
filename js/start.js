const main = document.querySelector('#main'); // const : 변수를 상수로 선언하여 1개만 선언가능
const qna = document.querySelector('#qna'); // querySelector : 문서에서 css 선택자에 대응되는것을 선택해줌

function addAnswer(answerText, qIdx) {
  var a = document.querySelector('.answerBox');
  var answer = document.createElement('button');
  answer.classList.add('answerList');
  a.appendChild(answer);
  answer.innerHTML = answerText;
  answer.addEventListener(
    'click',
    function () {
      var children = document.querySelectorAll('.answerList');
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
        children[i].style.display = 'none';
      }
      goNext(++qIdx);
    },
    false
  );
}

function goNext(qIdx) {
  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for (let i in qnaList[qIdx].a) {
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

function begin() {
  main.style.WebkitAnimation = 'fadeOut 1s';
  main.style.animation = 'fadeOut 1s';

  setTimeout(() => {
    qna.style.WebkitAnimation = 'fadeIn 1s';
    qna.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      main.style.display = 'none';
      qna.style.display = 'block';
    }, 450);
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}
