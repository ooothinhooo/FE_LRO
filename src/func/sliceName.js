export function splitName(fullName) {
  const nameArray = fullName.split(" ");
  const firstName = nameArray.shift();
  const lastName = nameArray.join(" ");
  return { firstName, lastName };
}
