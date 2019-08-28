class Img {
	constructor() {
		this.initialize();
	}

	setup() {
		this.$holder = document.getElementsByClassName('m-img')[0];
        this.$body = document.getElementsByTagName('body');
        this.$img = document.querySelectorAll('img');
        this.$bgImage = document.getElementsByClassName('o-img__bg');
	}

	eventListeners() {

    }
    
    canUseWebP() {
        Modernizr.on('webp', () => {
            const result = !!Modernizr.webp;
            if (result) {
                // Has WebP support
                // get all img tags
                for (let i = 0; i < this.$img.length; i++) {
                    if (this.$img[i].src.match(/\.(jpe?g|png)/)) {
                        let imgUrl = this.$img[i].src.split('.').slice(0, -1)[0];
                        imgUrl = `${imgUrl}.webp`;
                        this.$img[i].src = imgUrl;
                    }
                }

                for (let x = 0; x < this.$bgImage.length; x++) {
                    setTimeout(() => {                        
                        console.log(this.$bgImage[x]);
                    }, 1000);

                    // if (this.$img[i].src.match(/\.(jpe?g|png)/)) {
                    //     let imgUrl = this.$img[i].src.split('.').slice(0, -1)[0];
                    //     imgUrl = `${imgUrl}.webp`;
                    //     this.$img[i].src = imgUrl;
                    // }
                }

            }
        });
    }

	initialize() {
		this.setup();
        this.eventListeners();
        this.canUseWebP();
	}
}

new Img();
