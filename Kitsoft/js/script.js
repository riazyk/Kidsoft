var buttonLeft = document.querySelector('#buttonLeft');
var buttonRight = document.querySelector('#buttonRight');
var slider = document.querySelector('.sliderWrapper');
var countSlides = document.querySelectorAll('.slide');
var bar = document.querySelector('.bar');
var month = document.querySelector('.monthes');
var temp1 = 1;
var temp2 = 1;

buttonLeft.addEventListener('click', moveLeft);
buttonRight.addEventListener('click', moveRight);

function moveLeft() {


	// Смещаем каждый слайд влево = от позиции left каждого слайда отнимаем длинну слайда.
	if (temp1) {
		temp1 = 0;
		for (var i = 0; i < countSlides.length; i++) {
			var getStyle = getComputedStyle(countSlides[i]);
			var pos = parseInt(getStyle.left) - 1920;
			countSlides[i].style.left = pos + "px";
		}

		// Удаляем крайний левый слайд и вставляем на место крайнего правого.
		var rem = slider.removeChild(slider.children[0]);
		slider.appendChild(rem);
		slider.children[5].style.left = 5760 + "px";
		moveBar();
		
						// Ограничение нажатия конопки "Влево" = не чаще чем длительности сдвига (transition) слайдов
						var intLeft = setTimeout(function() {
							temp1 = 1;
						}, 500);
					}
				}


				function moveRight() {

					// Смещаем каждый слайд вправо = к позиции left каждого слайда прибавляем длинну слайда.
					if (temp2) {
						temp2 = 0;
						for (var i = 0; i < countSlides.length; i++) {
							var getStyle = getComputedStyle(countSlides[i]);
							var pos = parseInt(getStyle.left) + 1920;
							countSlides[i].style.left = pos + "px";
						}

	// Удаляем крайний левый слайд и вставляем на место крайнего правого.
	var rem2 = slider.removeChild(slider.children[5]);
	slider.insertBefore(rem2, slider.children[0]);
	slider.children[0].style.left = -3840 + "px";
	moveBar()

							// Ограничение нажатия конопки "Вправо" = не чаще чем длительности сдвига (transition) слайдов
							var intLeft = setTimeout(function() {
								temp2 = 1;
							}, 500);
						}
					}

// Преремещение полоски под слайдером
function moveBar() {
	if  (slider.children[0].classList.contains('g')) {bar.style.left = 195+"px"; changeMonthColor(month.children[1]);}
	else if(slider.children[0].classList.contains('r')) {bar.style.left = 390+"px"; changeMonthColor(month.children[2]);}
	else if(slider.children[0].classList.contains('b')) {bar.style.left = 585+"px"; changeMonthColor(month.children[3]);}
	else if(slider.children[0].classList.contains('e')) {bar.style.left = 780+"px"; changeMonthColor(month.children[4]);}
	else if (slider.children[0].classList.contains('o')) {bar.style.left = 975+"px"; changeMonthColor(month.children[5]);}
	else {bar.style.left = 0+"px"; changeMonthColor(month.children[0]);};
}

// Выделение месяца в полоске под слайдером
function changeMonthColor(m) {
	for(var z=0; z<month.children.length; z++) {
		month.children[z].style.fontWeight="light";
		month.children[z].style.color="#457189";
	}
	m.style.fontWeight="normal";
	m.style.color="#fff";
}
