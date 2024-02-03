import { MainApi } from "./MainApi";

const PrincipalApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getPrincipal: build.query({
            query:()=>'/principal'
        }),
        getPrincipalByLimit: build.query({
            query:(limit)=>`/Principal?limit=${limit}`
        }),
        postPrincipal: build.mutation({
            query:(data)=>({
                url:'/principal',
                method:'POST',
                body: data
            })
        }),
        deletePrincipal: build.mutation({
            query:(id)=>({
                url:`/principal/${id}`,
                method:'DELETE'
            })
        }),
    })
})

export const { useGetPrincipalQuery, useGetPrincipalByLimitQuery ,usePostPrincipalMutation, useDeletePrincipalMutation } = PrincipalApi