const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
  list: async (req, res) => {
    try {
      const productFormulars = await prisma.productFormular.findMany({
        where: {
          productId: req.params.productId,
          status: "active",
        },
        orderBy: {
          createAt: "desc",
        },
        include: { Material: true },
      });
      res.json({ results: productFormulars });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    try {
      await prisma.productFormular.update({
        data: req.body,
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      await prisma.productFormular.update({
        data: {
          status: "inactive",
        },
        where: {
          id: req.params.formularId,
        },
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  create: async (req, res) => {
    try {
      await prisma.productFormular.create({
        data: req.body,
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
