export default function initAcordion() {
  var acc = document.querySelectorAll(".accordion");

  var i;
  let lastAcc = acc[acc.length - 1]
  for (i = 0; i < acc.length; i++) {
    acc[0].style.borderRadius = '10px 10px 0 0'
    lastAcc.style.borderRadius = '0 0 10px 10px'

    
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      if (lastAcc.classList.value === 'accordion active') {
        lastAcc.style.borderRadius = '0'
      } else {
        lastAcc.style.borderRadius = '0 0 10px 10px'
      }
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}