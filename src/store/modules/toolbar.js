export default {
    state: {
        theme : false,
        drawer : true
      },
    mutations: {
        changeTheme (state) {
            state.theme = !state.theme;
        },
        toggleDrawer (state) {
            state.drawer = !state.drawer;
        }
    },
}