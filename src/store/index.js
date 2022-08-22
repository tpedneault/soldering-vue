import { createStore } from "vuex";

export default createStore({
  state: {
    components: [],
    selectedIndex: 0,
    schematicsURL: "",
  },
  getters: {
    GET_CURRENT_COMPONENT(state) {
      return state.components[state.selectedIndex];
    },
  },
  mutations: {
    ADD_COMPONENT(state, component) {
      let componentArray = component.split('","');
      for (let i = 0; i < componentArray.length; i++) {
        componentArray[i] = componentArray[i].replace('"', "");
      }
      state.components.push({
        libref: componentArray[4],
        comment: componentArray[0],
        description: componentArray[1],
        footprint: componentArray[3],
        quantity: componentArray[5],
        designators: componentArray[2],
        completed: false,
      });
    },
    ADD_SCHEMATICS(state, url) {
      state.schematicsURL = url;
    },
    SET_SELECTED_INDEX(state, index) {
      state.selectedIndex = index;
    },
  },
  actions: {},
  modules: {},
});
