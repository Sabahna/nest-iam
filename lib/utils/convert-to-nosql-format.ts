export const convertNosqlFormat = (response: any) => {
  return { ...response, id: response.id.toString() };
};
