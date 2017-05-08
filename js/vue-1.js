/**
 * Created by Huangzufu on 2017/5/5.
 */

//Model for vue data
var vmData = {
    message: 'Hello World for Vue',
    yes: true,
    no: false,
    age: 28,
    name: 'jack test',
    score: 89,
    sex: 'Male',
    people: [
        {
            name: 'Lily',
            age: '18',
            sex: 'Female'
        },
        {
            name: 'Mike',
            age: '20',
            sex: 'Male'
        },
        {
            name: 'Beck',
            age: '27',
            sex: 'Male'
        }

    ]
};

//定义 自定义组件
var MyComponent=Vue.extend({
    template:'<div style="color: red">A custom component for vue !</div>'
});

//注册自定义组件
Vue.component('my-component',MyComponent);

//嵌套组件
var childComponent=Vue.extend({
    template:'<div style="margin-top: 30px;border: 1px solid #00ffff;color: #0e8fea">Hello I\'m a child component.</div>'
});

var parentComponent=Vue.extend({
    template:'<div style="margin-top: 20px;border: 1px solid #dd524d">Parent Component: <child-Component></child-Component></div>',
    components:{
        'child-Component':childComponent
    }
});
Vue.component("parent-component",parentComponent);

var Parent = Vue.component('parent',{
    template: '#parent-template',
    data:function () {
        return {parentMsg:'111'}
    },
    methods:{
        //接收子组件传过来的数据
        getChildMsg:function (msg) {
            alert(msg);
            this.parentMsg=msg;
        }
    }
});

var Child = Vue.component('child',{
    template:'#child-template',
    data:function () {
        return {childMsg:'99999'}
    },
    methods:{
        //把子组件的数据发给父组件
        sendParentMsg:function () {
            this.$emit('get-message',this.childMsg);
        },
    }
})

//创建根实例
var vm=new Vue({
    el: '#app',
    data: {
        message: 'Hello World for Vue',
        yes: true,
        no: false,
        age: 28,
        name: 'jack test',
        score: 89,
        sex: 'Male',
        people: [
            {
                name: 'Lily',
                age: '18',
                sex: 'Female'
            },
            {
                name: 'Mike',
                age: '20',
                sex: 'Male'
            },
            {
                name: 'Beck',
                age: '27',
                sex: 'Male'
            }

        ],
        currentView:"home",
        total:0,
        /*parentMsg: '',
        childMsg: ''*/
    },
    components: {
        //这里面的组件是局部注册的
        home: {
            template: '<h1>你好，这是显示首页组件的内容</h1>'
        },
        post: {
            template: '<b>这是发起页</b>'
        },
        archive: {
            template: '<h3>这是存档页</h3>'
        },
        'button-counter':{
            props:[],//父组件并没有往子组件传出数据,所以不需要
            template:'<button @click="increment">{{counter}}</button>',
            data:function () {
                return {counter:0}
            },
            methods:{
                increment:function () {
                    this.counter+=1;
                    this.$emit('increment');//触发绑定的 incrementTotal 事件
                }
            }
        },
        'parent':Parent,
        'fruit-parent':{
            template: '#fruit'
        },
        'fruit-parent2':{
            template: '#fruit-second'
        }

    },
    methods:{
        sayHello: function () {
            console.log(this.name);
            alert('Hello')
        },
        sayGoodBye: function () {
            alert('GoodBye')
        },
        clickHome: function () {
            this.currentView='home';
        },
        clickPosts: function () {
            this.currentView='post';
        },
        clickArchive: function () {
            this.currentView='archive';
        },
        incrementTotal: function () {
            this.total+=1;
        }
    }
})