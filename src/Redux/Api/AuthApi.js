import { MainApi } from "./MainApi";


const AuthApi= MainApi.injectEndpoints({
    endpoints:(build)=>({
        loginAmin: build.mutation({
            query:(data)=>{
                console.log("from Api RTK",data)
                return ({
                    url:'/admin/login',
                    method:'POST',
                    body:data
                })
            }
            }),
        registerUser: build.mutation({
            query:(data)=>({
                url:'/admin/register',
                method:'POST',
                body:data
            })
        }),
        refreshUser: build.mutation({
            query:()=>'/admin/refresh'
        }),
        logoutUser: build.mutation({
            query:(data)=>({
            url:'/admin/logout',
            method:'POST'
            })
        }),
    })
})

export const { useLoginAminMutation,useRegisterUserMutation, useRefreshUserMutation, useLogoutUserMutation } = AuthApi