  var ctx_n;
  line_h=0;
  var logdata="";
  logcc=0;
   function consolelog(e){
    
     logdata=e+"\n"+logdata;
    logcc++;
  }
    function draw_note1(d1,xx,len,flat,period){
    	flat=flat||' ';
    	if(len!='d'){
      	ctx_n.fillStyle = "rgba(0,0,0,0.9)";
      }else{
       	ctx_n.fillStyle = "rgba(200,200,200,0.9)";
     
      }
        yy=yy_line_1+5*line_h-(d1*(line_h/2));
         ctx_n.beginPath();
         ctx_n.ellipse(3*line_h+xx, yy, (line_h/2), (line_h*0.8)/2, 0, 0, (2)* Math.PI);
       ctx_n.fill();
       
       ctx_n.stroke();
       if(period=="1"){
       	ctx_n.font = "16px Arial";
       	ctx_n.fillStyle = "rgb(0,0,0)";
          ctx_n.fillText(".",3*line_h+xx+(line_h*0.8)/2+2,yy);
       }
       if(flat=='b'){
       ctx_n.font = "12px Arial";
       	ctx_n.fillStyle = "rgb(0,0,0)";
          ctx_n.fillText("b",1.7*line_h+xx,yy+(line_h/2)*1);
      }
       if((yy%line_h )!=0){
       	 if(yy<5*line_h){
       	 	yy+=(line_h/2);
       	}else{
       		yy-=(line_h/2);
       	}
      }
       while(yy<yy_line_1){
        	ctx_n.moveTo(3*line_h+xx-(line_h*0.8),yy);
          ctx_n.lineTo(3*line_h+xx+(line_h*0.8),yy);
          ctx_n.stroke();
          yy+=(line_h);
        }
        while(yy>=yy_line_1+5*(line_h)){
        	ctx_n.moveTo(3*line_h+xx-(line_h*0.8),yy);
          ctx_n.lineTo(3*line_h+xx+(line_h*0.8),yy);
          ctx_n.stroke();
          yy-=(line_h);
        }    
    }
   
    function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sends the message.
}
 
   
EDPOS=0;
function EDLL(){
	//alert("aa:"+EDPOS);
    if(EDPOS>0)EDPOS--;
   // alert(22);
    draw_note();
    
   
}
function EDRR(){
    if(EDPOS+1<MMLOG[CHNID].length)EDPOS++;
    draw_note();
    	consolelog("EDPOS:"+EDPOS);
}
function delNote(){
//	alert("del:"+EDPOS);
  MMLOG[CHNID].splice(EDPOS,1);
  
  if(MMLOG[CHNID].length<=EDPOS){
    if(EDPOS>0)EDPOS--;
  }
  draw_note();
 }
 gcc=0;
 xx_org=0;
 cvs=new Array();
 for(i=0;i<10;i++) cvs[i]="canvas_n"+i;

notetonum = new Array();
 notetonum['C']=1;
 notetonum['D']=2;
 notetonum['E']=3;
 notetonum['F']=4;
 notetonum['G']=5;
 notetonum['A']=6;
 notetonum['B']=7;

function draw_note0(){
	//console.log("---draw_note0");
	t0=' ';
	  for( i=xx_org;i<MMLOG[CHNID].length;i++){
	  	a=MMLOG[CHNID][i];
    	
        for(j=0;j<a.n.length;j++){
         
          name=noteToKey[a.n[j]];
          n1=name[0];
          flat=" ";
          if(name.length==2){
             o=name[1];
          }else{
             o=name[2];
            flat='b';
          }
          P1 =notetonum[n1];
          d1=notetonum[n1]-'1';
          d1 += (o-'4')*7;
           t='1';
            d1a[i]=d1;
        switch(a.d){
        	case 0.5:t='d';break;
           case 2:t='-';break;
           case 3:t='3';break;
           case 4:t='=';break;
        }
          draw_note1(d1,xx,t ,flat,a.p);
        }
        if(t0!=t || btc==0||trepc>=3){
        	trepc=0;
        	if(t0!=' '){
        		//Alert("i0="+i0+" i="+i);
        	  // for(i1=i0;i1<i;i++){
        	      dd1=d1a[i0];
        	      dd2=d1a[i-1];
        	      m=i0;
        	      console.log(i0+",gg:"+i);
        	      for(j=i0;j<i;j++){
        	         if(d1a[j]>d1a[m])m=j;
        	      }
        	      if(m!=i0&&m!=i-1){
                   dd1=d1a[m];
                   dd2=d1a[m];       	      
        	      }
        	      
        	      yy1=yy_line_1+5*line_h-(dd1*(line_h/2))-(line_h*3);
        	      yy2=yy_line_1+5*line_h-(dd2*(line_h/2))-(line_h*3);
        	      if(yy2>yy1+line_h*4) yy2-=2*line_h; //adj slope
        	      if(yy1>yy2+line_h*4)yy1-=2*line_h;  //adj slope
        	      txx=0;
        	      tyy=0;
        	      if(i-i0==1){
        	      	yy2=yy1;
        	      	tyy=(line_h/2);
        	      	txx=(line_h);
        	      }
        	      
        	    //beam 1
        	    if(t0!='1' &&t0!='d'){
        	       ctx_n.moveTo((line_h*3)+xx0+(line_h/2)-txx,1+yy1+tyy);
                 ctx_n.lineTo((line_h*3)+xx01+(line_h/2),1+yy2);
                 ctx_n.stroke();
                 if(t0=='='){
                 	  //beam 2
                 	   ctx_n.moveTo((line_h*3)+xx0+(line_h/2)-txx,1+yy1-3+tyy);
                      ctx_n.lineTo((line_h*3)+xx01+(line_h/2),1+yy2-3);
                      ctx_n.stroke();
                 }
                }
                 tx=0;
                 ss="ww"+i;
                 
                 for(j=i0;j<i&&i-i0>=1;j++){
                 	  ddt=(dd2-dd1)*j/(i-i0)+dd1;
                 	  if(i-i0>1){
                 	   yya=(yy2-yy1)*(j-i0)/(i-i0-1)+yy1;
                 	 }else{
                 	   yya=yy1;
                 	 }
                 	  dd1a=d1a[j];
                 	  ss=ss+" j="+j+" yya="+yya+",";
        	          yy3=yy_line_1+5*line_h-(dd1a*(line_h/2));
        	          //draw stock
        	        //  console.log("draw stock"+((line_h*3)+xx0+(line_h/2)+tx)+","+(1+yya));
        	          ctx_n.moveTo((line_h*3)+xx0+(line_h/2)+tx,1+yya);
                    ctx_n.lineTo((line_h*3)+xx0+(line_h/2)+tx,1+yy3);
                    ctx_n.stroke();
                    tx+=(line_h*2);
        	       }
        	//       	ctx_n.moveTo((line_h*3)+xx-mx,yy_line_1);
         //ctx_n.lineTo ((line_h*3)+xx-mx,yy_line_1+(line_h*4));
         //ctx_n.stroke();
        	       //alert("yy1="+yy1+"yy2="+yy2+"  "+ss);
        	       //return;
        	  //}
        	  if(yy0==0){
        	  	yy0=(line_h/2);
        	  }else{
        	  	yy0=0;
        	  }
        	}
          t0=t;
          xx0=xx;
          i0=i;
        }
     
        xx01=xx;      
        xx=xx+(line_h*2);
        btc1=96;
        switch(t){
        		case 'd':btc1=96*2;break;
        	case '1':btc1=96;break;
        	case '-':btc1=48;break;
        	case '=':btc1=24;break;
        	case '3':btc1=32;trepc++;break;
        	case '4':btc1=24;break;
        	case '6':btc1=16;break;
        }
        
        btc=btc+btc1;
        mx=(line_h);
      //  console.log("bt0:"+btc);
        if(btc>=96*4){
        	var rect = canvasAA.getBoundingClientRect();
        	consolelog("btc2:"+btc+" w:"+canvas.width+" xx:"+xx);
        	ctx_n.moveTo((line_h*3)+xx-mx,yy_line_1);
         ctx_n.lineTo ((line_h*3)+xx-mx,yy_line_1+(line_h*4));
         ctx_n.stroke();
        	btc=0;
        	//xx+=20;
        }
       	
      }
    }


function draw_note() {
    	if(insMode==0)return;
    //	const outputs = access.outputs.values();
    	//consolelog(P1);
    	 
    	//alert(P1[0]);
    	i=1234;
    	console.log(cvs);
    	
      var canvas = document.getElementById(cvs[CHNID]);
     
      if (canvas.getContext) {
      
      	trec=canvas.getBoundingClientRect();
      	console.log(trec);
      	canvas.width=window.innerWidth-40;
      	console.log(i);
        ctx_n = canvas.getContext("2d");
         ctx_n.clearRect(0,0, canvas.width, 400);


       ctx_n.fillStyle = "rgb(10,10,0)";
       ctx_n.font = "12px Arial";
       	ctx_n.fillStyle = "rgb(0,0,0)";
          ctx_n.fillText(instruments[INS_IX[CHNID]],10,10);
       
     
       yy_line_1=line_h*5+00*CHNID;
       console.log("yy_line_1:"+yy_line_1);	
      for( i=0;i<line_h*5;i+=line_h){	
      	ctx_n.beginPath();
      	ctx_n.strokeStyle= "rgba(100,100,100,1)";
  	   ctx_n.moveTo(10,yy_line_1+i);
       ctx_n.lineTo( canvas.width,yy_line_1+i);
      	
        ctx_n.stroke();
        console.log("li:"+(yy_line_1+i));
        yy_line_2=yy_line_1+i;
      }
      xx=5*line_h;
      xx_org=0;
      while((EDPOS-xx_org)*(line_h*2)>canvas.width-100){
         xx_org++;
      }
      xx_left=xx+3*line_h;
      posxx=xx+(EDPOS-xx_org)*(line_h*2);
   
      gcc++;
      btc=0;
      xx0=0;
      yy0=0;
      xx01=0;
      i0=i;
      
      	ctx_n.strokeStyle= "rgba(0,0,0,1)";
      d1a=new Array();
      trepc=0;
    	draw_note0();
      ctx_n.moveTo((line_h*4)+posxx-line_h,yy_line_1-(line_h*4));
         ctx_n.lineTo ((line_h*4)+posxx-line_h,yy_line_1+(line_h*10));
         	ctx_n.strokeStyle= "rgba(255,0,0,0.9)";
         ctx_n.stroke();
         console.log(posxx);
      
     }
    }
  consolelog(MouseEvent);
 