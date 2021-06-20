<template>
  <div>
    <h3>Users</h3>
    <div class="posts">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="(user, index) in allUsers" :key="index" class="users">
            <td v-text="user.id"></td>
            <td v-text="user.name"></td>
            <td v-text="user.username"></td>
            <td v-text="user.email"></td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Users",
  components: {
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  computed: mapGetters(["allUsers"]),
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  font: 2rem;
}

table {
  border-collapse: collapse;
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
}

thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

td,
th {
  border-bottom-width: 2px;
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  border: 1px solid #dee2e6;
  padding: 0.75rem;
}
</style>