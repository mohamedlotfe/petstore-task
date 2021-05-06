let conf = require('dotenv').config({ path: './env/.env' })

const server = require("../app");
const supertest = require("supertest");
let Pet = require('../components/pet/pet');
jest.useFakeTimers()



describe('Allow User to bid a pet endpoint => POST /bid', () => {

    test("request with empty body (no params)", async () => {
        await supertest(server).post(`/api/bid`)
            .send({})
            .expect(400)
            .then((response) => {
                expect(response.text).toBeTruthy();
                expect(response.text).toEqual("CLIENT_ERROR , Query String Missed");
            });
    });
    test("request with valid body", async () => {
        let pet = await Pet.create({ name: "test11", price: 100, age: 2 });
        let userName = "test100", amount = 100;

        await supertest(server).post(`/api/bid`)
            .send({ petId: pet._id, userName, amount })
            .expect(200)
            .then(async (response) => {
                console.log(response.body.results);
                expect(response.body.results).toBeTruthy();
                await Pet.deleteOne({ _id: pet._id });
            });
    });
});
describe('Bids endpoint => GET /bids/:petId', () => {

    test("request with empty petId (no params)", async () => {
        await supertest(server).get(`/api/bids/ `)
            .expect(404)
            .then((response) => {
                expect(response.body.results).toEqual(undefined);
            });
    });

    test("request with Invalid petId (wrong params)", async () => {
        let petId = "0";
        await supertest(server).get(`/api/bids/${petId}`)
            .expect(200)
            .then((response) => {
                expect(response.body.error).toBeTruthy();
                expect(response.body.results).toEqual(null);
            });
    });

    test("request with Valid petId", async () => {
        // let pet = await Pet.create({ name: "test11", price: 100, age: 2 });

        // await supertest(server).get(`/api/bids/${pet._id}`)
        //     .expect(200)
        //     .then(async (response) => {
        //         expect(response.body.error).toBeFalsy();
        //         expect(response.body.results).toEqual([]);

        //         await Pet.deleteOne({ _id: pet._id });
        //     });
    });


});