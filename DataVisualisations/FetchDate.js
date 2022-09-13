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
//let url = "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

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

//array of movie data to display
//let movieData = [];
// var myFilmObject = {
//   title: "",
//   rating: "",
// };
// let movieData = [{ title: "", rating: 7 }, 
// {title: 'Planet of the Apes', rating: 5.7}, 
// {title: 'The Lion King', rating: 6.8},
// {title: 'Robin Hood', rating: 6.6},
// {title: 'Piranha 3D', rating: 5.5},
// {title: 'Death at a Funeral', rating: 5.7},
// {title: 'The Wolfman', rating: 5.8},
// {title: 'Aladdin', rating: 6.9},
// {title: 'Alice in Wonderland', rating: 6.4},
// {title: 'Insomnia', rating: 7.2}];

let movieData = new Array();
//let movieData;

//class of Movie object
class Movie {
  title;
  rating;
  
  constructor(title, rating) {
    this.title = title;
    this.rating = rating;
  }
}

//populate movie data array from api
function populate(imdbs) {
  
  movieData.length= 0;
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
        //console.log(number);
        //console.log(numb);​

        //movieData.push({title, rating})
        // let arr = new Object();
        // arr.title = title1;
        // arr.rating = rating1;
        let movie = new Movie(title1, number);
        //let arr = { title: title1, rating: rating1 };
        movieData.push(movie);
        //movieData[0] = arr;
        //movieData.push(arr);
        //console.log(movie.title);
        //console.log(movieData[0].title);
        //console.log(movieData.length);

        if(movieData.length==9){
          //set the dimensions and margins of the graph
          var margin = { top: 10, right: 30, bottom: 90, left: 40 },
            width = 460 - margin.left - margin.right,
            height = 550 - margin.top - margin.bottom;

          // append the svg object to the body of the page
          const svg = d3
            .select("#graph")
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
      //.then(console.log(movieData.length))
      .catch((err) => console.error(err));
  });

  // let country = {
  //   name: "South Ah",
  //   unis: ["UJ", "Wits"]
  // };
  // country.unis[2]={
  //   name:"Tim",
  //   studentNumber: 902830
  // }
  //console.log(country.unis[2].name);
  //console.log(movieData);
  
  //console.log(movieData.length);
  //console.log(movieData[0]);
}

populate(remakes);
//populate(originals);
//console.log(movieData);
//console.log(movieData.length);
//console.log(movieData.at(0));
//console.log(movieData[0]);
//console.log(movieData.length);
//movieData.forEach(a=>console.log(a));
// movieData.forEach(element => {
//   console.log(element.title);
// });

// movieData.map((item)=>{
//   console.log("here");
//   console.log(item.title);
// })
//display data using d3.js

//set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 90, left: 40},
//     width = 460 - margin.left - margin.right,
//     height = 550 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// const svg = d3.select("#graph")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform", `translate(${margin.left},${margin.top})`);

//  // X axis
// const x = d3
//   .scaleBand()
//   .range([0, width])
//   .domain(
//     movieData.map(function (d) {
//       return d.title;
//     })
//   )
//   .padding(1);  

// svg
//   .append("g")
//   .attr("transform", `translate(0, ${height})`)
//   .call(d3.axisBottom(x))
//   .selectAll("text")
//   .attr("transform", "translate(-10,0)rotate(-45)")
//   .style("text-anchor", "end");

// // Add Y axis
// const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);
// svg.append("g").call(d3.axisLeft(y));

// // Lines
// svg
//   .selectAll("myline")
//   .data(movieData)
//   .enter()
//   .append("line")
//   .attr("x2", function (d) {
//     return x(d.title);
//   })
//   .attr("x1", function (d) {
//     return x(d.title);
//   })
//   .attr("y1", function (d) {
//     return y(d.rating);
//   })
//   .attr("y2", y(0))
//   .attr("stroke", "grey");

// // Circles
// svg
//   .selectAll("mycircle")
//   .data(movieData)
//   .join("circle")
//   .attr("cx", function (d) {
//     return x(d.title);
//   })
//   .attr("cy", function (d) {
//     return y(d.rating);
//   })
//   .attr("r", "4")
//   .style("fill", "#69b3a2")
//   .attr("stroke", "black");

  

// d3.json(
//   url,
//   options
// )
//   .then(function (data) {
//     //console.log(data);

//     // X axis
//     const x = d3
//       .scaleBand()
//       .range([0, width])
//       .domain(
//         data.map(function (d) {
//           //return d.Country;
//           return d.Title;
//         })
//       )
//       .padding(1);
//     svg
//       .append("g")
//       .attr("transform", `translate(0, ${height})`)
//       .call(d3.axisBottom(x))
//       .selectAll("text")
//       .attr("transform", "translate(-10,0)rotate(-45)")
//       .style("text-anchor", "end");

//     // Add Y axis
//     const y = d3.scaleLinear().domain([0, 2100]).range([height, 0]);
//     svg.append("g").call(d3.axisLeft(y));

//     // Lines
//     svg
//       .selectAll("myline")
//       .data(data)
//       .enter()
//       .append("line")
//       .attr("x1", function (d) {
//         return x(data.Search.Title);
//       })
//       .attr("x2", function (d) {
//         return x(data.Search.Title);
//       })
//       .attr("y1", function (d) {
//         return y(data.Search.Year);
//       })
//       .attr("y2", y(0))
//       .attr("stroke", "grey");
//     // Circles
//     svg
//       .selectAll("mycircle")
//       .data(data)
//       .join("circle")
//       .attr("cx", function (d) {
//         return x(data.Search.Title);
//       })
//       .attr("cy", function (d) {
//         return y(data.Search.Year);
//       })
//       .attr("r", "4")
//       .style("fill", "#69b3a2")
//       .attr("stroke", "black");

//     // Bars
//     svg
//       .selectAll("mybar")
//       .data(data)
//       .enter()
//       .append("rect")
//       .attr("x", function (d) {
//         return x(data.Search.Title);
//       })
//       .attr("y", function (d) {
//         return y(data.Search.Year);
//       })
//       .attr("width", x.bandwidth())
//       .attr("height", function (d) {
//         return height - y(data.Search.Year);
//       })
//       .attr("fill", "#69b3a2");
//   })
//   .catch((err) => console.error(err));


    // Parse the Data
// d3.csv(
//   "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
// ).then(function (data) {
//   // X axis
//   const x = d3
//     .scaleBand()
//     .range([0, width])
//     .domain(
//       data.map(function (d) {
//         return d.Country;
//       })
//     )
//     .padding(1);
//   svg
//     .append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

//   // Add Y axis
//   const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
//   svg.append("g").call(d3.axisLeft(y));

//   // Lines
//   svg
//     .selectAll("myline")
//     .data(data)
//     .enter()
//     .append("line")
//     .attr("x1", function (d) {
//       return x(d.Country);
//     })
//     .attr("x2", function (d) {
//       return x(d.Country);
//     })
//     .attr("y1", function (d) {
//       return y(d.Value);
//     })
//     .attr("y2", y(0))
//     .attr("stroke", "grey");
//   // Circles
//   svg
//     .selectAll("mycircle")
//     .data(data)
//     .join("circle")
//     .attr("cx", function (d) {
//       return x(d.Country);
//     })
//     .attr("cy", function (d) {
//       return y(d.Value);
//     })
//     .attr("r", "4")
//     .style("fill", "#69b3a2")
//     .attr("stroke", "black");

//   // Bars
//   svg
//     .selectAll("mybar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", function (d) {
//       return x(d.Country);
//     })
//     .attr("y", function (d) {
//       return y(d.Value);
//     })
//     .attr("width", x.bandwidth())
//     .attr("height", function (d) {
//       return height - y(d.Value);
//     })
//     .attr("fill", "#69b3a2");
// });


// d3.csv(
//   "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
// ).then(function (data) {
//   // X axis
//   const x = d3
//     .scaleBand()
//     .range([0, width])
//     .domain(
//       data.map(function (d) {
//         return d.Country;
//       })
//     )
//     .padding(1);
//   svg
//     .append("g")
//     .attr("transform", `translate(0, ${height})`)
//     .call(d3.axisBottom(x))
//     .selectAll("text")
//     .attr("transform", "translate(-10,0)rotate(-45)")
//     .style("text-anchor", "end");

//   // Add Y axis
//   const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
//   svg.append("g").call(d3.axisLeft(y));

//   // Lines
//   svg
//     .selectAll("myline")
//     .data(data)
//     .enter()
//     .append("line")
//     .attr("x1", function (d) {
//       return x(d.Country);
//     })
//     .attr("x2", function (d) {
//       return x(d.Country);
//     })
//     .attr("y1", function (d) {
//       return y(d.Value);
//     })
//     .attr("y2", y(0))
//     .attr("stroke", "grey");
//   // Circles
//   svg
//     .selectAll("mycircle")
//     .data(data)
//     .join("circle")
//     .attr("cx", function (d) {
//       return x(d.Country);
//     })
//     .attr("cy", function (d) {
//       return y(d.Value);
//     })
//     .attr("r", "4")
//     .style("fill", "#69b3a2")
//     .attr("stroke", "black");

//   // Bars
//   svg
//     .selectAll("mybar")
//     .data(data)
//     .enter()
//     .append("rect")
//     .attr("x", function (d) {
//       return x(d.Country);
//     })
//     .attr("y", function (d) {
//       return y(d.Value);
//     })
//     .attr("width", x.bandwidth())
//     .attr("height", function (d) {
//       return height - y(d.Value);
//     })
//     .attr("fill", "#69b3a2");
// });