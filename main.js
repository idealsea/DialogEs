//Dialog有两个参数，第二个参数可选，第一个参数是提示框内容。
//默认对话框没有取消按钮，在第二个参数里把对象的cancelShow属性设置成true就可以显示。
//第二个参数示例
//    var option = {
//        ok:function () {
//            console.log('我是确定')
//        },
//        cancel:function () {
//            console.log('我是取消')
//        },
//        cancelShow: false //是否显示取消按钮
//    };
//    var dialog1 = new DialogEs('用户名密码错误！');

function DialogEs(content,obj) {
        if(obj === null || typeof obj !== 'object'){
            obj = {};
        }
        if(content === null || typeof content !== 'string'){
            content = '';
        }
        if(typeof obj.content !== 'undefined'){
            content = obj.content;
        }
        this.id = 'dialog' + new Date().getTime();
        this.width = obj.width || 5;
        this.height = obj.height || 2;
        this.unit = obj.unit || 'rem';
        this.okTxt = obj.okTxt || '确定';
        this.cancelTxt = obj.cancelTxt || '取消';
        this.title = obj.title|| '';
        this.content = content || '';
        this.ok = obj.ok || function () {};
        this.cancel = obj.cancel || function () {};
        this.cancelShow = obj.cancelShow;

        this.maskStyle = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; background-color: hsla(0,0%,0%,.3);';
        this.style = 'position: absolute; left: 50%; top: 50%; background-color: #f1f5f7;';
        this.style += 'width:'+ this.width+this.unit +'; height:'+ this.height+this.unit +'; margin-left:'+ -(parseInt(this.width)/2)+this.unit + '; margin-top:'+ -(parseInt(this.height)/2)+this.unit+';';
        this.ftStyle = 'display: flex; justify-content: space-around;';
        this.bdStyle = 'text-align:center';




        this.render();

    }
    DialogEs.prototype.render = function () {
        var cancelHtmlString = '';
        if(this.cancelShow){
            cancelHtmlString = '<a class="btn-cancel" onclick="(('+ this.cancel +')())" href="javascript:;">'+this.cancelTxt+'</a>';
        }

        var htmlConstructor = '' +
            '<div id="'+ this.id +'" class="dialog-especial-mask" style="'+ this.maskStyle +'">\
                <div class="dialog-especial" style="'+ this.style +'">\
                    <div class="dialog-especial-hd">\
                        <h3>'+ this.title +'</h3>\
                    </div>\
                    <div class="dialog-especial-bd" style="'+ this.bdStyle +'">\
                        '+ this.content +'\
                    </div>\
                    <div class="dialog-especial-ft" style="'+ this.ftStyle +'">\
                        <a class="btn-confirm" onclick="(('+ this.ok +')())" href="javascript:;">'+this.okTxt+'</a>\
                        '+ cancelHtmlString +'\
                    </div>\
                </div>\
            </div>';

        $('body').append(htmlConstructor).on('click',function (e) {
            var $target = $(e.target);
            if($target.hasClass('btn-confirm') || $target.hasClass('btn-cancel')){
                $target.parents('.dialog-especial-mask').hide();
            }
        });
    };

    DialogEs.prototype.hide = function () {
        $('#'+ this.id).hide();
    };


    var dialog1 = new DialogEs('用户名密码错误！',{
        ok:function () {
            console.log('我是确定')
        },
        cancel:function () {
            console.log('我是取消')
        },
        cancelShow: true
    });
