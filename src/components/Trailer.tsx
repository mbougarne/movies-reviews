import React from 'react';

const Trailer = ({media, hide}: Record<string, any>) => {

  return (
    <div className="Trailer">
      <div className="overly" onClick={hide}></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
              className="embed-responsive-item" 
              src={media + '?autoplay=1'} 
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trailer;