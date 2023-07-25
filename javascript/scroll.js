const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]')
  const animationClass = 'animate'
  
  function animeScroll() {
    const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add('animate');
      } else {
        element.classList.remove('animate')
      }
    })
  }
  
  animeScroll();
  
  if (target.length) {
    window.addEventListener('scroll', function() {
      animeScroll();
    })
  }