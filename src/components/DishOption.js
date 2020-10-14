import { Form, InputNumber, Select } from 'antd';
import React from 'react';
import withFormContext from '../context/withFormContext';

const DishOption = (props) => {
    const formContext = props.formContext;
    const dish = formContext.values.dishes[props.index];

    const onChangeSelectDish = (value) => {
        let data = { ...props.data };
        data.name = value;
        let dishes = [...formContext.values.dishes];

        dishes[props.index] = data;

        formContext.setValues('dishes', dishes);
    }

    const onChangeInputNumber = (value) => {
        if (typeof value === 'number' && value <= 10 && value >= 0) {
            let data = { ...props.data };
            data.number = value;
            let dishes = [...formContext.values.dishes];

            dishes[props.index] = data;

            formContext.setValues('dishes', dishes);
        }
    }

    return (
        <div>
            <Form.Item label='Please Select a Restaurant'>
                <Select onChange={onChangeSelectDish} value={dish.name}>
                    {props.dishesOptions.map((option, index) => (
                        <Select.Option key={index} value={option}>{option}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item label='Please Enter Number of people'>
                <InputNumber onChange={onChangeInputNumber} value={dish.number}/>
            </Form.Item>
        </div>
    );
};

export default withFormContext(DishOption);