 	window.navigator.standalone;
 	
  oct=0;
  keyshift=0;
  bnWIDTH=60;
  	octk=3;
  	BW=0.9;
  	kbWidth=60;
  	kbHeight=120;
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
  CHNID=0;
  MMLOG=new Array();
  for(i=0;i<10;i++)MMLOG[i]=[];
  	//alert(11);
  		xy=800;
  	
  	//	document.addEventListener('mousemove',eett1);
  var keyToNote= {};
  var noteToKey= {};

keyPlay=-1;  	 
ccnt=0;
sss="";
eettFG=0;
  	 BEAT_ON=0;
  	 function eett_end(e) {
  	 	//consolelog("TSE:"+e.touches.length);
  	   if(0){
  	   if(e.touches.length==1){
  	   	 var rect = canvasAA.getBoundingClientRect();
	       xx=e.touches[0].clientX-rect.left;
	       yy=e.touches[0].clientY-rect.top
        	k=Math.floor(xx/bnWIDTH);
	       if(!(k==0&&yy<40) ){
  	         BEAT_ON=0;
  	         BEAT_CNT++;
  	         return;
  	     }
  	   }else{
  	     if(BEAT_ON==1){
  	         BEAT_ON=0;
  	         BEAT_CNT++;
  	         return;
  	     }
  	   }
  	 }
  	    // consolelog("KL:"+keyStart.length);
  	   if(keyStart.length>0){
  	   	 consolelog("wKL:"+keyStart.length);
  	   	for(i=0;i<keyStart.length;i++){
  	   		consolelog("L0:"+i);
  	   	   consolelog("L1:"+keyStart[i]);
  	   	   keyoff(keyStart[i]);
  	   	   dnKey[keyStart[i]]=0;
  	   	   
  	   	}
  	   	keyStart=[];
  	   	 
  	   }
  	   keyPlay=-1;
  	   if(playNote0>0){
  	     noteoff(playNote0);
  	     playNote0=-1;
  	  }
  	   
  	}
//////////////////////////////////////////////////////// 
  
  kkAlt=new Array();
kkAlt["C"]=0;
kkAlt["Bb"]=-2;
kkAlt["Eb"]=3;
playMode=0;;
 BEAT_CNT=0;
function chgCHNID(){
   if(CHNID<9){
   	CHNID++;
  }else{
     CHNID=0;
  }   
  console.log("CHNID"+CHNID);
  draw();
  draw_note();
}
 function execCMD(k){
 	console.log("ee:"+k);
switch(k){
	     case 0:
	     //test1();break;//;
	      PLAY_LOG();break;
	     case 1:up();break;
	     case 2:down();break;
	     case 3:EDLL();break;
	     case 4:EDRR();break;
	     case 6:INS_IX[CHNID]++;
	            if((INS_IX[CHNID]+1)*88>bbff.length)
	              INS_IX[CHNID]=0;
	            instrument_offset[CHNID]=INS_IX[CHNID]*88;
	            draw();
	            break;
	     case 5:delNote();break;
	     case 7:alert(logdata);break;
	     case 8:chgplayMODE();break;
	      case 9: myModal.style.display = "block";msdcnt=1;break;
	      case 10:chgCHNID();break;
	      case 11:chginsMode();break;
	    
	  }
}

function chgBeat(xx,yy){
 	if(yy<canvasAA.height-kbHeight)return false;
  if(yy>canvasAA.height-kbHeight+50)return false; 	
 	k=Math.floor(xx/60);
 switch(k){
//k = 0:"  2",1: " 1.",2: "  1",3: " 1/2 .",4: "  2/1", 5: "  1/3", 6: "  1/4", 7: "  1/5",8: "  1/6",9: "  1/8"," "];
 	case 0:MMLOG[CHNID][EDPOS].d=0.5;EDRR();break;
 	case 2:MMLOG[CHNID][EDPOS].d=1;;EDRR();break;
 	case 1:MMLOG[CHNID][EDPOS].p="1";MMLOG[CHNID][EDPOS].d=1/1.5;EDRR(); 	break;
 	case 3:MMLOG[CHNID][EDPOS].p="1";MMLOG[CHNID][EDPOS].d=2/1.5;EDRR(); 	break;
 	case 4:case 5:	case 6:	case 7: case 8: 
    MMLOG[CHNID][EDPOS].d=k-2;    EDRR();break;
  case 9:MMLOG[CHNID][EDPOS].d=8;;EDRR();break;
}
 	consolelog("chgB:"+k);
 	return true;
}
ifg=0;

  function eett(e) {
  	if(msdcnt==1)return;
   // 	alert(1234)
eettFG=1;
	 var rect = canvasAA.getBoundingClientRect();
	 // console.log(e.touches[0].clientY+" *** "+rect.top);
	  //consolelog("tslen:"+e.touches.length);
	  for(i=0;i<e.touches.length;i++){
	  xx=e.touches[i].clientX-rect.left;
	  yy=e.touches[i].clientY-rect.top
	  if(yy>=canvasAA.height-kbHeight-30){
       if(playMode==1){
         if(playNote0>0)noteoff(noteoff);
		     
		     a=MMLOG[CHNID][EDPOS];
         playNote0=a.n;
         noteon(a.n,126,0);
      draw_note();
      EDPOS++;
      //consolelog("POS:"+EDPOS);
      
      if(EDPOS>=MMLOG[CHNID].length)EDPOS=0;
      
       continue;
    }
  }
 	
 	if(playMode==2){
 		if(chgBeat(xx,yy))return;
 	 
 	}
 	k=Math.floor(xx/bnWIDTH);
	
	if(e.type=="touchstart"&&( yy<20)){
		//k=Math.floor(xx/80);
	  execCMD(k);
	  continue;
	}
	if(playMode==0)	eett1(xx,yy);
  chgEDPOS(xx,yy);
 }
 e.preventDefault();
}


keyStart=[];
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
   	
     e=KM[tKey];
     if(dnKey[e]==0){
     	 dnKey[e]=1;
       keyPlay=e;
      //alert(keyPlay);
       keyon(e);
       keyStart.push(e);
    }

  }else{
     eett_end(1);
  }



      
}
  
 	//alert(12);
  window.addEventListener('orientationchange', function () {
    setTimeout( draw,100);
    
  }, true);


bnN=["PLAY","+12","-12","<",">","Del"," "," LOG ","PLAY","...","CHN 0","INS"];
insMode=0;
 INS_IX=new Array();
for(i=0;i<10;i++)INS_IX[i]=0;
     function draw() {
    	console.log("canvasdraw");
  
    	const el = document.documentElement;
   
       var canvas = document.getElementById("canvas");

     canvas.width=window.innerWidth+200;
   //  set1.left=window.innerWidth-100;
     canvas.height=window.innerHeight-10;
     canvas.top=0;
     if(window.innerHeight>600){
       kbHeight=150;
    }else{
    	//octk=4;
    }
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
console.log("AAAAA:"+bnN[2]);
switch(playMode){
		      case 0:bnN[8]="KEYIN";break;
          case 1:bnN[8]="STEP";break;
          case 2:bnN[8]="BEAT";break;
		   }
		   bnN[10]="CHN:"+CHNID;
		   switch (insMode){
		   	case 0:bnN[11]="PRS";break;
		   	case 1:bnN[11]="INS";break;
		    case 2:bnN[11]="REP";break;
		    case 3:bnN[11]="ADD";break;
		  }
		   bnN[6]=instruments[INS_IX[CHNID]].substring(instruments[INS_IX[CHNID]].length-6,instruments[INS_IX[CHNID]].length);//instruments[INS_IX].length-6,6);
for(i=0;i<12;i++){
	 //if(i%2==0){
	 	ctx.beginPath();
ctx.rect(i*bnWIDTH,0,bnWIDTH, 30);
ctx.stroke();
		   

 ctx.font = "12px Arial";
//if(noteToKey[note+n00]){
 	ctx.fillStyle = "rgb(99,99,99)";
  ctx.fillText(bnN[i], i*bnWIDTH+2,20);
	}

if(playMode!=2)
  draw_piano();      
else draw_beat();    
      //console.log("draw");
    }
 

 
 function draw_beat(){

beat_name=["  2"," 1.","  1"," 1/2 .","  2/1","  1/3","  1/4","  1/5","  1/6","  1/8"," "];
for(i=0;i<10;i++){
	 //if(i%2==0){
	 	ctx.beginPath();
ctx.rect(i*60,canvas.height-kbHeight,60, 50);
ctx.stroke();
		  

 ctx.font = "20px Arial";
//if(noteToKey[note+n00]){
 	ctx.fillStyle = "rgb(99,99,99)";
  ctx.fillText(beat_name[i], i*60+2,canvas.height-kbHeight+20);
	}

}


function draw_piano(){
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
      	bbh=kbHeight/5;
        ctx.fillRect (x+kbWidth*(1-BW/2), canvas.height-kbHeight-bbh,kbWidth*BW, 2*bbh);
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
}

 if(!keyToNote)alert(keyToNote);
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
	instrument_offset=new Array();
	for(i=0;i<3;i++)instrument_offset[i]=0;
	function noteon( noteId, velocity, delay) {
			delay = delay || 0;
      velocity = velocity || 120;
			/// check whether the note exists
			if(CHNID==9){
				buffer = bbff_drum[noteId];
			}else{
				 buffer = bbff[instrument_offset[CHNID]+noteId];
			}
			if (!buffer) {
// 				console.log(MIDI.GM.byId[instrument].id, instrument, channelId);
				return;
			}
console.log(delay);
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
			sources[CHNID+" "+noteId] = source;
		}
	
function noteoff(noteId,delay){
		delay = delay || 0;
		if(CHNID==9){
			var buffer = bbff_drum[noteId];
	}else{	
			var buffer = bbff[instrument_offset[CHNID]+noteId];
		}
			if (buffer) {
				if (delay < audioCtx1.currentTime) {
					delay += audioCtx1.currentTime;
				}
				///
				var source = sources[CHNID+" "+noteId];
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
					delete sources[CHNID+" "+noteId];
					///
					
				}
			}
		}
		
		
		
	qpers=120.0	 ;
	playNote0=-1;
	function chgplayMODE(){
		   EDPOS=0;
		   if(playMode<2){
		    	playMode++;
		   }else{
		   	 playMode=0;
		   }
		   consolelog("playMode:"+playMode);
		   draw();
     return; 
}
function chginsMode(){
		  // EDPOS=0;
		   if(insMode<3){
		    	insMode++;
		   }else{
		   	 insMode=0;
		   }
		    draw();
     return; 
}
playcnt=0;
function PLAY_LOG1(){
			   delay=0;
			  // console.log("playcnt:"+playcnt);
      if(playcnt>0){
          noteoff(MMLOG[CHNID][playcnt-1].n,0);
      }
      if(playcnt<MMLOG[CHNID].length){
      	 a=MMLOG[CHNID][playcnt];
      	 //console.log("PLAY:"+i);
         noteon(a.n,126,0);
         EDPOS=playcnt;
         playcnt++;
        
       
         draw_note();
         
      }else{
         return;
      }
      t=60.0 /(a.d*qpers)*1000;
     // console.log(t);
      setTimeout(PLAY_LOG1,Math.floor(t));
	}
function PLAY_LOGA(){
playcnt=0;
PLAY_LOG1();
}	

function copyText(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}




function PLAY_LOG(){
	
logtext="";
	chnid1=CHNID;
	console.log("PLAY_LOG");
	for(CHNID=0;CHNID<10;CHNID++){
	console.log("PLAY_LOG:"+CHNID);
	t=0;
	
	  logtext+="#"+CHNID+";";
	  for(i=0;i<MMLOG[CHNID].length;i++){
	      a=MMLOG[CHNID][i];
	      console.log(CHNID+":"+a.n[0]);
	       dd=60.0 /(a.d*qpers);
	      
	       for(j=0;j<a.n.length;j++){
	        noteon(a.n[j],126,t);
	       logtext+=a.n[j]+","+a.d+";";
	        console.log(t+"::"+dd+" "+a.d);
	       noteoff(a.n[j],t+dd);
	     }
	       t+=dd;
	  }
	}
	copyText(logtext);
	CHNID=chnid1;
	draw_note();
}	
	EDIT_MODE=1;
	noteSTS=new Array();
	for(i=20;i<108;i++)noteSTS[i]=0;
	
	
	function keyon(kk1){
		noteId=kk1+octk*12-2+oct+kkAlt[altkey.value];
		console.log("a:"+noteId);
	  if(isLOGON==1||insMode!=0){
			if(isLOGON==0)MM_DURATION=2;
			var a={d:MM_DURATION,n:[noteId],p:" "};
		   if(a.d==99){
		    if(MMLOG[CHNID].length>0){
		    	a.d=MMLOG[CHNID][MMLOG[CHNID].length-1].d*4;
		    	MMLOG[CHNID][MMLOG[CHNID].length-1].d=MMLOG[CHNID][MMLOG[CHNID].length-1].d*4/3;
		    }else{
		    	a.d=1;
		    }
		  }
		  if(EDPOS<MMLOG[CHNID].length-1){
       if(insMode==1 ){
               console.log("ins:"+EDPOS+" "+MMLOG[CHNID].length);
            MMLOG[CHNID].splice(EDPOS, 0, a);
            EDPOS++;
        }  else{
        	if(insMode==2){
        	   MMLOG[CHNID][EDPOS].n=a.n;
        	 }else{
        	  if(insMode==3){
        	    MMLOG[CHNID][EDPOS].n.push(a.n[0]);
        	    console.log("EE:"+EDPOS);
        	  }
        	 }
        }  
         
     } else{ 
     	  ok=0;
     	  if(MMLOG[CHNID].length>0){
     	     a0=MMLOG[CHNID][MMLOG[CHNID].length-1];
     	     if(noteSTS[a0.n[0]]==1){
     	       a0.n.push(noteId);
     	       ok=1;
     	       consolelog("a:"+noteId);
     	     }
     	  }
     	  if(ok==0){
     	   MMLOG[CHNID].push(a);
     	    consolelog("b:"+noteId);
		     EDPOS=MMLOG[CHNID].length;
		    }
		   }
		   
		 //  console.log(MMLOG);
		   draw_note();
		}
		noteSTS[noteId]=1;
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
			if(noteSTS[noteId]==1)noteoff(noteId);
		  noteSTS[noteId]=0;
	}
	

function makeNotes(){

 var A0 = 0x15; // first note
		var C8 = 0x6C; // last note
		var number2key = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
	
		for (var n = A0; n <= C8; n++) {
			var octave = (n - 12) / 12 >> 0;
			var name = number2key[n % 12] + octave;
			keyToNote[name] = n;
	//alert(noteToKey);
			noteToKey[n] = name;
	
		//	console.log(n+" "+name);
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
//	alert("octk:"+octk);
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
var instruments=[];


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
					alert("decodeAudioData error :"+key);
					}
				);
		};
	

function AddInst(){

	addscript();
		for (var key in MIDI.Soundfont) {

      for(j=0;j<instruments.length;j++){
       if(instruments[j]==key)break;
      }
      if(j<instruments.length){
      	continue;
      }else{
      	var opt = document.createElement('option');
    opt.value = key;
    opt.innerHTML = key;
    s1.appendChild(opt);
		    instruments.push(key);
		    instrument=instruments[j];
	var urls = [];
			var notes = keyToNote;

			for (var key in notes) urls.push(key);
	 for(i=0;i<urls.length;i++){
		key=urls[i];
	   loadAudio(j,MIDI.Soundfont[instrument][key],key );
   }
		   
		    console.log("addins:"+instrument);
		    return;  
	    }
	  }
}

bbff_drum=new Array();
function loadDrum1(sampleID, url, mixToMono) {
    // Load asynchronously

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";

    var kit = this;

    request.onload = function() {
        actx.decodeAudioData(request.response, function(buffer1){
       console.log(buffer1);
       bbff_drum[sampleID+48]=buffer1;
        }
        );

       }

    request.send();
}
function loadDrum(){

    loadDrum1(0, "sounds_drum-samples_R8_kick.wav", false);
    loadDrum1(1, "sounds_drum-samples_R8_snare.wav", false);
    loadDrum1(2, "sounds_drum-samples_R8_hihat.wav", true); 
    loadDrum1(3, "sounds_drum-samples_R8_tom1.wav", false);
    loadDrum1(4, "sounds_drum-samples_R8_tom2.wav", false);
    loadDrum1(5, "sounds_drum-samples_R8_tom3.wav", false);
}
		
function loadaa(){
	 if(!keyToNote)alert( keyToNote);
	makeNotes();
	//tx1.value+="loadaa ";
	//alert(MIDI);
		for (var key in MIDI.Soundfont) {
			 var opt = document.createElement('option');
    opt.value = key;
    opt.innerHTML = key;
    s1.appendChild(opt);
			instruments.push(key);
	 }
	 //alert(1009);
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
	function loadAudioa(ins_ix,url, key) {
	
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
					alert("decodeAudioData error :"+key);
					}
				);
		};
		//alert(22);
  for(j=0;j<instruments.length;j++){
	 instrument=instruments[j];
	
	 for(i=0;i<urls.length;i++){
		key=urls[i];
	   loadAudio(j,MIDI.Soundfont[instrument][key],key );
   }
  }
}
function test1(){
	addscript();
}
function addscript(){
	console.log(tx1.value);
 var script = document.createElement('script');
					script.language = 'javascript';
					script.type = 'text/javascript';
			//	  var ttt="function a01(){";
				 
				  ttt=tx1.value;
				//  ttt+="}";
					script.text = ttt;
				
					document.body.appendChild(script);
					ifg=1;
			

}

	function load() {
	//	myModal.style.display = "block";msdcnt=1;
		console.log("12345");
		 line_h=6;
       if(window.innerHeight>600){
      	line_h=10;
      	drnote_div.style.height=300;
      }else{
     // drnote_div.height=250;
      }
setTimeout(load100,5000);
	tx1.value="t=0;"
tx1.value+="\nfor(i=60;i<72;i++){";
tx1.value+="\n   noteon(i,1,t);";
tx1.value+="\n   noteoff(i,t+0.05);";
tx1.value+="\n   t+=0.2;";
tx1.value+="\n}";
	
	document.getElementById('if1')
  .addEventListener('change', getFile)

function getFile(event) {
	console.log(111);
	const input = event.target
  if ('files' in input && input.files.length > 0) {
  	 const reader = new FileReader();

  reader.addEventListener("load", () => {
    // this will then display a text file
    tx1.value = reader.result;
   
  }, false);

  if (input.files[0]) {
    reader.readAsText(input.files[0]);
  }
}
  
}
//load100();
	
	}
	function load100() {
	
		//console.log("loadaa..");
  //alert(11);
  loadaa();
  loadDrum();
 //alert(22);
//console.log("draw..");
draw();
//draw_notea();
	document.addEventListener('touchstart',eett,{passive: true});
  document.addEventListener('touchend',eett_end);
  	//document.addEventListener('touchmove',eett);
  	document.addEventListener('mousemove',mousemove);
   document.addEventListener('mousedown',mousedown);
   document.addEventListener('mouseup',mouseup);
  	
canvasAA = document.getElementById("canvas");
//console.log(11111111111);
//console.log(MIDI.Soundfont.ac2["A0"]);
//alert(canvasAA);
}

isPOSSET=0;
function chgEDPOS(mxx,myy){
      //consolelog("x:"+mxx+" y:"+myy+"y1:"+yy_line_1+",xx:"+xx_left);
	    if(myy>=yy_line_1-line_h*5 && myy<=yy_line_2+line_h*5){
	       if(mxx>=xx_left){
	         EDPOS=Math.floor(((mxx-xx_left)+(line_h/2))/(line_h*2))+xx_org;
	         //consolelog("chg:"+EDPOS);
	         if(EDPOS>=MMLOG[CHNID].length){
	         	   EDPOS=MMLOG[CHNID].length-1;
	         	   //consolelog("chg1:"+EDPOS);
	         	   if(EDPOS<0)EDPOS=0;
             
	        }
	          isPOSSET=1;
	          draw_note();
	          
	       }
	    }

}

mxx=0;
myy=0;
msdcnt=0;
function mousedown(e){
	//console.log("msdcnt:",msdcnt);
	  if(msdcnt>0){
	  	
	    return;
	  }
	 
	  mxx=e.offsetX;
     myy=e.offsetY;
	if(eettFG)return;
	    k=Math.floor(mxx/bnWIDTH);
	    console.log(mxx+" "+myy);
	 	if( myy<20){
	 		console.log("mdd:");
	    execCMD(k);return;
	  }
 if(playMode==2){
 		if(chgBeat(mxx,myy))return;
 	 
 	}
	    eett1(mxx,myy);
	    //if(playMode!=0)
	    chgEDPOS(mxx,myy);
	 
}
function mouseup(e){
	if(eettFG)return;
	if( myy=e.offsetY<20)return;
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
dnKey=new Array();
for(i=0;i<255;i++) dnKey[i]=0;
function ckeydown(ev) {
	if(msdcnt==1)return;
  isLOGON=0;
	//console.log(ev.keyCode);
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
	   //console.log("POSSET:"+isPOSSET);
	   if(isPOSSET==0){
	     eett1(mxx,myy);   
	   }else{	   
	   	  MMLOG[CHNID][EDPOS].d=MM_DURATION;
	      EDRR();
	   }
	    return;	
	}
	e=ev.keyCode;
  if(e==16){ //shift
    oct=12;
     //console.log(e);
    return;
  }
  if(e==18){ //alt
    oct=-12;
     //console.log(e);
    return;
  }
 //   console.log(e);
   if(nlv[e]){
    //v="144,"+ (nlv[e]+oct+octa+skey)+",100";
  //console.log(nlv[e]);
  if(dnKey[e]==0)keyon(nlv[e]-24+2);//+oct+octa+skey);
dnKey[e]=1;
 }

}
octa=0;
function ckeyup(ev) {
	 if(msdcnt==1)return;
	 if(ev.keyCode==37){
	    MMLOG[CHNID].pop();
	    draw_note();
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
   //console.log(e);
  return;
 }
 if(e==18){
    oct=0;
     //console.log(e);
    return;
  }
  //  v="128,"+ (nlv[e]+oct+octa+skey)+",100";
    
  //console.log(nlv[e]);
   if(nlv[e]){  
  if(dnKey[e]==1)keyoff(nlv[e]-24+2);//+oct+octa+skey);
  // O.send(JSON.parse(v));
  //websocketConnection.send(v);
   //ExampleSocket.send("abcde\n");
 dnKey[e]=0;
 }
	
  //  console.log(e);
}
 window.addEventListener('keydown',this.ckeydown,false);
	window.addEventListener('keyup',this.ckeyup,false);
function chage_program(){
	//alert(MIDI.instruments);
	instrument_offset[CHNID]=s1.selectedIndex*88;
}


function setMMLOG(t){
   v=t.split("#");
   for(i=0;i<v.length;i++){
      v1=v[i].split(";");
      CHNID=parseInt(v1[0]);
      MMLOG[CHNID]=[];
      for(j=1;j<v1.length;j++){
      
      	v2=v1[j].split(",");
      
         a={d: parseFloat(v2[1]),n:parseInt(v2[0]),p:" "};
          MMLOG[CHNID].push(a);
      }
      CHNID=i;
     // draw_noteb();
   }
   CHNID=0;
   draw_note();
}
 
  function chage_kbdwidth(){
    kbWidth=parseInt(selkw.value, 10);
    //console.log(kbWidth);
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
  //console.log(octk+" kkk:"+keyshift);
  draw();
}
function skeydown(){
   if(keyshift>0){
    	if(octk>=1)  	{
    		//console.log(octk+ " o "+keyshift);
    		 if(octk>1 || keyshift>5) keyshift--;
       }
  }else{
  	if(octk==1){
  		keyshift=6;
  	  octk=0;
  	}
  }
  //console.log("kkk:"+keyshift);
   draw();
}
  