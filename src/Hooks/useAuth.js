import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useLogoutUserMutation, useRefreshUserMutation} from "../Redux/Api/AuthApi";
import {LoginUser} from '../Redux/slice/LoginSlice';


const useAuth =()=>{
 const dispatch = useDispatch()
 const isLogin = useSelector(state=>state.login.isLogin)
 const Navigate = useNavigate()
 const [refreshUser,result] = useRefreshUserMutation() 
 const [logout] = useLogoutUserMutation()
    
 const RefreshAuth=async(path)=>{
     const res = await refreshUser()
     if(res?.data?.msg =="user is authorized"){
        // console.log("there",res.data.msg)
        dispatch(LoginUser(true))
        if(!path)
        Navigate("/myadmin-panel")
        else
        Navigate(path)
    }else{
        dispatch(LoginUser(false))
        Navigate("/login")
    }
 }
 
 const CheckUser = ()=>{
        
    if(isLogin){
        console.log("login ifIN Useauth")
        return true
    }
    else{
        console.log("logout ifIN Useauth")
        return false
    }
 };
    

const LoggedInUser=(path)=>{
    console.log("auth_Login")
    dispatch(LoginUser(true))
    Navigate(path)
};

const LogoutUser=async()=>{
    console.log("auth_Logout")
   const res= await logout()
   if(res?.data?.msg=="User Logout"){
    Navigate("/login")
    dispatch(LoginUser(false))
   }
};

    // const RegUser=()=>{
    //     console.log("auth_Register")
    //     HandleRegState();
    // };
 

    return {RefreshAuth,LoggedInUser,LogoutUser}
    
}

export default useAuth