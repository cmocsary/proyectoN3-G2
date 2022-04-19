import { useContext, useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CategoriesContext from "../../../context/categories/CategoriesContext";
import ModalNewCategory from "../ModalNewCategory/ModalNewCategory";
import './AdminEditCategories.css'

const AdminEditCategories = () => {
  const { categories, getCategories, deleteCategories, updateCategory } = useContext(CategoriesContext);
  const [categoryAct, setEditCategory] = useState(null)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getCategories();
  }, []);

  const handleClick = (e) => {
    updateCategory(e.target.id);
  }

  // const enviaDatos = (category)=>{
  //     if(category.state){
  //       setEditCategory({
  //         id: category.id,
  //         name: category.name,
  //         state: false
  //       })
  //       return categoryAct
  //     } else {
  //       setEditCategory({
  //         id: category.id,
  //         name: category.name,
  //         state: true
  //       })
  //       return categoryAct
  //     }
  //   }
  //   let cont = 1
  //   if (categoryAct != null && cont < 2) {
  //     cont+=1
  //     updateCategory(categoryAct.id, categoryAct)
  //   }
  
  

  return (
    <>
      <Container className="admin-edit">
      <h2 className="mt-5 text-center form-title">Categorias</h2>
        <Form >
          <Col className="m-3 d-flex justify-content-center">
            <Button className="glow-on-hover btn-admin-edit" onClick={handleShow}>Agregar</Button>
          </Col>

          {categories?.map((category, index) => (
            <Row key={index} className="d-flex justify-content-center align-items-center text-center btn-published">
              <Col md={6} className="d-flex justify-content-center align-items-center text-center">
                <Form.Group className="ms-5 mb-3">
                  <Form.Control className="d-flex justify-content-center align-items-center w-5 text-center" type="text" value={category.categoryName} readOnly/>
                </Form.Group>
              </Col>
              <Col className="d-flex justify-content-center align-items-center" md={6}>
                {
                  category.state ? <Button variant="success" disabled>Publicado</Button> : (
                    <Button id={category._id} variant="primary" onClick={handleClick} /*onClick={()=>enviaDatos(category)}*/>Publicar</Button>
                  ) 
                }
                {/* // <Button className="me-2" variant={category.state?"primary":"secondary"} onClick={()=>enviaDatos(category)}>
                // {category.state?"Publicado":" -Publicar-"}
                // </Button>
                // <Button
                //   variant="danger"
                //   onClick={() => deleteCategories(category.id)}
                // >
                //   Eliminar
                // </Button> */}
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
