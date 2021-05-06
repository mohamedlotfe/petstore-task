const Pet = require('./pet');


module.exports = {
    findOne: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pet = await Pet.findOne({ _id });
                return resolve(pet);
            } catch (error) {
                reject(error);
            }

        })
    },
    findAll: () => {
        return new Promise(async (resolve, reject) => {
            try {
                const pets = await Pet.find();
                return resolve(pets);
            } catch (error) {
                reject(error);
            }

        })
    },
    bidPet: (_id, username, amount) => {
        return new Promise(async (resolve, reject) => {
            try {
                let options = { upsert: true, new: true, setDefaultsOnInsert: true };

                let model = await Pet.update(
                    { _id, "bids.username": { '$ne': username } },
                    {
                        $push: {
                            bids: { 'username': username, 'amount': amount }
                        }
                    },
                    { multi: true });

                return resolve(model);

            } catch (error) {
                reject(error);
            }
        });
    },
    findBids: (_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pet = await Pet.findOne({ _id });
                return resolve(pet.bids);
            } catch (error) {
                reject(error);
            }

        })
    },
}