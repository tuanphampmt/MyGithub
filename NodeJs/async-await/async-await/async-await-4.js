let math = require('./math');

let P = async (a, b, c) => {
    try {
        let ab = await math.sub(a, b);
        let bc = await math.sub(b, c);
        let ca = await math.sub(c, a);
        let ab_bc = await math.mul(ab, bc);
        let ab_bc_ca = await math.mul(ab_bc, ca);
        let a_add_b = await math.add(a, b);
        let a_add_b_c = await math.add(a_add_b, c);
        let result = await math.division(ab_bc_ca, a_add_b_c);
        return Promise.resolve(result);
    } catch (e) {
        return Promise.reject(e);
    }
};
let bieuthuc = (a, b, c) => {
    return P(a, b, c).then(result => console.log(result)).catch(e => console.log(e));
};
bieuthuc(2,4,6);



