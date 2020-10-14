import { FormContext } from 'antd/lib/form/context';
import React from 'react';
import { useForm } from '../customHooks/useForm';

const FormProvider = (props) => {
    const [values, setValues] = useForm({
        meal: '',
        people: '',
        restaurant: '',
        dishes: [{name: '', number: 0}]
    });

    return (
        <FormContext.Provider value={{
            formContext: {
                values: {...values},
                setValues
            }
        }}>
            {props.children}
        </FormContext.Provider>
    );
};

export default FormProvider;