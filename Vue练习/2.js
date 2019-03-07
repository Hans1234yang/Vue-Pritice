///实例化Vue 对象

new Vue({
    el: "#vue-app",
    data: {
        name: "hans同学",
        job: ".net程序员",
        website: "http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>标签</a>"
    },
    methods: {
        greet: function (time) {
            return 'Good   ' +  time + '!' +this.name;
        }
    }
});

//el: element 需要获取的元素，一定是html的根容器的元素  
//data: 用于数据的存储   data 本质上 是一个对象

//methods 本质上 也是一个对象来的  用于存储各种方法 