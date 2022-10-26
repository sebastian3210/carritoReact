import React from 'react'

function Input() {

    const handleInput = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e.nativeEvent)
    }
  return (
    <div className='box p-5'>
        <div className='border border-3 border-warning p-5'>
            <input onClick={handleInput}  className='m-5' type='text' name='i' id='i' />

        </div>
    </div>
  )
}

export default Input


//onClick={handleInput} onKeyDown={handleInput}