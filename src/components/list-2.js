export default {
    data() {
        return {
            listData: ['list2-a', 'list2-b', 'list2-c']
        }
    },
    render(h) {
        const list = this.listData.map(v => h('p', {attrs: {class: 'list2-item'}}, v));
        return h('div', {attrs: {class: 'list2-wrapper'}}, list)
    }
}