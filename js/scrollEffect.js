window.onload = function () {
  // get the scroll container element
  const container = document.getElementById("scroll-container");

  // initialize the amount of scroll
  let scrollAmount = 0;

  // Set the scroll step value to control the speed of the scrolling
  const scrollStep = 0.8; //  slow down the scroll speed

  // set the scroll interval value to control the smoothness of the scrolling
  const scrollInterval = 10; // slow down the scroll smoothness

  // function to handle the scrolling of the gallery
  function scrollGallery() {
    // increase the scroll amount by the scroll step value
    scrollAmount += scrollStep;

    // Set the horizontal scroll position of the container
    container.scrollLeft = scrollAmount;

    // if the scroll amount has reached or exceeded the scrollable width of the container
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      // reset the scroll amount to start from the beginning
      scrollAmount = 0;
    }
  }

  // set an interval to call the scrollGallery function at the specified scroll interval
  setInterval(scrollGallery, scrollInterval);
};
