import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SurveysContext from "../../../context/surveys/SurveysContext";
import "./SurveysCards.css";

const SurveysCards = ({ survey /* id, name, state, category, questions */ }) => {
const {updateSurveys} = useContext(SurveysContext)
const publicado = (s)=> {
  if(s.state){
    return {
      name: s.name,
      state: false,
      questions: s.questions,
      category: s.category,
    }
  } else {
    return {
      name: s.name,
      state: true,
      questions: s.questions,
      category: s.category,
    }
  }
}
  return (
    <Card className="m-1" id={survey.id}>
      <Card.Header as="h5">{survey.name}</Card.Header>
      <Card.Body>
        <Card.Title as="h6">Categoria: {survey.category}</Card.Title>
        <div className="d-flex justify-content-between">
        <Link to={`/surveydetail/${survey.id}`} className="nav-link">Ver Encuesta</Link>
        <div className="d-flex">
        <Button className={survey.state?"me-2 spanSurvaysCardsTrue btnStateTrue p-1":"me-2 spanSurvaysCardsFalse btnStateFalse p-1"} onClick={()=>updateSurveys(survey.id, publicado(survey))}> 
        {survey.state?"Publicado":" -Publicar-"}
        </Button>
        </div>
        </div>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">{`Nro de preguntas: ${survey.questions?.length}`}<span>Fecha:</span></Card.Footer>
    </Card>
  );
};

export default SurveysCards;
