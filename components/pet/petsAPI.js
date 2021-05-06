var express = require("express");
const router = express.Router();
const controller = require('./petsController')

router.get("/bids/:petId", async (req, res) => {
    let petId = req.params.petId.trim()

    if (!petId)
        return res.status(400).send("CLIENT_ERROR , Query String Missed");

    let results = await controller.getBids(petId);
    res.status(200).send(results);

});
router.post("/bid", async (req, res) => {
    let { petId, userName, amount } = req.body;
    
    if (!petId || !userName || !amount)
        return res.status(400).send("CLIENT_ERROR , Query String Missed");

    let results = await controller.bidPet(petId, userName, amount);
    res.status(200).send(results);
});

router.get("/pets/:id", async (req, res) => {
    let id = req.params.id
    let results = await controller.getpetById(id);
    res.send(results);
});

router.get("/pets", async (req, res) => {
});


router.post("/pets", async (req, res) => {  // MESS
});

router.patch("/pets/:id", async (req, res) => {  // MESS
});

router.delete("/pets/:id", async (req, res) => { // MESS
});

module.exports = router;
