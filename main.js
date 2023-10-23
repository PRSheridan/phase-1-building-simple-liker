// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  let likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach(function (likeButton) {
    likeButton.addEventListener('click', () => {
      mimicServerCall()
      .then (() => {
        likeButton.textContent = FULL_HEART;
        likeButton.classList.add('.activated-heart');
      })
      .catch ((error) => {
        document.querySelector(".modal").classList.remove('.hidden');
      })
    });
  })
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
