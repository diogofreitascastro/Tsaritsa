$(document).ready(function () {
  // First countdown
  var countDownDate1 = new Date("Nov 4, 2026 22:00:00").getTime();
  var x1 = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate1 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
      clearInterval(x1);
      document.getElementById("countdown").innerHTML = "0d 0h 0m 0s";
    }
  }, 1000);

  // Second countdown
  var countDownDate2 = new Date("Dec 8, 2025 10:00:00").getTime();
  var x2 = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate2 - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-drip").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (distance < 0) {
      clearInterval(x2);
      document.getElementById("countdown-drip").innerHTML = "0d 0h 0m 0s";
    }
  }, 1000);

  // Arrow scroll
  (function () {
    const arrow = document.querySelector('.ca3-scroll-down-link');
    if (!arrow) return;

    arrow.classList.add('arrow-visible');
    const threshold = 50;
    let ticking = false;

    function update() {
      const y = window.scrollY || window.pageYOffset;
      if (y > threshold) {
        arrow.classList.add('arrow-hidden');
        arrow.classList.remove('arrow-visible');
      } else {
        arrow.classList.remove('arrow-hidden');
        arrow.classList.add('arrow-visible');
      }
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  })();

  $('.filters li').click(function () {

    // Remove active from all filters
    $('.filters li').removeClass('active-filter');

    // Activate clicked filter
    $(this).addClass('active-filter');

    // Hide all sections
    $('.talents-megawrapper, .passives-megawrapper, .constellations-megawrapper').addClass('hide');

    // Show selected section
    if ($(this).hasClass('talents-filter')) {
      $('.talents-megawrapper').removeClass('hide');
    }
    if ($(this).hasClass('passives-filter')) {
      $('.passives-megawrapper').removeClass('hide');
    }
    if ($(this).hasClass('constellations-filter')) {
      $('.constellations-megawrapper').removeClass('hide');
    }
  });

  // Default active tab on page load
  $(document).ready(function () {
    $('.talents-filter').click();
  });
});

