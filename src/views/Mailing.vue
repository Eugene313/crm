<template>
  <div id="mailing">
    <v-toolbar flat>
      <v-toolbar-title>Mailing system settings</v-toolbar-title>
      <v-spacer></v-spacer>



      <v-dialog v-model="dialog" max-width="500px" persistent="true">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.projectId" label="Project"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.mailingService" label="Service"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.url" label="Api Url"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.login" label="Api login"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.password" label="Api pass"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field v-model="editedItem.subscriberGroup" label="Group"></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>



    </v-toolbar>
    <v-data-table
            :headers="headers"
            :items="projects"
            class="elevation-1"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.index+1 }}</td>
        <td>{{ props.item.projectId }}</td>
        <td class="text-xs-left">{{ props.item.mailingService }}</td>
        <td class="text-xs-left">{{ props.item.url }}</td>
        <td class="text-xs-left">{{ props.item.login }}</td>
        <td class="text-xs-left">{{ props.item.password }}</td>
        <td class="text-xs-left">{{ props.item.subscriberGroup }}</td>
        <td class=" layout px-0 align-center">
          <v-icon
                  small
                  class="mr-2"
                  @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
                  small
                  @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
    </v-data-table>
    <v-snackbar
            v-model="snackbar"
            :timeout="timeout">
      Error
      <v-btn
              flat
              @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      headers: [
        { text: '#', value: '#',sortable: false, },
        {text: 'Project', align: 'left', sortable: false, value: 'name'},
        { text: 'Service', value: 'Service',sortable: false },
        { text: 'Api Url', value: 'fat',sortable: false },
        { text: 'Api login', value: 'carbs',sortable: false },
        { text: 'Api pass', value: 'protein',sortable: false },
        { text: 'Group', value: 'name', sortable: false }
      ],
      projects: [],
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        pop : 0
      },
      snackbar : false,
      timeout : 3000
    }),


    methods: {
      editItem (item) {
        this.editedIndex = this.projects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      deleteItem (item) {
        const index = this.projects.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.projects.splice(index, 1)
      },
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },
      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.projects[this.editedIndex], this.editedItem)
        } else {
          this.projects.push(this.editedItem)
        }
        this.close()
      }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },
    created() {
      this.axios.get('http://192.168.0.143:9000/api/v1/admin/mailing',{
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('access_token'),
        }
      })
        .then(response => {this.projects = response.data.data ; console.log(this.projects)})
        .catch(()=>{})
    }
  }
</script>
<style>

</style>