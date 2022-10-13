const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a86583520amshb90020e4c57c508p13af0cjsn19b1ddd15744",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

// fetch(
//   "https://movie-database-alternative.p.rapidapi.com/?s=Lion&20%King&r=json&page=1",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

  // let response = fetch(
  //   "https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake",
  //   options
  // )
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

    // d3.json(
    //   'https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake' +
    //     options,
    //   function (data) {
    //     console.log(data);
    //   }
    // ).catch((err) => console.error(err));

    // let url =
    //   "https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake";


// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a86583520amshb90020e4c57c508p13af0cjsn19b1ddd15744",
//     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
//   },
// };
// let array =[];

// let data = [
//   fetch(
//     "https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake&plot=Remake",
//     options
//   )
//     .then((response) => response.json())
//     // .then((response) => {//return response.json();
//     //   d3.json(response.json()).then(function (data) {
//     //     console.log(data);
//     //   });
//     // })
//     //.then((response)=> array = response)
//     //.then((response) => console.log(response))
//     .catch((err) => console.error(err)),
// ];

// d3.json(
//   "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1",
//   options
// )
//   .then(function (data) {
//     console.log(data);
//     console.log(data.Search[0].Title);
//   })
//   .catch((err) => console.error(err));


//array = await data.json();

//const dataJSON = JSON.stringify(data);
//console.log(dataJSON);  
//console.log(data);
//console.log(data[0]);
//console.log(array);

//const dataJSON = JSON.stringify(array);
//console.log(dataJSON);  


let originalMoviesColor = "#69b3a2";
let movieRemakesColor = "#88CCF1";

let url =
  "https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt6139732";

//array of original movies imdb codes
// let originals = [
//   "tt0034398",
//   "tt0043274",
//   "tt0110357",
//   "tt0795368",
//   "tt0102798",
//   //"tt0087538"
//   "tt0119375",
//   "tt0063442",
//   "tt0078087",
//   "tt0103639",
// ];

let originalDisplay = [
  "tt0101414",
  "tt0795368",
  "tt0120667",
  "tt0113568",
  "tt0103639",
  "tt0024216",
  "tt0054215",
  "tt0093870",
  "tt0061852",
  "tt0110357",
];

let remakeDisplay = [
  "tt2771200",
  "tt1321509",
  "tt1502712",
  "tt1219827",
  "tt6139732",
  "tt0360717",
  "tt0155975",
  "tt1234721",
  "tt3040964",
  "tt6105098",
];

//array of remakes imdb numbers
// let remakes = [
//   "tt0780653",
//   "tt1014759",
//   "tt6105098",
//   "tt1321509",
//   "tt0955308",
//   //"tt1155076",
//   "tt0278504",
//   "tt0133152",
//   "tt0464154",
//   "tt6139732",
// ];

let movieData = new Array();
let movieDataRemakes = new Array();
let moviesToDisplay = new Array();
let moviePairData = new Array();

//class of Movie object
class Movie {
  
  constructor(id, rating) {
    this.title = null;
    this.rating = rating;
    this.id = id;
  }

  AddName = (stitle)=> {

    this.title = stitle;
    return this.title;
  }

}

class MoviePair {
  constructor(title, originalId, remakeID) {
    this.title = title;
    this.originalId = originalId;
    this.remakeID = remakeID;
  }

  AddRemakeRating(rating){
    this.remakeRating = rating;
  }

  AddOriginalRating(rating){
    this.originalRating = rating;
  }
}


//populate movie data array from api
function populate(imdbs) {
 
  let url =
    "https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt6139732";
  
  imdbs.forEach(element => {
    url =
      "https://movie-database-alternative.p.rapidapi.com/?r=json&i=" + element;

    //console.log(url);
    d3.json(url, options)
      .then(function (data) {
        //console.log(data.Ratings[0].Value);
        var title1 = data.Title;
        var rating1 = data.Ratings[0].Value;
        
        var numb = rating1.match(/\d/g);
        //numb = numb.join("");
        let number = (numb[0] + numb[1])/10;
        let movie = new Movie(title1, number);
        movieData.push(movie);
        //console.log(movie.title);
        //console.log(movieData[0].title);
        //console.log(movieData.length);

        if(movieData.length==10){
          //set the dimensions and margins of the graph
          var margin = { top: 10, right: 30, bottom: 90, left: 40 },
            width = 760 - margin.left - margin.right,
            // width =
            //   document.getElementById("graph-section").width 750-
            //   margin.left -
            //   margin.right,
            height = 550 - margin.top - margin.bottom;

          // append the svg object to the body of the page
          const svg = d3
            .select("#graph")
            //.select(graphToPopulate)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

          // X axis
          const x = d3
            .scaleBand()
            .range([0, width])
            .domain(
              movieData.map(function (d) {
                return d.title;
              })
            )
            .padding(1);

          svg
            .append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

          // Add Y axis
          const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
          svg.append("g").call(d3.axisLeft(y));

          // Lines
          svg
            .selectAll("myline")
            .data(movieData)
            .enter()
            .append("line")
            .attr("x2", function (d) {
              return x(d.title);
            })
            .attr("x1", function (d) {
              return x(d.title);
            })
            .attr("y1", function (d) {
              return y(d.rating);
            })
            .attr("y2", y(0))
            .attr("stroke", "grey");

          // Circles
          svg
            .selectAll("mycircle")
            .data(movieData)
            .join("circle")
            .attr("cx", function (d) {
              return x(d.title);
            })
            .attr("cy", function (d) {
              return y(d.rating);
            })
            .attr("r", "4")
            .style("fill", "#69b3a2")
            .attr("stroke", "black");
        }
        
      })
      .catch((err) => console.error(err));
  });
}

//populate(originals);


d3.tsv("data.tsv", function (data) {
  originalDisplay.forEach((element) => {
    if (data.tconst == element) {
      //console.log(data.averageRating);
      var rating = data.averageRating;
      let movie = new Movie(data.tconst, rating);
      movieData.push(movie);
      //console.log(movieData);
    }
  });
})
  .then(function (data) {
     d3.csv(
       "titleData.csv",
       (add = (data) => {
         //console.log(movieData.length);
         movieData.forEach((element) => {
           if (data.Original == element.id || data.Remake == element.id) {
             element.AddName(data.Title);
             //console.log(element.title);
           }
         });
       })
     ).then(function (data) {

       if (movieData.length == 10) {
         //set the dimensions and margins of the graph
         var margin = { top: 20, right: 30, bottom: 90, left: 50 };
         let box = document.querySelector("#graph");
         let width = box.clientWidth - margin.left - margin.right;
         let height = box.clientHeight - margin.top - margin.bottom;

         // append the svg object to the body of the page
         const svg = d3
           .select("#graph")
           //.select(graphToPopulate)
           .append("svg")
           .attr("width", width + margin.left + margin.right)
           .attr("height", height + margin.top + margin.bottom)
           .append("g")
           .attr("transform", `translate(${margin.left},${margin.top})`);

         // X axis
         const x = d3
           .scaleBand()
           .range([0, width])
           .domain(
             movieData.map(function (d) {
               return d.title;
             })
           )
           .padding(1);

         svg
           .append("g")
           .attr("transform", `translate(0, ${height})`)
           .call(d3.axisBottom(x))
           .selectAll("text")
           .attr("transform", "translate(-10,0)rotate(-45)")
           .style("font-size", "11.5px")
           .style("text-anchor", "end");

         // Add Y axis
         const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
         svg.append("g").call(d3.axisLeft(y));

         // Lines
         svg
           .selectAll("myline")
           .data(movieData)
           .enter()
           .append("line")
           .attr("x2", function (d) {
             //console.log(d.title);
             return x(d.title);
           })
           .attr("x1", function (d) {
             return x(d.title);
           })
           .attr("y1", function (d) {
             return y(d.rating);
           })
           .attr("y2", y(0))
           .attr("stroke", "grey");

         // Circles
         svg
           .selectAll("mycircle")
           .data(movieData)
           .join("circle")
           .attr("cx", function (d) {
             return x(d.title);
           })
           .attr("cy", function (d) {
             return y(d.rating);
           })
           .attr("r", "10")
           .style("fill", originalMoviesColor)
           .attr("stroke", "black");
       }

       //console.log(movieData);
     });


  });

d3.tsv("data.tsv", function (data) {
  remakeDisplay.forEach((element) => {
    if (data.tconst == element) {
      //console.log(data.averageRating);
      var rating = data.averageRating;
      let movie = new Movie(data.tconst, rating);
      movieDataRemakes.push(movie);
      //console.log(movieData);
    }
  });

   
}).then(function (data) {
  d3.csv(
    "titleData.csv",
    (add = (data) => {
      //console.log(movieData.length);
      movieDataRemakes.forEach((element) => {
        if (data.Original == element.id || data.Remake == element.id) {
          element.AddName(data.Title);
          //console.log(element.title);
        }
      });
    })
  ).then(function (data) {
    //set the dimensions and margins of the graph
        var margin = { top: 20, right: 30, bottom: 90, left: 50 };
        let box = document.querySelector("#graph2");
        let width = box.clientWidth - margin.left - margin.right;
        let height = box.clientHeight - margin.top - margin.bottom;

      // append the svg object to the body of the page
      const svg = d3
        .select("#graph2")
        //.select(graphToPopulate)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(
          movieDataRemakes.map(function (d) {
            return d.title;
          })
        )
        .padding(1);
      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("font-size", "11.5px")
        .style("text-anchor", "end");
      // Add Y axis
      const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));
      // Lines
      svg
        .selectAll("myline")
        .data(movieDataRemakes)
        .enter()
        .append("line")
        .attr("x2", function (d) {
          return x(d.title);
        })
        .attr("x1", function (d) {
          return x(d.title);
        })
        .attr("y1", function (d) {
          return y(d.rating);
        })
        .attr("y2", y(0))
        .attr("stroke", "grey");
      // Circles
      svg
        .selectAll("mycircle")
        .data(movieDataRemakes)
        .join("circle")
        .attr("cx", function (d) {
          return x(d.title);
        })
        .attr("cy", function (d) {
          return y(d.rating);
        })
        .attr("r", "10")
        .style("fill", movieRemakesColor)
        .attr("stroke", "black");
  });

  
});

function populateInteractiveGraph(movies) {
  var svg;
  
  d3.csv("titleData.csv", function (data) {
    //console.log(movies.length);
   
    movies.forEach((element) => {
      if (data.Original == element || data.Remake == element) {
        //console.log(data.averageRating);
        var movieTitle = data.Title;
        var originalID = data.Original;
        var remakeID = data.Remake;
        let movie = new MoviePair(movieTitle, originalID, remakeID);
        moviePairData.push(movie);
        //console.log(moviePairData);
      }
    });

    // console.log(moviePairData);
  }).then(function (data) {
    d3.tsv(
      "data.tsv",
      (add = (data) => {
        //console.log(movieData.length);
        moviePairData.forEach((element) => {
          if (data.tconst == element.originalId) {
            element.AddOriginalRating(data.averageRating);
            //console.log(element.title);
          } else if (data.tconst == element.remakeID) {
            element.AddRemakeRating(data.averageRating);
            //console.log(element.title);
          }
        });
      })
    ).then(function (data) {
      console.log(moviePairData);

      //set the dimensions and margins of the graph
      var margin = { top: 20, right: 30, bottom: 90, left: 50 };
      let box = document.querySelector("#interactive-graph");
      let width = box.clientWidth - margin.left - margin.right;
      let height = box.clientHeight - margin.top - margin.bottom;

      box.innerHTML='';
      // append the svg object to the body of the page
      svg = d3
        .select("#interactive-graph")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      //svg.selectAll("*").remove();
      // X axis
      const x = d3
        .scaleBand()
        .range([0, width])
        .domain(
          moviePairData.map(function (d) {
            return d.title;
          })
        )
        .padding(1);

      svg
        .append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("font-size", "11.5px")
        .style("text-anchor", "end");

      // Add Y axis
      const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
      svg.append("g").call(d3.axisLeft(y));

      // Lines
      svg
        .selectAll("myline")
        .data(moviePairData)
        .enter()
        .append("line")
        .attr("x2", function (d) {
          //console.log(d.title);
          return x(d.title);
        })
        .attr("x1", function (d) {
          return x(d.title);
        })
        .attr("y1", function (d) {
          if (d.originalRating > d.remakeRating) {
            //console.log(d.originalRating,d.remakeRating);
            return y(d.originalRating);
          } else {
            return y(d.remakeRating);
          }
        })
        .attr("y2", function (d) {
          if (d.originalRating > d.remakeRating) {
            //console.log(d.originalRating,d.remakeRating);
            return y(d.remakeRating);
          } else {
            return y(d.originalRating);
          }
        })
        .attr("stroke", function (d) {
          if (d.originalRating > d.remakeRating) {
            //console.log(d.originalRating,d.remakeRating);
            return originalMoviesColor;
          } else {
            return movieRemakesColor;
          }
        });

      
        var div = d3
          .select("#interactive-graph")
          .append("div")
          .attr("id", "tooltip")
          .style("opacity", 0);
      
        // Original Movies Circles
      svg
        .selectAll("mycircle")
        .data(moviePairData)
        .join("circle")
        .attr("cx", function (d) {
          return x(d.title);
        })
        .attr("cy", function (d) {
          return y(d.originalRating);
        })
        .attr("r", "10")
        .style("fill", originalMoviesColor)
        .attr("stroke", "black")
        .on('mouseenter', function (d,i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '.75');
    
          div.transition().duration(50).style("opacity", 1);
          let str = "Original: " +i.title + " Rating: " + i.originalRating;
          div
            .html(str)
            .style("left", d.pageX + 10 + "px")
            .style("background-color", originalMoviesColor)
            .style("top", d.pageY - 15 + "px"); 
              
            })
        .on('mouseout', function (d, i) {
          d3.select(this).transition()
               .duration('50')
               .attr('opacity', '1');

              div.transition().duration(50).style("opacity", 0);
              
              });

      // Movie Remake Circles
      svg
        .selectAll("mycircler")
        .data(moviePairData)
        .join("circle")
        .attr("cx", function (d) {
          return x(d.title);
        })
        .attr("cy", function (d) {
          return y(d.remakeRating);
        })
        .attr("r", "10")
        .style("fill", movieRemakesColor)
        .attr("stroke", "black")
        .on("mouseenter", function (d, i) {
          d3.select(this).transition().duration("50").attr("opacity", ".75");

          div.transition().duration(50).style("opacity", 1);
          let str = "Remake: " + i.title + " Rating: " + i.remakeRating;
          div
            .html(str)
            .style("left", d.pageX + 10 + "px")
            .style("background-color", movieRemakesColor)
            .style("top", d.pageY - 15 + "px");
        })
        .on("mouseout", function (d, i) {
          d3.select(this).transition().duration("50").attr("opacity", "1");

          div.transition().duration(50).style("opacity", 0);
        });
    });
  });
  
}

populateInteractiveGraph(originalDisplay);

function shuffleMovies(){
  let indexHolder = [];
  let newMovies = [];
  
  for (let index = 0; index < 10; index++) {
    let x = Math.floor(Math.random() * 136);
    //console.log(x);
    indexHolder.push(x);
  }

  indexHolder.sort((a,b)=>a-b);
  //console.log(indexHolder);

  //let currentInt = indexHolder[0];
  let currentIndex = 0;
  //console.log(currentInt); 
  let index = 0;
  moviePairData = [];
  d3.csv("titleData.csv", function (data) {
    

    if (index == indexHolder[currentIndex]) {
      //console.log(index);
      var movieTitle = data.Title;
      var originalID = data.Original;
      var remakeID = data.Remake;
      let movie = new MoviePair(movieTitle, originalID, remakeID);
      //newMovies.push(movie);
      moviePairData.push(movie);
      ++currentIndex;
    }
     
    ++index;
    //console.log(index);
  }).then(function (data) {
    //console.log(newMovies);
    if (moviePairData.length>9) {
      populateInteractiveGraph(newMovies);
    } else {
      shuffleMovies();
    }
    
   
  });
}