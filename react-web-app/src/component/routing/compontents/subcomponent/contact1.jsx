
import React, { useState } from 'react';


  const Contact1 = () => {
    // const [buttonList] = useState(['text','checkbox','radio','number']);
      const [buttonList] = useState(['checkbox','radio']);
  return (
    <div>contact1

<ul>
    {
        buttonList.map((type) => (
            <RenderButton type={type}> {type} </RenderButton>
        ))
    }
</ul>

    </div>
  )
}

function RenderButton ({type}){

    return (
   <>
   <div>
    <input type= {type} />
    </div>
   </>
       
    )
}

export default Contact1;