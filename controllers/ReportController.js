const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const dayjs = require("dayjs");

module.exports = {
  production: async (req, res) => {
    try {
      const fromDate = dayjs(req.query.fromDate).format("YYYY-MM-DD 00:00:00");
      const toDate = dayjs(req.query.toDate).format("YYYY-MM-DD 23:59:59");

      const productions = await prisma.production.findMany({
        include: {
          ProductionPlan: {
            include: {
              Product: true,
            },
          },
        },
        where: {
          status: "active",
          createAt: {
            gte: dayjs(fromDate).toDate(),
            lte: dayjs(toDate).toDate(),
          },
        },
        orderBy: { createAt: "desc" },
      });
      res.json({ results: productions });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
