import List1 from './components/list-1.js';
import List2 from './components/list-2.js';

// 全局组件
Vue.component('List1', List1);

export default {
    data() {
        return {
            list: ['list1-1', 'list1-2', 'list1-3']
        }
    },
    components: {
        'List2': List2 
    },
    render(h) {
        const List1 = h('List1', {props: {list: this.list}});
        const List2 = h('List2');

        return h('div', {attrs: {id: 'app'}}, [List1, List2]);
    }
}
