
        const FPS = 30;
        var bs = 10;
        var bx, by;
        var xv, yv;
        var canvas, context;
        
        // load canvas
        canvas = document.getElementById("mycanvas1");
        context = canvas.getContext("2d");

        canvas2 = document.getElementById("mycanvas2");
        context2 = canvas2.getContext("2d");

        canvas3 = document.getElementById("mycanvas3");
        context3 = canvas3.getContext("2d");

        canvas4 = document.getElementById("mycanvas4");
        context4 = canvas4.getContext("2d");

        canvas5 = document.getElementById("mycanvas5");
        context5 = canvas5.getContext("2d");

        // set up interval (game loop)
        // setInterval(update, 1000 / FPS);
        // setInterval(update2, 1000 / FPS);
        // setInterval(update3, 1000 / FPS);
        // setInterval(update4, 1000 / FPS);
        // setInterval(update5, 1000 / FPS);

        // setInterval(update3, 1000 / FPS);
        // setInterval(update4, 1000 / FPS);
        // setInterval(update5, 1000 / FPS);

        // update()

        
        // ball starting position
        bx = 0
        by = canvas.height / 2;
        
        // random ball starting speed (between 25 and 100 pps)
        xv = Math.floor(Math.random() * 76 + 25) / FPS;
        yv = Math.floor(Math.random() * 76 + 25) / FPS;
        
        // random ball direction
        // if (Math.floor(Math.random() * 2) == 0) {
            xv = 4
        // }
        // if (Math.floor(Math.random() * 2) == 0) {
        //     yv = -yv;
        // }
        
        // update function
        // function update() {
        //     // move the ball
        //     bx += xv;
        //     // by += yv;
            
        //     // bounce the ball off each wall
        //     if (bx - bs / 2 < 0 && xv < 0) {
        //         xv = -xv;
        //     }
        //     if (bx + bs / 2 > canvas.width && xv > 0) {
        //         xv = -xv;
        //     }
         
        //     // draw background and ball
        //     context.fillStyle = "black";
        //     context.fillRect(0, 0, canvas.width, canvas.height);
        //     context.fillStyle = "yellow";
        //     context.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        //     context.fillStyle = "yellow";
        //     context.fillRect(bx - bs / 2, (by - bs / 2) + (canvas.height)/3, bs, bs);
        //     context.fillStyle = "yellow";
        //     context.fillRect(bx - bs / 2, (by - bs / 2) - (canvas.height)/3, bs, bs);
        // }


        // function update2() {
        //     // move the ball
        //     bx += xv;
        //     // by += yv;
            
        //     // bounce the ball off each wall
        //     if (bx - bs / 2 < 0 && xv < 0) {
        //         xv = -xv;
        //     }
        //     if (bx + bs / 2 > canvas2.width && xv > 0) {
        //         xv = -xv;
        //     }
         
        //     // draw background and ball
        //     context2.fillStyle = "black";
        //     context2.fillRect(0, 0, canvas2.width, canvas2.height);
        //     context2.fillStyle = "yellow";
        //     context2.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        //     context2.fillStyle = "yellow";
        //     context2.fillRect(bx - bs / 2, (by - bs / 2) + (canvas2.height)/3, bs, bs);
        //     context2.fillStyle = "yellow";
        //     context2.fillRect(bx - bs / 2, (by - bs / 2) - (canvas2.height)/3, bs, bs);
        // }





        // function update3() {
        //     // move the ball
        //     bx += xv;
        //     // by += yv;
            
        //     // bounce the ball off each wall
        //     if (bx - bs / 2 < 0 && xv < 0) {
        //         xv = -xv;
        //     }
        //     if (bx + bs / 2 > canvas3.width && xv > 0) {
        //         xv = -xv;
        //     }
         
        //     // draw background and ball
        //     context3.fillStyle = "black";
        //     context3.fillRect(0, 0, canvas3.width, canvas3.height);
        //     context3.fillStyle = "yellow";
        //     context3.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        //     context3.fillStyle = "yellow";
        //     context3.fillRect(bx - bs / 2, (by - bs / 2) + (canvas3.height)/3, bs, bs);
        //     context3.fillStyle = "yellow";
        //     context3.fillRect(bx - bs / 2, (by - bs / 2) - (canvas3.height)/3, bs, bs);
        // }


        // function update4() {
        //     // move the ball
        //     bx += xv;
        //     // by += yv;
            
        //     // bounce the ball off each wall
        //     if (bx - bs / 2 < 0 && xv < 0) {
        //         xv = -xv;
        //     }
        //     if (bx + bs / 2 > canvas4.width && xv > 0) {
        //         xv = -xv;
        //     }
         
        //     // draw background and ball
        //     context4.fillStyle = "black";
        //     context4.fillRect(0, 0, canvas4.width, canvas4.height);
        //     context4.fillStyle = "yellow";
        //     context4.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        //     context4.fillStyle = "yellow";
        //     context4.fillRect(bx - bs / 2, (by - bs / 2) + (canvas4.height)/3, bs, bs);
        //     context4.fillStyle = "yellow";
        //     context4.fillRect(bx - bs / 2, (by - bs / 2) - (canvas4.height)/3, bs, bs);
        // }
        //     function update5() {
        //         // move the ball
        //         bx += xv;
        //         // by += yv;
                
        //         // bounce the ball off each wall
        //         if (bx - bs / 2 < 0 && xv < 0) {
        //             xv = -xv;
        //         }
        //         if (bx + bs / 2 > canvas5.width && xv > 0) {
        //             xv = -xv;
        //         }
             
        //         // draw background and ball
        //         context5.fillStyle = "black";
        //         context5.fillRect(0, 0, canvas5.width, canvas5.height);
        //         context5.fillStyle = "yellow";
        //         context5.fillRect(bx - bs / 2, by - bs / 2, bs, bs);
        //         context5.fillStyle = "yellow";
        //         context5.fillRect(bx - bs / 2, (by - bs / 2) + (canvas5.height)/3, bs, bs);
        //         context5.fillStyle = "yellow";
        //         context5.fillRect(bx - bs / 2, (by - bs / 2) - (canvas5.height)/3, bs, bs);
        //     }











// var xw=5;
// var xp=0;

//     setInterval(fallingcircle,1000/30)
//     let box1=document.getElementById("mycanvas1");
//     var boxdrw=box1.getContext("2d");
//     boxdrw.lineWidth =1/4;

//     function strokeLine(boxdrw,i){
//         boxdrw.beginPath();
//         boxdrw.strokeStyle="rgba(180, 3, 180, 0.87)";
//         boxdrw.moveTo(0,i);
//         boxdrw.lineTo(innerWidth,i);
//         boxdrw.stroke();
//         boxdrw.closePath();
//     }
//      function fallingcircle(boxdrw,i){
//         xp= xp+xw;
//         boxdrw.fillRect(xp,i,10,10);
        
//     }


//     let box2=document.getElementById("mycanvas2");
//     let box2drw=box2.getContext("2d");
//     box2drw.lineWidth=1;

//     for (var i=0; i<innerHeight; i=i+5){
//         strokeLine(box2drw,i)

//     }

//     let box3=document.getElementById("mycanvas3");
//     let box3drw=box3.getContext("2d");
//     box3drw.lineWidth=1/4;

//     for (var i=0; i<innerHeight; i=i+5){
//         strokeLine(box3drw,i)

//     }

//     let box4=document.getElementById("mycanvas4");
//     let box4drw=box4.getContext("2d");
//     box4drw.lineWidth=1/4;

//     for (var i=0; i<innerHeight; i=i+5){
//         strokeLine(box4drw,i)

//     }
 

        // for(let i=0; i<10;i++){
        //     // boxdrw.fillRect(0,1/7*i*innerHeight,innerWidth,1/15*i*innerHeight);
        // }

        function vh(v) {
            var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            return (v * h) / 100;
          }
          
          function vw(v) {
            var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            return (v * w) / 100;
          }
          
          function vmin(v) {
            return Math.min(vh(v), vw(v));
          }
          
          function vmax(v) {
            return Math.max(vh(v), vw(v));
          }
          console.info(vh(20), Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
          console.info(vw(30), Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
          console.info(vmin(20));
          console.info(vmax(20));

        for (var i = 0; i < 6; i = i + 1) {
            context.fillStyle = 'Orange';
            context.fillRect(vw(30) * i, 50 * i, 100, 40);
            context.fillStyle = 'Black';
            context.fillText('i == ' + i, 30 * i + 10, 50 * i + 20);
          }

            // For loot doesn't work out for some reasons. Why?        
            
        
            // boxdrw.fillRect(15,15,15,15);
            // boxdrw.fillRect(100,100,15,15);
        
            // rgba(180, 3, 180, 0.87);
            // rgba(189, 3, 189, 0.637);
            // rgba(243, 38, 243, 0.692);
            // rgba(247, 89, 247, 0.671);
            // rgba(253, 125, 253, 0.486);


