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

/*text animation*/
document.addEventListener("DOMContentLoaded", function () {
    const word1 = document.getElementById("word1");
    const word2 = document.getElementById("word2");

    let activeWord = word1;
    let inactiveWord = word2;

    function toggleWords() {
        activeWord.classList.remove("active");
        inactiveWord.classList.add("active");

        // Swap active and inactive words
        const temp = activeWord;
        activeWord = inactiveWord;
        inactiveWord = temp;

        setTimeout(toggleWords, 2000); // Change every 2 seconds (2000 milliseconds)
    }

    toggleWords(); // Start the word carousel
});
