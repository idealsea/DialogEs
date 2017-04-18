# DialogEs
# DialogEs
Dialog有两个参数，第二个参数可选，第一个参数是提示框内容。
默认对话框没有取消按钮，在第二个参数里把对象的cancelShow属性设置成true就可以显示。
第二个参数示例
```js
//默认弹窗
var dialog1 = new DialogEs('用户名密码错误！');
//带参数弹窗
var option = {
    ok:function () {
        console.log('我是确定')
    },
    cancel:function () {
        console.log('我是取消')
    },
    cancelShow: false //是否显示取消按钮
};
var dialog1 = new DialogEs('用户名密码错误！', option);
//定制弹窗
var dialogContent = ''+
        '<i class="icon-boshimao"></i>';
    dialogContent +=
        '<ul class="dialog-order-list">\
            <li>\
                <span>标题</span>\
                <span class="order-price">¥59.00</span>\
                <span class="btn-order app-detail-buy">订购</span>\
            </li>\
            <li>\
                <span>标题</span>\
                <span class="order-price">¥49.00</span>\
                <span class="btn-order app-detail-buy">订购</span>\
            </li>\
            <li>\
                <span>标题</span>\
                <span class="order-price">¥99.00</span>\
                <span class="btn-order app-detail-buy">订购</span>\
            </li>\
        </ul>';

var dialog2 = new DialogEs('',{
    width: '6.3',
    height: '4.6',
    unit: 'rem',
    title: '订购',
    content: dialogContent,
    bdStyle: 'text-align:left;',
    okTxt: '关闭'
});
```
我有个另外的想法，通过style += 改变样式。 目前没有实施是因为更新dom元素，比对代码没有想到办法。
