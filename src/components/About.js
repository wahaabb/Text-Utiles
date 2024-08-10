import React from 'react'

export default function About(props) {
  

  return (
    <div className="container my-3" >
      <h1 className={` text-${props.mode === 'light' ? 'dark' : 'light'}`}>About Us</h1>
      <div className="accordion my-3" id="accordionExample" >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong> Analyze Your Text </strong>
            </button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse collapse show  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtiles gives you a way to analyze your text quickly and efficiently. Be it word count, character count or sentence count.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button collapsed  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong> Free to use </strong>
            </button>
          </h2>
          <div id="collapseTwo"   className={`accordion-collapse collapse show  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}   data-bs-parent="#accordionExample">
            <div className="accordion-body">
               TextUtiles is free to use. You can use this textUtiles in any project free of cost.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className={`accordion-button collapsed  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong> Browser Compatible </strong>
            </button>
          </h2>
          <div id="collapseThree"   className={`accordion-collapse collapse show  text-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode === 'dark' ? 'dark' : 'light'}`}  data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}
