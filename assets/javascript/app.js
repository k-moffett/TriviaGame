$( document ).ready(function () {
let game = {
    time: "",
    correct: "",
    incorrect: "",
    unanswered: "",
    start:
        function start(){
            $(".start_screen").hide()
            $(".game_content").show()
            game.time = 5
            $("#time").text(game.time)
            game.display_time()
        },
    display_time:
        function display_time() {
            intervalId = setInterval(game.countdown, 1000)
            $("#time").text(game.time)   
    },
    countdown:
        function countdown() {
            game.time--
            $("#time").text(game.time)
            if (game.time === 0) {
                clearInterval(intervalId)
                game.results()
                $(".game_content").hide()
                $(".game_over").show()
            }
        },
    results:
        function results () {
                
                if  ($("input:checked").val() === "true"){
                    game.correct++
                    $("#correct_count").append(game.correct)
                }
                if ($("input:checked").val() === "false"){
                    game.incorrect++
                    $("#incorrect_count").append(game.incorrect)
                }
                if ($("input:checked").val() === undefined){
                    game.unanswered++
                    $("#unanswered_count").append(game.unanswered)
                }
        },    
}



$("#start_button").on("click", game.start)
start_screen()
function start_screen () {
    $(".game_content").hide()
    $(".game_over").hide()
}
})