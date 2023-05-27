const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition',
  params: {query: '1lb brisket with fries'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});