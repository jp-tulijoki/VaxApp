const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);
const initTestResources = require("./testResources/initTestResources");

beforeAll(async () => {
  await initTestResources();
});
describe("daily count test", () => {
  test("correct daily count is returned", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-01-01" });

    expect(response.body.dailyCount[0].vaccine).toBe("A");
    expect(response.body.dailyCount[0].orderCount).toBe("2");
    expect(response.body.dailyCount[0].injectionCount).toBe("5");
    expect(response.body.dailyCount[1].vaccine).toBe("B");
    expect(response.body.dailyCount[1].orderCount).toBe("2");
    expect(response.body.dailyCount[1].injectionCount).toBe("9");
  });

  test("for a day with zero arrived orders, an empty array is returned", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-02" });

    expect(response.body.dailyCount.length).toBe(0);
  });
});
