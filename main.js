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
        this.width = obj.width || 80;
        this.height = obj.height || 20;
        this.unit = obj.unit || '%';
        this.confirm = '确定';
        this.cancel = '取消';
        this.title = obj.title|| '';
        this.content = content;

        this.maskStyle = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; background-color: hsla(0,0%,0%,.3);';
        this.style = 'position: absolute; left: 50%; top: 50%; background-color: #f1f5f7;';
        this.style += 'width:'+ this.width+this.unit +'; height:'+ this.height+this.unit +'; margin-left:'+ -(parseInt(this.width)/2)+this.unit + '; margin-top:'+ -(parseInt(this.height)/2)+this.unit+';';
        this.ftStyle = 'display: flex; justify-content: space-around;';
        this.bdStyle = 'text-align:center';




        this.render();

    }
    DialogEs.prototype.render = function () {
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
                        <a class="btn-confirm" onClick="('+ this.hide +'());" href="javascript:;">'+this.confirm+'</a>\
                    </div>\
                </div>\
            </div>';

        $('body').append(htmlConstructor).on('click',function (e) {
            if($(e.target).hasClass('btn-confirm')){
                console.log(11);
            }
        });
    };

    DialogEs.prototype.hide = function () {
        console.log(this.id);
        $('#'+ this.id).hide();
    };
