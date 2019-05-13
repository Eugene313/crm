export default {
    state: {
        theme : true,
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