  var ctx_n;
    function draw_note1(d1,xx,len,flat){
    	flat=flat||' ';
    	if(flat=='b'){
         ctx_n.fillStyle = "rgba(0,0,0,0.2)";
      }else{
      	ctx_n.fillStyle = "rgba(0,0,0,0.9)";
      }
        yy=yy_line_1+50-(d1*5);
         ctx_n.beginPath();
         ctx_n.ellipse(30+xx, yy, 5, 4, 0, 0, (2)* Math.PI);
       ctx_n.fill();
       ctx_n.stroke();
       if((yy%10 )!=0){
       	 if(yy<50){
       	 	yy+=5;
       	}else{
       		yy-=5;
       	}
      }
       while(yy<yy_line_1){
        	ctx_n.moveTo(30+xx-8,yy);
          ctx_n.lineTo(30+xx+8,yy);
          ctx_n.stroke();
          yy+=10;
        }
        while(yy>=yy_line_1+50){
        	ctx_n.moveTo(30+xx-8,yy);
          ctx_n.lineTo(30+xx+8,yy);
          ctx_n.stroke();
          yy-=10;
        }    
    }
    function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sends the message.
}

function draw_note(P1) {
    	
    //	const outputs = access.outputs.values();
    	console.log(P1);
    	 
    	//alert(P1[0]);
    	i=1234;
      var canvas = document.getElementById("canvas_n");
      console.log("vs1n	:"+canvas.height);
      
      canvas.width=2000;
      canvas.height=500;
      	console.log(i);
      if (canvas.getContext) {
      	console.log(i);
        ctx_n = canvas.getContext("2d");
         ctx_n.clearRect(0,0, canvas.width, 400);
 ctx_n.moveTo(0,1400);
         ctx_n.lineTo(300,1400);
         ctx_n.stroke();
      // ctx_n.fillStyle = "rgb(10,10,0)";
      // ctx_n.fillRect (10, 10, 55, 50);
      yy_line_1=100;
      for( i=0;i<50;i+=10){
  	   ctx_n.moveTo(10,yy_line_1+i);
       ctx_n.lineTo(2000,yy_line_1+i);
      	ctx_n.strokeStyle= "rgba(200,200,200,1";
        ctx_n.stroke();
      }
      xx=50;
      btc=0;
      xx0=0;
      yy0=0;
      xx01=0;
      i0=i;
      t0=' ';
      	ctx_n.strokeStyle= "rgba(0,0,0,1)";
      d1a=new Array();
      trepc=0;
    		  for( i=0;i<P1[0].length;i++){
      
        for(j=0;j<5;j++){
        	if(P1[j][i]==' ')continue;
          d1=(P1[j][i]-'1');
          if(P1[j][i]<P1[0][i])d1+=7;
         // alert(d1);
          d1+= (P1[6][i]-'2')*7;
          d1a[i]=d1;
          draw_note1(d1,xx,0,P1[7][i]);
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
        	      
        	      yy1=yy_line_1+50-(dd1*5)-30;
        	      yy2=yy_line_1+50-(dd2*5)-30;
        	      txx=0;
        	      tyy=0;
        	      if(i-i0==1){
        	      	yy2=yy1;
        	      	tyy=5;
        	      	txx=10;
        	      }
        	    //beam 1
        	       ctx_n.moveTo(30+xx0+5-txx,1+yy1+tyy);
                 ctx_n.lineTo(30+xx01+5,1+yy2);
                 ctx_n.stroke();
                 if(t0=='='){
                 	  //beam 2
                 	   ctx_n.moveTo(30+xx0+5-txx,1+yy1-3+tyy);
                      ctx_n.lineTo(30+xx01+5,1+yy2-3);
                      ctx_n.stroke();
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
        	          yy3=yy_line_1+50-(dd1a*5);
        	          //draw stock
        	          ctx_n.moveTo(30+xx0+5+tx,1+yya);
                    ctx_n.lineTo(30+xx0+5+tx,1+yy3);
                    ctx_n.stroke();
                    tx+=20;
        	       }
        	       
        	       //alert("yy1="+yy1+"yy2="+yy2+"  "+ss);
        	       //return;
        	  //}
        	  if(yy0==0){
        	  	yy0=5;
        	  }else{
        	  	yy0=0;
        	  }
        	}
          t0=P1[5][i];
          xx0=xx;
          i0=i;
        }
     
        xx01=xx;      
        xx=xx+20;
        btc1=96;
        switch(P1[5][i]){
        	case ' ':btc1=96;break;
        	case '-':btc1=48;break;
        	case '=':btc1=24;break;
        	case '3':btc1=32;trepc++;break;
        	case '4':btc1=24;break;
        	case '6':btc1=16;break;
        }
        
        btc=btc+btc1;
        if(btc>=96*4){
        	mx=10;
        	ctx_n.moveTo(30+xx-mx,yy_line_1);
         ctx_n.lineTo (30+xx-mx,yy_line_1+40);
         ctx_n.stroke();
        	btc=0;
        	//xx+=20;
        }
       	
      }
      
     }
    }
 
 