import SwiperItem from './components/swiper-item.js';
import SwiperInstructions from './components/swiper-instructions-item.js';

export default {
    props: {
        list: {
            type: Array,
            default: []
        }
    },

    data() {
        return {
            timer: null,
            currentIndex: 0,
            ulsLi: [],
            olsLi: []
        }
    },

    methods: {
        swiperItemWrapper() {
            return this.list.map(item => {
                return Vue.h(SwiperItem, {itemData: item});
            })
        },

        swiperplay() {
            this.currentIndex++;

            if (this.currentIndex > this.list.length - 1) this.currentIndex = 0;

            this.ulsLi.forEach((item, index) => {
                item.className = 'swiper-item none';
                this.olsLi[index].className = 'swiper-instructions-item current-color';
            })

            this.ulsLi[this.currentIndex].className = 'swiper-item active'
            this.olsLi[this.currentIndex].className = "swiper-instructions-item active-color";

        },

        getElements() {
            this.ulsLi = document.querySelectorAll("ul li");
            this.olsLi = document.querySelectorAll("ol li");

            this.ulsLi[this.currentIndex].className = 'swiper-item active'
            this.olsLi[this.currentIndex].className = "swiper-instructions-item active-color";
        },

        autoPlay() {
            this.timer = setInterval(this.swiperplay, 3000);
        }
    },

    mounted () {
        this.$nextTick(() => {
            this.getElements();
            this.autoPlay();
        })
    },

    unmounted() {
        clearInterval(this.timer);
        this.timer = null;
    },

    render() {
        const swiperItem = this.swiperItemWrapper();

        return Vue.h('ul', {class: 'swiper-wrapper'}, [...swiperItem])
    }
}