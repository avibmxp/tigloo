/* eslint-disable no-debugger */
import axios from 'axios';
import API from '../../class/API';

const state = {
    posts: [],
    postsCopy: [],
    users: []
};

const getters = {
    allPosts: (state) => state.posts,
    postsCounting: (state) => state.postsCopy.length,
    allUsers: (state) => state.users,
};

const actions = {
    async fetchPosts({ commit }) {
        const api = new API('posts', '25');
        const response = await axios.get(api.getUrl());
        commit('setPosts', response.data);
    },
    async fetchAllPosts({ commit }, payload) {
        const api = new API('posts');
        const response = await axios.get(api.getUrl());
        commit('apiFilter', {
            response: response.data,
            params: payload
        }, );
    },
    async fetchUsers({ commit }) {
        const api = new API('users');
        const response = await axios.get(api.getUrl());
        commit('setUsers', response.data);
    },
};

const mutations = {
    setPosts: (state, payload) => {
        state.posts = payload;
        state.postsCopy = payload;
    },
    setUsers: (state, payload) => {
        state.users = payload;
    },
    sorting: (state, payload) => {
        switch(payload.sortDirection) {
            case "ASC": {
                state.posts = state.posts.sort(function(a, b){return a[payload.sortBy]-b[payload.sortBy]});
                break;
            }
            case "DESC": {
                state.posts = state.posts.sort(function(a, b){return b[payload.sortBy]-a[payload.sortBy]});
                break;
            }
        }
    },
    liveFilter: (state, payload) => {
        if(payload.userId !== "all") {
            state.posts = state.postsCopy;
            state.posts = state.posts.filter(function(item) {
                if (item.userId == payload.userId) {
                   return item;
                }
              })
        }else {
            state.posts = state.postsCopy;
        }
    },
    apiFilter: (state, payload) => {
        if(payload.userId !== "all") {
            state.posts = state.postsCopy;
            state.posts = payload.response.filter(function(item) {
                if (item.userId == payload.params.userId) {
                   return item;
                }
              })
        }else {
            state.posts = state.postsCopy;
        }
    }
};

export default {
    state,
    getters, 
    actions,
    mutations
}