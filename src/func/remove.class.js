import diacritic from "diacritic";
export default function removeVietnameseAndWhitespace(str, rep = true) {
  str = str.trim();
  str = diacritic.clean(str);
  if (rep) {
    str = str.replace(/\s+/g, "");
  }

  return str;
}
