const request = require("supertest");
const app = require("../app");

describe("API de Tarefas", () => {
  let tarefaId;

  test("GET /tarefas → 200 JSON", async () => {
    const res = await request(app).get("/tarefas");
    expect(res.statusCode).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  test("POST /tarefas → 201 JSON", async () => {
    const res = await request(app)
      .post("/tarefas")
      .send({ nome: "Estudar Node", concluida: false });
    expect(res.statusCode).toBe(201);
    tarefaId = res.body.id;
  });

  test("GET /tarefas/:id → 200 JSON", async () => {
    const res = await request(app).get(`/tarefas/${tarefaId}`);
    expect(res.statusCode).toBe(200);
  });

  test("GET /tarefas/1 → 404", async () => {
    const res = await request(app).get("/tarefas/1");
    expect(res.statusCode).toBe(404);
  });

  // PUT e DELETE seguindo o mesmo padrão...
});
