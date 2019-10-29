import Highway from '@dogstudio/highway';
import LayerBottom from '../h/layer-bottom/h.layer-bottom';

export class PageTransition {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-pagetransition');
		this.$body = document.getElementsByTagName('body')[0];
		this.$h = new Highway.Core({
			transitions: {
				default: LayerBottom
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