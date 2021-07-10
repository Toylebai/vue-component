export default {
    props: {
        list: Array
    },
    render(h) {
        const list = this.list.map(v => h('p', {attrs: {class: 'list1-item'}}, v));

        return h('div', {attrs: {class: 'list1-wrapper'}}, list)
    }
}
