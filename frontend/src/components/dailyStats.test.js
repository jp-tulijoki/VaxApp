import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import DailyStats from "./dailyStats";

test("text content is rendered in any case", () => {
  const stats = {
    dailyCount: [],
    expiredBottlesCount: 0,
    expiringVaccines: 0,
    vaccinationsBeforeExpiration: 0,
    vaccinesInExpiredBottles: null,
    vaccinesLeftToUse: 0,
  };

  const component = render(<DailyStats stats={stats} />);

  expect(component.container).toHaveTextContent(
    "On the selected day arrived 0 orders and 0 injections.By the given time, 0 vaccine bottles have been expired.At the moment, there are 0 vaccines available to be used. 0 of them will expire in 10 days."
  );
});

test("daily order chart is rendered if there are orders", () => {
  const stats = {
    dailyCount: [{ vaccine: "testVaccine", orderCount: 1, injectionCount: 5 }],
    expiredBottlesCount: 0,
    expiringVaccines: 0,
    vaccinationsBeforeExpiration: 0,
    vaccinesInExpiredBottles: null,
    vaccinesLeftToUse: 0,
  };

  const component = render(<DailyStats stats={stats} />);

  expect(component.container).toHaveTextContent(
    "Daily order stats by producer"
  );
});

test("vaccine use efficinecy is rendered if there are expired vaccines", () => {
  const stats = {
    dailyCount: [{ vaccine: "testVaccine", orderCount: 1, injectionCount: 5 }],
    expiredBottlesCount: 12,
    expiringVaccines: 45,
    vaccinationsBeforeExpiration: 12,
    vaccinesInExpiredBottles: 78,
    vaccinesLeftToUse: 400,
  };

  const component = render(<DailyStats stats={stats} />);

  expect(component.container).toHaveTextContent("Vaccine use efficiency");
});
