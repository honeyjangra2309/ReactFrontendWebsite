import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import "./StoreLeftBar.css"

export default function StoreLeftBar() {
  return (
    <div className='container p-3 ml-4 mr-2' style={{boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",borderRadius:"5px",width:"35%"}}>
        <div className='d-flex justify-content-between'>
          <h5>FILTERS</h5>
          <i className="fa fa-filter"  style={{fontSize:"20px"}}></i>
        </div>
        <h5 className='mt-4 mb-1'>Cost</h5>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
            Rs. 1500-4000
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
            Rs. 4001-7000
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
            Rs. 7001+
        </label>
        </div>
        <h5 className='mt-4 mb-1'>Colour</h5>
        <input type="color" name="" id="" value="#ff0000"/>
        <input type="color" name="" id="" value="#f6b73c"/>
        <input type="color" name="" id="" value="#008000"/>
        <input type="color" name="" id="" value="#800080"/>
        <h5 className='mt-4 mb-1'>Design Templates</h5>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
            2
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
            3
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
            3+
        </label>
        </div>
        <h5 className='mt-4 mb-1'>Type</h5>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" for="flexCheckDefault">
            Loafers
        </label>
        </div>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" for="flexCheckChecked">
            Sneakers
        </label>
        </div>
        <div className='text-center'>
        <button type='button' className='btn btn-sm btn-dark mt-4'>apply</button>
        </div>
    </div>
  )
}
