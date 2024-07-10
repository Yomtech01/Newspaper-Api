const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const {
  getAllNews,
  postNews,
  deleteNews,
  getNewsByCategory,
} = require("../controllers/newsController");

router.get("/", getAllNews);
router.post("/", postNews);
router.delete("/:id", deleteNews);
router.get("/categories", getNewsByCategory);

module.exports = router;
