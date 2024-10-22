import React, { useState } from 'react';
import { Steps, Button, message } from 'antd';
import StepContact from './StepContact';
import StepDevelopment from './StepDevelopment';
import StepAppointment from './StepAppointment';
import Review from './Review';

const { Step } = Steps;

const App = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    contact: {},
    development: {},
    appointment: {},
  });

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const submitForm = () => {
    console.log(formData);
    message.success('Formulaire soumis avec succès, vous serez contacté prochainement.');
  };

  const steps = [
    {
      title: 'Contact',
      content: (
        <StepContact
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      ),
    },
    {
      title: 'Développement',
      content: (
        <StepDevelopment
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      ),
    },
    {
      title: 'Prise de rendez-vous',
      content: (
        <StepAppointment
          formData={formData}
          setFormData={setFormData}
          next={next}
        />
      ),
    },
    {
      title: 'Révision',
      content: <Review formData={formData} />,
    },
  ];

  return (
    <div style={{ maxWidth: 800, margin: '50px auto' }}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" form="stepForm" htmlType="submit">
            Suivant
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={submitForm}>
            Soumettre
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={prev}>
            Précédent
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;
