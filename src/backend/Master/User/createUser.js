import axios from "axios";

const createUser = {
  state: {
    status: "idle",
    code: "",
    data: "",
  },
  mutations: {
    setLoading(state) {
      state.status = "loading";
      state.data = "";
    },
    setUser(state, payload) {
      state.status = "loaded";
      state.code = payload.status;
      state.data = payload.data;
    },
    setError(state) {
      state.status = "error";
      state.data = "";
    },
    resetState(state) {
      state.status = "idle";
      state.data = "";
      state.code = "";
    },
  },
  actions: {
    async createUser({ commit }, model) {
      commit("setLoading");

      try {
        const response = await axios({
          method: "POST",
          url: import.meta.env.VITE_HOST + "/master/user",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": model.token,
          },
          data: model.data,
        });
        const { status, data } = response;
        commit("setUser", { status, data });
      } catch (error) {
        if (error.response) {
          console.error(error.response);
          commit("setError");
        }
      }
    },
  },
};

export default createUser;