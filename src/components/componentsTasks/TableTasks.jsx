import "./TableTasks.scss";
import { FaTrash, FaPen } from "react-icons/fa6";
import CardAdd from "../Cards/CardAdd";
import CardDel from "../Cards/CardDel";
import { useState } from "react";
import CardDescription from "../Cards/CardDescription";

const TableTasks = ({ dataTask = [], removeTask }) => {
  const [del, setDel] = useState(false);
  const [edit, setEdit] = useState(false);

  const [show, setShow] = useState(false);

  // States para negar
  function delet() {
    setDel(!del);
  }

  function edite() {
    setEdit(!edit);
  }

  //const para remover (new)
  const deletYes = (e) => {
    e.preventDefault();
    removeTask(data);
  };

  //mostrar card
  function appear() {
    setShow(true);
  }

  //sumir card
  function disappear() {
    //setShow(false);
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>Tarefa</th>
            <th>Status</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dataTask.map((dataTask, id) => {
            return (
              <tr key={id}>
                <td
                  onClick={appear}
                  onMouseOut={disappear}
                  className="table_pg"
                >
                  {dataTask.title}

                  {show === true && (
                  <CardDescription dataTask={dataTask} />
                 )}
                </td>

                <td className="td_checkbox">
                  <input className="checkbox" type="checkbox" />
                  <label className="checkbox_Label" htmlFor="checkbox">
                  </label>
                </td>

                <td className="icons">
                  <FaPen onClick={edite} />
                  {edit === true && <CardAdd onclickNo={edite} />}
                  <FaTrash onClick={delet} />
                  {del === true && (
                    <CardDel onclickNo={delet} onclickYes={deletYes} />
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableTasks;
