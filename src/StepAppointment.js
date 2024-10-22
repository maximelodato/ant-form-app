import React from 'react';
import { Form, Select, DatePicker } from 'antd';

const { Option } = Select;

const StepAppointment = ({ formData, setFormData, next }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, appointment: values }));
    next(); // Passer à l'étape suivante après validation
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      id="stepForm"
      initialValues={formData.appointment}
    >
      <Form.Item label="Motif de rendez-vous" name="reason">
        <Select>
          <Option value="career_advice">Conseils de carrière</Option>
          <Option value="technical_help">Aide technique</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date souhaitée pour le rendez-vous" name="appointmentDate">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  );
};

export default StepAppointment;
