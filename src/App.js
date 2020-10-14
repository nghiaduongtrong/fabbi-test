import { Button, Radio } from 'antd';
import React, { useRef, useState } from 'react';
import Main from './containers/Main';
import FormProvider from './context/FormProvider';
import withFormContext from './context/withFormContext';

const App = (props) => {

  return (
    <FormProvider>
      <Main />
    </FormProvider>

  );
};

export default App;