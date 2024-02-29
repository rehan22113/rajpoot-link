import { MainApi } from "./MainApi";

const CategoryApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getCategory: build.query({
            query:()=>'/category',
            providesTags: ['Category'],
        }),
        getCategoryByPrincipal: build.query({
            query:(principalId)=>`/post/principal/${principalId}/categories`,
            providesTags: ['Category']
        }),
        getCategoryByIndustry: build.query({
            query:(industryId)=>`/post/industry/${industryId}/categories`,
            providesTags: ['Category']
        }),
        getSingleCategory: build.mutation({
            query:(id)=>`/category/${id}`,
            providesTags: ['Category']
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
        updateCategory: build.mutation({
            query:({ind,id})=>({
                url:`/category/${id}`,
                method:'PATCH',
                body:ind
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

export const {useGetCategoryQuery, useGetCategoryByPrincipalQuery, useGetCategoryByIndustryQuery, useGetSingleCategoryMutation, usePostCategoryMutation, useUpdateCategoryMutation, useGetCategoryByLimitQuery, useDeleteCategoryMutation} = CategoryApi