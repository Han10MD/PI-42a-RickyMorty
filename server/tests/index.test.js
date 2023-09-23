const server = require("../src/app");
const session = require("supertest");

const agent = session(server);

describe("Test de Rutas", () => {
  describe("GET / /rickandmorty/character/:id", () => {
    it("Responde con el status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Si hay un error responde con el status 500", async () => {
      await agent.get("/rickandmorty/character/3312").expect(500);
    });

    it('Responde con un objeto con las propiedades: "id", "name", "species", "gender", "origin", "status" e "image"', async () => {
      const {body} = await agent.get("/rickandmorty/character/1");

      const propiedades = [
        "id",
        "name",
        "species",
        "gender",
        "origin",
        "status",
        "image",
      ];

      propiedades.forEach((prop) => {
        expect(body).toHaveProperty(prop);
      });
    });
  });
  describe("GET / rickandmorty/login", () => {
    // let access = {access:true}

    it("Informacion correcta Proceda🤙🏼", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=milton21delgado@gmail.com&password=Rick123"
      );
      expect(body.access).toEqual(true);
    });

    it("Informacion incorrecta Denegado ✋🏼", async () => {
      const {body} = await agent.get(
        "/rickandmorty/login?email=RickSanchez@gmail.com&password=IdiotMorty"
      );
      expect(body.access).toEqual(false);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const testCharA = {id: 1, name: "TEST A"};
    const testCharB = {id: 2, name: "TEST B"};

    it("Devuelve un array con la informacion enviada", async () => {
      const {body} = await agent.post("/rickandmorty/fav").send(testCharA);

      expect(body).toContainEqual(testCharA);
    });

    it("Devuelve un array con la informacion enviada", async () => {
      const {body} = await agent.post("/rickandmorty/fav").send(testCharB);

      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB);
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    const testCharA = {id: 1, name: "TEST A"};
    const testCharB = {id: 2, name: "TEST B"};

    it("Si no se elimina ningun personaje devuelve el mismo array", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/3312");

      expect(body).toContainEqual(testCharA);
      expect(body).toContainEqual(testCharB);
    });

    it("Elimina al personaje recibido por ID", async () => {
      const {body} = await agent.delete("/rickandmorty/fav/2");

      expect(body).not.toContainEqual(testCharB);
    });
  });
});