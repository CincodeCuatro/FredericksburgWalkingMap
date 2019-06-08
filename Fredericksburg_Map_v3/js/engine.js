var Engine = new function(){//create an object to store the visibile layer in the engine, so it can be referenced later

	this.init = function(canvas_id, callbacks,locData){

		this.canvas = document.getElementById(canvas_id);


		this.ctx = this.canvas.getContext("2d");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.topLayer;
		this.locData = locData;

		this.callbacks = callbacks;


		for (var prop in this.locData) {
			var loc = this.locData[prop];
	//		console.log(loc);
		//	$("#locDiv").append('<div id="'+prop+'"class= "layer"><button id="btn-back" class="btn">Back</button><h2>'+loc.name+'</h2><p>'+loc.address+'</p><div class="shadowbox"><p>'+loc.fact1+'</p></div><div class="shadowbox"><p>'+loc.fact2+'</p></div><div class="shadowbox"><p>'+loc.fact3+'</p></div>');
		//	$("#locDiv").append('<div id="'+prop+'"class= "layer"><button id="btn-back" class="btn">Back</button><h2>'+loc.name+'</h2><p>'+loc.address+'</p><p>'+loc.fact1+'</p><p>'+loc.fact2+'</p><p>'+loc.fact3+'</p><p>'+loc.fact4+'</p><p>'+loc.fact5+'</p></div>');
	//	var btn = document.createElement("BUTTON");
		//	$("#locDiv").append('<div id="'+prop+'"class= "layer"><button onclick="myFunction()">Try it</button></div>');

		}
		this.callbacks["start"]();



	}
	this.loadstate = function(state){
		this.state = state;
	}
	this.loop = function(){
		this.state.update();
		this.state.render();
		requestAnimationFrame( function(){
			Engine.loop();
		} );
	}

	this.getMousePos= function(evt) {

	      var x = Math.round(evt.pageX -  $(this.canvas).offset().left);
	      var y = Math.round(evt.pageY -  $(this.canvas).offset().top);
	      var realx = Math.round((x / $(this.canvas).width()) * this.width);
	      var realy = Math.round((y / $(this.canvas).height()) * this.height);
	      return {"x":x , "y":y, "realx":realx, "realy":realy};
	  }

}
