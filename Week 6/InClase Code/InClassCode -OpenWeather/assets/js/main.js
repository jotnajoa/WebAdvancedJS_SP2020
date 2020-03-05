window.addEventListener('DOMContentLoaded', function () {

    // loadData();

    attachEvent();

});

attachEvent = ()=>{
    $("#search-button").click(()=>{
        loadData();

        $("#city").val("");

    })

    $("#city").keypress((e)=>{

        if(e.keyCode ==13){
            loadData();

            $("#city").val("");

        }

    })
}


loadData = ()=>{
    // let city = "Astoria";

    let city = $("#city").val();



$.getJSON("https://dog.ceo/api/breed/"+city+"/images/random/3" , 
(data)=>{

    console.log(data);
    let icon = data.message[0];

    //K * 9/5 -459.67
    // $(".temp").append(temp.toFixed(2) * 9/5 - 459.67);


    //$(".temp").html(Math.floor(temp * 9/5 - 459.67) + " " + "°F");
    $(".icon").attr("src", icon);
})}
