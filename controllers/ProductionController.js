const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      await prisma.production.create({
        data: req.body,
      });
      res.json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  list: async (req, res) => {
    const productionPlanId = req.params.productionPlanId;
    try {
      const productions = await prisma.production.findMany({
        where: {
          productionPlanId: productionPlanId,
          status: "active",
        },
        orderBy: {
          createAt: "desc",
        },
        include: {
          ProductionPlan: {
            include: {
              Product: {
                include: {
                  Packaging: true,
                  ProductType: true,
                },
              },
            },
          },
        },
      });
      res.json({ results: productions });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      await prisma.production.update({
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
      await prisma.production.update({
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
