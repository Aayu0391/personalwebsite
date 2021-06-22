document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

gsap.from('.logo-title', {autoAlpha: 0, duration: 1, delay: 0.8, y:10})
gsap.from('.nav-item', {autoAlpha: 0, duration: 1, delay: 0.9, y:10})
gsap.from('.home-title', {autoAlpha: 0, duration: 1, delay: 1, y:10})
gsap.from('.home-title-2', {autoAlpha: 0, duration: 1, delay: 1, y:10})
gsap.from('.home-cont', {autoAlpha: 0, duration: 1, delay: 1.1, y:10})
gsap.from('.pfp', {autoAlpha: 0, duration: 1, delay: 1.35, y:10})
gsap.from('.home-btn', {autoAlpha: 0, duration: 1, delay: 1, y:10})

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

window.sr = ScrollReveal({ reset: true });

sr.reveal('.reveal-div', {
  origin: 'bottom',
  distance: '50px',
  duration: 1800,
  scale: 0.8,
  delay: 200
});

window.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("my-form");

  var status = document.getElementById("status");

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}