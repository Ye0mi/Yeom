document.addEventListener("DOMContentLoaded", function() {
  var gifContainer = document.querySelector(".gif-container");
  var wishMessage = document.querySelector(".wish-message");
  var wishInput = document.querySelector(".wish-input");
  var emailInput = document.querySelector(".email-input");
  var submitButton = document.querySelector(".submit-button");
  var confirmationMessage = document.querySelector(".confirmation-message");

  gifContainer.addEventListener("mouseover", function() {
    gifContainer.style.display = "none";
    wishMessage.style.display = "block";
    wishInput.style.display = "block";
    emailInput.style.display = "block";
    submitButton.style.display = "block";
    confirmationMessage.style.display = "none";
  });

  submitButton.addEventListener("click", function() {
    var wish = wishInput.value;
    var email = emailInput.value;

    // 이메일 전송 로직 구현
    // 이 부분은 서버 측과의 통신이 필요하므로 구체적인 구현은 생략합니다.

    wishInput.value = "";
    emailInput.value = "";

    wishMessage.style.display = "none";
    wishInput.style.display = "none";
    emailInput.style.display = "none";
    submitButton.style.display = "none";
    confirmationMessage.style.display = "block";
    confirmationMessage.innerHTML = "소원이 전송되었습니다.";
  });
});
