$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
 
      const hash = this.hash;
 
      $('html, body')
       .animate({
          scrollTop: $(hash).offset().top
        },400);
    }
  });

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
	var element = document.getElementById("navbar");

    if (scroll >= 150) {
  		element.classList.remove("transparent");
  		element.classList.add("solid");
    }
    else if (scroll <= 150) {
  		element.classList.remove("solid");
  		element.classList.add("transparent");
    }

});
