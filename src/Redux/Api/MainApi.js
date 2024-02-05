import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const MainApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),
    tagTypes: ['Post','Category','Industry','Principal','Client','Contact'],
    endpoints: (builder) => ({
      getTest: builder.query({
        query: () => `/`,
      }),
      getDetail: builder.query({
        query:()=>"/detail"
      })
    }),
})

export const { useGetTestQuery,useGetDetailQuery } = MainApi