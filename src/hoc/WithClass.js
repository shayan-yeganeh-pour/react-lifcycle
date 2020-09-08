import React from 'react'

const withClass = ( wrappedComponent , className) => {
    return props => (
        <div className={className}>
            <wrappedComponent />
        </div>
    )
    }


export default withClass