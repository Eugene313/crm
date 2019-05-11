<template>
    <div id="drawer">
        <v-navigation-drawer
                app
                v-model="drawer">
            <v-toolbar>
                <v-list flat>
                    <v-list-tile>
                        <v-avatar :size="avatarSize" :tile="tile"><img class="logo" src="../assets/img/logo.png" alt=""></v-avatar>
                        <v-list-tile-title style="padding: 0 10px;font-size:18px;font-weight: bold;">Quantum Projects</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-divider></v-divider>
            <v-list dense class="pt-0">
                <v-list-tile to="/Users">
                    <v-list-tile-action>
                        <v-icon>supervised_user_circle</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Manage Users</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/Search">
                    <v-list-tile-action>
                        <v-icon>search</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>Search</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile to="/account">
                    <v-list-tile-action>
                        <v-icon>sms</v-icon>
                    </v-list-tile-action>

                    <v-list-tile-content>
                        <v-list-tile-title>SMS account</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app>
            <v-toolbar-side-icon @click="drawerFun"></v-toolbar-side-icon>
            <v-btn flat to="./home">
                <v-icon left>home</v-icon>
                Home
            </v-btn>
            <v-btn flat to="./dashboard">
                <v-icon left>dashboard</v-icon>
                Dashboard
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>
                <v-switch @change="changeTheme" color="#e25e00">
                </v-switch>
                <p></p>
            </v-btn>
            <v-btn flat to="/login" >
                <v-icon left>keyboard_tab</v-icon>
                Login
            </v-btn>
            <v-btn flat>
                <v-icon left>keyboard_return</v-icon>
                Logout
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tile: true,
                avatarSize: 40,
                drawer: false
            }
        },
        methods: {
            drawerFun() {
                this.drawer = !this.drawer;
            },
            changeTheme(){
                this.$store.commit('changeTheme')
            }
        },
    }
</script>

<style scoped>

</style>