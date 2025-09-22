const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
  list: async (req, res) => {
    try {
      const productionPlans = await prisma.productionPlan.findMany({
        where: { status: "active" },
        orderBy: { createAt: "desc" },
        include: {
          Product: {
            include: { Packaging: true, ProductType: true },
          },
          Production: {
            where: { status: "active" },
          },
        }, // ✅ now valid
      });

      res.json({ results: productionPlans });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  create: async (req, res) => {
    try {
      await prisma.productionPlan.create({
        data: req.body,
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  update: async (req, res) => {
    try {
      await prisma.productionPlan.update({
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
      await prisma.productionPlan.update({
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
