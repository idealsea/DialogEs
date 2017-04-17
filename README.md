# DialogEs
# DialogEs
Dialog有两个参数，第二个参数可选，第一个参数是提示框内容。
默认对话框没有取消按钮，在第二个参数里把对象的cancelShow属性设置成true就可以显示。
第二个参数示例
```js```
var option = {
    ok:function () {
        console.log('我是确定')
    },
    cancel:function () {
        console.log('我是取消')
    },
    cancelShow: false //是否显示取消按钮
};
var dialog1 = new DialogEs('用户名密码错误！');
```
我有个另外的想法，通过style += 改变样式。 目前没有实施是因为更新dom元素，比对代码没有想到办法。
