$(()=>{
    var $sear=$("[data-msear=sear]");
    $sear.bind("focus",function(){
        $(this).parent().removeClass("add");
    });
    $sear.bind("blur",function(){
        var $this=$(this);
        if(!$this.val())
            $(this).parent().addClass("add");
    })
})
