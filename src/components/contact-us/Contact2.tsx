"use client";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import constants from "@/utility/constants";
import emailjs from "emailjs-com";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const formData = {
        fname: form.fname.value,
        umail: form.umail.value,
        phone: form.phone.value,
        message: form.exampleFormControlTextarea1.value,
      };

      // Enviar correo al administrador
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
          "ADMIN_TEMPLATE_ID", // Reemplaza con tu Template ID para el administrador
          {
            from_name: formData.fname,
            from_email: formData.umail,
            phone: formData.phone,
            message: formData.message,
            to_email: constants.mail, // Correo del administrador
            title: "Consulta de " + formData.fname,
          },
          "YOUR_USER_ID" // Reemplaza con tu User ID
        )
        .then(
          (result) => {
            console.log("Correo al administrador enviado correctamente.");
          },
          (error) => {
            console.error("Error al enviar el correo al administrador:", error.text);
          }
        );

      // Enviar correo de confirmación al usuario
      emailjs
        .send(
          "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
          String(process.env.REACT_APP_EMAILJS_EMAIL_TO_USER_AUTOREPLAY_TEMPLATE_ID), // Reemplaza con tu Template ID para el usuario
          {
            to_name: formData.fname,
            to_email: formData.umail,
            message: "Gracias por contactarnos. Hemos recibido tu consulta y te responderemos a la brevedad.",
          },
          "YOUR_USER_ID" // Reemplaza con tu User ID
        )
        .then(
          (result) => {
            alert("Correo de confirmación enviado al usuario.");
          },
          (error) => {
            console.error("Error al enviar el correo de confirmación:", error.text);
          }
        );
    }

    setValidated(true);
  };

  return (
    <>
      <section className="gi-contact padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Ponte en <span>Contacto</span>
            </h2>
            <p>
              Estamos disponibles para responder tus consultas y ayudarte en lo que necesites.
            </p>
          </div>
          <Row className="gi-contact-detail m-tb-minus-12">
            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true">
                      <FaEnvelope />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Email</h3>
                    <p>
                      <a className="contact-link" href={"mailto:" + constants.mail}>
                        {constants.mail}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>
            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-mobile" aria-hidden="true">
                      <FaMobileAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Contacto</h3>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; 
                      <a
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="contact-link"
                        href={constants.whatsapp}
                      >
                        {constants.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12 m-auto">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true">
                      <FaMapMarkerAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Dirección</h3>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        <FaMapMarkerAlt />
                      </i>{" "}
                      &nbsp; {constants.address}
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>
          </Row>
          <Row className="p-t-80">
            <Col md={6}>
              <iframe src="//maps.google.com/maps?q=-34.89487750313468, -56.17222910674555&z=13&output=embed"></iframe>
            </Col>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Nombre Completo"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresar tu nombre completo.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="umail"
                    placeholder="Email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresar tu email correctamente.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Número de Teléfono"
                    pattern="^\+?1?\d{10,15}$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresar un número de teléfono válido.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Mensaje"
                    required
                  ></textarea>
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresar tu mensaje.
                  </Form.Control.Feedback>
                </Form.Group>
                <button type="submit" className="gi-btn-2">
                  Enviar
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
