import React from 'react'

const Cattags = ({catname}) => {
    return (
        <span className={"shoe-tags " + checkTag(catname) }>
            {catname}
        </span>
    )
}

const checkTag = (e) => {
    switch (e) {
        case 'Sports':
            return "sport-tag";
        case 'Formal':
            return "formal-tag";
        case 'Casual':
            return "casual-tag";
        case 'Men':
            return "men-tag";
        case 'Women':
            return "women-tag";
        default:
            return "default-tag"
    }
}

export default Cattags
