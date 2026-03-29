import i18next from "i18next"
import en from "./en.json"
import es from "./es.json"
import it from "./it.json"

const savedLang =
  typeof localStorage !== "undefined"
    ? localStorage.getItem("language") ?? "en"
    : "en"

i18next.init({
  lng: savedLang,
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    es: { translation: es },
    it: { translation: it },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
