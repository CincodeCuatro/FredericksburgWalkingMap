/*
Lays out each location, and marks with a "VISITIED" stamp if a location has been 'visited'.
Attemping to store a boolean in the locData caleld visited and toggling it to true when a location
was clicked, and checking that value when creating the positioned elements on Stamps
*/

function Stamps(){
this.loc = [];
var locdata = Engine.locData;


console.log(locdata.loc1.name);
console.log(locdata.loc1.visited);
console.log(this.loc);

	this.update = function(){

	}

	this.clear = function clear() {
	Engine.ctx.clearRect(0,0,Engine.width,Engine.height);
	}

	this.render = function(){
		  this.clear();
			Engine.ctx.drawImage( Store.cache["images/bck2.png"],0,0,900,675,0,0,Engine.width,Engine.height);
		//	Engine.ctx.drawImage( Store.cache["images/icon-backbtn.png"],20,10);

			for (var i = 0; i < this.loc.length; i++) {
				//console.log(this.loc)
				this.loc[i].render();
			}
		 // placeStamp(100,100,1,"images/stamp.png");,
		 // Engine.ctx.drawImage(Store.cache["images/stamp.png"],200,200); //for using images as the points


	}
/*
	function placeStamp(x,y,id,img){
		this.x;
		this.y;
		this.id;
		this.img;

		this.render = function() {
				//Engine.ctx.drawImage(this.id,0,0,this.w,this.h,this.x,this.y,32,32);
				Engine.ctx.drawImage(Store.cache[this.img],0,0,this.w,this.h,this.x,this.y,this.w,this.h); //for using images as the points
			}

	} */this.load = function(){
		//add new locaiton
	  for (var prop in Engine.locData) {
	    var loc = Engine.locData[prop];

	     this.loc.push(new ItemStamps(prop, loc.stampx,loc.stampy,loc.visited)); //gained image but lost all properties
	  //  console.log(Store.cache[this.img]);
	    //console.log(prop);
	    //console.log(loc.w);
	  //  console.log(loc.h);
	  }
	}

	this.load();

}

	//Stamp Locations for stamp page , constructor object not really a function, may be repkaced
	function ItemStamps(id,x,y,visited) {
	  this.id =id; 	//id = prop, prop refers to the object top level name in locData in script.js, in this case it is the location number.
		this.x = x;
	  this.y = y;
		this.w = 64;
		this.h = 64;
		this.visited = visited;
		//console.log("Itemstamps:" + this.x);
	//  this.img = img;

	  this.render = function() {
			if (this.visited) {

				Engine.ctx.drawImage(Store.cache["images/stamp.png"],this.x - 52,this.y+10); //for using images as the points

			}
	     // Engine.ctx.beginPath();
	      		//Engine.ctx.fillStyle = "rgba(0, 0, 200, 0)"; //use for transparency later
	     // Engine.ctx.fillStyle = "red";
	    //  Engine.ctx.rect(this.x,this.y,this.w,this.h);
	    //  Engine.ctx.fill();
	    //  Engine.ctx.closePath();
	      //Engine.ctx.drawImage(this.id,0,0,this.w,this.h,this.x,this.y,32,32);
	      //Engine.ctx.drawImage(Store.cache[this.img],0,0,this.w,this.h,this.x,this.y,this.w,this.h); //for using images as the points
	  }
}
