import axios from "axios";

const createBooking = {
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
    setBooking(state, payload) {
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
    async createBooking({ commit }, model) {
      commit("setLoading");

      try {
        const response = await axios({
          method: "POST",
          url: import.meta.env.VITE_HOST + "/transaction/booking",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": model.token,
          },
        });
        const { status, data } = response;
        commit("setBooking", { status, data });
      } catch (error) {
        if (error.response) {
          console.error(error.response);
          commit("setError");
        }
      }
    },
  },
};

export default createBooking;