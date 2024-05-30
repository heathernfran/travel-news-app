import { describe, expect, it } from "vitest";
import { parseId } from "./utilities";

describe("parseId()", () => {
  it("returns the formatted article ID", () => {
    const mockId = "nyt://article/20df5556-a300-54e2-ac64-787c856a3978";
    const expectedId = "20df5556-a300-54e2-ac64-787c856a3978";

    expect(parseId(mockId)).toBe(expectedId);
  });
});
