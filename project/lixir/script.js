// function pageLoader(){
//   setTimeout(()=>{
//     document.getElementById('loader-div').style.display="none";
//     // document.getElementById('container').style.display="block";
//     // document.getElementById('footer').style.display="block";
//     document.body.style.overflow = "auto";
//   },5000)
// }
// window.onload=pageLoader();


 window.addEventListener("load", () => {
        const loader = document.getElementById("preloader");
        const page = document.getElementById("container");

        setTimeout(() => {
          loader.style.display = "none";
          page.classList.add("show");
          document.body.style.overflow = "auto";
        }, 4000); // smooth feel mate thodu delay
      });

       /* SCROLL REVEAL */
      function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal");

        reveals.forEach((el) => {
          const windowHeight = window.innerHeight;
          const elementTop = el.getBoundingClientRect().top;
          const revealPoint = 120;

          if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
          }
        });
      }

      window.addEventListener("scroll", revealOnScroll);




       const counters = document.querySelectorAll(".counter");
      const sections = document.querySelectorAll(".reveal");

      function startCount(counter) {
        counter.innerText = "0";
        const target = +counter.dataset.target;
        const speed = 120;

        const updateCount = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");

              entry.target.querySelectorAll(".counter").forEach((counter) => {
                startCount(counter);
              });
            } else {
              entry.target.classList.remove("active");
            }
          });
        },
        { threshold: 0.4 }
      );

      sections.forEach((section) => observer.observe(section));




const slides = document.querySelectorAll(".hero-image");
const slides1 = document.querySelectorAll(".history-content");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;
let timer;

function resetTextAnimation(slide) {
  const texts = slide.querySelectorAll(
    "h1, p, .hero-buttons, img, .history-data"
  );

  texts.forEach(el => {
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = "";
  });
}


function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides1.forEach(slide => slide.classList.remove("active"));

  slides[i].classList.add("active");
  slides1[i].classList.add("active");

  resetTextAnimation(slides[i]);
  resetTextAnimation(slides1[i]);
}


function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

function startAuto() {
  timer = setInterval(nextSlide, 5000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAuto();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAuto();
});

showSlide(index);
startAuto();

