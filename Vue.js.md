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
- `v-pre`    :显示原始信息
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

### Vue生命周期

```html

```

### Vue实例

``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .stuTab,
        .addStu {
            margin: auto;
            width: 600px;
            border-collapse: collapse;
        }

        .addStu {
            width: 750px;
        }

        .stuTab th,
        .stuTab td {
            border: 1px solid orange;
            padding: 10px;
            height: 20px;
            line-height: 20px;
            text-align: center;
        }

        .stuTab th {
            background-color: orange;
        }
    </style>
</head>

<body>
    <div id="app">
        <div class="addStu">
            <label for="">编号: <input type="text" name="" id="" v-model="id" :disabled='flag'></label>
            <label for="">姓名: <input type="text" name="" id="" v-model="name"></label>
            <label for="">性别: <input type="text" name="" id="" v-model="sex"></label>
            <button @click='handelAddStudent'>提交</button>
        </div>
        <table class="stuTab">

            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
            </tr>
            <tr v-for="stu in students" :key="stu.id">
                <td>{{stu.id}}</td>
                <td>{{stu.name}}</td>
                <td>{{stu.sex}}</td>
                <td>
                    <a href="" @click.prevent="toEdit(stu.id)">修改</a>
                    <span>|</span>
                    <a href="" @click.prevent='removeStudent(stu.id)'>删除</a>
                </td>
            </tr>
        </table>
    </div>
    <script src="./node_modules/vue/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            data() {
                return {
                    flag: false,
                    students: [{
                        id: 1,
                        name: 'zs',
                        sex: '男'
                    }, {
                        id: 2,
                        name: 'lili',
                        sex: '女'
                    }, {
                        id: 3,
                        name: 'Tom',
                        sex: '男'
                    }, {
                        id: 4,
                        name: 'Jerry',
                        sex: '女'
                    }],
                    id: '',
                    name: '',
                    sex: ''
                }
            },
            methods: {
                handelAddStudent() {
                    if (this.flag) {
                        // 用户点击修改 修改好数据，点击提交，数据会到这里来  此时进入这个分支
                        this.students.some(item => {
                            if (item.id == this.id) {
                                item.name = this.name;
                                item.sex = this.sex;
                                return true;
                            }
                        });
                        this.flag = false;
                    } else {
                        // 根据填写的学生生成一个学生对象
                        let stu = {
                            id: this.id,
                            name: this.name,
                            sex: this.sex
                        };
                        this.students.push(stu);
                    }
                    // 清空表单元素
                    this.id = '';
                    this.name = '';
                    this.sex = '';
                },
                toEdit(id) {
                    // 点击修改  禁止添加学生
                    this.flag = true;
                    // 根据id查到对应学生的信息，然后填充到表单
                    let student = this.students.filter(stu => {
                        return stu.id === id;
                    });
                    // console.log(student);
                    this.id = student[0].id;
                    this.name = student[0].name;
                    this.sex = student[0].sex
                },
                removeStudent(id){
                    let index = this.students.findIndex(stu =>stu.id == id)
                    this.students.splice(index,1)
                }
            },
        })
    </script>
</body>

</html>
```

