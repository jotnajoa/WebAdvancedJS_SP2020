// document.getElementsByClassName('myClass')
// // This is same as
// // $('.myClass') in Jquery

// window.addEventListener('DomContentLoaded',()=>{
// })

// $(document).ready(()=>{
//     console.log('hi')

// }
// )

// Above jquery might not work if computer isn't fast enough to load jquery before it's run.

window.addEventListener('DOMContentLoaded', ()=>{
    attachEvents();
    let navOffset = $('nav').offset().top;
    $(window).scroll(()=>{
        let scrollPos = $(window).scrollTop();
        console.log(scrollPos);

        let stickNav= $('nav');
        stickyMenu(stickNav);

        let stickMenu =$('.menubar');
        stickMenu(stickMenu);

        function stickyMenu(stick){
            if(scrollPos>= navOffset){
                stick.addClass("fixed");
            }
        }
    })
})



attachEvents=()=>{
    // var link = documnet.getElementsByTagNAme("a")
    // link.addEventListner('click',()=>{})

    $('a').click((e)=>{
        let myTarget = $(e.target.hash);
        myTarget = myTarget.length && myTarget;
        console.log(myTarget);

        let targetOffset = myTarget.offset().top;
        $('html,body').animate({scrollTop:targetOffset},100)
    })
}
