
import React from "react";

const CrudTableRow = ({ el, setDataOption, deleteData }) => {
  let { id, question, answer1, answer2, answer3, answer4 } = el;

  return (
    <tr>
      <td>{question}</td>
      <td>{answer1}</td>
      <td>{answer2}</td>
      <td>{answer3}</td>
      <td>{answer4}</td>
      <td className="vstack gap-2">
        <button className="btn btn-outline-primary btn-sm" onClick={() => setDataOption(el)}>Editar</button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;