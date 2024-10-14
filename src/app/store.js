import { createStore } from 'vuex';

// Import User Modules
import getUser from "../backend/Master/User/getUser";
import editUser from "../backend/Master/User/editUser";
import createUser from "../backend/Master/User/createUser";

// Import Coupon Modules
import getCoupon from "../backend/Master/Coupon/getCoupon";
import editCoupon from "../backend/Master/Coupon/editCoupon";
import createCoupon from "../backend/Master/Coupon/createCoupon";

// Import Field Modules
import getField from "../backend/Master/Field/getField";
import editField from "../backend/Master/Field/editField";
import createField from "../backend/Master/Field/createField";

// Import Booking Modules
import getBooking from "../backend/Transaction/Booking/getBooking";
import editBooking from "../backend/Transaction/Booking/editBooking";
import createBooking from "../backend/Transaction/Booking/createBooking";

// Vuex Store
export const store = createStore({
  modules: {
    user: {
      namespaced: true,
      modules: {
        getUser,
        editUser,
        createUser
      }
    },
    coupon: {
      namespaced: true,
      modules: {
        getCoupon,
        editCoupon,
        createCoupon
      }
    },
    field: {
      namespaced: true,
      modules: {
        getField,
        editField,
        createField
      }
    },
    booking: {
      namespaced: true,
      modules: {
        getBooking,
        editBooking,
        createBooking
      }
    }
  },
  // Tambahkan middleware atau plugin jika diperlukan
});