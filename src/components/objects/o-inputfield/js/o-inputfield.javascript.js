class Inputfield {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-inputfield')[0];
		this.$body = document.getElementsByTagName('body');
	}

	eventListeners() {

	}

	initialize() {
		this.setup();
		this.eventListeners();
	}
}

new Inputfield();
