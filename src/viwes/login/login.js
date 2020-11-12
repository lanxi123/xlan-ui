import React, { Component,useEffect  } from 'react'
import { Form, Input, Button, Checkbox,Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import {setlogin} from './login-api'

export default class login extends Component {
    constructor() {
        super()
        this.state = {
            log:1
        }
    }
    onFinish = async (values)=> {
       const {resultObject} = await setlogin({
           username:values.username,
           password:values.password
       })
        console.log(resultObject)
    }
    
    render() {
        return (
            <div className="ccen">
                <Card style={{ width: 400 }} className="ccenter">
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名',
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="" style={{float:'right'}}>
                                点击注册
                            </a>
                        </Form.Item>

                        <Form.Item style={{textAlign:'center'}}>
                            <Button style={{width:'80%'}} type="primary" htmlType="submit"  className="login-form-button">
                                登录 Log
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}

