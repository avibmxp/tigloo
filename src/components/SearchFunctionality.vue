<template>
  <div>
    <h3>Actions</h3>
    <div class="actions-wrapper">
      <div class="sort">
        <label>Sorting by</label>
        <select v-model="sortBy">
          <option value="userId">User id</option>
          <option value="id">Id</option>
        </select>
        <label>Direction</label>
        <select v-model="sortDirection">
          <option>ASC</option>
          <option>DESC</option>
        </select>
        <input type="button" v-on:click="sort" value="Sort" />
      </div>
      <br />
      <div class="filter">
        <label>Search by User Id</label>
        <select v-model="filterBy">
          <option value="live">Live</option>
          <option vlaue="api">Api</option>
        </select>
        <select v-if="filterBy === 'live'" v-model="userId">
          <option>all</option>
          <option v-for="uId in userIds" v-bind:key="uId" v-text="uId"></option>
        </select>
        <input
          v-else
          type="text"
          placeholder="please enter user id to search"
          v-model="userId"
        />
        <input type="button" v-on:click="filter" value="Filter" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "SearchFunctionality",
  data() {
    return {
      sortBy: "id",
      sortDirection: "ASC",
      filterBy: "live",
      userId: "",
      postId: "",
    };
  },
  methods: {
    ...mapMutations(["sorting", "liveFilter"]),
    ...mapActions(["fetchAllPosts"]),
    sort() {
      this.sorting({
        sortBy: this.sortBy,
        sortDirection: this.sortDirection,
      });
    },
    filter() {
      if (this.filterBy === "live") {
        this.liveFilter({
          filterBy: this.filterBy,
          userId: this.userId,
        });
      } else {
        this.fetchAllPosts({
          filterBy: this.filterBy,
          userId: this.userId,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["allPosts"]),
    userIds() {
      return [...new Set(this.allPosts.map((item) => item.userId))];
    },
    postIds() {
      return [...new Set(this.allPosts.map((item) => item.id))];
    },
  },
};
</script>

<style scoped>
.actions-wrapper {
  border: 1px solid black;
  padding: 20px 10px;
}

.sort,
.filter {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
}

input[type="button"] {
  width: 150px;
  padding: 7px;
  background: #b7aaaa;
  border: 0;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

input[type="text"] {
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}

select {
  display: inline-block;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  background-size: 8px 10px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
}
</style>