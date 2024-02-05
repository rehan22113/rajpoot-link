import { MainApi } from "./MainApi";

const ContactApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getContact: build.query({
            query:()=>'/contact',
            providesTags: ['Contact']

        }),
        getContactByLimit: build.query({
            query:(limit)=>`/contact?limit=${limit}`,
            providesTags: ['Contact']
        }),
        postContact: build.mutation({
            query:(data)=>({
                url:'/contact',
                method:'POST',
                body:data
            }),
            // invalidatesTags: ['Post','Category','Principal','Client']
        }),
        deleteContact: build.mutation({
            query:(id)=>({
                url:`/contact/${id}`,
                method:'DELETE'
            }),
            // invalidatesTags: ['Post','Category','Principal','Client']
        }),
    })
})

export const {useGetContactQuery, useGetContactByLimitQuery,usePostContactMutation, useDeleteContactMutation} = ContactApi
