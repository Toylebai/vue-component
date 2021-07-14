
export default {
    props: {
        index: {
            type: Number,
            default: ''
        }
    },
    
    render() {
        return Vue.h('li', {class: 'swiper-instructions-item'}, this.index)
    }
}