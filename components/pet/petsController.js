
const petsDAL = require('./petsDAL');
//const { validatepet } = require('../../helper/helpers');
module.exports = {
    getpets: async () => {
        try {
            let results = await petsDAL.findAll();
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null })
        }

    },
    getpetById: async (id) => {
        try {
            if (!id) return ({ error: "Missing Input Data!!" })

            let results = await petsDAL.findOne(id);
            return ({ error: null, results });
        } catch (error) {
            return ({ error: error, results: null });
        }

    },
    bidPet: async (petId, username, amount) => {
        try {
            if (!petId || !username || !amount)
                return ({ error: "Missing Parameters" });

            let results = await petsDAL.bidPet(petId, username, amount);
            return ({ error: null, results });


        } catch (error) {
            return ({ error: error.message, results: null });
        }
    },
    getBids: async (petId) => {
        try {
            if (!petId )
                return ({ error: "Missing Parameters" });

            let results = await petsDAL.findBids(petId);
            return ({ error: null, results });


        } catch (error) {
            return ({ error: error.message, results: null });
        }
    }

}
