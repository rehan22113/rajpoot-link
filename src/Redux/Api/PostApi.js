import { MainApi } from "./MainApi";

const PostApi = MainApi.injectEndpoints({
    endpoints:(build)=>({
        getAllPost: build.query({
            query:()=>`/post`,
            providesTags: ['Post']
        }),
        getLimitedPost: build.query({
            query:()=>`/post/limited?limit=8`,
            providesTags: ['Post']
        }),
        getFilteredPost: build.mutation({
            query:(filter)=>`/post?limit=20&${filter}`,
            invalidatesTags: ['Category','Industry','Principal','Client']
    }),
        getSinglePost: build.query({
            query:(id)=>`/post/${id}`,
            providesTags: ['Post']

        }),
        getPostByLimit: build.query({
            query:(limit)=>`/post?limit=${limit}`,
            providesTags: ['Post']
        }),
        getPost: build.query({
            query:()=>`/post`,
            providesTags: ['Post']
        }),
        getPostByCategory: build.query({
            query:(cat)=>({
                url:`/post/category/${cat}`,
                method:'GET',
            }),
            providesTags: ['Post']
        }),
        getPostByIndustry: build.query({
            query:(cat)=>({
                url:`/post/industry/${cat}`,
                method:'GET',
            }),
            providesTags: ['Post']
        }),
        getPostByPrincipal: build.query({
            query:(cat)=>({
                url:`/post/principal/${cat}`,
                method:'GET',
            }),
            providesTags: ['Post']
        }),
        NewPost: build.mutation({
            query:(data)=>({
                url:'/post',
                method:'POST',
                body:data
            }),
            invalidatesTags: ['Category','Industry','Principal','Client']
        }),
        deletePost: build.mutation({
            query:(id)=>({
                url:`/post/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Category','Industry','Principal','Client']

        }),
    })
})

export const {useGetAllPostQuery, useGetSinglePostQuery, useGetPostByLimitQuery, useNewPostMutation, useGetPostByCategoryQuery, useGetFilteredPostMutation, useGetLimitedPostQuery, useGetPostByIndustryQuery, useGetPostByPrincipalQuery, useDeletePostMutation} = PostApi;