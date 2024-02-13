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
            invalidatesTags: ['Category']
        }),
        deleteCategory: build.mutation({
            query:(id)=>({
                url:`/category/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Category']
        }),
    })
})

export const {useGetCategoryQuery, usePostCategoryMutation, useGetCategoryByLimitQuery, useDeleteCategoryMutation} = CategoryApi