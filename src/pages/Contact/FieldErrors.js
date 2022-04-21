import React from 'react';

export const FieldErrors = ({ field }) => {
  return (
    <div className='fieldErrors'>
      {field.errorMsg.length > 0 ?
        <p>{`${field.label} ${field.errorMsg}`}</p> :
        ''}
    </div>
  )
}