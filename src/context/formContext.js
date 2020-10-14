import React from 'react';

export const FormContext = React.createContext({
    formContext: {
        values: {
            meal: '',
            people: '',
            restaurant: '',
            dishes: [],
        },
        setValues: () => { }
    }
});