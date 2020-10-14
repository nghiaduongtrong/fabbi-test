import { Button, Form, InputNumber, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import withFormContext from '../context/withFormContext';
import { PlusOutlined } from '@ant-design/icons';
import DishOption from './DishOption';


const StepThree = (props) => {
    const formContext = props.formContext;
    const [dishesOptions, setDishesOptions] = useState([])

    const onChangeSelectRestaurant = (value) => {
        if (typeof value === 'number' && value <= 10 && value >= 0) {

        }
    }

    useEffect(() => {
        findDishes();
    }, []);

    const findDishes = () => {
        const meal = formContext.values.meal;
        const restaurant = formContext.values.restaurant;
        let dishesOptions = [];
        for (const dish of props.dishes) {
            if (dish.availableMeals.includes(meal) && restaurant === dish.restaurant) {
                dishesOptions.push(dish.name);
            }
        }

        setDishesOptions(dishesOptions);
    }

    const addDish = () => {
        const newDish = { name: '', number: 0 };
        let dishes = [...formContext.values.dishes];
        dishes.push(newDish);
        formContext.setValues('dishes', dishes);
    }

    return (
        <div>
            <Form
                layout='vertical'
            >
                {formContext.values.dishes.map((dish, index) => (
                    <DishOption dishesOptions={dishesOptions} data={dish} index={index}/>
                ))}

            </Form>

            <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={addDish} />
        </div>
    );
};

export default withFormContext(StepThree);