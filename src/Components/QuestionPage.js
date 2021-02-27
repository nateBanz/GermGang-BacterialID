//takes object and parses inputs: isdone, number of buttons and the text on the buttons

import React from 'react'
import PropTypes from 'prop-types'

const QuestionPage = ({name}) => {
    return <div>

        <h1>{name}</h1>

    </div>
}

QuestionPage.defaultProps = {
    name: 'hello',
}

QuestionPage.prototype = {name: PropTypes.string}

export default QuestionPage