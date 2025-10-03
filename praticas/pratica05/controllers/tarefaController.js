function listar(req, res) {
    res.json([]);
  }
  
  function buscarPeloId(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.json({});
  }
  
  function criar(req, res) {
    res.status(201).json({ id: "1a2b" });
  }
  
  function atualizar(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.json({ id: "1a2b" });
  }
  
  function remover(req, res) {
    const { tarefaId } = req.params;
    if (tarefaId === "1") {
      return res.status(404).json({ msg: "Tarefa não encontrada" });
    }
    res.status(204).send();
  }
  
  module.exports = { listar, buscarPeloId, criar, atualizar, remover };
  