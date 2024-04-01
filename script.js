document.addEventListener("DOMContentLoaded", function() {
    const lamp = document.getElementById("lamp");
    const toggleButton = document.getElementById("toggleButton");
  
    let isLampOn = false;
  
    toggleButton.addEventListener("click", function() {
      isLampOn = !isLampOn;
      if (isLampOn) {
        lamp.src = "on.jpg";
      } else {
        lamp.src = "off.jpg";
      }
    });
  });
  