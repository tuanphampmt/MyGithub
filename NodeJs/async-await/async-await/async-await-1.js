let math = require('./math');

let add = async () =>{
    console.log(await math.add(2,3));
};
add();
