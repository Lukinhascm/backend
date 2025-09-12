const express = require('express');
const app = express();


const tarefas = [
  { id: 1, nome: "Estudar middleware", concluida: false },
  { id: 2, nome: "Praticar Express", concluida: true }
];


app.use(express.json());


app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
});


const tarefasRouter = express.Router();


tarefasRouter.get('/', (req, res) => {
  res.json(tarefas);
});


tarefasRouter.post('/', (req, res) => {
  const { nome, concluida } = req.body;
  const maxId = tarefas.length ? Math.max(...tarefas.map(t => t.id)) : 0;
  const nova = { id: maxId + 1, nome, concluida: !!concluida };
  tarefas.push(nova);
  res.status(201).json(nova);
});


tarefasRouter.get('/:tarefaId', (req, res, next) => {
  const id = parseInt(req.params.tarefaId, 10);
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return next(new Error('Tarefa não localizada'));
  res.json(tarefa);
});


tarefasRouter.put('/:tarefaId', (req, res, next) => {
  const id = parseInt(req.params.tarefaId, 10);
  const tarefa = tarefas.find(t => t.id === id);
  if (!tarefa) return next(new Error('Tarefa não localizada'));

  const { nome, concluida } = req.body;
  if (nome !== undefined) tarefa.nome = nome;
  if (concluida !== undefined) tarefa.concluida = !!concluida;

  res.json(tarefa);
});


tarefasRouter.delete('/:tarefaId', (req, res, next) => {
  const id = parseInt(req.params.tarefaId, 10);
  const idx = tarefas.findIndex(t => t.id === id);
  if (idx === -1) return next(new Error('Tarefa não localizada'));
  tarefas.splice(idx, 1);
  res.status(204).send();
});


app.use('/tarefas', tarefasRouter);


app.use((err, req, res, next) => {
  console.error('Erro capturado:', err.message);
  res.status(400).json({ error: err.message });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));


module.exports = app;
