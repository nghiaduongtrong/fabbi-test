import { Form, InputNumber, Select } from 'antd';
import React from 'react';
import withFormContext from '../context/withFormContext';

const StepOne = (props) => {
    const formContext = props.formContext;

    const onChangeInputPeople = (value) => {
        if (typeof value === 'number' && value <= 10 && value >= 0) {
            formContext.setValues('people', value);
        }
    }

    const onChangeSelectMeal = (value) => {
        formContext.setValues('meal', value);
    }

    return (
        <div>
            <Form
                layout='vertical'
            >
                <Form.Item label='Please Select a meal'>
                    <Select onChange={onChangeSelectMeal} value={formContext.values.meal}>
                        <Select.Option key='breakfast' value='breakfast'>Breakfast</Select.Option>
                        <Select.Option key='lunch' value='lunch'>Lunch</Select.Option>
                        <Select.Option key='dinner' value='dinner'>Dinner</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label='Please Enter Number of people'>
                    <InputNumber value={formContext.values.people} onChange={onChangeInputPeople} />
                </Form.Item>
            </Form>
        </div>
    );
};

export default withFormContext(StepOne);