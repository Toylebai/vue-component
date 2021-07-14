
export default {
    props: {
        itemData: {
            type: String,
            default: ''
        }
    },

    render() {
        return Vue.h('li', {class: 'swiper-item'}, this.itemData)
    }
}