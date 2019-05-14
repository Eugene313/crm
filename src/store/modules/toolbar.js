export default {
    state: {
        theme : true,
      },
    mutations: {
        changeTheme (state) {
            state.theme = !state.theme;
        },
    },
}