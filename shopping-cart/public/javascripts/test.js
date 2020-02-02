const axios = require('axios')

const request = async () => {
    axios
        .get("http://localhost:3000/product")
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
};

request();