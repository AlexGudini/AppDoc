import React from 'react';
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { Form } from 'antd';
//import { NavLink } from 'react-router-dom'
import Button from '../Button'
import Input from '../Input'


import './style.css'
import '../../icon/style.css'

const FormItem = Form.Item;

function validatePhone(number='') {
    let rez = number.match(/\d/g);

    if(rez){
        if (rez.length === 11 || rez.length === 12) {
            return true;
        }
    }
    return false;
}


class LoginForgetForm extends React.Component{

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onSubmit(values);
            }
        });
    };

    goBackHandler = (e) => {
        e.preventDefault();
        this.props.history.replace(this.props.urlLogin)
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        const {phone} = this.props.form.getFieldsValue();

        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className="login-title">Забыли пароль?</div>
                <div className="loginforget-body">
                    Нет проблем. Мы отправим вам инструкцию по сбросу пароля.
                    <FormItem>
                        {getFieldDecorator('phone')(
                            <Input placeholder="Телефон"/>
                        )}
                    </FormItem>
                    {this.props.text}
                </div>
                <div className="login-form-control">
                    <Button disable={!(validatePhone(phone))}
                            htmlType="submit"
                            btnText='Отправить ссылку'
                            size='large'
                            type='gradient'/>
                    <div>Вернуться на страницу <span onClick={this.goBackHandler}
                                                     className="loginforget-backlink">Авторизации</span>
                    </div>
                </div>
            </Form>
        )
    }
}

const LoginForget = Form.create()(LoginForgetForm);

LoginForget.propTypes = {
    text: PropTypes.string,
    urlLogin: PropTypes.string,
    onSubmit: PropTypes.func,
};

LoginForget.defaultProps = {
    text: '',
    urlLogin: '*',
    onSubmit: () => {},
};

export default withRouter(LoginForget)