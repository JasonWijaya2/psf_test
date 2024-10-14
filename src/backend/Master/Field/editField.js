import axios from "axios";

const editField = {
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
    setField(state, payload) {
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
    async editField({ commit }, model) {
      commit("setLoading");

      try {
        const response = await axios({
          method: "PUT",
          url: import.meta.env.VITE_HOST + "/master/field",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": model.token,
          },
        });
        const { status, data } = response;
        commit("setField", { status, data });
      } catch (error) {
        if (error.response) {
          console.error(error.response);
          commit("setError");
        }
      }
    },
  },
};

export default editField;