$(document).ready(function(){
	$("a").click(function(e){e.preventDefault()});
	$(" #content>.content-four #carousel-days .carousel").carousel({
        interval:0
    })
    var $fiveRow=$("#content>.content-five h1+.row");
    $fiveRow.find("div:nth-child(2)>div").css("height",331+"px");
	var $carousel=$("#content>.content-four>.container-fluid");
	inner($carousel);
	$(window).resize(function(){
		inner($carousel)
	});
	$.ajax({
		url:"header.html",
		type:'get',
		datetype:'html',
		success:function(data){
			$("#headerc").html(data);
		}
	});
	$.ajax({
		url:"footer.html",
		type:'get',
		datetype:'html',
		success:function(data){
			$("#footerc").html(data);
			footer();
		}
	});
});
function inner($carousel){
	if($(window).innerWidth()<600){
		$carousel.html(changeHtml());
	}else{
		$carousel.html(initHtml());
	}
}                   
function initHtml(){
	var htmls=`<div class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
						<div class="item active"> 
							<div class="row">
								<div class="col-xs-2 ">
									<img src="images/12.jpg" alt="...">
									<div class="fill"> May&nbsp;11 2017</div>
								</div>
								<div class="col-xs-2">
									<img src="images/13.jpg" alt="...">
									<div class="fill">May&nbsp;10 2017</div>
								 </div>
								 <div class="col-xs-2">
									<img src="images/14.jpg" alt="...">
									<div class="fill">May&nbsp;9 2017</div>
								 </div>
								 <div class="col-xs-2">
									<img src="images/15.jpg" alt="...">
									<div class="fill"> May&nbsp;8 2017</div>
								 </div>
								 <div class="col-xs-2">
									<img src="images/16.jpg" alt="...">
									<div class="fill">May&nbsp;7 2017</div>
								 </div>
								 <div class="col-xs-2">
									<img src="images/12.jpg" alt="...">
									<div class="fill">May&nbsp;11 2017</div>
								 </div> 
							</div>
                        </div>
						<div class="item"> 
							<div class="row">
								<div class="col-xs-2 ">
									<img src="images/12.jpg" alt="...">
									<div class="fill"> May&nbsp;11 2017</div>
								</div>
								<div class="col-xs-2">
									<img src="images/13.jpg" alt="...">
									<div class="fill">May&nbsp;10 2017</div>
								 </div>
								 <div class="col-xs-2 ">
									<img src="images/14.jpg" alt="...">
									<div class="fill">May&nbsp;9 2017</div>
								 </div>
								 <div class="col-xs-2 ">
									<img src="images/15.jpg" alt="...">
									<div class="fill"> May&nbsp;8 2017</div>
								 </div>
								 <div class="col-xs-2 ">
									<img src="images/16.jpg" alt="...">
									<div class="fill">May&nbsp;7 2017</div>
								 </div>
								 <div class="col-xs-2 ">
									<img src="images/12.jpg" alt="...">
									<div class="fill">May&nbsp;11 2017</div>
								 </div> 
							</div>
                        </div>
					</div>
                </div>`;
	return htmls;
}
function changeHtml(){
	var htmls=`<div class="carousel slide" data-ride="carousel">
                 <div class="carousel-inner">
				  <div class="item active"> 
					<div class="row">
						<div class="col-xs-12 ">
							<img src="images/12.jpg" alt="...">
							<div class="fill"> May&nbsp;11 2017</div>
						</div>
					</div>
                </div>`;
	for(var i=13;i<17;i++){
		htmls+=`<div class="item"> 
					<div class="row">
						<div class="col-xs-12 ">
							<img src="images/13.jpg" alt="...">
							<div class="fill"> May&nbsp;11 2017</div>
						</div>
					</div>
                 </div>`;
	}
	htmls+=`<div class="item"> 
				<div class="row">
					<div class="col-xs-12 ">
						<img src="images/12.jpg" alt="...">
						<div class="fill"> May&nbsp;11 2017</div>
					</div>
				</div>
            </div>
		</div>
     </div>`;
	return htmls;
}
