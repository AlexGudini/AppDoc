import React from 'react'
import PropTypes from 'prop-types'

import { Rate as AntRate} from 'antd'
import Icon from '../Icon'
import './styles.css'

class Rate extends React.Component{

    render() {
        return(
            <AntRate {...this.props}/>
        )
    }
}

Rate.propTypes = {
    defaultValue: PropTypes.number,
    disabled: PropTypes.bool,
};

Rate.defaultProps = {
    defaultValue: 0,
    disabled: false,
    character: <Icon type="star" size={10} svg/>
};

export default Rate;