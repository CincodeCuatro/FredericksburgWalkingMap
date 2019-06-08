var data = [
	{"url":"images/bck1.png"},
	{"url":"images/bck2.png"},
//	{"url":"images/bs2.png", "attr": {"id":"myimage", "class":"myclass"}},
	{"url":"sound/epub.mp3"},
	{"url":"images/icon-book.png"},
	{"url":"images/icon-backbtn.png"},
	{"url":"images/stamp.png"},
	{"url":"images/loc1.png"},
	{"url":"images/loc2.png"},
	{"url":"images/loc3.png"},
	{"url":"images/loc4.png"},
	{"url":"images/loc5.png"},
	{"url":"images/loc6.png"},
	{"url":"images/loc7.png"},
	{"url":"images/loc8.png"},
	{"url":"images/loc9.png"},
	{"url":"images/loc10.png"},
	{"url":"images/loc11.png"},
	{"url":"images/loc12.png"},
	{"url":"images/loc13.png"}
]

// https://codepen.io/SaraSoueidan/pen/pdEec
var locData = {
// to do location areas (x,y) and addresses
		"loc1": {
			"x": 250, //map location close
			"y": 270,
			"w": 64,//set to image size
			"h": 64,
			"visited": false,
			"stampx": 95,
			"stampy": 130,
			"img" : "images/loc1.png",
			"name"	: "Rising Sun Tavern",
			"address" : "1304 Caroline St.",
			"numFacts" : 5,
			"facts" : [
				"Originally built as a home by George Washington's younger brother Charles around 1760",
				"Became a Tavern in 1792",
				"Taverns were popular meeting spots for locals and travellers to get a drink or a meal",
				"Rising Sun was considered a 'high tavern' in that it was a place women could come and not risk their reputations. This contrasts with the 'lower' taverns on Sophia street where Sailors and others looking for a less formal setting ",
			  "Can discover what 'mind your Ps and Qs' stands for; why a bar is called a bar (also barkeep)"
			]
		},
		"loc2" : {
			"x": 470, //map location close
			"y": 280,
			"w": 64,
			"h": 64,
			"visited": false,
			"stampx": 285,
			"stampy": 130,
			"img" : "images/loc2.png",
			"name"	: "Hugh Mercer's Apothecary",
			"address" : "1020 Caroline St.",
			"numFacts" : 4,
			"facts" : [
				"Hugh Mercer was a Scottish exile. Came to Fredericksburg and opened an apothecary shop (which is like our pharmacys today) in 1760",
				"He was the family doctor for the Washington family and later became a general in the Revolutionary War.",
			  "Medicines and treatments were derived from local herbs, spices and materials.  Cobwebs mended open wounds; Ground oyster shells were used to settle the stomach",
		  	"Like other doctors of the day, Mercer sought to 'purge' patients of their illness through bleeding them with leeches or sharp needles"
			]
		},//some objects may load a game, others may load just data, add either or

		"loc3": {
			"x": 340,
			"y": 400,
			"w": 64,
			"h": 64,
			"visited": false,
			"stampx": 95,
			"stampy": 270,
			"img" : "images/loc3.png",
			"name"	: "Mary Washington's House",
			"address" : "1200 Charles St.",
			"numFacts" : 4,
			"facts" : [
				"Home to the Mother of the first president of the United States from 1772 to 1789 (her death).",
			  "Shortly before her death, George visited her at the home to seek her blessing before his inauguration as our first President",
			  "Purchased by George in order to move his Mother out the old family farm house across the river.",
			  "In 1890, the house was nearly dismantled and moved to the World's Fair in Chicago. However, the women of Fredericksburg arranged to keep the building in its original location"
			]
		},
		"loc4": {
		  "x": 250,
		  "y": 470,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 95,
			"stampy": 385,
			"img" : "images/loc4.png",
		  "name": "Kenmore Plantation",
		  "address" : "1201 Washington Ave",
			"numFacts" : 4,
			"facts" : [
			   "Built by prominent businessman Fielding Lewis in the 1770s for his wife, Betty Washington (younger sister to George).  ",
			   "Famous for its pristine plasterwork, done by an unnamed artist known as the 'stucco man'",
		  	 "The Lewis' were one of Fredericksburg's most wealthy families and the plantation home was built to showcase that wealth. ",
		  	 "Fielding would eventually provide arms and ammunition via his factory to George Washington's Army. This would eventually lead to financial strain for the Lewis family."
			]
		},
		"loc5": {
		  "x": 830,
		  "y": 20,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 285,
			"stampy": 255,
			"img" : "images/loc5.png",
		  "name": "Ferry Farm (off map)",
		  "address" : "268 Kings Highway Fredericksburg, VA 22405",
			"numFacts" : 5,
			"facts" : [
			  "The boyhood home of George Washington ",
			  "Augustine and Mary Washington moved to the farmhouse in 1738; George was 6 at the time.  ",
		    "Augustine died in 1743, Mary never remarried.  She raised George and his brothers and sister on her own from Ferry Farm.  ",
		    "After the civil war, the farm was lost to time. In 1996, the George Washington Foundation created renewed interest in the location and it still has active dig sites today.",
			  "In 2008, the foundations to original house were discovered and in 2018, the reconstructed home was opened to the public"
			]
		},
		"loc6": {
		  "x": 250,
		  "y": 10,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 285,
			"stampy": 385,
			"img" : "images/loc6.png",
		  "name": "Chatham Manor",
		  "address" : "120 Chatham Ln, Fredericksburg, VA 22405, USA",
			"numFacts" : 4,
			"facts" : [
				"Constructed in 1768 by William Fitzhugh, a personal friend of George Washington.  Fitzhugh would host Washington, T. Jefferson, and others here.",
				"J. Horace Lacy would take ownership of the manor in 1859, and remained his through the Civil War.  ",
				"Lacy would evacuate during the Battle of Fredericksburg in 1862, and Chatam became a Union headquarters throughout the conflict.  After the battle, it served as a make-shift hospital.  ",
				"Clara Barton, Walt Whitman, among others visited this site."
			]
		},
		"loc7": {
		  "x": 50,
		  "y": 620,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 100,
			"stampy": 510,
			"img" : "images/loc7.png",
		  "name": "The Sunken Road (off map)",
		  "address" : "120 Chatham Ln",
			"numFacts" : 4,
			"facts" : [
				"A main road that transported wagons from local farms and travellers from all over.  On December 13, 1862 it became one of the most famous byways in America: The Sunken Road.",
				"Confederate troops at the Sunken Road were able to fire constant 'sheets of lead' at the oncoming Union attackers by having rows of men behind the front line reloading rifles. Men at the firing line would fire rounds until their shoulders turned blue, then swap to the back of the line.",
 				"30,000 Union soldiers charged towards the Confederate line that mounted the stone wall that followed the road, but none ever made it.",
				"About 1,000 soldiers were killed or wounded every hour throughout the seven hour engagement. It was a devastating loss for the Union."
		]
		},
		"loc8": {
		  "x": 340,
		  "y": 470,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 280,
			"stampy": 510,
			"img" : "images/loc8.png",
		  "name": "The James Monroe Museum",
		  "address" : "908 Charles St, Fredericksburg, VA 22401, USA",
			"numFacts" : 3,
			"facts" : [
		 		"Monroe moved to Fredericksburg in 1786 to open a law practice",
		   	"He served on our city council and later represented Fredericksburg in the General Assembly.",
		  	"The site of the museum was a property owned by Monroe, but was not his home. He lived in his Uncle's home on Caroline st. He bought this property so that he could hold office in the city!"
		]
		},
		"loc9": {
		  "x": 490,
		  "y": 410,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 550,
			"stampy": 130,
			"img" : "images/loc9.png",
		  "name": "The Slave Block",
		  "address" : "Corner of William St. & Charles St.",
			"numFacts" : 3,
			"facts" : [
		 			"On the corner of Charles and William, stands a sandstone block from the early 1800s",
		 			"Originally created as a carriage step for the Planter's Hotel (which still stands today). ",
		  		"History would remember this spot for the slave auctions that would take place there.  This corner would be a place where all sorts of goods, including slaves, were auctioned off to the public."
				]
		},

		"loc10": {
		  "x": 700,
		  "y": 260,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 550,
			"stampy": 270,
			"img" : "images/loc10.png",
		  "name": "St. Georges Church",
		  "address" : "905 Princess Anne St.",
			"numFacts" : 3,
			"facts" : [
	 				"Church of England established on this spot in 1728. After the war, the church was reorganized as the Protestant Episcopal Church",
		  		"The current building was opened in 1849 and has a stained glass window of Mary Washington",
					"Served as a hospital after the Battle of Fredericksburg"
				]
		},

		"loc11": {
		  "x": 565,
		  "y": 270,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 745,
			"stampy": 130,
			"img" : "images/loc11.png",
		  "name": "The Fredericksburg Area Museum/Town Hall",
		  "address" : "907 Princess Anne St.",
			"numFacts" : 4,
			"facts" : [
			 	"For 250 years, Fredericksburg's government was housed here.",
				"From 1816 to the 1900s, the rear of this building served as a hub for merchants.",
		 		"Revolutionary War Hero Marquis de Lafayette visited here in 1824",
		  	"Today, it serves as the city's history museum."
			]
		},

		"loc12": {
		  "x": 70,
		  "y": 540,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 550,
			"stampy": 385,
			"img" : "images/loc12.png",
		  "name": "Thomas Jefferson's Religious Freedom Monument",
		  "address" : "1501 Washington Ave",
			"numFacts" : 4,
			"facts" : [
		 		"Thomas Jefferson met here in Fredericksburg with a committee tasked with revising Virginia's outdated colonial laws.",
		 		"Here, Jefferson authored what would become the Virginia Statue for Religious Freedom.  This document established that 'no man shall suffer on account of his religious opinions and beliefs'  in the state of Virginia ",
						 		"Jefferson believed this to be one of his most important contributions to our nation, his tombstone states'Here was burign Thomas Jefferson: Author of the Declaration of Independence, of the Virginia Statute of Religious Freedom, and Father of the University of Virginia' (President of the US didn't even make his top 3!)",
				"This statute would heavily inspire the the law set in the First Amendment of our Constitution"

			]
		},
		"loc13": {
		  "x": 145,
		  "y": 595,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 745,
			"stampy": 270,
			"img" : "images/loc13.png",
		  "name": "Mary's Meditation Rock/ Mary Washington Monument",
		  "address" : "1500 Washington Avenue",
			"numFacts" : 4,
			"facts" : [
				"George's Mom would walk the gardens at this spot to visit a natural outcropping on the outskirts of the Kenmore Plantation.",
 				"Here, she would come to pray, or simply enjoy the peace and quiet it provided. ",
	 			"On her request, it was the site of her burial in 1789.",
	 			"The memorial to Mary started construction by President Andrew Jackson in 1833, but was not completed until 1894 by President Grover Cleveland"
			]
		},
		"loc14": {
		  "x": 650,
		  "y": 130,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 745,
			"stampy": 385,
			"img" : "images/loc14.png",
		  "name": "Old Stone Warehouse",
		  "address" : "923 Sophia St",
			"numFacts" : 5,
			"facts" : [
				"City records show that what is apparently the present Old Stone Warehouse was built about 1813 by businessman Thomas Goodwin.",
 				"Although the current walls and beams date to the early 19th century, the building appears to have been built on the much-earlier foundations of its precursors, foundations that remain intact today.",
	 			"Then came the Civil War. Cannon balls struck the building at least five times, and their marks are still visible inside and out. Used as a morgue, the building had as many as 326 dead Union soldiers stacked like cordwood inside. After the war, the building was used to cure salt fish, as a brewery, and as a feed and fertilizer warehouse in the 1900s.",
	 			"In 1939 and 1941, Sophia Street was raised to allow the new Chatham Bridge to be built. Before this time, three of the four (counting the attic) levels of the structure could be seen from Sophia Street. Now, only one level is visible from that direction, but all four floors can be seen from the river side.",
				"Additional earth from the road and bridge construction was piled against the north and west walls, causing the eventual shifting of the building toward the Rappahannock River. It was  the beginning of serious problems for this historic structure.  It was a three-story, free-standing structure with masonry walls of coursed ashlar sandstone, with wood framing of chestnut and a slate roof. Hand-shaped stone blocks and giant wooden beams, some measuring 14 inches in width, are still holding up this structure today."
			]
		},
		"loc13": {
		  "x": 145,
		  "y": 595,
		  "w": 64,
		  "h": 64,
			"visited": false,
			"stampx": 745,
			"stampy": 270,
			"img" : "images/loc13.png",
		  "name": "Mary's Meditation Rock/ Mary Washington Monument",
		  "address" : "1500 Washington Avenue",
			"numFacts" : 4,
			"facts" : [
				"George's Mom would walk the gardens at this spot to visit a natural outcropping on the outskirts of the Kenmore Plantation.",
 				"Here, she would come to pray, or simply enjoy the peace and quiet it provided. ",
	 			"On her request, it was the site of her burial in 1789.",
	 			"The memorial to Mary started construction by President Andrew Jackson in 1833, but was not completed until 1894 by President Grover Cleveland"
			]
		},
		"stampBook": {
		  "x": 600,
		  "y": 580,
		  "w": 100,
		  "h": 100,
			"img" : "images/icon-book.png"
		},
		"parking": {
		  "x": 830,
		  "y": 150,
		  "w": 64,
		  "h": 64,
		  "name": "Sophia Street Parking Garage",
		  "address" : "600 Sophia St",
			"numFacts" : 4,
			"facts" : [
				"Additional parking can be found at ...",
 				"...",
	 			"....",
	 			"..."
			]
		},
}//close lacData

var callbacks = {
		"map" : function(){
			Engine.loadstate(new Map() );
			Engine.loop();
		},
		"stamps" : function(){
			Engine.loadstate(new Stamps() );
		},
		"start" : function(){
				$("#btn-intro").show();
		},
		"back" : function(){
				$("#btn-back").hide();
		},
		"die" : function(){
		}
}

//Scales to browser window size
function scaleToWindow (){
    var gamearea = document.getElementById('wrap');
    var ratio = 100/75;
    var newWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var newHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var newratio = newWidth / newHeight;

    if(newratio > ratio){
        newWidth = newHeight * ratio;
        gamearea.style.height = newHeight+"px";
        gamearea.style.width = newWidth+"px";
    }else{
        newHeight  = newWidth / ratio;
        gamearea.style.height = newHeight+"px";
        gamearea.style.width = newWidth+"px";
    }
    gamearea.style.marginTop = (-newHeight/2)+"px";
    gamearea.style.marginLeft = (-newWidth/2)+"px";
		gamearea.style.fontSize = (newWidth/500) + "em";
}

$(document).ready(function(){
//HTML button which requires user interaction to agree to load the canvas state to map
	$("#btn-intro").click(function() {
		$("#intro").fadeOut();
		Engine.callbacks["map"]();
	});
//Button interaction which loads the stamps state
	$("#btn-stamps").click(function() {
		$("#locDiv").fadeOut();
		$("#stampsUI").fadeIn();
	//	console.log(Engine.callbacks	);
		Engine.callbacks["stamps"]();
	});
//Button interaction which Returns canvas from stamps to map state
	$("#btn-returnmain").click(function() {
	//	$("#locDiv").fadeOut();
		$("#stampsUI").fadeOut();
	//	console.log(Engine.callbacks	);
		Engine.callbacks["map"]();
	});


	scaleToWindow();


	Store.loaddata(data).then(function(){
		Engine.init("scene",callbacks, locData);
//		console.log(Store.cache);
	});
	//buttons for layers - will be replaced later

//Back Button for navigation while a location Layer is visible,
	$("#btn-back").click(function() {
		 $("#locDiv").fadeOut(function() {
			 $("locContent").html("")
 		 	 Engine.state.enableClick = true;// console.log(Engine.state.enableClick); //toggles the ability to click canvas elements
		 });
	});

	$(window).resize(scaleToWindow);

});
