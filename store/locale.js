export const state = () => ({
  locales: ["en-US", "zh-TW"],
  locale: "en-US"
});

export const mutations = {
  set(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  }
};
