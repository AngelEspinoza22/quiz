
import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataOption, deleteData }) => {
  return (
    <div>
      <h3 className="mt-5 mb-3">Tabla de Datos</h3>
      <table className="table table-responsive table-hover table-bordered align-middle">
        <thead>
          <tr className="table-success">
            <th>Pregunta</th>
            <th>Respuesta 1</th>
            <th>Respuesta 2</th>
            <th>Respuesta 3</th>
            <th>Respuesta 4</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? ( data.map((el) => (
              <CrudTableRow key={el.id} el={el} setDataOption={setDataOption} deleteData={deleteData}/> ))) : 
              ( <tr><td colSpan="6">Sin datos</td></tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;