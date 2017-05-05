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

var vm=new Vue({
    el: '#app',
    data: vmData,
    methods:{
        sayHello: function () {
            console.log(this.name);
            alert('Hello')
        },
        sayGoodBye: function () {
            alert('GoodBye')
        }
    }
})