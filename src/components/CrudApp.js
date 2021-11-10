
import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initialDb = [
{
    id: 1,
    question: "¿Cuál de los siguientes pescados es azul?",
    answer1: "Merluza",
    answer2: "Bacalao",
    answer3: "Rape",
    answer4: "Salmón",
},
{
    id: 2,
    question: "¿Cuál de los siguientes alimentos tiene un alto contenido en vitamina C?",
    answer1: "Pan integral",
    answer2: "Pimientos",
    answer3: "Pescado azul",
    answer4: "Aceite de oliva",
},
{
    id: 3,
    question: "¿Qué beneficios tienen los alimentos integrales?",
    answer1: "Son bajos en calorías",
    answer2: "Son bajos en azúcar",
    answer3: "Son bajos en sal",
    answer4: "Son ricos en fibra alimentaria",
},
];

const CrudApp = () => {

    const [db, setDb] = useState(initialDb);
    const [dataOption,setDataOption] = useState(null);

    const createData = (data) =>{
        data.id = Date.now();
        setDb([...db,data]);
    };

    const updateData = (data) =>{
        let newData = db.map(e => e.id === data.id ? data : e );
        setDb(newData);
    };

    const deleteData = (id) =>{
        let isDelete = window.confirm('¿Estás seguro de eliminar la pregunta?');

        if(isDelete){
            let newData = db.filter(e => e.id !== id);
            setDb(newData);
        }
    };


    return (
        <div className="container mt-5">
            <h1 className="mb-5"> Quiz </h1>
            <CrudForm createData={createData} updateData={updateData} dataOption={dataOption} setDataOption={setDataOption} />
            <CrudTable data={db} setDataOption={setDataOption} deleteData={deleteData} />
        </div>
    )
}

export default CrudApp;