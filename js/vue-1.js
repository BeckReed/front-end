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
    },
    components: {
        home: {
            template: '<h1>你好，这是显示首页组件的内容</h1>'
        },
        post: {
            template: '<b>这是发起页</b>'
        },
        archive: {
            template: '<h3>这是存档页</h3>'
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
        }
    }
})