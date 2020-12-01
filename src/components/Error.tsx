import React from 'react';
import Icon from './Icon';

export default function Error({ message, title }: Record<string, any>) 
{
  return (
    <div className="Error">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="card bg-danger text-white">
            
            <div className="card-header border-0">
              <h3 className="card-title">
                {title}
                <span className="float-right">
                  <Icon name="exclamation-triangle" />
                </span>
              </h3>
            </div>
            
            <div className="card-body">
              <p className="lead">{message}</p>
            </div>

          </div>
        </div>
      </div>
    </div> 
  )
}