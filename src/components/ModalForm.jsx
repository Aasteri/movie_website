import React, { useContext, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { MovieContext } from '../context/MovieContext';

const ModalForm = () => {
  const { showModal, toggleModal } = useContext(MovieContext);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSwitch = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleChange = (e) => { 
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Handle form submission logic (e.g., authentication)
    // For now, we'll just toggle the modal
    toggleModal();
    alert(`Successfully ${isLogin ? 'logged in' : 'signed up'}!`);
  };

  return (
    <Modal show={showModal} onHide={toggleModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isLogin ? 'Login' : 'Sign-Up'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {!isLogin && (
            <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Button variant="primary" type="submit" className="mt-4" block>
            {isLogin ? 'Login' : 'Sign-Up'}
          </Button>
        </Form>
        <div className="mt-3 text-center">
          <span
            style={{ cursor: 'pointer', color: '#0d6efd' }}
            onClick={handleSwitch}
          >
            {isLogin
              ? "Don't have an account? Sign-Up"
              : 'Already have an account? Login'}
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalForm;
