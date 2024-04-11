const cars = require('./cars.json');
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method==="GET"){
        context.res = {
            // status: 200, /* Defaults to 200 */
            add:"massambe",
            body: cars
        };
    }
    else{
        if (req.body.func===1){
            cars.push(req.body.car);
            context.res = {
                // status: 200, /* Defaults to 200 */
                add:"massambe",
                body: cars
            };
        }
        else{
            let id=req.body.id;
            const index = cars.findIndex(car => car.id === id);
            cars.splice(index, 1);
            context.res = {
                // status: 200, /* Defaults to 200 */
                add:"massambe",
                body: cars
            };
        }
    }
    
}