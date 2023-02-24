//dźwięk przy kliknięciu
let a = new Audio("img/tap.wav");

function dzwiek () {
	a.play();
}

//animacja pojawienia się elementów na stronie
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.querySelectorAll(".animated")[3].classList.add("fadeInLeft");
			document.querySelectorAll(".animated")[4].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[5].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[6].classList.add("fadeInRight");
		}
	})
})

observer.observe(document.getElementById("sekcjaWideo"));

const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.querySelectorAll(".animated")[7].classList.add("fadeInLeft");
			document.querySelectorAll(".animated")[8].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[9].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[10].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[11].classList.add("fadeInRight");
		}
	})
})

observer2.observe(document.getElementById("socialMedia"));

const observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			document.querySelectorAll(".animated")[0].classList.add("fadeInTop");
			document.querySelectorAll(".animated")[1].classList.add("fadeInBottom");
			document.querySelectorAll(".animated")[2].classList.add("fadeInBottom");
		}
	})
})

observer3.observe(document.getElementById("oMnie"));

//slider
let slideIndex = 1;
showSlides(slideIndex);
let interwal = setInterval(slide, 5000)

function plusSlides(n) {
  showSlides(slideIndex += n);
  window.clearInterval(interwal);
  interwal = setInterval(slide, 5000);
}

function slide () {

  slideIndex += 1;

  if (slideIndex > 5) {
    slideIndex = 1
  }
  showSlides(slideIndex);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  window.clearInterval(interwal);
  interwal = setInterval(slide, 5000)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}