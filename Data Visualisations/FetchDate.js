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

  fetch(
    "https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake",
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "a86583520amshb90020e4c57c508p13af0cjsn19b1ddd15744",
//     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
//   },
// };

// fetch(
//   "https://movie-database-alternative.p.rapidapi.com/?y=2019&r=json&i=tt4154796&type=remake&plot=Remake",
//   options
// )
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));