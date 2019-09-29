class Slider {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-slider')[0];
		this.$body = document.getElementsByTagName('body');
		this.$sliderItems = document.getElementsByClassName('m-slider__item');
		this.$sliderModal = document.getElementsByClassName('m-slider__modal')[0];
		this.$sliderEnlargedImg = document.getElementsByClassName('m-slider__enlarged-img')[0];
		this.$sliderModalClose = document.getElementsByClassName('m-slider__modal--close')[0];
		this.$sliderLeftArrow = document.getElementsByClassName('m-slider__left')[0];
		this.$sliderRightArrow = document.getElementsByClassName('m-slider__right')[0];
		this.$slideCount = 0;
		this.$slideCountMax = this.$sliderItems.length - 1;
	}

	eventListeners() {
		for (let i = 0; i < this.$sliderItems.length; i++) {
			this.$sliderItems[i].style.left = `${i * this.$holder.offsetWidth}px`;
			this.$sliderItems[i].addEventListener('click', (e) => {
				e.preventDefault();
				this.$sliderModal.classList.add('is--active');
				this.$body[0].style.overflow = 'hidden';
				this.$sliderEnlargedImg.src = e.target.style.backgroundImage.split('"')[1];
			});
		}

		this.$sliderModalClose.addEventListener('click', (e) => {
			e.preventDefault();
			this.$body[0].style.overflow = null;
			this.$sliderModal.classList.remove('is--active');
		});

		this.$sliderModal.addEventListener('click', (e) => {
			if (this.$sliderModal === e.target) {
				this.$body[0].style.overflow = null;
				this.$sliderModal.classList.remove('is--active');
			}
		});

		this.$sliderLeftArrow.addEventListener('click', this.slideLeft.bind(this));
		this.$sliderRightArrow.addEventListener('click', this.slideRight.bind(this));
	}

	slideLeft() {
		if (this.$slideCount !== 0) {
			this.$slideCount--;
			for (let i = 0; i < this.$sliderItems.length; i++) {
				const currentPos = Number(this.$sliderItems[i].style.left.split('px')[0]);
				this.$sliderItems[i].style.left = `${currentPos + this.$holder.offsetWidth}px`;
			}
		} else {
			this.$slideCount = this.$slideCountMax;
			for (let i = 0; i < this.$sliderItems.length; i++) {
				this.$sliderItems[i].style.left = `-${(this.$slideCountMax - i) * this.$holder.offsetWidth}px`;
			}
		}
	}

	slideRight () {
		if (this.$slideCount !== this.$slideCountMax) {
			this.$slideCount++;
			for (let i = 0; i < this.$sliderItems.length; i++) {
				const currentPos = Number(this.$sliderItems[i].style.left.split('px')[0]);
				this.$sliderItems[i].style.left = `${currentPos - this.$holder.offsetWidth}px`;
			}
		} else {
			this.$slideCount = 0;
			for (let i = 0; i < this.$sliderItems.length; i++) {
				this.$sliderItems[i].style.left = `${i * this.$holder.offsetWidth}px`;
			}
		}
	}

	initialize() {
		this.setup();
		if (this.$holder) {
			this.eventListeners();
		}
	}
}

new Slider();
