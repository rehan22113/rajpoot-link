import { MainApi } from "./MainApi";

const PostApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getAllPost: build.query({
            query:()=>`/post`,
        }),
        getLimitedPost: build.query({
            query:()=>`/post/limited?limit=8`,
        }),
        getFilteredPost: build.mutation({
            query:(filter)=>{
            return `/post?limit=20&${filter}`
        }
        }),
        getSinglePost: build.query({
            query:(id)=>`/post/${id}`,
        }),
        getPostByLimit: build.query({
            query:(limit)=>`/post?limit=${limit}`,
        }),
        getPost: build.query({
            query:()=>`/post`,
        }),
        getPostByCategory: build.query({
            query:(cat)=>({
                url:`/post/category/${cat}`,
                method:'GET',
            })
        }),
        getPostByIndustry: build.query({
            query:(cat)=>({
                url:`/post/industry/${cat}`,
                method:'GET',
            })
        }),
        getPostByPrincipal: build.query({
            query:(cat)=>({
                url:`/post/principal/${cat}`,
                method:'GET',
            })
        }),
        NewPost: build.mutation({
            query:(data)=>({
                url:'/post',
                method:'POST',
                body:data
            })
        }),
        deletePost: build.mutation({
            query:(id)=>({
                url:`/post/${id}`,
                method:'DELETE'
            })
        }),
    })
})

export const {useGetAllPostQuery, useGetSinglePostQuery, useGetPostByLimitQuery, useNewPostMutation, useGetPostByCategoryQuery, useGetFilteredPostMutation, useGetLimitedPostQuery, useGetPostByIndustryQuery, useGetPostByPrincipalQuery, useDeletePostMutation} = PostApi;