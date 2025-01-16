const mongodb = require("../db/connect");
const profressionalController = {};
const userData = require("../user.json");

// profressionalController.buildBackend = async (req, res) => {
//   try {
//     return res.status(200).json(userData);
//   } catch (error) {
//     console.error("Error handling JSON data:", error);
//     res.status(500).json({ error: "Failed to load user data" });
//   }
// };

profressionalController.buildBackend = async (req, res) => {
  const result = await mongodb.getDb().db().collection("user").find();
  result.toArray().then((lists) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(lists[0]);
  });
};

module.exports = profressionalController;
