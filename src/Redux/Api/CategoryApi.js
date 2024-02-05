import { MainApi } from "./MainApi";

const CategoryApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getCategory: build.query({
            query:()=>'/category',
            providesTags: ['Category'],
        }),
        getCategoryByLimit: build.query({
            query:(limit)=>`/category?limit=${limit}`,
            providesTags: ['Category']
        }),
        postCategory: build.mutation({
            query:(data)=>({
                url:'/category',
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Post','Industry','Principal','Client']
        }),
        deleteCategory: build.mutation({
            query:(id)=>({
                url:`/category/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Post','Industry','Principal','Client']
        }),
    })
})

export const {useGetCategoryQuery, usePostCategoryMutation, useGetCategoryByLimitQuery, useDeleteCategoryMutation} = CategoryApi