<template>
  <div id="users">
    <v-toolbar flat>
      <v-toolbar-title>PROJECTS</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="primary" dark @click="">
        <v-icon class="mr-2">add</v-icon>
        add new project
      </v-btn>
    </v-toolbar>

    <v-data-table
            :headers="headers"
            :items="users"
            class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.projectName }}</td>
        <td class="text-xs-left">{{ props.item.projectDescription }}</td>
        <td class="text-xs-left">{{ props.item.projectLanguage }}</td>
        <td class="text-xs-left">{{ props.item.projectActive }}</td>
        <td class="text-xs-left"><v-btn flat to="/statistics"><v-icon>schedule</v-icon></v-btn></td>
        <td class="text-xs-left"><v-btn flat to="/Search"><v-icon>search</v-icon></v-btn></td>
        <td class="text-xs-left"><v-btn flat to="/Duplicate"><v-icon>supervisor_account</v-icon></v-btn></td>
        <td class="text-xs-left"><v-btn flat to="/Registration"><v-icon>note_add</v-icon></v-btn></td>
      </template>
    </v-data-table>
  </div>
</template>
<script>
export default {
  data(){
    return {
      users: [],
      headers: [
        {text: 'ID', value: '#',sortable: false,},
        {text: 'NAME', value: '#',sortable: false,},
        {text: 'DESCRIPTION', value: '#',sortable: false,},
        {text: 'LANGUAGE', value: '#',sortable: false,},
        {text: 'ACTIVE', value: '#',sortable: false,},
        {text: 'STATISTICS', value: '#',sortable: false,},
        {text: 'SEARCH', value: '#',sortable: false,},
        {text: 'DUPLICATE', value: '#',sortable: false,},
        {text: 'REGISTRATION', value: '#',sortable: false,},
      ]
    }
  },
  created() {
    this.axios.get('http://192.168.0.143:9000/api/v1/admin/project', {
      headers : {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('access_token'),
      }
    })
      .then(response => this.users = response.data.data)
      .catch(()=>{})
  }
}
</script>
