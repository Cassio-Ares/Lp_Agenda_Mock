import "./CardDescription.scss";
import Button from "../Button";

const CardDescription = ({ dataTask }) => {
  console.log(dataTask);
 /*localização para ajudar na ajuda, este é o card que quero que apareça com a descrição dos dados
 os dados chegam até aqui porem ao clicar ele mostra sempre o mesmo card */




  return (
    <div className="containerCard">
      <h1>{dataTask.title}</h1>
      <p>
        <strong>Descrição</strong>: {dataTask.description}
      </p>
      <p>
        <span>
          <strong>Horario</strong>:{dataTask.hour}
        </span>
        <br />
        <span>
          <strong>Data</strong>: {dataTask.date}
        </span>
      </p>
      <div className="container-btn">
        <Button text="Excluir" styles="btnCard_nao" />
        {/* event={onclickNo}  */}
        <Button text="Editar" styles="btnCard_sim" />
        {/* event={onclickYes} */}
      </div>
    </div>
  );
};

export default CardDescription;
