/*
	Template Name: SaasRiver - SaaS & StartUp HTML Template
	Author: https://themexriver.com/
	Version: 1.0
*/


(function ($) {
"use strict";


/* 
	windows-load-function
*/


window.addEventListener('load', function(){

	if (document.querySelectorAll(".mb-preloader-1").length) {
		const loader = document.querySelector(".mb-preloader-1");

		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 700);

	} else {
		afterPreloader();
	}

	afterPageLoad();

})



/* 
	after-preloader-start
*/
function afterPreloader() {


	/* 
		only-LTR-direction
	*/
	if (getComputedStyle(document.body).direction !== "rtl") {

		// title-animation
		function wa_split_text() {

			var wa_st = $(".wa-split-text");
			if (wa_st.length === 0) return;
		
			gsap.registerPlugin(SplitText, ScrollTrigger);
		
			wa_st.each(function (index, wa_el) {
		
				var wa_els = wa_el;
		
				const wa_split = new SplitText(wa_els, {
					type: "lines, words, chars",
					lineThreshold: 0.5,
					linesClass: "split-line",
				});
		
				var split_type_set = wa_split.chars;
		
				gsap.set(wa_els, { perspective: 400 });
		
				var settings = {
					scrollTrigger: {
						trigger: wa_els,
						toggleActions: "play none none none",
						start: "top 86%",
						once: true,
					},
					duration: 0.35,
					stagger: 0.02,
					ease: "expo.out",
				};
		
				if ($(wa_el).hasClass("split-in-fade")) {
					settings.opacity = 0;
				}
				if ($(wa_el).hasClass("split-in-right")) {
					settings.opacity = 0;
					settings.x = 50;
				}
				if ($(wa_el).hasClass("split-in-left")) {
					settings.opacity = 0;
					settings.x = -50;
				}
				if ($(wa_el).hasClass("split-in-up")) {
					settings.opacity = 0;
					settings.y = 80;
				}
				if ($(wa_el).hasClass("split-in-down")) {
					settings.opacity = 0;
					settings.y = -80;
				}
				if ($(wa_el).hasClass("split-in-rotate")) {
					settings.opacity = 0;
					settings.rotateX = 50;
				}
				if ($(wa_el).hasClass("split-in-scale")) {
					settings.opacity = 0;
					settings.scale = 0.5;
				}
		
				if ($(wa_el).hasClass("split-up")) {
		
					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;
		
					$(split_type_set).each(function (i, elw) {
						gsap.from(elw, {
							opacity: 0,
							duration: 0.65,
							y: 40,
							rotate: 10,
							transformOrigin: "bottom right",
							filter: "blur(5px)",
							delay: 0.25 + i * 0.065,
							ease: "expo.out",
							scrollTrigger: {
								trigger: wa_el,
								start: "top 86%",
								toggleActions: "play none none none",
							},
						});
					});
		
				}
				else if ($(wa_el).hasClass("split-words-scale")) {
					let atDelay = parseFloat(wa_el.getAttribute("data-delay")) || 0;

					wa_split.split({ type: "words" });
					split_type_set = wa_split.words;
		
					gsap.set(split_type_set, {
						opacity: 0,
						scale: (i) => (i % 2 === 0 ? 0 : 2),
						force3D: true,
					});
		
					gsap.to(split_type_set, {
						scrollTrigger: {
							trigger: wa_el,
							toggleActions: "play none none reverse",
							start: "top 86%",
						},
						rotateX: 0,
						scale: 1,
						opacity: 1,
						stagger: 0.03,
						delay: atDelay,
						ease: "ease1",
					});
		
				}
				else {
					var wa_anim = gsap.from(split_type_set, settings);
		
					if ($(wa_el).hasClass("hover-split-text")) {
						$(wa_el).on("mouseenter", function () {
							wa_anim.restart();
						});
					}
				}
		
			});
		}
		wa_split_text();

		// title-animation-2
		document.querySelectorAll(".wa_split_2").forEach((atEl) => {
			const atSplit = new SplitText(atEl, {
				type: "words,chars",
				wordsClass: "word",
				charsClass: "char"
			});

			let atDuration = parseFloat(atEl.getAttribute("data-speed")) || 1;
			let atDelay = parseFloat(atEl.getAttribute("data-delay")) || 0;

			if (window.innerWidth <= 768) {
				atDuration = atDuration * 0.3; 
			}

			gsap.set(atSplit.words, {
				willChange: "transform",
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.set(atSplit.chars, {
				willChange: "transform",
				opacity: 0,
				rotateX: -80,
				transformOrigin: "center center -10px"
			});

			gsap.set(atEl, {
				perspective: 1000,
				transformStyle: "preserve-3d"
			});

			gsap.to(atSplit.chars, {
				scrollTrigger: {
					trigger: atEl,
					start: "top 86%",
				},
				opacity: 1,
				rotateX: 0,
				duration: atDuration,
				delay: atDelay,
				ease: "ease1",
				stagger: {
					each: 0.05,
					from: "center",
					grid: "auto",
				},
			});
		});

		// button-text
		if ($(".wa_btn_split").length) {
			gsap.registerPlugin(SplitText);

			$(".wa_btn_split").each(function (index, el) {

				el.split = new SplitText(el, {
					type: "words"
				});

				$(el).on("mouseenter", function () {

					gsap.fromTo(
						el.split.words,
						{
							opacity: 0,
							scale: (i) => (i % 2 === 0 ? 0 : 2),
							force3D: true,
						},
						{
							opacity: 1,
							scale: 1,
							duration: 0.5,
							stagger: 0.03,
							ease: "ease1",
							overwrite: "auto",
						}
					);

				});

			});
		}
	}	




	
    
    // hero-1-slider
    if ($('.mb_hero1_slider').length) {
        var mb_hero1_slider = new Swiper(".mb_hero1_slider", {
            loop: true,
            speed: 500,
            spaceBetween: 0,

            effect: "fade",
			fadeEffect: {
				crossFade: true
			},

            autoplay: {
            	delay: 5000,
            },

			navigation: {
				nextEl: ".mb_hero1_slider_next",
				prevEl: ".mb_hero1_slider_prev",
			},

            on: {
                slideChangeTransitionStart: () => {
                    h1_split_text();
                },
            },

        });


        function h1_split_text() {
            const currentSlide = document.querySelectorAll('.swiper-slide-active .h1_split_text');
        
            const split = new SplitText(currentSlide, { 
                type: 'lines,words',
                linesClass: "split-line"
            });
        
            gsap.set(split.words, { 
				autoAlpha: 0,
				scale: (i) => (i % 2 === 0 ? 0 : 2),
				force3D: true,
            });
        
            gsap.to(split.words, {
				rotateX: 0,
				scale: 1,
				autoAlpha: 1,
				stagger: 0.03,
				duration: 1,
				ease: "ease1",
            });
        }
        
        h1_split_text();
    }

	// hero-2-slider
	if ($('.mb_hero2_slider').length) {
		var mb_hero2_slider = new Swiper(".mb_hero2_slider", {
			loop: true,
			speed: 500,
			spaceBetween: 0,

			// autoplay: {
			// 	delay: 5000,
			// },

			grabCursor: true,
			effect: 'creative',
			creativeEffect: {
				prev: {
					shadow: true,
					origin: 'left center',
					translate: ['-5%', 0, -200],
					rotate: [0, 100, 0],
				},
				next: {
					origin: 'right center',
					translate: ['5%', 0, -200],
					rotate: [0, -100, 0],
				},
			},
			
			navigation: {
				nextEl: ".mb_hero2_slider_next",
				prevEl: ".mb_hero2_slider_prev",
			},


		});

	}
/* 
	after-preloader-end
*/
}



/* 
	after-page-load-start
*/
function afterPageLoad() {

	/* 
		add-active-class
	*/
	const waAddClass = gsap.utils.toArray('.wa_add_class');
	waAddClass.forEach(waAddClassItem => {
		gsap.to(waAddClassItem, {
			scrollTrigger: {
				trigger: waAddClassItem,
				start: "top 90%",
				end: "bottom bottom",
				toggleActions: "play none none reverse",
				toggleClass: "active",
				once: true,
				markers: false,
			}
		});
	});



	/* 
		wow-activation
	*/
	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       100,
			mobile:       true,
			live:         true
		});
		wow.init();
	};




		

/* 
	after-page-load-start
*/
}


// services-1-slider
var mb_services1_slider = new Swiper(".mb_services1_slider", {
	loop: true,
	speed: 800,
	spaceBetween: 28,
	slidesPerView: "auto",
	// autoplay: { delay: 4000 },
});



// projects-1-slider
var mb_project1_slider = new Swiper(".mb_project1_slider", {
	loop: true,
	speed: 800,
	autoplay: { delay: 5000 },
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},


	pagination: {
        el: ".mb_project1_slider_pagination",
        clickable: true, 
    },

});

// testimonial-1-slider
var mb_testimonial1_slider = new Swiper(".mb_testimonial1_slider", {
	loop: true,
	speed: 800,
	spaceBetween: 28,
	slidesPerView: "auto",
	// autoplay: { delay: 4000 },
	centeredSlides: true,
    roundLengths: true,

	navigation: {
		nextEl: '.mb_testimonial1_slider_next',
		prevEl: '.mb_testimonial1_slider_prev',
	},
});

// hero-2-scroll-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const mbH2tl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".mb-hero-2-bottom-inner", 
		  start: "top 80%", 
		  toggleActions: "play none none none", 
		  markers: false 
		}
	});

	mbH2tl.from(".mb-hero-2-bottom-inner .line-elm, .mb-hero-2-bottom-inner .line-elm-2, .mb-hero-2-bottom-inner .line-elm-3", { 
		scaleX: 0,
		duration: 1
	})

	mbH2tl.from(".mb-hero-2-bottom-inner .logo-x-card, .mb-hero-2-slider-btn", { 
		x: 100,
		duration: .5,
		autoAlpha: 0,
	}, "<50%")

}

// about-2-author-slider
if ($('.mb_a2_author_slider').length > 0 ) {
	var mb_a2_author_slider = new Swiper('.mb_a2_author_slider', {
		spaceBetween: 0,
		slidesPerView: 3,
		loop: true,
		// autoplay: {
		// 	enabled: true,
		// 	delay: 1000
		// },
		speed: 1000,
	});
};

if ($('.mb-about-2-client-slide').length > 0 ) {
	var slider = new Swiper('.mb-about-2-client-slide', {
		spaceBetween: 0,
		slidesPerView: 3,
		loop: true,
		autoplay: {
			enabled: true,
			delay: 1000
		},
		speed: 1000,
	});
};

// projects-2-scroll-stack
if (window.matchMedia("(min-width: 1200px)").matches) { 
	if ($('.mb-projects-2-height').length) {
		const mbP2Wrap = document.querySelector('.mb-projects-2-height');
		const mbP2Imgs = gsap.utils.toArray('.mb-projects-2-item-img-single', mbP2Wrap);
		const mbP2Numbers = gsap.utils.toArray('.mb-projects-2-item-number-single', mbP2Wrap);
		const mbP2Contents = gsap.utils.toArray('.mb-projects-2-item-content-single', mbP2Wrap);
		const mbP2Total = mbP2Imgs.length;

		mbP2Wrap.style.height = (mbP2Total * 100) + 'vh';

		function mbP2SetActive(index, fill) {
			mbP2Imgs.forEach((el, i) => el.classList.toggle('active', i === index));
			mbP2Contents.forEach((el, i) => {
				el.classList.toggle('active', i === index);
				el.classList.toggle('prev', i < index);
			});
			mbP2Numbers.forEach((el, i) => {
				el.classList.toggle('active', i === index);

				const line = el.querySelector('.item-line span');
				if (!line) return;

				if (i < index) {
					line.style.height = '100%';
				} else if (i === index) {
					line.style.height = (fill * 100) + '%';
				} else {
					line.style.height = '0%';
				}
			});
		}

		mbP2SetActive(0, 0);

		ScrollTrigger.create({
			trigger: mbP2Wrap,
			start: 'top top',
			end: 'bottom bottom',
			scrub: true,
			onUpdate: (self) => {
				const progress = self.progress * mbP2Total;
				const index = Math.min(mbP2Total - 1, Math.floor(progress));
				const fill = progress - index;
				mbP2SetActive(index, fill);
			},
		});
	}
}

// step-2-scroll-stack
if (window.matchMedia("(min-width: 1200px)").matches) { 
	if ($('.mb-step-2-card').length) {
		const mbS2Cards = gsap.utils.toArray('.mb-step-2-card');
	
		mbS2Cards.forEach((card, i) => {
			if (i === mbS2Cards.length - 1) return;
	
			gsap.to(card, {
				scale: .5,
				opacity: 0,
				ease: 'none',
				scrollTrigger: {
					trigger: mbS2Cards[i + 1],
					start: 'top bottom',
					end: 'top top',
					scrub: true,
				}
			});
		});
	}
	
	// step-2-scroll-progress-line
	if ($('.mb-step-2-scroll-progress-line').length) {
		gsap.to('.mb-step-2-scroll-progress-line', {
			width: '100%',
			ease: 'none',
			scrollTrigger: {
				trigger: '.mb-step-2-area',
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
			}
		});
	}

}

// about-2-img
if (window.matchMedia("(min-width: 1400px)").matches) { 
	const mbH2tl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".mb-about-2-img-2", 
		  start: "top 60%", 
		  toggleActions: "play none none none", 
		  scrub: true,
		  markers: false 
		}
	});

	mbH2tl.from(".mb-about-2-img-2", { 
		yPercent: -100,
	})

}



})(jQuery);