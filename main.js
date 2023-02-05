const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const submit = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-rating");

submit.addEventListener("click", () => {
  thankYouState.classList.remove("hidden");
  ratingState.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thankYouState.classList.add("hidden");
  ratingState.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  });
});
