export const convertNosqlFormat = <T>(response: object): T => {
  if (response["id"]) {
    return { ...response, id: String(response["id"]) } as T;
  } else {
    throw new Error("Invalid response");
  }
};
