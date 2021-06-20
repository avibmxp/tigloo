<template>
  <div>
    <h3>Post</h3>
    <div class="actions-wrapper">
      <Functionality />
    </div>
    <div>{{ this.allPosts.length }} Results of {{ postsCounting }}</div>
    <div class="posts">
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(post, index) in allPosts" :key="index" class="post">
            <td v-text="post.userId"></td>
            <td v-text="post.id"></td>
            <td v-text="post.title"></td>
            <td v-text="post.body"></td>
          </tr>
        </tbody>
      </table>
      <div></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Functionality from "./SearchFunctionality";

export default {
  name: "Posts",
  components: {
    Functionality,
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: mapGetters(["allPosts", "postsCounting"]),
  mounted() {
    this.fetchPosts();
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

.actions-wrapper {
  margin-bottom: 20px;
}

</style>