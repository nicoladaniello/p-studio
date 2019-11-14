import React from 'react'
import classnames from "classnames";

const Card = ({className, children}) => {
    return ( 
        <Card className={classnames("border-0", className)}>
            {children}
        </Card>
     );
}
 
export default Card;