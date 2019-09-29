class Intersection {
	constructor() {
		this.initialize();
	}

	setup() {
        this.$holder = document.getElementsByClassName('o-intersection')[0];
        this.$body = document.getElementsByTagName('body');
        
        this.$elmToAnimate = document.getElementsByClassName('o-intersection__animation');
	}

	eventListeners() {
        this.checkCompatibility();
    }
    
    checkCompatibility() {
        if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
            
            const observer = new IntersectionObserver((entries) => {

                for (let i = 0; i < entries.length; i++) {
                    const entry = entries[i];

                    let direction = entry.target.getAttribute('data-direction');
                    direction = direction.charAt(0).toUpperCase() + direction.substring(1);

                    const delay = entry.target.getAttribute('data-delay') ? entry.target.getAttribute('data-delay') : '0';

                    if (entry.isIntersecting) {
                        entry.target.style.animation = `animation${direction} 2s ${delay}s forwards ease-out`;
                    }

                }

            });

            for (let x = 0; x < this.$elmToAnimate.length; x++) {
                observer.observe(this.$elmToAnimate[x]);
            }

        } else {
            // FALLBACK SET EVERY ELEMENTS OPACITY TO 1
            for (let i = 0; i < this.$elmToAnimate.length; i++) {
                console.log(this.$elmToAnimate[i]);
                this.$elmToAnimate[i].style.opacity = '1';
            }
        }
    }

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Intersection();
