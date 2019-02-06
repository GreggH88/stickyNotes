const router = require("express").Router();
const noteRoutes = require("./apiRoutes");

router.use("/notes", noteRoutes);

module.exports = router;
