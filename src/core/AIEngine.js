export function suggestVisualization(data) {
    console.log("Input Data:", data);
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Invalid data provided.");
    }
  
    const keys = Object.keys(data[0]);
    if (keys.length === 2 && typeof data[0][keys[1]] === "number") {
      console.log("Suggested Chart Type: Bar");
      return "bar";
    }
    if (keys.length === 3 && keys.includes("value") && keys.includes("category")) {
      return "heatmap";
    }
    console.log("Suggested Chart Type: Line");
    return "line";
  }
  