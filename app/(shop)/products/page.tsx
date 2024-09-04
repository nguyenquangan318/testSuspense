'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
type Search={
  name:string,
  category:string
}
function Search(){
  const searchParam=useSearchParams();
  return(
    <>
    <h3>Tên sản phẩm:{searchParam.get('name')}</h3>
    <h3>Danh mục:{searchParam.get('category')}</h3>
    </>
  )
}
export default function page() {
  const router=useRouter();
  
  const [search,setSearch]=useState<Search>({
    name:'',
    category:''
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value,name}=e.target;
    setSearch({...search,[name]:value})
  }
  const handleClick=()=>{
     router.push(`/products?name=${search.name}&category=${search.category}`);
  }
  return (
    
    <div className='m-[50px]'>
       <Suspense fallback={<div>Loading</div>}><Search/></Suspense>
      <input onChange={handleChange} name='name' type="text" placeholder='Tìm kiếm theo tên'/>
      <br />
      <br />
      <input onChange={handleChange} name='category' type="text" placeholder='Tìm kiếm theo danh mục' />
      <br />
      <br />
      <button className='bg-slate-700 text-white rounded-[5px] p-[10px]' onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}
