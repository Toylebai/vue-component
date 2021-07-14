import SwiperInstructionsItem from './components/swiper-instructions-item.js';

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },

    methods: {
        swiperInstructionsWrapper() {
            return this.list.map((item, index) => {
                return Vue.h(SwiperInstructionsItem, {index: index + 1});
            })
        } 
    },

    render() {
        const SwiperInstructions = this.swiperInstructionsWrapper();

        return Vue.h('ol', {class: 'swiper-instructions'}, [ ...SwiperInstructions])
    }
}