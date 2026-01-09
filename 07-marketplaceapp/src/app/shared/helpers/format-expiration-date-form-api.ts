export const formatExpirationDateFormApi = (
  dateString: string,
  setError: (message: string) => void
): string => {
  const [month, year] = dateString.split("/").map(Number);

  if (month < 1 || month > 12) {
    setError("Mês inválido");
    throw new Error("Mês inválido");
  }

  if (year < 0 || year > 99) {
    setError("Ano inválido");
    throw new Error("Ano inválido");
  }

  const fullYear = year + 2000;

  const expirationDate = new Date(fullYear, month - 1, 0);
  const isoDate = expirationDate.toISOString().split("T")[0];
  return isoDate;
};
