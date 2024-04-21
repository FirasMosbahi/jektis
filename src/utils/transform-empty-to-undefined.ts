export const TransformEmptyToUndefined = (value: string) =>
  value === "" ? undefined : value;

export function removeEmptyStrings(data: any) {
  if (typeof data !== "object" || data === null) {
    return data; // Return non-objects and null as-is
  }

  // Handle arrays and objects (including nested structures)
  return Object.entries(data).reduce((acc, [key, value]) => {
    const cleanedValue =
      typeof value === "object" ? removeEmptyStrings(value) : value;
    if (cleanedValue !== "") {
      // Include only non-empty values
      // @ts-ignore
      acc[key] = cleanedValue;
    }
    return acc;
  }, {});
}
