import React, { useEffect, useState } from 'react'
import TopNav from '../../../Components/Admin/TopNav'
import { useGetCategoryQuery } from '../../../Redux/Api/CategoryApi';
import { useGetIndustryQuery } from '../../../Redux/Api/IndustryApi';
import { useGetPrincipalQuery } from '../../../Redux/Api/PrincipalApi';
import { useNewPostMutation } from '../../../Redux/Api/PostApi';
import { useNavigate } from 'react-router-dom';
import CategorySelect from './CategorySelect';

const AddNewPost = () => {
  const Navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState(null);
  const {data:category} = useGetCategoryQuery()
  const {data:industry} = useGetIndustryQuery()
  const {data:principal} = useGetPrincipalQuery()
  const [categoryFetch,setCategoryFetch] = useState([])
  const [SubmitNewPost,result] = useNewPostMutation()
  const [newPost,setNewPost] = useState({
    category:[],
    principal:"",
    industry:"",
    image:"",
    title:"",
    content:"",
    weburl:"",
    isFeatured:"",
    status:"",
    tags:"",
    fb:"",
    tw:"",
    insta:""
  })

  useEffect(()=>{
    category?setCategoryFetch(category.data):setCategoryFetch([])
  },[category])

  const SubmitModal=()=>{
    try{

      let ind = new FormData()
      console.log("there we are ",newPost)
      if(newPost.title && newPost.isFeatured && newPost.image && newPost.category){
        ind.append("title",newPost.title)
        ind.append("category",JSON.stringify(newPost.category))
        ind.append("principal",newPost.principal)
        ind.append("industry",newPost.industry)
        ind.append("fImage",newPost.image)
        ind.append("content",newPost.content)
        ind.append("weburl",newPost.weburl)
        ind.append("isFeatured",newPost.isFeatured)
        ind.append("status",newPost.status)
        ind.append("tags",newPost.tags)
        ind.append("fb",newPost.fb)
        ind.append("tw",newPost.tw)
        ind.append("insta",newPost.insta)
        SubmitNewPost(ind)
        console.log("Data send",result)
        setTimeout(()=>{
          Navigate("/myadmin-panel/allpost")
        },2000)
    // setIsOpen(false)
      }else{
        alert("Some Fields are empty")
      }
    }catch(err){
      console.log("Got error in submit indsutry",err)
    }
  }

  const handleSelect = (value) => {
    console.log('Selected category:', value);
    if(!newPost.category.includes(value)){
      setNewPost({...newPost,category:[...newPost.category,value]})
    }else{
      setNewPost({...newPost,category:[]})
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewPost({...newPost,image:file})
    setSelectedImage(file);
  };
  const resetCategory = () => {
    // Reset the category field in newPost
    setNewPost((prevPost) => ({
      ...prevPost,
      category: [],
    }));
  };
  return (
    <>

   <TopNav/>
   <div className='container px-4 py-4'>
  <div className="heading text-left font-bold text-2xl text-gray-800">
  Add New Post</div>

  
  <div className=" w-full flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-5xl">

  <div className='py-2'>
    
{selectedImage ? (
        <div>
          <h2>Preview:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='w-1/2' />
          <button onClick={()=>setSelectedImage(null)} className='bg-[#550f0f] p-2 my-1 text-white rounded-sm'>
            Remove
          </button>
        </div>
      ):(
<div className="flex items-center justify-center w-full">
  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
      </svg>
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
    </div>
    <input id="dropzone-file" onChange={handleImageChange} accept="image/*" type="file" className="hidden" />
  </label>

</div>
  )}
    </div>
    <div className='py-2 w-full'>
      <h1>Title</h1>
    <input onChange={(e)=>{setNewPost({...newPost,title:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="Lorem epusem edpu lo" type="text" />
    </div>
    <textarea onChange={(e)=>{setNewPost({...newPost,content:e.target.value})}} className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellCheck="false" placeholder="Describe everything about this post here" defaultValue={newPost.content} />
    <div className='py-2 w-full'>
      <h1>Web URL ('example.com/xyz')</h1>
    <input onChange={(e)=>{setNewPost({...newPost,weburl:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="Title" type="text" />
    </div>
    <div className='py-2'>
      {/* <h1>Category</h1> */}
    {/* <select onChange={(e)=>{setNewPost({...newPost,category:e.target.value})}} className="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" >
      {category?.data.map((item)=>(
      <option key={item._id} value={item._id}>{item.name}</option>
      ))}
    </select> */}
    {categoryFetch && categoryFetch.length > 0 && (
    <CategorySelect categories={categoryFetch} onSelect={handleSelect} onResetCategory={resetCategory} />
    )}
    
    </div>
    <div className='py-2'>
      <h1>Industry</h1>
    <select onChange={(e)=>{setNewPost({...newPost,industry:e.target.value})}} className="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" >
    {industry?.data.map((item)=>(
      <option key={item._id} value={item._id}>{item.name}</option>
      ))}
    </select>
    </div>
    <div className='py-2'>
      <h1>Principal</h1>
    <select onChange={(e)=>{setNewPost({...newPost,principal:e.target.value})}} className="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Title" type="text" >
    {principal?.data.map((item)=>(
      <option key={item._id} value={item._id}>{item.name}</option>
      ))}
    </select>
    </div>
    <div className='py-2'>
      <h1>Status</h1>
    <select onChange={(e)=>{setNewPost({...newPost,status:e.target.value})}} className="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" type="text" >
      <option value={true}>Active</option>
      <option value={false}>in-Active</option>
    </select>
    </div>
    <div className='py-2'>
      <h1>Featured</h1>
      <select onChange={(e)=>{setNewPost({...newPost,isFeatured:e.target.value})}} className="title w-full bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" type="text" >
      <option value={false}>No</option>
      <option value={true}>Yes</option>
    </select>
    </div>
    <div className='py-2 w-full'>
      <h1>Tags - sperate by comma(,)</h1>
    <input onChange={(e)=>{setNewPost({...newPost,tags:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="xyz,abc,etc" type="text" />
    </div>
    <div className='py-2 w-full'>
      <h1>Facebook link</h1>
    <input onChange={(e)=>{setNewPost({...newPost,fb:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="example.com/xyz" type="text" />
    </div>
    <div className='py-2 w-full'>
      <h1>Twitter link</h1>
    <input onChange={(e)=>{setNewPost({...newPost,tw:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="example.com/xyz" type="text" />
    </div>
    <div className='py-2 w-full'>
      <h1>Instagram link</h1>
    <input onChange={(e)=>{setNewPost({...newPost,insta:e.target.value})}} className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none w-full" spellCheck="false" placeholder="example.com/xyz" type="text" />
    </div>
    {/* icons */}
    
    {/* buttons */}
    <div className="buttons flex ">
      {/* <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto">Cancel</div> */}
      <button type='submit' onClick={SubmitModal} className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 mr-auto bg-indigo-500">Post</button>
    </div>
  </div>
</div>
    </>

  )
}

export default AddNewPost