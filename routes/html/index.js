const router = require("express").Router();
const noteRoutes = require("./htmlRoutes");

router.use("/notes", noteRoutes);

module.exports = router;
