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
    	
      	ctx_n.fillStyle = "rgba(0,0,0,0.9)";
      
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
          ctx_n.fillText("b",2.5*line_h+xx,yy+(line_h/2)*4);
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
    draw_noteb();
    
   
}
function EDRR(){
    if(EDPOS+1<MMLOG.length)EDPOS++;
    draw_noteb();
    //consolelog("EDPOS:"+EDPOS);
}
function delNote(){
//	alert("del:"+EDPOS);
  MMLOG.splice(EDPOS,1);
  
  if(MMLOG.length<=EDPOS){
    if(EDPOS>0)EDPOS--;
  }
  draw_noteb();
 }
 gcc=0;
 xx_org=0;
function draw_note(P1) {
    	
    //	const outputs = access.outputs.values();
    	//consolelog(P1);
    	 
    	//alert(P1[0]);
    	i=1234;
      var canvas = document.getElementById("canvas_n");
      //consolelog("vs1n	:"+canvas.height);
      
      canvas.width=2000;
      
      canvas.height=500;
      //	consolelog("QQQQ"+gcc);
      if (canvas.getContext) {
      	console.log(i);
        ctx_n = canvas.getContext("2d");
         ctx_n.clearRect(0,0, canvas.width, 400);
 ctx_n.moveTo(0,1400);
         ctx_n.lineTo(300,1400);
         ctx_n.stroke();
      // ctx_n.fillStyle = "rgb(10,10,0)";
      // ctx_n.fillRect (10, 10, 55, 50);
      line_h=6;
       if(window.innerHeight>600){
      	line_h=10;
      }
       yy_line_1=line_h*15;
      for( i=0;i<line_h*5;i+=line_h){
  	   ctx_n.moveTo(10,yy_line_1+i);
       ctx_n.lineTo(2000,yy_line_1+i);
      	ctx_n.strokeStyle= "rgba(200,200,200,1";
        ctx_n.stroke();
        yy_line_2=yy_line_1+i;
      }
      xx=5*line_h;
      xx_org=0;
      while((EDPOS-xx_org)*(line_h*2)>canvasAA.width*0.6){
         xx_org++;
      }
      xx_left=xx+3*line_h;
      posxx=xx+(EDPOS-xx_org)*(line_h*2);
      //consolelog("EDaPOS:"+EDPOS);
      //consolelog("org::"+xx_org+" EDaPOS:"+EDPOS);
      gcc++;
      btc=0;
      xx0=0;
      yy0=0;
      xx01=0;
      i0=i;
      t0=' ';
      	ctx_n.strokeStyle= "rgba(0,0,0,1)";
      d1a=new Array();
      trepc=0;
    		  for( i=xx_org;i<P1[0].length;i++){
    		  	consolelog("p:"+P1[8][i]);
      
        for(j=0;j<5;j++){
        	if(P1[j][i]==' ')continue;
          d1=(P1[j][i]-'1');
          if(P1[j][i]<P1[0][i])d1+=7;
         // alert(d1);
          d1+= (P1[6][i]-'2')*7;
          console.log(d1);
          d1a[i]=d1;
          draw_note1(d1,xx,0,P1[7][i],P1[8][i]);
        }
        if(t0!=P1[5][i] || btc==0||trepc>=3){
        	trepc=0;
        	if(t0!=' '){
        		//Alert("i0="+i0+" i="+i);
        	  // for(i1=i0;i1<i;i++){
        	      dd1=d1a[i0];
        	      dd2=d1a[i-1];
        	      m=i0;
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
        	    if(t0!='1'){
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
          t0=P1[5][i];
          xx0=xx;
          i0=i;
        }
     
        xx01=xx;      
        xx=xx+(line_h*2);
        btc1=96;
        switch(P1[5][i]){
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
        	consolelog("btc2:"+btc+" w:"+canvasAA.width+" xx:"+xx);
        	ctx_n.moveTo((line_h*3)+xx-mx,yy_line_1);
         ctx_n.lineTo ((line_h*3)+xx-mx,yy_line_1+(line_h*4));
         ctx_n.stroke();
        	btc=0;
        	//xx+=20;
        }
       	
      }
      ctx_n.moveTo((line_h*4)+posxx-line_h,yy_line_1-(line_h*4));
         ctx_n.lineTo ((line_h*4)+posxx-line_h,yy_line_1+(line_h*10));
         	ctx_n.strokeStyle= "rgba(255,0,0,0.3)";
         ctx_n.stroke();
         console.log(posxx);
      
     }
    }
  consolelog(MouseEvent);
 