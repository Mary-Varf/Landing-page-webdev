var ready;

ready = function() {
$(function () {
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		//direction: 'vertical',//
		direction: 'horizontal',
	//	slidesPerView: 3,
		loop: true,
		spaceBetween: 20,
		breakpoints: {
			500: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			768: {
			  slidesPerView: 2,
			  spaceBetween: 40
			},
			1200: {
			  slidesPerView: 3,
			  spaceBetween: 20
			}
		  },
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		},
		freeMode:true,
		autoplay: {
			delay:5000,
			stopOnLastSlide: false,
			disableOnInteraction: true
		},
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  })
	//script for popups
	$("button.btn").click(function () {
		$("div."+$(this).attr("rel")).fadeIn(500);
		$("body").append("<div id='overlay'></div>");
        $("#overlay").css({
            "width":"100%",
            "height":"100%",
            "position":"fixed",
            "top":"0",
            "left":"0",
            "display":"none",
            "background": "#000",
            "z-index": "50",
            "opacity": ".50"
        });
		$("#overlay").show().css({"filter" : "alpha(opacity=80)"});
		return false;				
	});	
	$("a.popup__close").click(function () {
		$(this).parent().fadeOut(100);
		$("#overlay").remove("#overlay");
		return false;
	});
	//script for tabs
	$("div.selectTabs").each(function () {
		var tmp = $(this);
		$(tmp).find(".lineTabs li").each(function (i) {
			$(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
				var tab_id=i+1;
				$(tmp).find(".lineTabs li").removeClass("active");
				$(this).parent().addClass("active");
				$(tmp).find(".tab_content div").stop(false,false).hide();
				$(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
				return false;
			});
		});
	});
});
$(document).keydown(function(event) {
	if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
			event.preventDefault();
		 }
		// 107 Num Key  +
		// 109 Num Key  -
		// 173 Min Key  hyphen/underscor Hey
		// 61 Plus key  +/= key
	});
	
	$(window).bind('mousewheel DOMMouseScroll', function (event) {
		   if (event.ctrlKey == true) {
		   event.preventDefault();
		   }
	});
$(document).click( function(e){
    if ( $(e.target).closest(".popup").length ) {// клик внутри элемента 
        return;
    }
    // клик снаружи элемента 
    $(".popup").fadeOut();
    $("#overlay").fadeOut();

});



	let header__burger = document.querySelector('.header__burger');
	let header_nav = document.querySelector('.header__nav');
	let header__list = document.querySelector('.header__list');

	header__burger.onclick = function(){
		header__burger.classList.toggle('active');
		header_nav.classList.toggle('active');
	}
	
	header__list.onclick = function () {
		header__list.classList.remove('active');
	}
	let header__link = document.querySelector('.header__list');
	
	header__link.onclick = function () {
		header__burger.classList.toggle('active');
		header_nav.classList.toggle('active');
	}
	$('.main, .skills, .portfolio, .price, .footer').click(function() {
		if (header__burger.classList.contains('active')) {
		event.preventDefault(); 
		header__burger.classList.toggle('active');
		header_nav.classList.toggle('active');
		}
	});
$(function(){
	$(".phone").mask("8(999) 999-9999");
  });

$(document).ready(function(){
	$.validator.addMethod("regexp", function(value, element, params) {
		var expression = new RegExp(params);
		return this.optional(element) || expression.test(value);
	});
		//====== валидация формы =============
	$(".reg-form-1__form").each(function () {
						$(this).validate({
							
							focusInvalid: false,
							rules: {
								name: {
									required: true,
									minlength: 2,
									maxlength: 22,
									regexp: /^[A-Za-zА-Яа-яЁё\s]/,
								},
								phone: {
									required: true,
								},
							},
							messages: {
								name: {
									required: "Заполните поле",
									minlength:"Введите не менее 2 символов",
									maxlength: "Введите не более 22 символов",
									regexp: "Используйте только русские <br>и английские буквы",
								},
								phone: {
									required: "Заполните поле",
								},
							},
							submitHandler(form) {
								let th = $(form);
	
								$.ajax({
								type: "POST",
								url: "mail.php", //Change
								data: th.serialize(),
							}).done(() => {
								console.log("Отправлено");
								$(".reg-form-1__form").remove();
								$(".reg-form-1__subtitle").remove();
								$(".reg-form-1__answer").css({"display":"block"});

								setTimeout(function(){
									$("#popup-item-1").fadeOut();
									$("#overlay").fadeOut();
									$(".popup").fadeOut();
								}, 1500);
						});
	
						return false;
						}
					});
			});
			$(".reg-form-2__form").each(function () {
				$(this).validate({
					
					focusInvalid: false,
						rules: {
							name: {
								required: true,
								minlength: 2,
								maxlength: 22,
								regexp: /^[A-Za-zА-Яа-яЁё\s]/,
							},
							phone: {
								required: true,
							},
							email: {
								required: true,
							},
						},
						messages: {
							name: {
								required: "Заполните поле",
								minlength:"Введите не менее 2 символов",
								maxlength: "Введите не более 22 символов",
								regexp: "Используйте только русские и английские буквы",
							},
							phone: {
								required: "Заполните поле",
							},
							email: {
								required: "Заполните поле",
							},
						},
						submitHandler(form) {
							let th = $(form);
	
						$.ajax({
						type: "POST",
						url: "mail.php", //Change
						data: th.serialize(),
					}).done(() => {
						console.log("Отправлено");
						$(".reg-form-2__form").remove();
						$(".reg-form-2__subtitle").remove();
						$(".reg-form-2__answer").css({"display":"block"});

						setTimeout(function(){
							$("#popup-item-2").fadeOut();
							$("#overlay").fadeOut();
							$(".popup").fadeOut();
						}, 1500);

				});

				return false;
				}
				});
			});
	})
};

$(document).ready(ready);

$(document).on('page:load', ready);

