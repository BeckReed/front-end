/**
 * Created by Beck on 2016/6/22.
 */

/*js 面向的对象创建模式
* javascript高级程序设计  资料整理*/

//1.工厂模式
/*缺点：没有解决对象识别的问题 不能使用instanceof确定对象类型*/
function createPerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        alert(this.name);
    };
    return o;
}

var factoryPerson1=createPerson("Beck",29,"Sofrware Engnieeer");
var factoryPerson2=createPerson("Lily",24,"Test");

factoryPerson2.sayName=function(){
    //覆写对象的方法  不影响实例factoryPerson1的方法
    alert('Test1 '+this.name);
}

//2.构造函数模式
/*
  I.将构造函数当做函数：
   <1>构造函数与其他函数的唯一区别在于调用方式的不同，构造函数毕竟也是函数，不存在构造函数的特殊语法
   <2>任何函数只要通过new 操作符来调用，那么它就可以做为构造函数；
   <3>任何函数，如果不通过 new 操作符来调用，那它跟普通函数也不会有什么两样

  II.构造函数的  缺点：
    <1>使用构造函数的主要问题在于，每个方法都要在每个实例上重新创建一遍,如果采用定义全局定义的公共函数
    而言，就让本来只能让对象调用的函数全局化了，失去了引用类型封装的意义了
* */
function constructPerson(name,age,job){
    console.log('construnct..');
    console.log(this);
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        alert('构造函数模式测试: '+this.name);
        /*
            //这里相当于
            this.sayName=new Function("alert(this.name)");
            //以下 alert(constructPerson1.sayName==constructPerson2.sayName);  //false
        * */
    }
}

var constructPerson1=new constructPerson('a',1,"软件工程师");
var constructPerson2=new constructPerson('b',2,"测试工程师");
var constructPerson3= constructPerson('c',3,"产品经理");//这里没有使用New 为window的全局对象

//3.原型模式
function PrototypePerson(){
}
PrototypePerson.prototype={
    name:"Nicholas",
    age:21,
    job:"软件工程师",
    friends:["张三","李四"],
    sayName:function(){
        alert('原型模式对象： '+this.name);
    }
}
 var prototypePerson1=new PrototypePerson();
var prototypePerson2=new PrototypePerson();

//hasOwnProperty()方法用来检测一个属性是否存在于 "实例"之中
//in 属性要么是直接在对象上访问到的，要么是通过原型访问到的  两者都返回true
console.log('hasOwnProperty方法1： '+prototypePerson1.hasOwnProperty("name"));
console.log('in 方法1： '+ ("name" in prototypePerson1 ));//in 在原型对象访问到
prototypePerson1.name="托马斯";//prototypePerson1实例增加name属性 屏蔽原型对象的同名属性
console.log('hasOwnProperty方法2： '+prototypePerson1.hasOwnProperty("name"));
console.log('in 方法2： '+ ("name" in prototypePerson1 ));//in 在实例对象访问到


prototypePerson1.friends.push("陈五");
//弊端：引用类型的字段属性将被所有实例共享 prototypePerson1.friends 也将增加"陈五"

//4  组合使用构造函数模式和原型模式 (推荐用来定义引用类型的一种模式)
function HybridPerson(name,age,job){
    this.name=name;
    this.age=age;
    this.job=job;
    this.friends=["火候","温候"];
}
HybridPerson.prototype={
    constructor:HybridPerson,
    sayName:function(){
        alert('组合构造函数原型模式: '+this.name);
    }
}
var hybridPerson1=new HybridPerson("邹建",20,".net软件工程师");
var hybridPerson2=new HybridPerson("登登",21,"IOS工程师");

hybridPerson2.sayName=function(){
    alert('测试吖');
}

//5 动态原型模式
function DynamicPerson(name,age,job){
    //属性
    this.name=name;
    this.age=age;
    this.job=job;
    //方法
    if(typeof this.sayName !="function"){
        //这段代码会在初次调用构造函数才会执行判断，不过要记住，这里对原型所做的修改会在所有实例中得到反映
        DynamicPerson.prototype.sayName=function(){
            alert("动态原型模式： "+this.name);
        };
    }
}

var dynamicPerson=new DynamicPerson("罗武",22,"软件测试工程师");

//6 寄生构造函数模式
function ParasitePerson(name,age,job){
    var o=new Object();
    o.name=name;
    o.age=age;
    o.job=job;
    o.sayName=function(){
        alert('寄生构造函数模式: '+ this.name);
    }
    return o;
}
var parasitePerson=new ParasitePerson("刘邦",56,"军人");
/*
    这个模式可以在特殊的情况下用来为对象创建构造函数。
    假设我们想创建一个具有额外方法的特殊数组，由于不能直接修改Array构造函数，因此可以用这个模式
    实例如下：
* */
function  SpecialArray(){
    //创建数组
    var values=new Array();
    //添加值
    values.push.apply(values,arguments);
    //添加方法
    values.toPipedString=function(){
        return this.join("|");
    }
    //返回数组
    return values;
}
var colors=new SpecialArray("red","blue","green");

























