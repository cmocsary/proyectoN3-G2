import { Form, Image } from "react-bootstrap";

const FormGroupQuestionWithImage = ({ question, index }) => {
  return (
    <Form.Group key={`image${index}`} controlId={index} className="mb-3">
      <Form.Control label="Pregunta imagen" type="text" />
      <Image src=""/>
    </Form.Group>
  );
};

export default FormGroupQuestionWithImage;
