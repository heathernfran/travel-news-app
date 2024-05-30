export function parseId(uri: string) {
  const uriArray = uri.split("/");
  const uriArrayLength = uriArray.length;
  const id = uriArray[uriArrayLength - 1];
  return id;
}
