export function getSejourStayDetails(
  startDate: Date,
  endDate: Date,
): { numberOfDays: number; numberOfNights: number } {
  if (startDate > endDate) {
    throw new Error("startDate must be before endDate");
  }

  const numberOfDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const numberOfNights = numberOfDays - 1;

  return { numberOfDays, numberOfNights };
}
