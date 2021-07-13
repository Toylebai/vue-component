import SwiperWrapper from './src/swiper-wrapper.js'
import SwiperInstructions from './src/swiper-instructions.js';

export default {
    data() {
        return {
            list: ['1', '2', '3', '4']
        }
    },

    computed: {
        instructionsData() {
            return this.list.map((item, index) => index)
        }
    },

    render() {
        const SwiperWrapper1 = Vue.h(SwiperWrapper, {list: this.list});
        const SwiperInstructions1 = Vue.h(SwiperInstructions, {list: this.instructionsData});

        return Vue.h('div', {class: 'swiper-container'}, [SwiperWrapper1, SwiperInstructions1])
    }
}