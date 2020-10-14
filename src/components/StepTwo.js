import { Form, Select } from 'antd';
import React, { useEffect, useState } from 'react';
import withFormContext from '../context/withFormContext';


const StepTwo = (props) => {
    const formContext = props.formContext;
    const [restaurants, setRestaurants] = useState([]);

    const onChangeSelectRestaurant = (value) => {
        formContext.setValues('restaurant', value);
    }

    useEffect(() => {
        findRestaurants();
    }, [])

    const findRestaurants = () => {
        const meal = formContext.values.meal;
        let restaurantsData = [];
        for (const dish of props.dishes) {
            if (dish.availableMeals.includes(meal) && !restaurantsData.includes(dish.restaurant)) {
                restaurantsData.push(dish.restaurant);
            }
        }

        setRestaurants(restaurantsData);
    }

    return (
        <div>
            <Form
                layout='vertical'
            >
                <Form.Item label='Please Select a Restaurant'>
                    <Select onChange={onChangeSelectRestaurant} value={formContext.values.restaurant}>
                        {restaurants.map((restaurant, index) => (
                            <Select.Option key={index} value={restaurant}>{restaurant}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>


        </div>
    );
};

export default withFormContext(StepTwo);