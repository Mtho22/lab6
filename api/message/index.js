module.exports = async function processRequest(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.method === "GET") {
        context.res = {
            add: "mtho",
            body: cars
        };
    } else {
        if (req.body.func === 1) {
            cars.push(req.body.car);
        } else {
            const id = req.body.id;
            const index = cars.findIndex(car => car.id === id);
            if (index !== -1) {
                cars.splice(index, 1);
            }
        }
        context.res = {
            add: "mtho",
            body: cars
        };
    }
};
