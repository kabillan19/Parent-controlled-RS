const Content = require('../models/content');

exports.addContent = async (req, res) => {
  const { title, description, ageRating, genre, educationalValue } = req.body;
  try {
    const content = new Content({ title, description, ageRating, genre, educationalValue });
    await content.save();
    res.status(201).json({ message: 'Content added successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
