// 생일 확인 창을 보여주는 함수
function showBirthdayQuestion() {
  var birthdayQuestion = document.getElementById('birthday-question');
  birthdayQuestion.style.display = 'block';
}

// 생일 확인 창을 숨기는 함수
function hideBirthdayQuestion() {
  var birthdayQuestion = document.getElementById('birthday-question');
  birthdayQuestion.style.display = 'none';
}

function playSong() {
  var audio = new Audio('/Users/yeomi/Desktop/Websites/UIDesign1/assets/Happy birthday.mp3');
  audio.play();
}

// '예' 버튼 클릭 시 생일 확인 창 닫고 음원 재생
document.getElementById('yes-button').addEventListener('click', function() {
  hideBirthdayQuestion();
  playSong();
});

// '아니오' 버튼 클릭 시 생일 확인 창 닫기
document.getElementById('no-button').addEventListener('click', function() {
  hideBirthdayQuestion();
});

// 페이지 로드 시 생일 확인 창 보여주기
window.addEventListener('load', function() {
  showBirthdayQuestion();
});
