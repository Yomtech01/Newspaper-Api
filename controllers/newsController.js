const News = require("../models/News");

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find().populate("user", ["username"]);
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.postNews = async (req, res) => {
  const { title, content, category } = req.body;
  try {
    const newNews = new News({
      title,
      content,
      category,
    });
    
    // user: req.user.id,
    const news = await newNews.save();
    res.json(news);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.deleteNews = async (req, res) => {
  try {
    const news = await News.findById(req.params.id);

    if (!news) {
      return res.status(404).json({ msg: "News not found" });
    }

    if (news.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    await news.remove();

    res.json({ msg: "News removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getNewsByCategory = async (req, res) => {
  try {
    const categories = ["Finance", "Government", "Sports", "Education"];
    const newsByCategory = {};

    for (let category of categories) {
      newsByCategory[category] = await News.find({ category }).populate(
        "user",
        ["username"]
      );
    }

    res.json(newsByCategory);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
