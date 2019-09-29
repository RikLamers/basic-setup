import Highway from '@dogstudio/highway';
import FadeT from '../h/h.fadeIn';

class PageTransition {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-pagetransition');
		this.$body = document.getElementsByTagName('body')[0];
		this.$h = new Highway.Core({
			transitions: {
				default: FadeT
			}
		});
	}

	eventListeners() {}

	initialize() {
        this.setup();
        if (this.$holder) {
            this.eventListeners();
        }
	}
}

new PageTransition();