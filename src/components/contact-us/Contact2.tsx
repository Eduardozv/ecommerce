"use client";
import React, { useState } from "react";
import { Col, Form, Row, Spinner } from "react-bootstrap";
import {
  FaEnvelope,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import constants from "@/utility/constants";
import emailjs from "emailjs-com";

const Contact = () => {
  const [validated, setValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para éxito
  const [isError, setIsError] = useState(false); // Estado para error
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setIsLoading(true); // Activar el loader
      const formData = {
        fname: form.fname.value,
        umail: form.umail.value,
        phone: form.phone.value,
        message: form.exampleFormControlTextarea1.value,
      };

      // Enviar correo al administrador
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // Service ID
          process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || "", // Template ID para el administrador
          {
            from_name: formData.fname,
            from_email: formData.umail,
            phone: formData.phone,
            message: formData.message,
            to_email: constants.mail2,
            title: formData.fname,
            name: formData.fname,
          },
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "" // User ID
        )
        .then(
          (result) => {
            console.log("Correo al administrador enviado correctamente.");
            setIsSubmitted(true); // Cambiar estado a éxito
            setIsError(false); // Asegurarse de que no haya error
          },
          (error) => {
            console.error("Error al enviar el correo al administrador:", error.text);
            setIsError(true); // Cambiar estado a error
            setIsSubmitted(false); // Asegurarse de que no haya éxito
          }
        )
        .finally(() => {
          setIsLoading(false); // Desactivar el loader
        });
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
          </Row>
          <Row className="p-t-80">
            <Col md={6}>
              <iframe src="//maps.google.com/maps?q=-34.89487750313468, -56.17222910674555&z=13&output=embed"></iframe>
            </Col>
            <Col md={6}>
              {isSubmitted ? ( // Mostrar mensaje de éxito
                <div className="gi-contact-form-confirmation text-center">
                  <img
                    src="/assets/img/email/confirmation.png" // Ruta del ícono verde
                    alt="Mensaje enviado"
                    style={{ width: "100px", marginBottom: "20px" }}
                  />
                  <h4>¡Mensaje enviado!</h4>
                  <p>Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
              ) : isError ? ( // Mostrar mensaje de error
                <div className="gi-contact-form-confirmation text-center">
                  <img
                    src="/assets/img/email/errorMail.png" // Ruta del ícono de error
                    alt="Error al enviar"
                    style={{ width: "100px", marginBottom: "20px" }}
                  />
                  <h4>¡Error al enviar!</h4>
                  <p>Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente. O contáctanos por Whatsapp.</p>
                </div>
              ) : (
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
                      pattern="^\+?1?\d{9,15}$"
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
                  <button type="submit" className="gi-btn-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />&nbsp; 
                        Enviando...
                      </>
                    ) : (
                      "Enviar"
                    )}
                  </button>
                </Form>
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
