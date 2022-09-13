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




let url =
  "https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt6139732";

//array of original movies imdb codes
let originals = ["tt0034398", 
"tt0043274",
"tt0110357",
"tt0795368",
"tt0102798",
//"tt0087538"
"tt0119375",
"tt0063442",
"tt0078087",
"tt0103639"
];

//array of remakes imdb numbers
let remakes = [
  "tt0780653",
  "tt1014759",
  "tt6105098",
  "tt1321509",
  "tt0955308",
  //"tt1155076",
  "tt0278504",
  "tt0133152",
  "tt0464154",
  "tt6139732"
];

let movieData = new Array();

//class of Movie object
class Movie {
  
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
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

        if(movieData.length==9){
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

populate(originals);
