document.addEventListener("DOMContentLoaded", function () {
  const ratingStars = document.querySelectorAll(".rating-card-number span");
  const submitButton = document.querySelector(".submit");

  ratingStars.forEach((star) => {
    star.addEventListener("click", function () {
      ratingStars.forEach((s) => s.classList.remove("active"));

      star.classList.add("active");
    });
  });

  submitButton.addEventListener("click", function () {
    const selectedRating = document.querySelector(
      ".rating-card-number span.active"
    );

    if (selectedRating) {
      const ratingValue = selectedRating.textContent;

      window.location.href = `thank.html?rating=${ratingValue}`;
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const ratingValue = urlParams.get("rating");

  if (ratingValue) {
    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = `You selected ${ratingValue} out of 5`;
  }
});
