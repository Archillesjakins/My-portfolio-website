var cTA = document.getElementById("cTA");
if (cTA) {
  cTA.addEventListener("click", function () {
    window.open("https://github.com/Archly2022?tab=repositories");
  });
}

var cTAContainer = document.getElementById("cTAContainer");
if (cTAContainer) {
  cTAContainer.addEventListener("click", function () {
    var anchor = document.querySelector("[data-scroll-to='title']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  });
}

var developedAPython = document.getElementById("developedAPython");
if (developedAPython) {
  developedAPython.addEventListener("click", function () {
    window.open("https://github.com/Archly2022/AI-Archie");
  });
}

var summarizerAppDesigned = document.getElementById("summarizerAppDesigned");
if (summarizerAppDesigned) {
  summarizerAppDesigned.addEventListener("click", function () {
    window.open("https://github.com/Archly2022/News-Summarizer");
  });
}

const jakingsarchlyyahoocomText = document.getElementById(
  "jakingsarchlyyahoocomText"
);
if (jakingsarchlyyahoocomText) {
  jakingsarchlyyahoocomText.addEventListener("click", function () {
    window.location.href = "mailto:jakingsarchly@yahoo.com";
  });
}

var linkedInContainer = document.getElementById("linkedInContainer");
if (linkedInContainer) {
  linkedInContainer.addEventListener("click", function () {
    window.open("https://linkedin.com/in/archilles-macedonia-705695169");
  });
}

  var image4 = document.querySelector(".component-2-container .insert-image-icon4");
  var image5 = document.querySelector(".component-2-container .insert-image-icon5");
  var image6 = document.querySelector(".component-2-container .insert-image-icon6");
  var image7 = document.querySelector(".component-2-container .insert-image-icon7");
  var button = document.querySelector(".projects-container .projects5");


  // Add click event listeners to each image element
  if (image4) {
    image4.addEventListener("click", function() {
      // Open the webpage for image 4
      window.open("overlay-prjet.html", "_blank");
    });
  }

  if (image5) {
    image5.addEventListener("click", function() {
      // Open the webpage for image 5
      window.open("overlay-prjet.html", "_blank");
    });
  }

  if (image6) {
    image6.addEventListener("click", function() {
      // Open the webpage for image 6
      window.open("overlay-prjet.html", "_blank");
    });
  }

  if (image7) {
    image7.addEventListener("click", function() {
      // Open the webpage for image 7
      window.open("overlay-prjet.html", "_blank");
    });
  }

if (button) {
  button.addEventListener("click", function () {
    window.open("https://github.com/Archly2022?tab=repositories");
  });
}
