import React, { Fragment, useEffect, useState } from 'react'
import manwithdiary from './loading.json'
import { useLottie } from 'lottie-react';

const Loading = () => {
    
  const options = {
    animationData: manwithdiary,
    loop: true
  };

  const { View } = useLottie(options);
  return <>
    
        <div className='fixed h-[99vh] bg-black/20 w-[100%] overflow-hidden z-50 flex justify-center items-center'>
        <div className="w-1/3 ">
          {View}
        </div> 
        </div>
  </>
}

export default Loading