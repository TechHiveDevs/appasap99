import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../Config/config";
import endpoints from "./api.queries";
// import { resetAuthUser } from "../Store/Slices/auth.slice";
// import Toast from "react-native-toast-message";

// ==========================================================

const baseQueryClient = fetchBaseQuery({
  baseUrl: config.API_URL,
  prepareHeaders: async (headers: any, { getState, endpoint }: any) => {
    headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");

    const accessToken = getState()?.auth?.accessToken;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

// ==========================================================

/**
 *  RTK API base Query with error handler
 */
const baseQuery = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQueryClient(args, api, extraOptions);

  // const status = result?.error?.status;
  // if (status === "FETCH_ERROR") {
  //   Toast.show({
  //     type: "success",
  //     text1: `😔  Can't Connect to Network on Server ${config.API_URL}`,
  //   });
  // } else {
  //   if (result?.error?.data?.message) {
  //     Toast.show({
  //       type: "error",
  //       text1: "😔  " + result?.error?.data?.message,
  //     });
  //   }
  // }

  /*
   * TODO: can handle if the token is expired
   * const refreshResult = await baseQueryClient("/refreshToken", api, extraOptions);
   */
  return result;
};

// ==========================================================

export const apiSlice = createApi({ reducerPath: "api", baseQuery, endpoints });

// ==========================================================

export const {
  useCreateMutation,
  useGetListQuery,
  useGetOneQuery,
  useUpdateMutation,
  useDeleteOneQuery,
  useLoginMutation,
  useRegisterMutation,
  useLazyGetOneQuery,
  useLazyMeQuery,
  useSearchQuery,
} = apiSlice;
