 	window.navigator.standalone;
 	
  oct=0;
  keyshift=0;
  	octk=3;
  	BW=0.9;
  	kbWidth=20;
  	kbHeight=150;
  	BKX =new Array();
  	KM = new Array();
  	b1=0;b2=1;
  	for(i=0;i<7;i++){
  	 KM[10+b1] = 1+b2;
  	 KM[15+b1] = 2+b2;
  	KM[20+b1] = 3+b2;
  	KM[25+b1] = 4+b2;
  	KM[30+b1] = 5+b2;
  	KM[40+b1] = 6+b2;
  	KM[45+b1] = 7+b2;
  	KM[50+b1] = 8+b2;
  	KM[55+b1] = 9+b2;
  	KM[60+b1] = 10+b2;
  	KM[65+b1] = 11+b2;
  	KM[70+b1] = 12+b2;
    b1+=70;b2+=12;
  }
  MMLOG=[];
  	//alert(11);
  		xy=800;
  	
  	//	document.addEventListener('mousemove',eett1);
  
keyPlay=-1;  	 
ccnt=0;
sss="";
eettFG=0;
  	 function eett_end(e) {
  	   if(keyPlay>=1)keyoff(keyPlay);
  	   keyPlay=-1;
  	}
//////////////////////////////////////////////////////// 
  
  kkAlt=new Array();
kkAlt["C"]=0;
kkAlt["Bb"]=-2;
kkAlt["Eb"]=3;
  function eett(e) {
 // 	alert(1234);
eettFG=1;
	 var rect = canvasAA.getBoundingClientRect();
	 //alert(e.touches[0].clientY+" "+rect.top);
	eett1(e.touches[0].clientX-rect.left,e.touches[0].clientY-rect.top);
}
  function eett1(x,y) {
  na1=Math.floor(x/kbWidth)+1+keyshift;
   tKey=na1*10;
   adjna=0;
   /*
     1 tKey-5 1.2 tKey-5 1.8 tKey+5 2 tKey-5 2.2 tKey-5 2.8 tKey+5  
   */
   if(x<na1*kbWidth+kbWidth/2){
  //  	na1--;
      adjna=1;
   }
//canvas.height-150,kbWidth/2, 30);
//ctx.moveTo(x, canvas.height-150);
//ctx.lineTo(x, canvas.height-50);
//var b1 = document.getElementById("b1");

x0=0;
//alert(y+" "+(canvasAA.height-150-30)+" "+(canvasAA.height-150+30));
if(y<canvasAA.height-kbHeight-30){
	tKey=0;
}else{
	if(y<canvasAA.height-kbHeight+30){
		 //if( BKX[na1+adjna])x0= BKX[na1+adjna];
		 x0=(na1-1)*kbWidth+BW*kbWidth/2;
     x1=(na1)*kbWidth-BW*kbWidth/2;		 
		 if(x<x0 ){
		 	  if( na1!=4 && na1 !=1)tKey-=5;
		 }else{
		 	if( x>=x1 && na1!=7 && na1 !=3)tKey+=5;
		}
	//	 if(x>x0 && x<x0+(BW*kbWidth))  tKey+=5;
	   console.log("x="+x+" x0="+x0+" x1="+x1+" tkey="+tKey);
	}
}

bhh=document.body.offsetHeight;
  //s="tKey:"+tKey+ "y:"+y +" x:"+x+" x0:["+x0+"]";//+(bhh)+"  "+(canvas.height);
//alert(tKey);
  if(tKey>=10){
   	
     keyPlay1=KM[tKey];
     // alert(keyPlay1);
     if(keyPlay1!=keyPlay){
     	keyoff(keyPlay);
     keyPlay=keyPlay1;
     //alert(keyPlay);
     keyon(keyPlay);
    }

  }else{
     eett_end(1);
  }



      
}
  
 	//alert(12);
  window.addEventListener('orientationchange', function () {
    setTimeout( draw,100);
    
  }, true);
 
     function draw() {
    	console.log("canvasdraw");
  
    	const el = document.documentElement;
   
       var canvas = document.getElementById("canvas");

     canvas.width=window.innerWidth;
   //  set1.left=window.innerWidth-100;
     canvas.height=window.innerHeight-100;
    console.log(canvas.getContext);
console.log("canvas.heighta:"+canvas.height);
  
      if (canvas.getContext) {
   
        var ctx = canvas.getContext("2d");
     ctx.clearRect(0, 0, canvas.width, canvas.height);
console.log("canvas.height:"+canvas.height);
     
        ctx.fillStyle = "rgba(255,255, 255, 0.5)";
 /*       
        ctx.fillRect (0, 0, canvas.width, xy);
        
        for(i=0;i<=canvas.height;i+=20){
        	tt=0;
        	if(i==0)tt=40;
        		if(i>canvas.height-40)tt=40;
        	ctx.beginPath();
ctx.moveTo(30, i);
ctx.lineTo(100+tt, i);
ctx.stroke();
        	
        }
return;
*/
na=1+keyshift;
na1=1+keyshift;n00=0;
//-2 -1 123456789AB
//      1 2 34 5 6
na10=1;
switch(keyshift){
  case -2:na10=-2;break;
  case -1:na10=0;break;
  case 1:na10=3;break;
  case 2:na10=5;break;	
  case 3:na10=6;break;
  case 4:na10=8;break;
  case 5:na10=10;break;
  case 6:na10=12;break;
}

note=na10+octk*12-3;
console.log("keyshift:"+keyshift+" na10:"+na10+" na:"+note	);
      for(x=0;x<canvas.width&&note<108;x+=kbWidth){
   //   	console.log(x+" "+note+" "+na);
      //	 ctx.fillText(note, x+kbWidth/4, canvas.height-60);
      //	ctx.fillText("**", x+kbWidth/4, canvas.height-60);
      	n00=0;
    switch(na){
      case 1:
      case 2:
      case 4:
      case -1:
      case 5:
      case 6:{
     BKX[na1]=x+kbWidth*(1-BW/2);
      	ctx.fillStyle = "rgb(0,0,0)";
      	note++;
        ctx.fillRect (x+kbWidth*(1-BW/2), canvas.height-kbHeight-30,kbWidth*BW, 30+30);
         break;
       }
       case 7:
        case 0:
       case 3:n00=1;
    }
    
    
na++;na1++;note++;
if(na>7)na=1;
      ctx.beginPath();
ctx.moveTo(x, canvas.height-kbHeight);
ctx.lineTo(x, canvas.height-50);
ctx.stroke();
ctx.font = "10px Arial";
//if(noteToKey[note+n00]){
  ctx.fillText(noteToKey[note+n00], x+kbWidth/4, canvas.height-60);
   //ctx.fillText(note, x+kbWidth/4, canvas.height-60);
//}else{
	//ctx.fillText("?", x+kbWidth/4, canvas.height-60);
//}
}
      }
      
      
      //console.log("draw");
    }
 
  function BufferLoader(context, urlList, callback) {
  this.context = context;
  this.urlList = urlList;
  this.onload = callback;
  this.bufferList = new Array();
  this.loadCount = 0;
}

   
var bbff=new Array();
var ctx=new Array();
//	alert(13);
	if(window.AudioContext || window.webkitAudioContext){
 audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
	//alert(14);
if(audioCtx)console.log("ctx ok");
else alert("ctx not ok");
console.log(111115);
buffer=0;
//var audioCtx1;
var notebf = new Array();


	function keyup(e) {
 	 //notebf[e].stop(0);
 
 	 setTimeout(function(){ 
 	 	notebf[e].context.close();
 	 	}, 100);
 	//setTimeout(init1a,100);
}
	octk==3;
	var sources=new Array();
	var audioCtx1 = new AudioContext();
	instrument_offset=0;
	function noteon( noteId, velocity, delay) {
			delay = delay || 0;
      velocity = velocity || 120;
			/// check whether the note exists
			var buffer = bbff[instrument_offset+noteId];
			if (!buffer) {
// 				console.log(MIDI.GM.byId[instrument].id, instrument, channelId);
				return;
			}

			/// convert relative delay to absolute delay
			if (delay < audioCtx1.currentTime) {
				delay += audioCtx1.currentTime;
			}
		
		
				var source = audioCtx1.createBufferSource();
				source.buffer = buffer;
			var gain = (velocity / 127) ;//* (masterVolume / 127) * 2 - 1;
			source.connect(audioCtx1.destination);
			source.playbackRate.value = 1; // pitch shift 
			source.gainNode = audioCtx1.createGain(); // gain
			source.gainNode.connect(audioCtx1.destination);
			source.gainNode.gain.value = Math.min(1.0, Math.max(-1.0, gain));
			source.connect(source.gainNode);
			///
			
				source.start(delay || 0);
			
			///
			sources[noteId] = source;
		}
	
function noteoff(noteId,delay){
		delay = delay || 0;
			var buffer = bbff[instrument_offset+noteId];
			if (buffer) {
				if (delay < audioCtx1.currentTime) {
					delay += audioCtx1.currentTime;
				}
				///
				var source = sources[noteId];
				if (source) {
					if (source.gainNode) {
						// @Miranet: 'the values of 0.2 and 0.3 could of course be used as 
						// a 'release' parameter for ADSR like time settings.'
						// add { 'metadata': { release: 0.3 } } to soundfont files
						var gain = source.gainNode.gain;
						gain.linearRampToValueAtTime(gain.value, delay);
						gain.linearRampToValueAtTime(-1.0, delay + 0.3);
					}
							source.stop(delay + 0.5);
					delete sources[noteId];
					///
					
				}
			}
		}
	qpers=120.0	 ;
	function playMMLOG(){
		   delay=0;
		   
		   console.log(MMLOG.length);
      for(i=0;i<MMLOG.length;i++){
      	 a=MMLOG[i];
         noteon(a.n,126,delay);
         delay = delay + 60.0 /(a.d*qpers)	;
         noteoff(a.n,delay);
         console.log(delay);
      }
      //MMLOG=[];
      console.log("eee");
      
	}
	function keyon(kk1){
		noteId=kk1+octk*12-2+oct+kkAlt[altkey.value];
		console.log("a:"+noteId);
		if(isLOGON==1){
			var a={d:MM_DURATION,n:noteId};
		   if(a.d==99){
		    if(MMLOG.length>0){
		    	a.d=MMLOG[MMLOG.length-1].d*4;
		    	MMLOG[MMLOG.length-1].d=MMLOG[MMLOG.length-1].d*4/3;
		    }else{
		    	a.d=1;
		    }
		  }
		   MMLOG.push(a);
		 //  console.log(MMLOG);
		   draw_noteb();
		}
		noteon(noteId);
	}
	
	
	function readFile() {
		 window.webkitRequestFileSystem(window.PERSISTENT, 1024*1024, function(fs){
		 	  fs.root.getFile("aawwinfo.txt", {}, function(fileEntry) {
    fileEntry.file(function(file) {
       var reader = new FileReader();
       reader.onloadend = function(e) {
         console.log(e.target.result)
       };
       reader.readAsText(file);
    }, function(e){
    	copnsole.log(e);
    	});
  }, function(e){
    	copnsole.log(e);
    	});
});
}
	function wwc(localstorage){
		console.log(localstorage);
		localstorage.root.getFile("aawwinfo.txt", {create: true}, function(DatFile) {
        console.log(DatFile);
        DatFile.createWriter(function(DatContent) {
        	 console.log("aaaaa");
         var blob = new Blob(["1aaaww23Loremss Ipsum"], {type: "text/plain"});
        DatContent.write(blob);
        console.log(DatContent);
      });
},function(e){
	 console.log(e);
	} );
}
	
	function ww(){
		
		window.webkitStorageInfo.requestQuota(PERSISTENT, 524*1024, function(grantedBytes) {
 // window.webkitStorageInfo.requestFileSystem(PERSISTENT, grantedBytes, wwc);
 
 console.log(grantedBytes);
 	window.webkitRequestFileSystem(window.PERSISTENT , grantedBytes,wwc);
 // initFS(grantedBytes);
}, function(e) {
  console.log('Error', e);
});
	//window.webkitRequestFileSystem(window.PERSISTENT , 1024*10,wwc);
	
	}
	function keyoff(kk1){
			noteId=kk1+octk*12-2+oct+kkAlt[altkey.value];
				noteoff(noteId);
		
	}
	var keyToNote= {};
var noteToKey= {};
function makeNotes(){

 var A0 = 0x15; // first note
		var C8 = 0x6C; // last note
		var number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
		for (var n = A0; n <= C8; n++) {
			var octave = (n - 12) / 12 >> 0;
			var name = number2key[n % 12] + octave;
			keyToNote[name] = n;
			noteToKey[n] = name;
			console.log(n+" "+name);
		}
}
var bufferList=new Array();

	function loadAudio(url, onload1, onerror1) {
	//	console.log("AAAA");
		//console.log(onload1);
		//tx1.value="1111";
			var base64 = url.split(',')[1];
		//tx1.value="222";	//	console.log(actx);
				var buffer = Base64Binary.decodeArrayBuffer(base64);
				//tx1.value="actx";
				actx.decodeAudioData(buffer, onload1, onerror1);
			//	console.log("AAAA1"+buffer);
			//tx1.value="sss";
		};


function up(){
	if(octk<8){
		 octk++;
		draw();
		}
}
function down(){
   if(octk>1){
   	octk--;
   	if(octk==1)keyshift=5;
     draw();
   }
}
function loadaa(){
	makeNotes();
	//tx1.value+="loadaa ";
	var instruments=[]
		for (var key in MIDI.Soundfont) {
			 var opt = document.createElement('option');
    opt.value = key;
    opt.innerHTML = key;
    s1.appendChild(opt);
			instruments.push(key);
	 }
	console.log(instruments);
	var urls = [];
			var notes = keyToNote;
			console.log(notes);
			for (var key in notes) urls.push(key);
			console.log(urls.length);
      			console.log(urls.length);
	actx = new AudioContext();
	//tx1.value+="\nrlslen "+urls.length;
	j=0;
	pending=0;
	function loadAudio(ins_ix,url, key) {
	
			var base64 = url.split(',')[1];
			  
				var buffer = Base64Binary.decodeArrayBuffer(base64);
				pending++;
				actx.decodeAudioData(buffer, 
				  function(buffer1){
				       j=keyToNote[key];
			        bbff[ins_ix*88+j]=	buffer1;
					    pending--;
		//			     console.log(ins_ix+" "+"Note:"+j+" key:"+key+"pending:"+pending);
					},function(){
					//	alert("decodeAudioData error :"+key);
					}
				);
		};
  for(j=0;j<instruments.length;j++){
	 instrument=instruments[j];
	
	 for(i=0;i<urls.length;i++){
		key=urls[i];
	   loadAudio(j,MIDI.Soundfont[instrument][key],key );
   }
  }
}
	function load() {
		console.log("loadaa..");
  
loadaa();
console.log("draw..");
draw();
draw_notea();
	document.addEventListener('touchstart',eett);
  document.addEventListener('touchend',eett_end);
  	document.addEventListener('touchmove',eett);
  	document.addEventListener('mousemove',mousemove);
   document.addEventListener('mousedown',mousedown);
   document.addEventListener('mouseup',mouseup);
  	
canvasAA = document.getElementById("canvas");
console.log(11111111111);
//console.log(MIDI.Soundfont.ac2["A0"]);
//alert(canvasAA);
}


mxx=0;
myy=0;
function mousedown(e){
	if(eettFG)return;
	//if(e.keyCode==32||e.keyCode==66){
	    eett1(mxx,myy);
	    //console.log(mxx+" "+myy);
	//	}
}
function mouseup(e){
	if(eettFG)return;
	eett_end(1);
}
function mousemove(e){
	if(eettFG)return;
   mxx=e.offsetX;
 
    myy=e.offsetY;
 //  p11.innerText=" "+ mxx+" "+myy;
    //if(keyPlay!=-1) eett1(mxx,myy);
   // console.log(keyPlay);
}

dd=0;
 nlv= new Array();
    nlv[90]=43; //G Z
    nlv[88]=44;
    nlv[65]=45; //A A
    nlv[83]=46;
    nlv[81]=47; //B Q
    nlv[49]=48; //C 1
    nlv[87]=49;
    nlv[50]=50; //D 2
    nlv[69]=51;
    nlv[51]=52; //E 3
    nlv[52]=53; //F 4
    nlv[82]=54;
    nlv[53]=55; //G 5
    nlv[84]=56;
    nlv[54]=57; //A 6
    nlv[89]=58;
    nlv[55]=59; //B 7
    nlv[56]=60; //C 8
    nlv[85]=60;
    nlv[73]=61;
    nlv[57]=62; //D 9 
    nlv[79]=63;
    nlv[48]=64; //E 0	  
    nlv[189]=65; //F - 
    nlv[80]=65;  //F P
    nlv[219]=66; 
    nlv[187]=67; //G =
    nlv[221]=68; 
     nlv[8]=69;  //A BS
   nlv[46]=70;
    nlv[220]=71; //B \
    nlv[13]=72;  //C CR
     
  kkAlt=new Array();
kkAlt["C"]=0;
kkAlt["Bb"]=-2;
kkAlt["Eb"]=3;
isLOGON=0;

function ckeydown(ev) {
  isLOGON=0;
	console.log(ev.keyCode);
  if(ev.keyCode==32
    ||ev.keyCode==66
    ||ev.keyCode==78
    ||ev.keyCode==77
    ||ev.keyCode==188
    ||ev.keyCode==190
     ||ev.keyCode==86
    ){
	    isLOGON=1;
	    switch(ev.keyCode){
	     case 32 :  MM_DURATION=1;break;
	     case 66 :  MM_DURATION=2;break;
	     case 78 :  MM_DURATION=3;break;
	     case 77 :  MM_DURATION=4;break;
	     case 188:  MM_DURATION=5;break;
	     case 190 :  MM_DURATION=99;break;
	     case 86 :  MM_DURATION=0.5;break;
	   }
	   eett1(mxx,myy);
	    return;	
	}
	e=ev.keyCode;
  if(e==16){ //shift
    oct=12;
     console.log(e);
    return;
  }
  if(e==18){ //alt
    oct=-12;
     console.log(e);
    return;
  }
 //   console.log(e);
   if(nlv[e]){
    //v="144,"+ (nlv[e]+oct+octa+skey)+",100";
  //console.log(nlv[e]);
  if(dd==0)keyon(nlv[e]-24+2);//+oct+octa+skey);
dd=1;
 }

}
octa=0;
function ckeyup(ev) {
	 if(ev.keyCode==37){
	    MMLOG.pop();
	    draw_noteb();
	}
		 if(ev.keyCode==32
    ||ev.keyCode==66
    ||ev.keyCode==78
    ||ev.keyCode==77
    ||ev.keyCode==188
    ||ev.keyCode==190
     ||ev.keyCode==86
    ){
			eett_end(1);
		  return;
		}
	e=ev.keyCode;
	if(e==39){ //right
		skey++;
    return;
 }
 if(e==37){ //left
		skey--;
    return;
 }
if(e==38){  //up
  if(octa<15)octa+=12;
   return;
 } 
if(e==40){  //down
  if(octa>-15)octa-=12;
   return;
 }
 if(e==16){
  oct=0;
   console.log(e);
  return;
 }
 if(e==18){
    oct=0;
     console.log(e);
    return;
  }
  //  v="128,"+ (nlv[e]+oct+octa+skey)+",100";
    
  //console.log(nlv[e]);
   if(nlv[e]	){  
  keyoff(nlv[e]-24+2);//+oct+octa+skey);
  // O.send(JSON.parse(v));
  //websocketConnection.send(v);
   //ExampleSocket.send("abcde\n");
 dd=0;
 }
	
  //  console.log(e);
}
  window.addEventListener('keydown',this.ckeydown,false);
	window.addEventListener('keyup',this.ckeyup,false);
function chage_program(){
	//alert(MIDI.instruments);
	instrument_offset=s1.selectedIndex*88;
}
 
  function chage_kbdwidth(){
    kbWidth=parseInt(selkw.value, 10);
    console.log(kbWidth);
    draw();
 }
 function skeyup(){
 	
	if(keyshift<6 ){
		 keyshift++;
	}else{
   if(octk==0){
 		 keyshift=0;
 		 octk=1;
   }
  }
  if(keyshift==6 && octk==1){
    octk=2;
    keyshift=0;
  }
  console.log(octk+" kkk:"+keyshift);
  draw();
}
function skeydown(){
   if(keyshift>0){
    	if(octk>=1)  	{
    		console.log(octk+ " o "+keyshift);
    		 if(octk>1 || keyshift>5) keyshift--;
       }
  }else{
  	if(octk==1){
  		keyshift=6;
  	  octk=0;
  	}
  }
  console.log("kkk:"+keyshift);
   draw();
}
  