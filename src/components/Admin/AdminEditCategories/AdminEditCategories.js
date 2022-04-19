import { createFactory, useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { URL_CATEGORIES } from "../../../constants";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import ModalNewCategory from "../ModalNewCategory/ModalNewCategory";
const AdminEditCategories = () => {

  const { categories, getCategories, deleteCategories, updateCategory } = useContext(CategoriesContext);
  const [show, setShow] = useState(false);
  useEffect(() => {
    getCategories(URL_CATEGORIES);
  }, []);

  const publicado = (s)=> {
    if(s.state){
      return {
        name: s.name,
        state: false,
      }
    } else {
      return {
        name: s.name,
        state: true,
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
      <h2 className="mt-3 text-center titleColor">Categoria</h2>
        <Form >
          <Col className="m-3 d-flex justify-content-end">
            <Button onClick={handleShow}>Agregar</Button>
          </Col>

          {categories?.map((category, index) => (
            <Row key={index} className="d-flex align-items-center text-center">
              <Col md={6}>
                <Form.Group className="ms-5 mb-3" controlId={category.id}>
                  <Form.Control className="w-50 text-center" type="text" value={category.name} readOnly/>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Button className="me-2" variant={category.state?"primary":"secondary"} onClick={()=>updateCategory(category.id, publicado(category))}>
                {category.state?"Publicado":" -Publicar-"}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteCategories(category.id)}
                >
                  Eliminar
                </Button>
              </Col>
            </Row>
          ))}
          <ModalNewCategory show={show} handleClose={handleClose}/>
        </Form>
      </Container>
    </>
  );
};

export default AdminEditCategories;
