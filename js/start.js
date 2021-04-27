const main = document.querySelector('#main'); // const : 변수를 상수로 선언하여 1개만 선언가능
const qna = document.querySelector('#qna'); // querySelector : 문서에서 css 선택자에 대응되는것을 선택해줌

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
  }, 450);
}
