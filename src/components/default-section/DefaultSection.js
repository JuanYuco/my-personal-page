import React from 'react';
import './DefaultSection.css';

export const DefaultSection = ( { ChildComponent, cssClass } ) => {
    return (
        <div className={ `default-section ${ cssClass }` }>
            <ChildComponent />
        </div>
    )
}
