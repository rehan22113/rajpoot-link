import { MainApi } from "./MainApi";

const ClientApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getClient: build.query({
            query:()=>'/client',
            providesTags: ['Client']
        }),
        getSingleClient: build.mutation({
            query:(id)=>`/client/${id}`,
            providesTags: ['Client']
        }),
        getClientByLimit: build.query({
            query:(limit)=>`/client?limit=${limit}`,
            providesTags: ['Client']
        }),
        postClient: build.mutation({
            query:(data)=>({
                url:'/client',
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Client']
        }),
        updateClient: build.mutation({
            query:({ind,id})=>({
                url:`/client/${id}`,
                method:'PATCH',
                body:ind
            }),
            invalidatesTags: ['Client']
        }),
        deleteClient: build.mutation({
            query:(id)=>({
                url:`/client/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Client'] 
        }),
    })
})

export const {useGetClientQuery, useGetSingleClientMutation, useUpdateClientMutation, useGetClientByLimitQuery,usePostClientMutation, useDeleteClientMutation} = ClientApi
