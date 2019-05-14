export default {
    state: {
        theme : false,
      },
    mutations: {
        changeTheme (state) {
            state.theme = !state.theme;
        },
    },
}