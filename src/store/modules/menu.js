const menu = {
  state: {
    menuList: [],
    isCollapse: false
  },
  mutations: {
    SET_MENU: (state, menuList) => {
      state.menuList = menuList;
    },
    SET_COLLAPSE: state => {
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {
    setMenu({ commit }, menuList) {
      return new Promise(resolve => {
        commit("SET_MENU", menuList);
        resolve();
      });
    },
    changeCollapse({ commit }) {
      return new Promise(resolve => {
        commit("SET_COLLAPSE");
        resolve();
      });
    }
  }
};

export default menu;
