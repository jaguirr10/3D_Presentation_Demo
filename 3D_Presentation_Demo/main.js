var mockup_1 = document.querySelector("#mockup_1"),
    mockup_2 = document.querySelector("#mockup_2"),
    mockup_3 = document.querySelector("#mockup_3");

mockup_1.click = false;
mockup_2.click = false;
mockup_3.click = false;

showMockup = function (mockup) {
  if (mockup.click) {
    mockup.classList.remove("shown");
    mockup.classList.add("mockup");
    mockup.click = false;
  } else {
    mockup.classList.remove("mockup");
    mockup.classList.add("shown");
    mockup.click = true;
  }
};

mockup_1.addEventListener("click", function() {
  showMockup(mockup_1);
    mockup_2.classList.remove("shown");
    mockup_2.classList.add("mockup");
    mockup_3.classList.remove("shown");
    mockup_3.classList.add("mockup");
});
mockup_2.addEventListener("click", function() {
  showMockup(mockup_2);
    mockup_1.classList.remove("shown");
    mockup_1.classList.add("mockup");
    mockup_3.classList.remove("shown");
    mockup_3.classList.add("mockup");
});
mockup_3.addEventListener("click", function() {
  showMockup(mockup_3);
    mockup_1.classList.remove("shown");
    mockup_1.classList.add("mockup");
    mockup_2.classList.remove("shown");
    mockup_2.classList.add("mockup");
});



