import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../shared/Modal';
import '../shared/modal.css';
import './contactme.css';

const ContactMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    handleCloseModal();
  };

  return (
    <div className="contactme-container">
      <h1>Contact Me</h1>
      <button className="brown-button" onClick={handleOpenModal}>Open Modal</button>
      
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>For more information</h2>
        <form className="contactme-form" onSubmit={handleSubmit(onSubmit)}>
          <label className="contactme-label">Name</label>
          <input className="contactme-input" type="text" {...register("name", { required: true })} />
          {errors.name && <span className="contactme-error">This field is required</span>}

          <label className="contactme-label">Email</label>
          <input className="contactme-input" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="contactme-error">This field is required</span>}

          <label className="contactme-label">Telephone</label>
          <input className="contactme-input" type="tel" {...register("telephone", { required: true })} />
          {errors.telephone && <span className="contactme-error">This field is required</span>}

          <label className="contactme-label">City and Country</label>
          <input className="contactme-input" type="text" {...register("cityCountry", { required: true })} />
          {errors.cityCountry && <span className="contactme-error">This field is required</span>}

          <button className="brown-button contactme-button" type="submit">Submit</button>
        </form>
        <button className="contactme-close-button" onClick={handleCloseModal}>X</button>
      </Modal>
      <footer>
        <div>
          <h3>Social Networks</h3>
          <ul>
            <li>
              <a href="https://github.com/Lapecru64" target="_blank">
              <box-icon type='logo' name='github' size="100px"></box-icon>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/laura-perez-45560523a/" target="_blank" className="footer__link">
              <box-icon type='logo' name='linkedin-square' size="100px"></box-icon>
              </a>
            </li>
            <li>
              <a href="mailto:perlaura64@outlook.com" className="footer__link">
                <box-icon name='mail-send' size="100px"></box-icon>
              </a>
            </li>
            <li>
              <a href="/src/utilits/Curriculum%20Vitae.pdf" target="_blank" rel="noopener noreferrer" download>
                Download My CV
              </a>
            </li>
            <li>
              <a href="/src/utilits/CV%20ATS%20LPC.pdf" target="_blank" rel="noopener noreferrer" download>
                Download ATS CV
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default ContactMe;
