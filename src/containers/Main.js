import { Button, Radio } from 'antd';
import React, { useEffect, useState } from 'react';
import Preview from '../components/Preview';
import StepOne from '../components/StepOne';
import StepThree from '../components/StepThree';
import StepTwo from '../components/StepTwo';
import withFormContext from '../context/withFormContext';
import data from '../dishes.json';


const Main = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [dishes, setDishes] = useState([]);
    const formContext = props.formContext;

    const onNextStep = () => {
        if ((currentStep === 1 && validateStepOne()) || (currentStep === 2 && validateStepTwo()) || (currentStep === 3 && validateStepThree())) {
            setCurrentStep(currentStep => currentStep + 1);
        };
    }

    const onPreviousStep = () => {
        setCurrentStep(currentStep => currentStep - 1);
    }

    const validateStepOne = () => {
        return formContext.values.meal !== '' && formContext.values.people > 0 && formContext.values.people <= 10;
    }

    const validateStepTwo = () => {
        return formContext.values.restaurant !== '';
    }

    const validateStepThree = () => {
        return formContext.values.dishes.length >= formContext.values.people;
    }

    useEffect(() => {
        setDishes(data.dishes);
    }, []);

    const onSubmit = () => {
        console.log(formContext.values);
    }

    return (
        <div>
            <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Step 1</Radio.Button>
                <Radio.Button value="b">Step 2</Radio.Button>
                <Radio.Button value="c">Step 3</Radio.Button>
                <Radio.Button value="d">Review</Radio.Button>
            </Radio.Group>

            <div>
                {currentStep === 1 && <StepOne />}
                {currentStep === 2 && <StepTwo dishes={dishes} />}
                {currentStep === 3 && <StepThree dishes={dishes} />}
                {currentStep === 4 && <Preview />}
            </div>

            <div>
                {currentStep > 1 && <Button onClick={onPreviousStep}>Previous</Button>}
                {currentStep > 3 ? <Button onClick={onSubmit}>Submit</Button> : <Button onClick={onNextStep}>Next</Button>}

            </div>
        </div>
    );
};

export default withFormContext(Main);