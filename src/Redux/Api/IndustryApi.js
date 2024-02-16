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
        getSingleIndustry: build.mutation({
            query:(id)=>`/industry/${id}`,
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
        updateIndustry: build.mutation({
            query:({ind,id})=>({
                url:`/industry/${id}`,
                method:'PATCH',
                body:ind
            }),
            invalidatesTags: ['Industry']
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

export const {useGetIndustryQuery, useGetSingleIndustryMutation, useGetIndustryByLimitQuery,usePostIndustryMutation, useUpdateIndustryMutation, useDeleteIndustryMutation} = IndustryApi
