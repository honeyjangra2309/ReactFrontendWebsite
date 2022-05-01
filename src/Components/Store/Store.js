import React,{useState} from 'react'
import StoreLeftBar from './StoreLeftBar'
import '../../App.css'
import StoreMiddle from './StoreMiddle'
import StoreRightBar from './StoreRightBar'

export default function Store() {
  const [selectIdLoafers, setselectIdLoafers] = useState(true);
  const [selectIdSneakers, setselectIdSneakers] = useState(true);
  const [ksl, setksl] = useState(false);
  const [ksw, setksw] = useState(false);
  const handleOnChangeLoafers =() => {
    setselectIdLoafers(!selectIdLoafers);
}
const handleKSLclick =() => {
  setksl(!ksl);
}
const handleKSWclick =() => {
  setksw(!ksw);
}
const handleOnChangeSneakers =() => {
  setselectIdSneakers(!selectIdSneakers);
}

  return (
    <div className='d-flex mb-5 mt-5 pt-5' style={{fontFamily:"text",height:"100vh"}} id="Store">
       <StoreLeftBar loafers={selectIdLoafers} sneakers={selectIdSneakers} loafersClicked={handleOnChangeLoafers} sneakersClicked={handleOnChangeSneakers}/>
       <StoreMiddle loafersClicked={selectIdLoafers} sneakersClicked={selectIdSneakers} ksl={ksl} kslClicked={handleKSLclick} ksw={ksw} kswClicked={handleKSWclick}/>
       <StoreRightBar ksl={ksl} ksw={ksw}/>
    </div>
  )
}
