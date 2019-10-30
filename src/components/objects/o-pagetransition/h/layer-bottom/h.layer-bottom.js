import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';

import { Slider } from '../../../../modules/m-slider/js/m-slider.javascript';
import { TextSlider } from '../../../../modules/m-text-slider/js/m-text-slider';
import { Img } from '../../../o-img/js/o-img.javascript';
import { Intersection } from '../../../o-intersection/js/o-intersection.javascript';
import { PageTransition } from '../../js/o-pagetransition.javascript';

class LayerBottom extends Highway.Transition {

    in({ from, to, done }) {
        // Transition for the page the user is navigating to
        const layersOut = new TimelineLite();

        const container = document.getElementsByClassName('o-pagetransition')[0];
        const layers = document.getElementsByClassName('o-pagetransition__layer');

        layersOut.fromTo(to, .3, {
            opacity: 0
        }, {
            opacity: 1,
            onComplete: function() {
                container.style.zIndex = '-1';
                new Slider();
                new TextSlider();
                new Img();
                new Intersection();
                new PageTransition();
                done();
            }
        });

        for (let i = 0; i < layers.length; i++) {
            layers[i].style.transform = 'translateY(100%)';
        }

    }

    out({ from, done }) {
        // Transitions for the page that the user is leaving
        const layersIn = new TimelineLite();

        const container = document.getElementsByClassName('o-pagetransition')[0];
        const layers = document.getElementsByClassName('o-pagetransition__layer');

        // container.style.background = 'white';
        container.style.zIndex = '9999';

        layersIn.fromTo(from.children[0], .3, {
            opacity: 1
        }, {
            opacity: 0
        }, '-=.3')
        .fromTo(layers[0], 1, {
            transform: 'translateY(100%)'
        }, {
            transform: 'translateY(-100%)'
        })
        .add(() => {
            from.remove();
        })
        .fromTo(layers[1], 1, {
            transform: 'translateY(100%)'
        }, {
            transform: 'translateY(-100%)'
        }, '-=.8')
        .fromTo(layers[2], 1, {
            transform: 'translateY(100%)'
        }, {
            transform: 'translateY(-100%)',
            onComplete: () => {
                done();
            }
        }, '-=.8');

    }

}

export default LayerBottom;