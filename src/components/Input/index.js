import React from 'react'
import PropTypes from 'prop-types'
import { Input as AntInput} from 'antd'

import './style.css'


class Input extends AntInput{
    constructor(props){
        super(props);
        this.state ={
            onFocus: false,
        }
    }

    focusHandler = (isFocused) => {
        this.setState(prev => ({onFocus: isFocused}))
    };

    render() {
        const {className} = this.props;
        const rootCl = this.state.onFocus ? 'input-root-focus '+className : 'input-root '+className;

        return (
            <div onFocus={() => this.focusHandler(true)}
                 onBlur={() => this.focusHandler(false)}
                 className={rootCl}>
                <AntInput {...this.props}/>
            </div>
        )
    }
}

Input.propTypes = {
    className: PropTypes.string,
};

Input.defaultProps = {
    className: '',
};

export default Input