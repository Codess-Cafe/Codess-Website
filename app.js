$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        // $('html').css("scrollBehavior", "auto");
    });
    

});

// Numbers
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// end

let slides = document.querySelectorAll('.slide');

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses();

        slide.classList.add('active');
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}

/* FAQ section */
let faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Find the button element inside the FAQ item and trigger a click
    const button = item.querySelector('button');
    if (button) {
      button.click();
    }
  });
});

/* Counterup feature for Number Speaks Louder section */
$('.counter-count').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
    
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function updateCounters() {
  if (!animationStarted && isInViewport(counters[0])) {
    counters.forEach((counter) => {
      counter.innerText = '0';
      const targetWithCommas = counter.getAttribute('data-target');
      const target = parseFloat(targetWithCommas.replace(/,/g, ''));
      const increment = target / 400;

      function updateCounter(current) {
        if (current < target) {
          const newValue = Math.ceil(current + increment);
          counter.innerText = addCommas(newValue) + "+"; 
          setTimeout(() => updateCounter(newValue), 1);
        } else {
          counter.innerText = addCommas(target) + "+"; 
        }
      }
      updateCounter(0);

      animationStarted = true; 
    });
  }
}

const counters = document.querySelectorAll('.count');
let animationStarted = false;

window.addEventListener('scroll', updateCounters);

updateCounters();
