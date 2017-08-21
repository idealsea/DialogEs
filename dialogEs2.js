//projectName: dialogEs
//author: sunHaiTao
//version: 2017-04-15 ver1.0
//modify： 2017-08-15 ver1.5
//modify： 2017-08-21 ver2.0  new

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
    var defaults = {};
    if(obj.pc){
        defaults.width = 300;
        defaults.unit = 'px';
        defaults.style = ' font-size: 16px; ';
        defaults.hdStyle = ' padding: 8px; ';
        defaults.ftStyle = ' padding: 10px 0; font-size: 14px;';
        defaults.bdStyle = ' line-height: 22px; padding: 5px;';
    }else{
        defaults.width = 5;
        defaults.unit = 'rem';
        defaults.style = '';
        defaults.hdStyle = ' padding: .15rem; font-size:.4rem; ';
        defaults.ftStyle = ' padding: .15rem 0 .25rem; ';
        defaults.bdStyle = ' font-size: .32rem; ';
    }
    if(obj.en){
        defaults.okTxt = 'OK';
        defaults.cancelTxt = 'Cancel';
    }else {
        defaults.okTxt = '确定';
        defaults.cancelTxt = '取消';
    }

    this.id = 'dialog' + new Date().getTime();
    this.width = obj.width || defaults.width;
    this.height = obj.height || 'auto';
    this.unit = obj.unit || defaults.unit;
    this.okTxt = obj.okTxt || defaults.okTxt;
    this.cancelTxt = obj.cancelTxt || defaults.cancelTxt;
    this.title = obj.title|| '';
    this.content = content || '';
    this.ok = obj.ok || function () {};
    this.cancel = obj.cancel || function () {};
    this.cancelShow = obj.cancelShow;
    this.okHide = obj.okHide;
    this.maskOffClick = obj.maskOffClick || false;
    this.parent = obj.parent || 'body';

    if(!parseInt(this.height)){
        defaults.finalHeight = 'auto';
        defaults.finalMarginTop = '-25%';
    }else{
        defaults.finalHeight = this.height+this.unit;
        defaults.finalMarginTop = -(this.height/2)+this.unit;
    }

    this.maskStyle = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100; background-color: hsla(0,0%,0%,.3); ';
    this.style = 'position: absolute; left: 50%; top: 50%; background-color: #f1f5f7; ';
    this.style += 'width:'+ this.width+this.unit +'; height:'+ defaults.finalHeight +'; margin-left:'+ -(this.width/2)+this.unit + '; margin-top:'+ defaults.finalMarginTop +'; ';
    this.style += defaults.style;
    this.hdStyle = 'text-align:center; ';
    this.hdStyle += defaults.hdStyle;
    this.ftStyle = 'text-align:center; ';
    this.ftStyle += defaults.ftStyle;
    this.bdStyle = 'text-align:center; ';
    this.bdStyle += defaults.bdStyle;
    this.okStyle = '';

    if(obj.style){
        this.style += obj.style;
    }
    if(obj.hdStyle){
        this.hdStyle += obj.hdStyle;
    }
    if(obj.bdStyle){
        this.bdStyle += obj.bdStyle;
    }
    if(obj.ftStyle){
        this.ftStyle += obj.ftStyle;
    }
    if(obj.maskStyle){
        this.maskStyle += obj.maskStyle;
    }
    if(obj.okStyle){
        this.okStyle += obj.okStyle;
    }
    if(obj.parent){
        this.maskStyle += 'position: absolute; ';
    }
    this.render();

}
DialogEs.prototype.render = function () {
    var cancelHtmlString = '', okHtmlString = '',maskOffClickClassName = '';
    if(this.cancelShow){
        cancelHtmlString = '<a class="btn-cancel" onclick=\'('+ this.cancel +')()\' href="javascript:;">'+this.cancelTxt+'</a>';
    }
    if(!this.okHide){
        okHtmlString = '<a class="btn-confirm" style="'+ this.okStyle +'" onclick=\'('+ this.ok +')()\' href="javascript:;">'+this.okTxt+'</a>';
    }
    if(this.maskOffClick){
        maskOffClickClassName = ' mask-off-click';
    }

    var htmlConstructor = '' +
        '<div id="'+ this.id +'" class="dialog-especial-mask '+ maskOffClickClassName +'" style="'+ this.maskStyle +'">\
                <div class="dialog-especial" style="'+ this.style +'">\
                    <div class="dialog-especial-hd" style="'+ this.hdStyle +'">\
                        '+ this.title +'\
                    </div>\
                    <div class="dialog-especial-bd" style="'+ this.bdStyle +'">\
                        '+ this.content +'\
                    </div>\
                    <div class="dialog-especial-ft" style="'+ this.ftStyle +'">\
                        '+ okHtmlString +'\
                        '+ cancelHtmlString +'\
                    </div>\
                </div>\
            </div>';

    $(this.parent).append(htmlConstructor).on('click',function (e) {
        var $target = $(e.target);
        if($target.hasClass('btn-confirm') || $target.hasClass('btn-cancel')){
            $target.parents('.dialog-especial-mask').hide();
        }else if($target.hasClass('dialog-especial-mask') && !$target.hasClass('mask-off-click')){
            $target.hide();
        }
    });
    //update margin height
    if(!parseInt(this.height)){
        this.amendPosition();
    }
};

DialogEs.prototype.hide = function () {
    $('#'+ this.id).hide();
};
DialogEs.prototype.show = function () {
    $('#'+ this.id).show();
    this.amendPosition();
};
DialogEs.prototype.destroy = function () {
    $('#'+ this.id).remove();
};
DialogEs.prototype.alert = function (x) {
    $('#'+ this.id).find('.dialog-especial-bd').text(x);
    this.show();
};
DialogEs.prototype.amendPosition = function () {
    var $dialogEspecial = $('#'+ this.id).find('.dialog-especial');
    $dialogEspecial.css({
        'margin-top': -($dialogEspecial.height()/2)
    });
};
