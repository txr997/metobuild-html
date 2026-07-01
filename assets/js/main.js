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


	if (document.querySelectorAll(".el-preloader-1").length) {
		const loader = document.querySelector(".el-preloader-1");
		
		setTimeout(() => {
			loader.classList.add("loaded");
			afterPreloader();
		});
		setTimeout(function () {
			loader.remove();
		}, 1500);

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
							toggleActions: "play reverse play reverse",
							start: "top 86%",
						},
						rotateX: 0,
						scale: 1,
						opacity: 1,
						stagger: 0.03,
						delay: atDelay,
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
	}	




	
    
    // hero-1-slider
    if ($('.mb_hero2_slider').length) {
        var mb_hero2_slider = new Swiper(".mb_hero2_slider", {
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
				nextEl: ".mb_hero2_slider_next",
				prevEl: ".mb_hero2_slider_prev",
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


// parallax-images
if ($(".wa_magnetic_1_trigger").length) {
    var waMagnets2v2 = document.querySelectorAll('.wa_magnetic_1_trigger');
    var waStrength2v2 = 30;

    waMagnets2v2.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet2);
        magnet.addEventListener('mouseout', function(event) {
            const innerElements = event.currentTarget.querySelectorAll('.wa_magnetic_1_elm');
            innerElements.forEach((elm) => {
                gsap.to(elm, {
                    x: 0,
                    y: 0,
					scale: 1.05,
                    duration: 1,
                    ease: "ease1"
                });
            });
        });
    });

    function moveMagnet2(event) {
        var magnetButton = event.currentTarget;
        var bounding = magnetButton.getBoundingClientRect();
        const innerElements = magnetButton.querySelectorAll('.wa_magnetic_1_elm');

        const xMove = (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * waStrength2v2;
        const yMove = (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * waStrength2v2;

        innerElements.forEach((elm) => {
            gsap.to(elm, {
                x: xMove,
                y: yMove,
				scale: 1.05,
                duration: 1,
                ease: "ease1"
            });
        });
    }
}

// clients-1-slider
var el_clients1_slider = new Swiper(".el_clients1_slider", {
	loop: true,
	speed: 800,
	spaceBetween: 70,
	autoplay: { delay: 4000 },

	breakpoints: {
		320: {
		  slidesPerView: 2,
		},
		768: {
		  slidesPerView: 3,
		},
		992: {
		  slidesPerView: 4,
		},
		1200: {
		  slidesPerView: 6,
		}
	}
});




// about-1-card-animation
if (window.matchMedia("(min-width: 1200px)").matches) { 
	const about1tl = gsap.timeline({
		scrollTrigger: {
		  trigger: ".ag-about-1-card", 
		  start: "top 50%", 
		  toggleActions: "play none none reverse", 
		  markers: false 
		}
	  });
	
	  about1tl.from(".ag-about-1-card .has-ani:nth-of-type(1)", { 
		yPercent: 100,
		duration: .5
	  })
	
	  about1tl.from(".ag-about-1-card .has-ani:nth-of-type(2)", { 
		yPercent: -100,
		duration: .5
	  },"<")
}


// footer-2-big-title
if($(".el-footer-2-big-title").length) {
	function initElFooterTitleHover(selector) {
		const titleEl = document.querySelector(selector);
		if (!titleEl) return;
	
		const text = titleEl.textContent.trim();
		titleEl.innerHTML = text
		.split('')
		.map((char) => `<span class="el-letter">${char === ' ' ? '&nbsp;' : char}</span>`)
		.join('');
	
		const letters = titleEl.querySelectorAll('.el-letter');
	
		const yOffsets = [-50, -30, -15, -0,];
	
		let letterCenters = [];
	
		function cacheLetterPositions() {
		letterCenters = Array.from(letters).map((letter) => {
			const rect = letter.getBoundingClientRect();
			return rect.left + rect.width / 2;
		});
		}
	
		cacheLetterPositions();
		window.addEventListener('resize', cacheLetterPositions);
	
		titleEl.addEventListener('mousemove', (e) => {
		const mouseX = e.clientX;
		let activeIndex = 0;
		let minDist = Infinity;
	
		letterCenters.forEach((centerX, i) => {
			const dist = Math.abs(mouseX - centerX);
			if (dist < minDist) {
			minDist = dist;
			activeIndex = i;
			}
		});
	
		letters.forEach((letter, i) => {
			const distance = Math.abs(i - activeIndex);
			const yValue = distance < yOffsets.length ? yOffsets[distance] : 0;
	
			gsap.to(letter, {
			y: yValue,
			duration: 0.5,
			ease: 'power1.out',
			overwrite: 'auto',
			});
		});
		});
	
		titleEl.addEventListener('mouseleave', () => {
		gsap.to(letters, {
			y: 0,
			duration: 0.6,
			ease: 'power1.out',
			overwrite: 'auto',
		});
		});
	}
	
	document.addEventListener('DOMContentLoaded', () => {
		initElFooterTitleHover('.el-footer-2-big-title');
	});
}



// projects-3-slider
var el_p3_slider = new Swiper(".el_p3_slider", {
	loop: true,
	speed: 800,
	spaceBetween: 24,
	slidesPerView: 3,
	centeredSlides: true,
    roundLengths: true,

	// autoplay: { delay: 5000 },

	navigation: {
		nextEl: ".el_p3_slider_next",
		prevEl: ".el_p3_slider_prev",
	},
	pagination: {
        el: ".el_p3_slider_pagination",
        type: "fraction",
    },
	scrollbar: {
        el: ".el_p3_slider_fraction",
        hide: true,
    },

	breakpoints: {
		0: {
			slidesPerView: 1,
		},

		1400: {
			slidesPerView: 2,
		},

		1600: {
			slidesPerView: 2,
		},

		1800: {
			slidesPerView: 3,
		},
	}
	
});






})(jQuery);