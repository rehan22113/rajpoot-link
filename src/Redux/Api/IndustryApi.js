import { MainApi } from "./MainApi";

const IndustryApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getIndustry: build.query({
            query:()=>'/industry',
            providesTags: ['Industry']

        }),
        getIndustryByLimit: build.query({
            query:(limit)=>`/industry?limit=${limit}`,
            providesTags: ['Industry']
        }),
        postIndustry: build.mutation({
            query:(data)=>({
                url:'/industry',
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Industry'],
        }),
        deleteIndustry: build.mutation({
            query:(id)=>({
                url:`/industry/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Industry']
        }),
    })
})

export const {useGetIndustryQuery, useGetIndustryByLimitQuery,usePostIndustryMutation, useDeleteIndustryMutation} = IndustryApi
