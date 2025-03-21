import React, { useState } from 'react'
import Button from '../../core/components/FilterBtn/Button'
import NortificationList from './NortificationList';

function NortificationPageSkeleton() {

  const [childstate, setChildState] = useState("All")

  const getBtnValue = (value) => {
    setChildState(value);
  };

  return (
    <div className=' homepage  p-4 gap-3' style={{ height: "calc(100vh - 3rem)" }} >
      <div className='row' >
        <div className="col-12">
          <span className="demo-heading">Nortification</span>
        </div>

        <div className='col-12 mt-3 d-flex justify-content-start gap-2 demo-filter-area' >
          <Button type={"All"} returnBtnValue={getBtnValue} />
          <Button type={"Unread"} returnBtnValue={getBtnValue} />
          <Button type={"Bookmark"} returnBtnValue={getBtnValue} />
          <Button type={"Archive"} returnBtnValue={getBtnValue} />
        </div>

        <div className="col-12 mt-2 ">
          <div className='demo-all-border' ></div>
        </div>

        <div className='col-12 mt-1' style={{ height: "calc(100vh - 12rem)",overflowY:"scroll" }}>
          {

            Array.from({ length: 10 }, (_, index) => (
              <NortificationList key={index} />
            ))
          }
        </div>


      </div>
    </div>
  )
}

export default NortificationPageSkeleton
