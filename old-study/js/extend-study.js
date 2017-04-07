/**
 * Created by Beck on 2016/6/22.
 */

//js继承

//1.借用原型链进行继承 (由于存在缺点，实践中很少单独使用原型链)
function SuperTypePrototype(){
    this.property=true;
}

SuperTypePrototype.prototype.getSuperValue=function(){
    return this.property;
};

function SubTypePrototype(){
    this.subproperty=false;
}

//继承了SuperType
SubTypePrototype.prototype=new SuperTypePrototype();

//添加子类新方法、重写超类方法一定要放在以上替换原型对象之后
//添加新方法
SubTypePrototype.prototype.getSubValue=function(){
    return this.subproperty;
}
//重写超类方法
SubTypePrototype.prototype.getSuperValue=function(){
    return false;
}

var instanceProtoType=new SubTypePrototype();

/*
 原型链继承方式存在的问题:
    <1>引用类型一旦实例修改了，由于共享的原因会导致其他实例也发生改变
    <2>没有在不影响其他对象实例的情况下给超类的构造参数传递参数
  例子如下：
* */
function SuperType1(){
    this.colors=["blue","yellow","black"];
}
function SubType1(){

}

//继承SuperType
SubType1.prototype=new SuperType1();

var instance1=new SubType1();
instance1.colors.push("green");
var instance2=new SubType1();//这里colors同样会受instance1的影响增加一个 同时不能传参


//2 借用构造函数 (函数都需要写在构造函数里面，公共函数复用低 比较少单独使用这种模式继承)
function SuperType2(){
    this.colors=["blue","yellow","black"];
}
function SubType2(){
    //继承了 SuperType
    SuperType2.call(this);
}


var instance3=new SubType2();
instance3.colors.push("green");
var instance4=new SubType2();

/*
    借用构造函数的优点：可以传参
    例子如下:
* */
function SuperTypeConstruct(name){
    this.name=name;
}
function SubTypeConstruct(){
    //继承了 SuperTypeConstruct 还传递了参数
    SuperTypeConstruct.call(this,"秦始皇");
    //实例属性 (为保证子类自定义同名属性不被父类的覆盖，实例属性防止在继承之后)
    this.age=888;
    this.des="大秦帝国第一任皇帝";
}
var instance5=new SubTypeConstruct();
//以上借用构造函数实现继承存在 方法都在构造函数中定义，函数复用就无从谈起了，考虑到这些，实践中也是很少单独使用此类模式

//4 原型式继承
function createObject(o){
    function F(){}
    F.prototype=o;
    return new F();
}

var person1={name:"Beck",friends:["Shelby","Court","Val"]};
var anotherPerson1=createObject(person1);//可使用 Object.create()方法代替 但是只支持IE9+ Firefox 4+ Safari 5+ Opera 12+ Chrome
anotherPerson1.name="Lily";
anotherPerson1.friends.push("Tom");

var anotherPerson2=createObject(person1);
anotherPerson2.name="Lucy";
anotherPerson2.friends.push("Cbs");

//5 寄生式继承
/*
    使用寄生式继承来为对象添加函数，会由于不能做到函数服用而降低效率，这一点与构造函数模式类似
* */
function createAnother(original) {
    var clone=createObject(original);//通过调用函数创建一个新对象
    clone.sayHi=function () {//以某种方式来增强这个对象
        alert("hi");
    };
    return clone;
}

var parasiticPerson={name:"韩信",friends:["刘邦","萧何","樊哙"]};
var cloneAnotherPerson=createAnother(parasiticPerson);

//6 寄生组合式继承
function inheritPrototype(subType,superType) {
    var prototype=createObject(superType.prototype);//创建对象
    prototype.constructor=subType;//增强对象
    subType.prototype=prototype;//指定对象
}//以上inheritPrototype()实现了寄生组合式继承的最简单形式

function CombinationSuperType(name) {
    this.name=name;
    this.colors=["red","black","blue"];
}

CombinationSuperType.prototype.sayName=function () {
    alert(this.name);
}

function CombinationSubType(name,age) {
    CombinationSuperType.call(this,name);
    this.age=age;
}
inheritPrototype(CombinationSubType,CombinationSuperType);//调用组合式继承函数

CombinationSubType.prototype.sayAge=function () {
    alert(this.age);
}

var combinationSubType=new CombinationSubType("李世民",666);




























