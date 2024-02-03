import { MainApi } from "./MainApi";

const IndustryApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getIndustry: build.query({
            query:()=>'/industry'
        }),
        getIndustryByLimit: build.query({
            query:(limit)=>`/industry?limit=${limit}`
        }),
        postIndustry: build.mutation({
            query:(data)=>({
                url:'/industry',
                method:'POST',
                body:data
            })
            
        }),
        deleteIndustry: build.mutation({
            query:(id)=>({
                url:`/industry/${id}`,
                method:'DELETE'
            })
        }),
    })
})

export const {useGetIndustryQuery, useGetIndustryByLimitQuery,usePostIndustryMutation, useDeleteIndustryMutation} = IndustryApi
