import Highway from '@dogstudio/highway';
import Lines from '../h/lines/h.lines';

export class PageTransition {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-pagetransition');
		this.$body = document.getElementsByTagName('body')[0];
		this.$h = new Highway.Core({
			transitions: {
				default: Lines
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