import { Form, Input } from 'antd';
import React from 'react';

const Preview = () => {
    return (
        <div>
            <Form>
                <Form.Item label="Meal">
                    <Input />
                </Form.Item>
                <Form.Item label="No of People">
                    <Input />
                </Form.Item>
                <Form.Item label="Restaurant">
                    <Input />
                </Form.Item>
                <Form.Item label="Dishes">
                    
                </Form.Item>
            </Form>
        </div>
    );
};

export default Preview;