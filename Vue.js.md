# Vue.js

## Day-01

## vue介绍

1. js框架  框架 vs 库

   vue-core + components + vue-router + vuex + vue-cli
2. mvvm
    mvc
    view(视图)    controller    model(数据)
      |
    view(视图)    viewmodel   model(数据)

## vue基本使用

1. 初始化一个package.json包管理器
   `npm iniy -y`
2. 安装vue
   `npm i vue`
3. 导包
   `<script src="./node_modules/vue/dist/vue.js"></script>`

## vue指令

- `v-html`:把数据填充到标签  支持标签  谨慎使用
- `v-text`:把数据填充到标签
- `v-pre` :显示原始信息
- `v-once`:给标签只绑定数据一次，后面数据发生改变 标签的内容不会发生变换
- `v-model`: 双向数据绑定   视图改变影像数据 数据改变影像视图
- `v-bind`：绑定属性 单向
- `v-if`:通过创建元素和销毁元素达到元素的显式与隐藏
- `v-show`:通过display:none/block控制元素的显式与隐藏

### vue通过指令循环

```html
<body>
    <div id="app">
        <ul>
            <li v-for="(item, index) in students" :key="item.id">
                {{index}},{{item.name}},{{item.hobby}}
			</li>
        </ul>
        <div v-for="(v, k) in obj">
            {{k+'-'+v}}
        </div>
    </div>
    <script src="../Vue/node_modules/vue/dist/vue.js"></script>
    <script>
        let vm = new Vue({
            el: "#app",
            data() {
                return {
                    students: [{
                        id: 1,
                        name: 'zs',
                        hobby: 'fish'
                    }, {
                        id: 2,
                        name: 'lisi',
                        hobby: 'pig'
                    }, {
                        id: 3,
                        name: 'wangwu',
                        hobby: 'beff'
                    }],
                    obj: {
                        uname: 'zhangsan',
                        age: 23,
                        gender: 'male'
                    }
                }
            },
            methods: {

            },
        })
    </script>
</body>
```

### Vue自定义指令

```html	
<body>
    <div id="app">
       <input type="text" name="" id="" v-focus>
    </div>
    <script src="../Vue/node_modules/vue/dist/vue.js"></script>
    <script>
        // 自定义指令
        Vue.directive('focus',{
            inserted: function (el){
                console.log(1111);
                el.focus();
            }
        });
        let vm = new Vue({
            el: "#app",
            data() {
                return {
                    
                }
            },
            methods: {

            },
        })
    </script>
</body>
```

### Vue的过滤器

```html
<body>
    <div id="app">
        {{info | upper | lower}}
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        Vue.filter('upper',function(val){
            return val.toUpperCase();
        });
        Vue.filter('lower',function(val){
            return val.toLowerCase();
        });
        let vm = new Vue({
            el: '#app',
            data() {
                return {
                    info: 'china'
                }
            },
            // 局部的
            filters:{
                upper:function(){

                }
            }
        })
    </script>
```

### Vue声明周期

```html

```

