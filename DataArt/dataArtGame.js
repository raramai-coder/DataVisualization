class Movie{
    
    constructor(title, originalID, remakeID){
        this.title = title;
        this.originalID = originalID;
        this.remakeID = remakeID;
        this.remakeRating = 0;
        this.originalRating = 0;
        this.ratingDifference = 0;
    }

    AddRating(movieID, movieRating){
        
        if (movieID == this.remakeID) {
            this.remakeRating = movieRating;
        }else if (movieID == this.originalID) {
            this.originalRating = movieRating;
        }
    }

    Difference(){
        let subTotal = Math.abs(this.originalRating-this.remakeRating);
        var subTotalFormatted = parseFloat(subTotal).toFixed(2);
        return subTotalFormatted;
    }

    Title(){
        return this.title;
    }

    BetterMovie(){
        if ((this.originalRating - this.remakeRating)>0) {
			return 0;
        }

       if ((this.originalRating - this.remakeRating) < 0) {
			return 1;
		}

        if (this.originalRating - this.remakeRating < 0) {
			return 2;
		}
    }
}

let Movies= [];
var moviePlaying;
var ratingChosen;
var movieChosen;
var finalScore;
var displayScore = 0;

d3.csv("../DataVisualisations/titleData.csv", function (data) {
	
    let currentMovie = new Movie(data.Title, data.Original, data.Remake);
    //console.log(currentMovie.Title());
    Movies.push(currentMovie);

}).then(function (data) {
	//console.log(Movies[0]);
     d3.tsv("../DataVisualisations/data.tsv",
				(add = (data) => {
					//console.log(movieData.length);
					Movies.forEach((element) => {
						if (data.tconst == element.originalID) {
							element.AddRating(data.tconst, data.averageRating);
							//console.log(element.title);
						} else if (data.tconst == element.remakeID) {
							element.AddRating(data.tconst, data.averageRating);
							//console.log(element.title);
						}
					});
				})
			);
}).then(
    function (data) {
        //console.log(Movies[0]);
        setMovieToPlay();
    }
);

//console.log(Movies[0]);
function setMovieToPlay() {
    let x = Math.floor(Math.random() * 136);
    let movieHeader = document.getElementById("movie-title");
    movieHeader.innerText = Movies[x].title;
    moviePlaying = Movies[x];

    reset();
}

function storeRating() {
    let slider = document.getElementById("myRange");
    ratingChosen = slider.value;
    //console.log(ratingChosen);
    let diffText = document.getElementById("diff");
    diffText.innerText = ratingChosen;
}

function reset() {
    let button2 = document.getElementById(0);
	button2.style.backgroundColor = "#fff";
    let button = document.getElementById(1);
	button.style.backgroundColor = "#fff"; 
    let slider = document.getElementById("myRange");
    slider.value  = 2.5;
    let diffText = document.getElementById("diff");
	diffText.innerText = 2.5;
}

function pickMovie(params) {
    movieChosen = params;
    //console.log(movieChosen);
    let button = document.getElementById(params);
    button.style.backgroundColor = "#c867a5";

    if (params == 1) {
       let button2 = document.getElementById(0);
	    button2.style.backgroundColor = "#fff"; 
    }else{
        let button2 = document.getElementById(1);
		button2.style.backgroundColor = "#fff";
    }
}

function calculateScore() {
    //console.log(moviePlaying);
    //console.log(movieChosen);
    //console.log(ratingChosen);

    finalScore = 0;

    if (movieChosen == moviePlaying.BetterMovie()) {
        //console.log("correct movie type chosen");
        finalScore = finalScore + 1;
    }else if (moviePlaying.BetterMovie()==2) {
		//console.log("draw");
        finalScore = finalScore + 2;
        //console.log("final score" + finalScore);
        setScore();
        return;
    }else{
        finalScore = finalScore -2;
        //console.log("final score" + finalScore);
        setScore();
        return;
    }

    //console.log(finalScore);

    if (Math.abs(moviePlaying.Difference() - ratingChosen) <= 0.5) {
		finalScore = finalScore + 2;
    }else if (
			Math.abs(moviePlaying.Difference() - ratingChosen) < 1 &&
			Math.abs(moviePlaying.Difference() - ratingChosen) > 0.5
		) {
		
         finalScore = finalScore + 1;
    }

    //console.log("final score" + finalScore);

    setScore();
}

function setScore() {
    const scoreBoard = document.getElementById("score-text");
    const resultDisp = document.getElementById("results-div");

    resultDisp.innerHTML = "";

    displayScore = displayScore + finalScore;
	scoreBoard.innerText = "Score: " + displayScore;

    const paraScore = document.createElement("p");
    const node = document.createTextNode(moviePlaying.title + ": " + finalScore);
    paraScore.append(node);

    const movieList = document.getElementById("moviesPlayed");
    movieList.append(paraScore);

    
    const resultText = document.createElement("p");
    const resultText2 = document.createElement("p");
    const resultText3 = document.createElement("p");
    const textNode = document.createTextNode(moviePlaying.Title() + " Original: " + moviePlaying.originalRating);
    const textNode2 = document.createTextNode("Remake: " + moviePlaying.remakeRating);
    const textNode3 = document.createTextNode("Difference: " + moviePlaying.Difference());

    resultText.append(textNode);
    resultText2.append(textNode2);
    resultText3.append(textNode3);
    resultDisp.append(resultText);
    resultDisp.append(resultText2);
    resultDisp.append(resultText3);
    setMovieToPlay();
}

//storeRating();