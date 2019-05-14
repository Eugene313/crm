<template>
    <div id="drawer">
        <v-navigation-drawer color="blue-grey"
                app
                :value="drawer"
                v-if="token">
            <v-toolbar>
                <v-list>
                    <v-list-tile>
                        <v-avatar
                                size="40"
                                tile="tile">
                            <img class="logo" src="../assets/img/logo.png" alt=""></v-avatar>
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
            <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
            <v-btn flat to="./dashboard" v-if="token">
                <v-icon left>dashboard</v-icon>
                Dashboard
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat>
                <v-switch v-model="theme">
                </v-switch>
                <p></p>
            </v-btn>
            <v-btn flat
                   @click="removeToken"
                   v-if="token">
                <v-icon left>keyboard_return</v-icon>
                Logout
            </v-btn>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tile : false,
                drawer : true
            }
        },
        methods: {
            removeToken () {
                this.$store.commit('removeToken');
                this.$router.push('/login')
            },
            toggleDrawer () {
                this.drawer = !this.drawer;
            },
        },
        computed : {
            theme : {
                get () {
                    return this.$store.state.toolbar.theme;
                },
                set (value) {
                    this.$store.commit('changeTheme', value);
                }
            },
            token () {
                return this.$store.getters.computedToken;
            },
        },
    }
</script>