import React from 'react';
import { Descriptions } from 'antd';

const Review = ({ formData }) => {
  const { contact, development, appointment } = formData;

  return (
    <div>
      <h3>Résumé des informations :</h3>
      <Descriptions bordered column={1}>
        {/* Informations de contact */}
        <Descriptions.Item label="Nom">{contact.lastName}</Descriptions.Item>
        <Descriptions.Item label="Prénom">{contact.firstName}</Descriptions.Item>
        <Descriptions.Item label="Genre">{contact.gender === 'male' ? 'Homme' : 'Femme'}</Descriptions.Item>
        <Descriptions.Item label="Date de naissance">{new Date(contact.birthDate).toLocaleDateString()}</Descriptions.Item>
        <Descriptions.Item label="Email">{contact.email}</Descriptions.Item>
        <Descriptions.Item label="Téléphone">{contact.phone}</Descriptions.Item>
        <Descriptions.Item label="Ville">{contact.city}</Descriptions.Item>

        {/* Informations de développement */}
        <Descriptions.Item label="Niveau en développement Web">{development.level}</Descriptions.Item>
        <Descriptions.Item label="Langages connus">{development.knownLanguages}</Descriptions.Item>
        <Descriptions.Item label="Langage à apprendre">{development.desiredLanguage}</Descriptions.Item>

        {/* Informations sur le rendez-vous */}
        <Descriptions.Item label="Motif de rendez-vous">{appointment.reason === 'career_advice' ? 'Conseils de carrière' : 'Aide technique'}</Descriptions.Item>
        <Descriptions.Item label="Date de rendez-vous">{new Date(appointment.appointmentDate).toLocaleDateString()}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Review;
