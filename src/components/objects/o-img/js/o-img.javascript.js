class Img {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-img')[0];
		this.$body = document.getElementsByTagName('body');
	}

	eventListeners() {

    }
    
    // canUseWebP() {
    //     const elem = document.createElement('canvas');
    
    //     if (!!(elem.getContext && elem.getContext('2d'))) {
    //         // was able or not to get WebP representation
    //         return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    //     }
    
    //     // very old browser like IE 8, canvas not supported
    //     return false;
    // }

	initialize() {
		this.setup();
        this.eventListeners();
        // this.canUseWebP();
	}
}

new Img();
