const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      await prisma.product.create({
        data: req.body,
      });

      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        where: {
          status: "active",
        },
        orderBy: {
          createAt: "desc",
        },
      });
      res.json({ results: products });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      await prisma.product.update({
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
      await prisma.product.update({
        data: {
          status: "inactive",
        },
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
