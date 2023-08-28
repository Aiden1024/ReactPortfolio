import CN from "./cn";
import EN from "./en";

export type { RequiredLocaleType } from "./cn";


const DEFAULT_LANG = "en";
const current_lang = getLanguage();

export const AllLangs = [
    "en",
    "cn",
  ] as const;

export function getLanguage() {
    try {
      const gotLang =  navigator.language.toLowerCase();
      for (const option of AllLangs) {
        if (gotLang.includes(option)) {
          return option;
        }
      }
    } catch {
      console.log("[Lang] failed to detect user lang.");
      return DEFAULT_LANG;
    }
  }


  const fallbackLang = (current_lang === "en" ? EN : CN);
  console.log("aaaaaaaaaaaaaaaa index tsx fallbacklang")
  console.log(fallbackLang)
  export default fallbackLang as typeof CN;