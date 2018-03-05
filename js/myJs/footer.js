function footer(){
    /*ÂÖ²¥µã*/
	var $indicators=$("#footer .footer-top .carousel-indicators li:not(.active)");
    $indicators.mouseover(function(){
        this.style.backgroundColor="#768594";
    });
    $indicators.mouseout(function(){
        this.style.backgroundColor="#85D6DE";
    });
    /*We¡¯re social*/
    var $ul=$("#footer .footer-info>div>div:nth-child(3) ul");
    var x=0,y=0;
    function li(){
        for(var i=0;i<16;i++){
            var $li=$ul.children("li:nth-child("+(i+1)+")");
            if($li.hasClass("sprite8")){
                x=i<7?(-10-50*i):i>=14?(-30-50*i):(-20-50*i);
            }else{
                x=i<7?(-50*i):i>=14?(20-50*i):(10-50*i);
            }
            y=i<7?-8:i>=14?-108:-58;
            $li.css("backgroundPosition",x+"px"+" "+y+"px");
        }
    }
    for(var i=0;i<16;i++){
        var $new=$("<li></li>");
        $new.css("width","40px");
        $new.css("height","40px");
        $new.css("margin","0 10px 5px 0");
        $new.css("background","url(images/images/img-sprite8.png)");
        $new.addClass("sprite8");
        $ul.append($new);
    }
    li();
    $ul.children().mouseover(function(){
        var $this=$(this);
        $this.css("background","url(images/images/img-sprite9.png)");
        $this.removeClass("sprite8");
        li();
    });
    $ul.children().mouseout(function(){
        var $this=$(this);
        $this.css("background","url(images/images/img-sprite8.png)");
        $this.addClass("sprite8");
        li();
    });
}
