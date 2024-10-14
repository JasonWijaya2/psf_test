import axios from "axios";

const editUser = {
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
    async editUser({ commit }, model) {
      commit("setLoading");

      if (model.action !== "reset") {
        try {
          const response = await axios({
            method: "PUT",
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
      } else {
        commit("resetState");
      }
    },
  },
};

export default editUser;