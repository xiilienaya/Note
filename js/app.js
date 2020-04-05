var box = $("#noteDiv");

let $menuUl = $("<ul class='title' id='title'></ul>");
box.append($menuUl);

//添加编辑区
let $area = $("<textarea class='edit' style='font-family:微软雅黑;font-size:14px' ></textarea>");
box.append($area);

//一级菜单
for(let i=0;i<menu.length;i++){
    let $menutitle = $("<li class='m1'>"+"<a href='#'>"+menu[i].title+"</a>"+"</li>");
    $("#title").append($menutitle);
}

let title = $(".m1");
for(let i=0;i<title.length;i++){
    //添加二级菜单
    for(let j=0;j<5;j++){
        if(i==j){
            let items = menu[j].menuItems;
            let $ul = $("<ul class='m2'></ul>");
            //console.log(items.length); 
            for(let a=0;a<items.length;a++){
                //console.log(items[a].title);
                if(items[a].title == "hr"){
                    let $hr = $("<hr />");
                    $ul.append($hr);
                }else{
                    let $li = $("<li class='m2title'>"+items[a].title+"<span class='sp'>"+items[a].shortcut+"</span>"+"</li>")
                    $(title[i]).append($ul.append($li));
                    //隐藏
                    $(".m2").attr("style","display:none");
                }
            };
            
        }
    } 
    var preID = [-1];
    var tag = true;
    //点击事件
    title[i].onclick = function(){
        //console.log(i);
        preID.push(i);
        for(let a=0;a<5;a++){
            if(a==i){
                if( (preID[preID.length-1] == preID[preID.length-2]) && tag){
                    $(title[a].children[1]).attr("style","display:none");
                    tag = false;
                }else if((preID[preID.length-1] == preID[preID.length-2]) && !tag){
                    $(title[a].children[1]).attr("style","display:block");
                    tag = true;
                }
                else{
                    $(title[a].children[1]).attr("style","display:block");
                    tag = true;
                }
            }else{
                $(title[a].children[1]).attr("style","display:none");
            }
        }
        //console.log(tag);
    }
    $(".edit")[0].onfocus = function(){
        $(".m2").attr("style","display:none");
        tag = false;
    }
    
}

let li = $('.m2title');
for(let i=0;i<li.length;i++){
    li[i].onclick = function(){
        if((($(this).html()).indexOf("字体"))>=0){
            $("#fs").attr("style","display:block");
        }
    }
    
}



