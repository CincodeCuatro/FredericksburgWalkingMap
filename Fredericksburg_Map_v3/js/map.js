function Map(){//constructor
  this.enableClick = true;

//var that = this.whatever //another way to give an alias to distinguish scope easier in jquery and other nested functions/objects
  this.loc = [];
//  console.log(this.loc);
		$(window).mousedown(function(evt){
      if (Engine.state.enableClick) {
  			var pos = Engine.getMousePos(evt);
  			var loc = Engine.state.loc; //coudln't access loc from jquery without using engine, ie coudlnt say this.loc here

        for (var l = 0; l < loc.length; l++) {
  					var ob = loc[l];
  						if(pos.realx > ob.x
  							&& pos.realx < ob.x + ob.w
  							&& pos.realy > ob.y
  							&& pos.realy < ob.y + ob.h)
                {
                  //Checks if object clicked was the stampbook, if os load the stamps state to canvas.
                  if (ob.id == "stampBook"){
                    $("#stampsUI").fadeIn();
                    Engine.callbacks["stamps"]();
                  }else
                  //Detected a location was clicked and loads relevant content
                  $("#locDiv").fadeIn();

                  var loc = Engine.locData[ob.id];
                  //console.log(loc);
                  var html = '<div class="box effect8"><h3>'+loc.name+'<br>'+loc.address+'</br></h3></div>'; //to add image somewhere <img src="'+loc.img+'">
                  if (loc.numFacts == 3) {
                      html += '<div id="slide-right" class="bb bubble1">'+loc.facts[0]+'</div>';
                      html += '<div id="slide-right" class="bb bubble2">'+loc.facts[1]+'</div>';
                      html += '<div class="bb bubble3">'+loc.facts[2]+'</div>';
                  }else if (loc.numFacts == 4){
                      html += '<div id="slide-right" class="bb bubble1">'+loc.facts[0]+'</div>';
                      html += '<div id="slide-right" class="bb bubble2">'+loc.facts[1]+'</div>';
                      html += '<div id="slide-left" class="bb bubble3">'+loc.facts[2]+'</div>';
                      html += '<div id="slide-left" class="bb bubble4">'+loc.facts[3]+'</div>';
                  }else  {
                      html += '<div id="slide-right" class="bb bubble1">'+loc.facts[0]+'</div>';
                      html += '<div id="slide-right" class="bb bubble2">'+loc.facts[1]+'</div>';
                      html += '<div id="slide-left" class="bb bubble3">'+loc.facts[2]+'</div>';
                      html += '<div id="slide-left" class="bb bubble4">'+loc.facts[3]+'</div>';
                      html += '<div class="bb bubble5">'+loc.facts[4]+'</div>';
              }
                //  console.log(html);
              //  var html = '<p>'+loc.address+'</p><div class="shadowbox"><p>'+loc.fact1+'</p></div><div class="shadowbox"><p>'+loc.fact2+'</p></div><div class="shadowbox"><p>'+loc.fact3+'</p></div>'
              //  $(".bubble1").css("font-size", "72px");
                $(".locContent").html(html);
              //  $(".bubble1").css({"background-color":"red"}); //can use to change elemnts for each load for variety
              loc.visited = true; //
            //  console.log(loc.visited);
              Engine.state.enableClick = false; //part of jquery
            //  console.log(Engine.state.enableClick);
              }
  					}
          }
		});

	this.update = function(){

	}

	this.clear = function clear() {
	Engine.ctx.clearRect(0,0,Engine.width,Engine.height);
	}

	this.render = function(){
		  this.clear();
			Engine.ctx.drawImage( Store.cache["images/bck1.png"],0,0,900,675,0,0,Engine.width,Engine.height);

    //  Engine.ctx.drawImage(Store.cache["images/stamp.png"],200,200); //for using images as the points

			for (var i = 0; i < this.loc.length; i++) {
				//console.log(this.loc)
				this.loc[i].render();
			}

	}
this.load = function(){
	//add new locaiton
  for (var prop in Engine.locData) {
    var loc = Engine.locData[prop];

    this.loc.push(new Item(loc.x,loc.y,loc.w,loc.h,prop)); //gained image but lost all properties
  //  console.log(Store.cache[this.img]);
    //console.log(prop);
    //console.log(loc.w);
  //  console.log(loc.h);
  }
}

this.load();

}

//Map Locations for overworld , constructor object
function Item(x,y,w,h,id) {
	this.id = id;
	this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
//  this.img = img;

  this.render = function() {
      Engine.ctx.beginPath();
      Engine.ctx.fillStyle = "rgba(0, 0, 200, 0)"; //use for transparency / clickable area
    //  Engine.ctx.fillStyle = "red";
      Engine.ctx.rect(this.x,this.y,this.w,this.h);
      Engine.ctx.fill();
      Engine.ctx.closePath();
      //Engine.ctx.drawImage(this.id,0,0,this.w,this.h,this.x,this.y,32,32);
      //Engine.ctx.drawImage(Store.cache[this.img],0,0,this.w,this.h,this.x,this.y,this.w,this.h); //for using images as the points
  }



}
