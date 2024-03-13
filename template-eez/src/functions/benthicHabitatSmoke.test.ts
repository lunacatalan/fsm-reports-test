/**
 * @jest-environment node
 * @group smoke
 */
import {
  getExamplePolygonSketchAll,
  writeResultOutput,
} from "@seasketch/geoprocessing/scripts/testing";
import { benthicHabitat } from "./benthicHabitat";

describe("Basic smoke tests", () => {
  test("handler function is present", () => {
    expect(typeof benthicHabitat).toBe("function");
  });
  test("benthicHabitat - tests run against all examples", async () => {
    const examples = await getExamplePolygonSketchAll();
    for (const example of examples) {
      const result = await benthicHabitat(example);
      expect(result).toBeTruthy();
      writeResultOutput(result, "benthicHabitat", example.properties.name);
    }
  }, 60000);
});
