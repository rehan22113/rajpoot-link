import { MainApi } from "./MainApi";

const ClientApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getClient: build.query({
            query:()=>'/client',
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
            invalidatesTags: ['Post','Category','Industry','Principal']
        }),
        deleteClient: build.mutation({
            query:(id)=>({
                url:`/client/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Post','Category','Industry','Principal'] 
        }),
    })
})

export const {useGetClientQuery, useGetClientByLimitQuery,usePostClientMutation, useDeleteClientMutation} = ClientApi
