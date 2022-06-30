import React from 'react';
import { Badge } from 'rsuite';


const ConditionalBadge=({condition})=>{
    return condition?<Badge content={condition}>{children}</Badge>

}

const IconBtnControl = ({isVisible,
    iconName,
    tooltip,
    onClick,
    badgeContent,
    ...props }) => {
  return (
        <div className="ml-2" style={{visibility:isVisible?'visible':'hidden'}}>
            <ConditionalBadge condition={badgeContent}></ConditionalBadge>
    </div>
  )
}

export default IconBtnControl