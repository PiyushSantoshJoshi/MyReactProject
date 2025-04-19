import React from 'react'
import DataListsec from './DataListsec'
import AddStudentform from './AddStudentform'

export default function Dataform() {
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="p-4 col-md-12 col-lg-6">
                <DataListsec />
            </div>
            <div className="p-4 col-md-12 col-lg-6">
                <AddStudentform />
            </div>
        </div>
    </div>
    
    </>
  )
}
