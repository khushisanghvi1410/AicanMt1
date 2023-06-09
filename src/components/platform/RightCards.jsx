import React from 'react'
import Text from './Text'
import MobileView from '../common/MobileView'
function RightCards() {
  return (
<>
    <div className={`hidden xsm:block w-full `}>

    <div className={`flex w-full md:w-4/5 items-center justify-center mx-auto  p-5 md:p-12 `}>
        <img className={`h-56 bg-slate-700 w-1/2 align-middle mr-5` }></img>
      <div className={`w-1/2`}>

        <Text margin="mr-0"></Text>
      </div>
    </div>
    </div>
    <div className='block xsm:hidden'>

    <MobileView ></MobileView>
    </div>
</>
  )
}

export default RightCards