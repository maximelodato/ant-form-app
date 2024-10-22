import React from 'react';
import { Form, Input, DatePicker, Radio } from 'antd';

const StepContact = ({ formData, setFormData, next }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, contact: values }));
    next(); // Passer à l'étape suivante après validation
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      id="stepForm"
      initialValues={formData.contact}
    >
      <Form.Item
        label="Nom"
        name="lastName"
        rules={[{ required: true, message: 'Veuillez entrer votre nom' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Prénom"
        name="firstName"
        rules={[{ required: true, message: 'Veuillez entrer votre prénom' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Genre"
        name="gender"
        rules={[{ required: true, message: 'Veuillez sélectionner votre genre' }]}
      >
        <Radio.Group>
          <Radio value="male">Homme</Radio>
          <Radio value="female">Femme</Radio>
          <Radio value="other">Autre</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Date de naissance"
        name="birthDate"
        rules={[{ required: true, message: 'Veuillez sélectionner votre date de naissance' }]}
      >
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Veuillez entrer un email valide' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Téléphone"
        name="phone"
        rules={[{ required: true, message: 'Veuillez entrer votre numéro de téléphone' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ville"
        name="city"
        rules={[{ required: true, message: 'Veuillez entrer votre ville' }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default StepContact;
