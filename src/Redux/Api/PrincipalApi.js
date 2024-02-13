import { MainApi } from "./MainApi";

const PrincipalApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getPrincipal: build.query({
            query:()=>'/principal',
            providesTags: ['Principal']
        }),
        getPrincipalByLimit: build.query({
            query:(limit)=>`/Principal?limit=${limit}`,
            providesTags: ['Principal']
        }),
        postPrincipal: build.mutation({
            query:(data)=>({
                url:'/principal',
                method:'POST',
                body: data
            }),
            invalidatesTags: ['Principal']
        }),
        deletePrincipal: build.mutation({
            query:(id)=>({
                url:`/principal/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Principal']
        }),
    })
})

export const { useGetPrincipalQuery, useGetPrincipalByLimitQuery ,usePostPrincipalMutation, useDeletePrincipalMutation } = PrincipalApi