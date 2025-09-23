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

  productsAndCost: async (req, res) => {
    try {
      const products = await prisma.product.findMany({
        where: { status: "active" },
        include: {
          ProductFormular: {
            include: {
              Material: true,
            },
          },
        },
        orderBy: { createAt: "desc" },
      });
      res.json({ results: products });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  sumProductionPlanPerYearAndMonth: async (req, res) => {
    try {
      const year = req.body.year;
      const month = req.body.month;
      const totalDaysInMonth = new Date(year, month, 0).getDate();

      const productionPlans = await prisma.productionPlan.aggregate({
        _sum: { quantity: true },
        where: {
          status: "active",
          createAt: {
            gte: dayjs(`${year}-${month}-01`).toDate(),
            lte: dayjs(`${year}-${month}-${totalDaysInMonth}`).toDate(),
          },
        },
      });
      res.json({ results: productionPlans._sum.quantity ?? 0 });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  sumProductionPerYearAndMonth: async (req, res) => {
    try {
      const year = req.body.year;
      const month = req.body.month;
      const totalDaysInMonth = new Date(year, month, 0).getDate();
      const productions = await prisma.production.aggregate({
        _sum: { quantity: true },
        where: {
          status: "active",
          createAt: {
            gte: dayjs(`${year}-${month}-01`).toDate(),
            lte: dayjs(`${year}-${month}-${totalDaysInMonth}`).toDate(),
          },
        },
      });
      res.json({ results: productions._sum.quantity ?? 0 });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  sumPriceStockMaterial: async (req, res) => {
    try {
      const year = req.body.year;
      const month = req.body.month;
      const totalDaysInMonth = new Date(year, month, 0).getDate();
      const stockMaterials = await prisma.stockMaterial.aggregate({
        _sum: { price: true, quantity: true },
        where: {
          createAt: {
            gte: dayjs(`${year}-${month}-01`).toDate(),
            lte: dayjs(`${year}-${month}-${totalDaysInMonth}`).toDate(),
          },
        },
      });

      const total = stockMaterials._sum.price * stockMaterials._sum.quantity;
      res.json({ results: total ?? 0 });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  sumProductPerDayInMonthAndYear: async (req, res) => {
    try {
      const year = req.body.year;
      const month = req.body.month;
      const totalDaysInMonth = new Date(year, month, 0).getDate();
      const results = [];
      for (let day = 1; day <= totalDaysInMonth; day++) {
        const startDate = dayjs(`${year}-${month}-${day}`).format(
          "YYYY-MM-DD 00:00:00"
        );
        const endDate = dayjs(`${year}-${month}-${day}`).format(
          "YYYY-MM-DD 23:59:59"
        );

        const productions = await prisma.production.aggregate({
          _sum: { quantity: true },
          where: {
            status: "active",
            createAt: {
              gte: dayjs(startDate).toDate(),
              lte: dayjs(endDate).toDate(),
            },
          },
        });
        results.push(productions._sum.quantity ?? 0);
      }
      res.json({ results: results });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  sumProductionPerMonthAndYear: async (req, res) => {
    try {
      const year = req.body.year;
      const results = [];
      for (let month = 1; month <= 12; month++) {
        const totalDaysInMonth = new Date(year, month, 0).getDate();
        const productions = await prisma.production.aggregate({
          _sum: { quantity: true },
          where: {
            status: "active",
            createAt: {
              gte: dayjs(`${year}-${month}-01`).toDate(),
              lte: dayjs(`${year}-${month}-${totalDaysInMonth}`).toDate(),
            },
          },
        });
        results.push(productions._sum.quantity ?? 0);
      }
      res.json({ results: results });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
