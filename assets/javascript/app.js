$( document ).ready(function () {

let game = {
    time: "",
    start:
        function start(){
            game.time = 30
            $("#time").text(game.time)
            display_time()
        },
    countdown:
        function countdown() {

        },
}





function display_time() {
    while (game.time > 0) {
        setInterval( game.countdown, 1000)
        $("#time").text(game.time)
    }
}












game.start()
//setTimeout(function(){
//alert("You Lose!")
//}, 1000)

//////////
})