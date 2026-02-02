export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  // 👇 ИЗМЕНИТЕ ЭТУ СТРОЧКУ:
  // ssr: false, // УДАЛИТЬ ЭТУ СТРОЧКУ
  // или замените на:
  ssr: false, // ДЛЯ СТАТИЧЕСКОГО САЙТА

  app: {
    baseURL: "/shinritm/",
    buildAssetsDir: "assets",
  },
});
