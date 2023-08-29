import CN from "./cn";
import EN from "./en";

export type { RequiredLocaleType } from "./cn";


const DEFAULT_LANG = "en";
const current_lang = localStorage.getItem("currLang");

export const AllLangs = [
    "en",
    "cn",
  ] as const;

export function getLanguage() {
    try {
      const gotLang =  navigator.language.toLowerCase();
      for (const option of AllLangs) {
        // if en-us has en, cn has cn etc.
        if (gotLang.includes(option)) {
          return option;
        }
      }
    } catch {
      console.log("[Lang] failed to detect user lang.");
      return DEFAULT_LANG;
    }
  }

export function changeLang(Lang: string) {
    for (const option of AllLangs) {
        if (Lang.includes(option)) {
          localStorage.setItem('currLang', Lang);
          window.location.reload();
        }
      }
}




  const fallbackLang = (current_lang === "en" ? EN : CN);
  export default fallbackLang as typeof CN;