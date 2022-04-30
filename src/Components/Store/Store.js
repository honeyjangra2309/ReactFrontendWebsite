import React,{useState} from 'react'
import StoreLeftBar from './StoreLeftBar'
import '../../App.css'
import StoreMiddle from './StoreMiddle'
import StoreRightBar from './StoreRightBar'

export default function Store() {
  const [selectIdLoafers, setselectIdLoafers] = useState(true);
  const [selectIdSneakers, setselectIdSneakers] = useState(true);
  const handleOnChangeLoafers =() => {
    setselectIdLoafers(!selectIdLoafers);
}
const handleOnChangeSneakers =() => {
  setselectIdSneakers(!selectIdSneakers);
}

  return (
    <div className='d-flex mb-5 mt-5 pt-5' style={{fontFamily:"text",height:"100vh"}} id="Store">
       <StoreLeftBar loafers={selectIdLoafers} sneakers={selectIdSneakers} loafersClicked={handleOnChangeLoafers} sneakersClicked={handleOnChangeSneakers}/>
       <StoreMiddle loafersClicked={selectIdLoafers} sneakersClicked={selectIdSneakers}/>
       <StoreRightBar />
    </div>
  )
}
