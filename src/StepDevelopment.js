import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const StepDevelopment = ({ formData, setFormData, next }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setFormData((prevData) => ({ ...prevData, development: values }));
    next(); // Passer à l'étape suivante après validation
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      id="stepForm"
      initialValues={formData.development}
    >
      <Form.Item
        label="Niveau général en développement Web"
        name="level"
        rules={[{ required: true, message: 'Veuillez indiquer votre niveau' }]}
      >
        <Select>
          <Option value="beginner">Débutant</Option>
          <Option value="intermediate">Intermédiaire</Option>
          <Option value="advanced">Avancé</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Langages connus et niveau" name="knownLanguages">
        <Input.TextArea placeholder="Ex : HTML - Avancé, JavaScript - Débutant..." />
      </Form.Item>
      <Form.Item
        label="Langage souhaité apprendre"
        name="desiredLanguage"
        rules={[{ required: true, message: 'Veuillez choisir un langage' }]}
      >
        <Select>
          <Option value="javascript">JavaScript</Option>
          <Option value="python">Python</Option>
          <Option value="ruby">Ruby</Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default StepDevelopment;
