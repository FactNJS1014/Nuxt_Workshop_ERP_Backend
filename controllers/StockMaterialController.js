const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();

module.exports = {
  create: async (req, res) => {
    try {
      await prisma.stockMaterial.create({
        data: {
          materialId: req.body.material_id,
          quantity: req.body.quantity,
          price: req.body.price,
          remark: req.body.remark,
        },
      });

      res.status(201).json({ message: "success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const stockMaterials = await prisma.stockMaterial.findMany({
        include: {
          Material: true,
        },
        orderBy: {
          createAt: "desc",
        },
      });
      res.json({ results: stockMaterials });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  remove: async (req, res) => {
    try {
      await prisma.stockMaterial.delete({
        where: {
          id: req.params.id,
        },
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
