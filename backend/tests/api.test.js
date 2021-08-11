const app = require("../app");
const supertest = require("supertest");
const api = supertest(app);
const initTestResources = require("./testResources/initTestResources");

beforeAll(async () => {
  await initTestResources();
});
describe("api test", () => {
  test("correct daily count is returned", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-01-01T13:01:56" });

    expect(response.body.dailyCount[0].vaccine).toBe("A");
    expect(response.body.dailyCount[0].orderCount).toBe("2");
    expect(response.body.dailyCount[0].injectionCount).toBe("5");
    expect(response.body.dailyCount[1].vaccine).toBe("B");
    expect(response.body.dailyCount[1].orderCount).toBe("2");
    expect(response.body.dailyCount[1].injectionCount).toBe("9");
  });

  test("for a day with zero arrived orders, an empty daily count is returned", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-02T14:56:01" });

    expect(response.body.dailyCount.length).toBe(0);
  });

  test("expired bottles count is zero when all bottles are valid", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-01-16T13:23:00" });

    expect(response.body.expiredBottlesCount).toBe(0);
  });

  test("expired bottles count returns correct value", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-02T16:28:05" });

    expect(response.body.expiredBottlesCount).toBe(4);
  });

  test("vaccines in expired bottles returns correct value", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-05T16:26:05" });

    expect(response.body.vaccinesInExpiredBottles).toBe(14);
  });

  test("if there are no expired bottles, vaccination count returns zero", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-01-13T18:23:00" });

    expect(response.body.vaccinationsBeforeExpiration).toBe(0);
  });

  test("vaccinations before expiration returns correct value", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-12T22:00:08" });

    expect(response.body.vaccinationsBeforeExpiration).toBe(4);
  });

  test("vaccines left returns correct value when all bottles are valid", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-01-28T19:53:30" });

    expect(response.body.vaccinesLeftToUse).toBe(29);
  });

  test("vaccines left returns correct value when some bottles have expired", async () => {
    const response = await api
      .post("/api/vaccines")
      .send({ time: "2021-02-03T12:13:37" });

    expect(response.body.vaccinesLeftToUse).toBe(17);
  });
});
