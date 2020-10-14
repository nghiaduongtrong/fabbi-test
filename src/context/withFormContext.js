import { FormContext } from 'antd/lib/form/context';
import React from 'react';

const withFormContext = (Component) => {
    return function FormComponent(props) {
        return <FormContext.Consumer>
            {context => <Component {...props}  {...context} />}
        </FormContext.Consumer>
    }
};

export default withFormContext;