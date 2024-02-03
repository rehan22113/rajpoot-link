import { MainApi } from "./MainApi";

const CategoryApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getCategory: build.query({
            query:()=>'/category'
        }),
        getCategoryByLimit: build.query({
            query:(limit)=>`/category?limit=${limit}`
        }),
        postCategory: build.mutation({
            query:(data)=>({
                url:'/category',
                method:'POST',
                body:data
            })
        }),
        deleteCategory: build.mutation({
            query:(id)=>({
                url:`/category/${id}`,
                method:'DELETE'
            })
        }),
    })
})

export const {useGetCategoryQuery, usePostCategoryMutation, useGetCategoryByLimitQuery, useDeleteCategoryMutation} = CategoryApi