import diacritic from "diacritic";
export default function removeVietnameseAndWhitespace(str) {
  str = str.trim();
  str = diacritic.clean(str);
  str = str.replace(/\s+/g, "");

  return str;
}
