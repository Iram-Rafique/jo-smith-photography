const reviews = [
  {
    text: "Jo Smith did an incredible job with our wedding photos. She captured every special moment beautifully and naturally. Her professionalism and friendly approach made us feel at ease. Highly recommend for stunning wedding photography.",
    name: "Rachel Callum",
    photo: "images/reviewImage1.jpg",
  },
  {
    text: "Jo Smith's photography skills are exceptional. She was patient and great with my kids during our family photoshoot. The photos are stunning, capturing our family's personality and love beautifully. Highly recommended for timeless, vibrant images",
    name: "Claire Liam",

    photo: "images/reviewImage2.jpg",
  },
  {
    text: "Jo Smith is an outstanding photographer! She captured candid moments beautifully, making everyone feel comfortable and at ease. The final images were high-quality and delivered promptly. I highly recommend Jo for any event and will definitely hire her again.",
    name: "Emma Scott",
    photo: "images/reviewImage3.jpg",
  },
];

function changeReview(index) {
  const reviewText = document.getElementById("review-text");
  const customerPhoto = document.getElementById("customer-photo");

  reviewText.textContent = reviews[index].text;
  customerPhoto.src = reviews[index].photo;
}

// initialize with the first review
changeReview(0);
