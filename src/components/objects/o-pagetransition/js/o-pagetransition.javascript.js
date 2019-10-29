import Highway from '@dogstudio/highway';
import Tiles from '../h/tiles/h.tiles';

export class PageTransition {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('o-pagetransition');
		this.$body = document.getElementsByTagName('body')[0];
		this.$h = new Highway.Core({
			transitions: {
				default: Tiles
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