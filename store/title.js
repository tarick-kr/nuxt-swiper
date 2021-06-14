export const state = () => "Title";

export const mutations = {
  set(state, payload) {
    console.log(payload);
    state = payload;
  }
};
