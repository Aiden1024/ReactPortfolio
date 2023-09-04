import CN from "./cn";
import EN from "./en";

import { merge } from "../utils/merge";

export type { RequiredLocaleType } from "./cn";


const DEFAULT_LANG = "en";
var current_lang = localStorage.getItem("currLang");

export const AllLangs = [
    "en",
    "cn",
  ] as const;

  //get user brower's language when currLang is not in the Localstorage
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


  if (current_lang === null) {
    current_lang = getLanguage() as string;
    localStorage.setItem('currLang', DEFAULT_LANG);
  }

  const fallbackLang = CN;
  const targetLang = (current_lang === "en" ? EN : CN);

  merge(fallbackLang, targetLang);
  
  export default targetLang as typeof CN;