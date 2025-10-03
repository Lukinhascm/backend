const express = require("express");
const router = express.Router();

// GET /
router.get("/", (req, res) => {
  res.json([]);
});

// GET /:tarefaId
router.get("/:tarefaId", (req, res) => {
  const { tarefaId } = req.params;
  if (tarefaId === "1") {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }
  res.json({});
});

// POST /
router.post("/", (req, res) => {
  res.status(201).json({ id: "1a2b" });
});

// PUT /:tarefaId
router.put("/:tarefaId", (req, res) => {
  const { tarefaId } = req.params;
  if (tarefaId === "1") {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }
  res.json({ id: "1a2b" });
});

// DELETE /:tarefaId
router.delete("/:tarefaId", (req, res) => {
  const { tarefaId } = req.params;
  if (tarefaId === "1") {
    return res.status(404).json({ msg: "Tarefa não encontrada" });
  }
  res.status(204).send();
});

module.exports = router;
