/**
 * Created by Beck on 6/22/2016.
 */

//js Array数组操作方法学习

/*
   创建数组的方式：
    1.使用 Array 构造函数
    2.使用字面量表示法
* */
var colorArrays=new Array("red","black","green");
var numberArrays=[1,2,10,5,3,0];

//栈 后进先出的数据结构  队列  先进先出的数据结构
var arrayCount=numberArrays.push(5);
console.log('push返回的count是： '+arrayCount);
var popItem=numberArrays.pop();
console.log('pop返回的最后一项是： '+popItem);

arrayCount=colorArrays.unshift("yellow","purpuse","dark");
console.log('unshift返回的count是： '+arrayCount);
var shiftItem=colorArrays.shift();
console.log('shift返回的第一项是： '+shiftItem);

//检验是否数组兼容性写法
function isArray(value){
    if(typeof Array.isArray==="function"){
        return Array.isArray(value);
    }else{
        //兼容旧版本浏览器
        return Object.prototype.toString.call(value)==="[object Array]";
    }
}

/*
  数组toString方法会返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串

* */
var arrayToString=colorArrays.toString();
var arrayValueOf=colorArrays.valueOf();
var arrayToLocalString=colorArrays.toLocaleString();

//重排序方法  reverse sort
var arrayReverse=numberArrays.reverse();
var arraySort1=numberArrays.sort();

//如果第一个数应该位于第二之前则返回一个负数
function arrayCompare1(value1,value2){
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else{
        return 0;
    }
}

//比较函数简化版
function arrayCompare2(value1,value2){
    return value1-value2;
    //return value2-value1;
}


var arraySort2=numberArrays.sort(arrayCompare1);
var arraySort3=numberArrays.sort(arrayCompare2);

var colorArrays2=new Array("aa","bb","cc","dd");
/*
    concat创建当前数组的副本，将接收到的参数添加到这个副本的末尾
        1.没有传递的参数情况下，复制当前数组的并返回副本
        2.传递一个或者多个数组，会将这些数组的每一项都添加到结果数组并返回
* */
var concatArray1=colorArrays2.concat("ddd",["gg","mm"]);
/*
    slice基于当前数组中的一个或者多个项创建一个新的数组 (包前不包后)
        1.只传递一个参数的情况下，返回从该参数开始位置到当前数组结束末尾的所有项
        2.slice方法不会影响到原来的数组
* */
var sliceArray1=colorArrays2.slice(1,3);

/*
    splice数组最灵活强大的方法，主要用途是想数组中部插入项，删除项
    splice始终会返回一个数组，该数组为被删除项的数组，如果没有删除任何项，则返回空数组
* */

var spliceArray1=new Array("aa","bb","cc","dd");
//删除 只传入两个参数  传入要删除的第一项的位置和要删除的项数
var spliceRemoved=spliceArray1.splice(0,1);//删除第一项
//插入 需要提供三个参数依次是： 起始位置、要删除的橡树、要插入的项
var spliceAdded=spliceArray1.splice(1,0,"ee","ff");
//替换 向指定位置插入任意数量的项 且同时删除任意数量的项 删除的和删除的项数量不用相等 参数意义和上面插入一样
var spliceMulti=spliceArray1.splice(1,1,"gg","hh");

/*
    indexof()和lastIndexOf() 这两个方法都接收两个参数： 要查找的项和（可选的）表示查找的起点位置的索引
    这两个方法都返回要查找项在数组中的位置，或者在没有找到的情况下返回-1。在比较的第一个参数与数组中的每
    一项时，会使用全等操作符。也就是说，要求查找的项必须严格相等(就像使用===一样)
* */
var indexArray1=new Array("aa","bb","cc","dd");

var testIndex1=indexArray1.indexOf("cc");
var testIndex2=indexArray1.indexOf("sssssss");
var testIndex3=indexArray1.lastIndexOf("cc");
var testIndex4=indexArray1.lastIndexOf("sssssss");

/*
    迭代方法：
        1.every() 对数组中的每一个项运行给定函数，如果改函数对一个项都返回true，则返回true
        2.filter() 对数组中的每一个项运行给定函数，返回该函数会返回true的项组成的数组
        3.foreach() 对数组中的每一个项运行给定函数,这个方法没有返回值
        4.map() 对数组中的每一个项运行给定函数,返回每次函数调用的结果组成的数组
        5.some() 对数组中的每一个项运行给定函数，如果该函数对任一项返回true,则返回true

        这些方法可以大大方便处理数组操作 支持这些迭代方法的浏览器有IE9+ Firefox2+ Safari3+ Opera 9.5+和Chrome
* */
var testArray5=[1,2,3,9,87,23,45,76,12,99];
var everyResult=testArray5.every(function(item,index,array){
    return (item>2);
});
var someResult=testArray5.some(function (item,index,array) {
    return (item>2);
});

var filterResult=testArray5.filter(function(item,index,array){
    return (item>3);
});

var mapResult=testArray5.map(function(item,index,array){
    return item*2;
});

var testSum=0;
testArray5.forEach(function(item,index,array){
    //执行某些操作
    testSum+=item*2;
});

/*
    归并数组方法: reduce()和reduceRight()
    reduce()方法从数组的第一项开始，逐个遍历到最后
    reduceRight()方法从数组的最后一项开始，向前遍历到第一项
        这两个方法都接收两个参数： 一个在每一项调用的函数和(可选的)做为归并基础的初始值。传给
        reduce()和reduceRight()的函数接收4个参数：  前一个、当前值、项的索引、数组对象。
        这个函数返回的任何值都会做为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此
        第一个参数是数组的第一项,第二个参数是数组的第二项
* */
var testArray6=[1,2,3,9,87,23,45,76,12,99];
var testSum2=testArray6.reduce(function(prev,cur,index,array){
    return prev+cur;
});

var testSum3=testArray6.reduceRight(function(prev,cur,index,array){
    return prev+cur;
});




























