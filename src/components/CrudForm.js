
import React, { useState, useEffect } from "react";

const initailForm = {
    id: null,
    question: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: ""
};


const CrudForm = ({ createData, updateData, dataOption, setDataOption }) => {
  
    const [form, setForm] = useState(initailForm);

    useEffect(() => {
        if (dataOption) {
        setForm(dataOption);
        } else {
        setForm(initailForm);
        }
    }, [dataOption]);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.question || !form.answer1 || !form.answer2 || !form.answer3 || !form.answer4 ) {
        alert("Datos incompletos");
        return;
        }

        if (form.id === null) {
        createData(form);
        } else {
        updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initailForm);
        setDataOption(null);
    };

    return (
        <div>
        <h3 className="mb-4">{dataOption ? "Editar" : "Agregar"}</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3" name="question" placeholder="Pregunta" onChange={handleChange} value={form.question} />
            <input type="text" className="form-control mb-3" name="answer1" placeholder="Respuesta 1" onChange={handleChange} value={form.answer1} />
            <input type="text" className="form-control mb-3" name="answer2" placeholder="Respuesta 2" onChange={handleChange} value={form.answer2} />
            <input type="text" className="form-control mb-3" name="answer3" placeholder="Respuesta 3" onChange={handleChange} value={form.answer3} />
            <input type="text" className="form-control mb-3" name="answer4" placeholder="Respuesta 4" onChange={handleChange} value={form.answer4} />
            <div className="hstack gap-3">
                <input type="submit" value="Guardar" className="btn btn-outline-success btn-sm" />
                <div className="vr"></div>
                <input type="reset" value="Limpiar" className="btn btn-outline-info btn-sm" onClick={handleReset} />
            </div>
        </form>
        </div>
    );
};

export default CrudForm;