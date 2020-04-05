var family = [
    {name:'微软雅黑',style:'font-family:微软雅黑'},
    {name:'宋体',style:'font-family:宋体'},
    {name:'隶书',style:'font-family:隶书'},
    {name:'新宋体',style:'font-family:新宋体'},
    {name:'楷书',style:'font-family:楷书'},
    {name:'华文隶书',style:'font-family:华文隶书'},
    {name:'华文彩云',style:'font-family:华文彩云'},
    {name:'华文仿宋',style:'font-family:华文仿宋'},
    {name:'华文琥珀',style:'font-family:华文琥珀'},
    {name:'华文行楷',style:'font-family:华文行楷'}
];

var Shape = [
    {name:'细体',style:'font-weight:lighter'},
    {name:'常规',style:'font-weight:normal'},
    {name:'粗体',style:'font-weight:bold'},
    {name:'细体 倾斜',style:'font-weight:lighter;font-style:italic'},
    {name:'倾斜',style:'font-style:italic'},
    {name:'粗偏斜体',style:'font-weight:bold;font-style:italic'}];





    var box = $("#noteDiv");


    let $div = $("<div id='fs' style='display:none'></div>");
    box.append($div);

    let $top = $("<div id='top'><span id='fs-font'>字体</span><div id='exist'>×<div></div>");
    $("#fs").append($top);

    let $set = $("<div id='setBox'><div>")
    $("#fs").append($set);

    //字体设置
    let $fontDiv = $("<div id='ff'><p>字体(F):</p><input type='text' class='ff' id='familyValue' value='微软雅黑' /><div class='sbox' id='fbox'></div></div>");
    $("#setBox").append($fontDiv);
    var fontFamily = $("#familyValue").val();
    let $ful = $("<ul class='list' id='f-ul'></ul>");
    $("#fbox").append($ful);
    for(let i=0;i<family.length;i++){
        let $fli = $("<li class='f-list' style='"+family[i].style+"'>"+family[i].name+"</li>");
        $("#f-ul").append($fli);
    }
    let familyValue = $("#familyValue");
    //console.log(familyValue);
    let fli = $(".f-list");
    //选择字体
    for(let i=0;i<fli.length;i++){
        if($(fli[i]).html() == familyValue.val()){
            $(fli[i]).addClass('shapeBack');
        }
        fli[i].onclick = function(){
            for(let i=0;i<fli.length;i++){
                if($(fli[i]).hasClass('shapeBack')){
                    $(fli[i]).toggleClass('shapeBack');
                }
            }
            $(this).addClass('shapeBack');
            //console.log($(this).html())
            fontFamily = $(this).html();
            familyValue.val($(this).html());
            //修改示例文字
            $("#egp").attr('style','font-family:'+fontFamily);
        }
    }

    //字形设置
    let $shape = $("<div id='shape'><p>字形(Y):</p><input type='text' id='shapeValue' class='shape' value='常规' /><div class='sbox' id='ybox'></div></div>")
    $("#setBox").append($shape);
    var fontShape='font-weight:normal';
    let $yul = $("<ul class='list' id='y-ul'></ul>");
    $("#ybox").append($yul);
    for(let i=0;i<Shape.length;i++){
        let $yli = $("<li class='y-list' style='"+Shape[i].style+"'>"+Shape[i].name+"</li>");
        $("#y-ul").append($yli);
    }
    let yli = $(".y-list");
    let shapeValue = $('#shapeValue');
    for(let i=0;i<yli.length;i++){
        if($(yli[i]).html() == shapeValue.val()){
            $(yli[i]).addClass('shapeBack');
        }
        yli[i].onclick = function(){
            for(let i=0;i<yli.length;i++){
                if($(yli[i]).hasClass('shapeBack')){
                    $(yli[i]).toggleClass('shapeBack');
                }
            }
            $(this).addClass('shapeBack');
            shapeValue.val($(this).html());
            //console.log($(this).attr('style'));
            fontShape = $(this).attr('style');
            //修改示例文字
            $("#egp").attr('style','font-family:'+fontFamily+";"+fontShape);
        }
    }

    //大小设置
    let $sizeDiv = $("<div id='size'><p>大小(S):</p><input type='text' class='size' id='sizeValue' value='14' /><div class='sbox' id='sizebox'></div></div>");
    $("#setBox").append($sizeDiv);
    var fontSize = $("#sizeValue").val();
    let $sul = $("<ul class='list' id='s-ul'></ul>");
    $("#sizebox").append($sul);
    for(let i=8;i<52;i++){
        let $sli = $("<li class='s-list'>"+i+"</li>");
        $("#s-ul").append($sli);
    }
    let sizeValue = $("#sizeValue");
    let sli = $(".s-list");
    for(let i=0;i<sli.length;i++){
        if($(sli[i]).html() == sizeValue.val()){
            $(sli[i]).addClass('shapeBack');
        }
        sli[i].onclick = function(){
            for(let i=0;i<sli.length;i++){
                if($(sli[i]).hasClass('shapeBack')){
                    $(sli[i]).toggleClass('shapeBack');
                }
            }
            $(this).addClass('shapeBack');
            sizeValue.val($(this).html());
            fontSize = $(this).html();
            //修改示例文字
            $("#egp").attr('style','font-family:'+fontFamily+";"+fontShape+";"+'font-size:'+fontSize+"px");
        }
    }


    //示例
    let $eg = $("<fieldset id='eg'><legend>示例</legend><p id='egp'>示例文字</p></fieldset>");
    $("#fs").append($eg);

    //下拉菜单
    let $jb = $("<p id='jbp'>脚本(R):</p><select name='language' id='jb'><option value='2' >中文 GB2312</option><option value='3' selected >西欧语言</option><option value='4' >希腊语</option><option value='5' >土耳其语</option><option value='6' >中欧字符</option><option value='7' >西里尔文</option></select><br/>")
    $("#fs").append($jb);

    //按钮
    let $yes = $("<button id='yes'>确定</button>");
    let $no = $("<button id='no'>取消</button>");
    $("#fs").append($yes);
    $("#fs").append($no);
    let yes = document.getElementById('yes');
    yes.onclick = function(){
        $("#fs").attr("style","display:none");
        $($(".edit")[0]).attr('style','font-family:'+fontFamily+";"+fontShape+";"+'font-size:'+fontSize+"px");
    }
    let no = document.getElementById('no');
    no.onclick = function(){
        $("#fs").attr("style","display:none");
    }
