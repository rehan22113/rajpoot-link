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
            query:(limit)=>`/post/limited?limit=${limit}`,
            providesTags: ['Post']
        }),
        getPost: build.query({
            query:()=>`/post`,
            providesTags: ['Post']
        }),
        getPostByCategoryAndPrincipal: build.query({
            query:({pId,cId})=>({
                url:`/post/postByCategoryAndPrincipal/${pId}/${cId}`,
                method:'GET',
            }),
            providesTags: ['Post']
        }),
        getPostByCategoryAndIndustry: build.query({
            query:({iId,cId})=>({
                url:`/post/postByCategoryAndIndustry/${iId}/${cId}`,
                method:'GET',
            }),
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
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation({
            query:({ind,id})=> ({
                url:`/post/${id}`,
                method:'PATCH',
                body:ind
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation({
            query:(id)=>({
                url:`/post/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Post']

        }),
    })
})

export const {useGetAllPostQuery, useGetSinglePostQuery, useGetPostByCategoryAndPrincipalQuery, useGetPostByCategoryAndIndustryQuery, useGetPostByLimitQuery, useNewPostMutation, useUpdatePostMutation, useGetPostByCategoryQuery, useGetFilteredPostMutation, useGetLimitedPostQuery, useGetPostByIndustryQuery, useGetPostByPrincipalQuery, useDeletePostMutation} = PostApi;