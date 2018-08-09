import React from 'react'

const classify = (WrappedComponent, className) => {
    return (props) => (
          <div className={className}>
              <WrappedComponent {...props} />
          </div>
        )
}


export default classify;