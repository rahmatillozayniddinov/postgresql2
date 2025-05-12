const { Human_category, Gender } = require("../models");
const { validateHuman_category } = require("../validation/human_categoryVal");
const { Op } = require("sequelize");

exports.createHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const human_category = await Human_category.create(req.body);
    res.status(201).send(human_category);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getHuman_categorys = async (req, res) => {
  try {
    const human_categorys = await Human_category.findAll();
    res.status(200).send(human_categorys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getHuman_categoryById = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id,{
      include: [
        {
          model: Gender,
          as: "gender",
        },
      ],
    }
    );
    if (!human_category)
      return res.status(404).send("human_category not found");
    res.status(200).send(human_category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category)
      return res.status(404).send("human_category not found");
    await cart_item.update(req.body);
    res.status(200).send(human_category);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteHuman_category = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category)
      return res.status(404).send("human_category not found");

    const human_categoryData = human_category.toJSON();

    await human_category.destroy();
    res.status(204).send(human_categoryData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.searchHuman_category = async (req, res) => {
  try {
    console.log("Query recieved:", req.query.query);

    const { query } = req.query;
    if (!query) {
      return res.status(400).send("Search query is required");
    }

    const human_categorys = await Human_category.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.iLike]: `%${query}%` } },
          { email: { [Op.iLike]: `%${query}%` } },
        ],
      },
    });
    res.status(200).send(human_categorys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
