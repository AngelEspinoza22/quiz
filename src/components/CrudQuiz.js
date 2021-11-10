
import React, { useState, useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import Loader from './Loader';
import Message from './Message';


const CrudQuiz = () => {

    const [db, setDb] = useState(null);
    const [dataOption,setDataOption] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    let api = helpHttp();
    let url = "http://localhost:5000/questions";


    useEffect(()=>{
        setLoading(true);
        helpHttp().get(url).then((res)=>{
            if(!res.err){
                setDb(res);
                setError(null);
            }
            else{
                setDb(null);
                setError(res);
            }

            setLoading(false);
        }); 
    },[url]);


    const createData = (data) => {

        data.id = Date.now();

        let options = {
        body: data,
        headers: { "content-type": "application/json" },
        };

        api.post(url, options).then((res) => {

        if (!res.err) {
            setDb([...db, res]);
        } else {
            setError(res);
        }
        });
    };


    const updateData = (data) => {

        let endpoint = `${url}/${data.id}`;

        let options = {
        body: data,
        headers: { "content-type": "application/json" },
        };

        api.put(endpoint, options).then((res) => {
        if (!res.err) {
            let newData = db.map((el) => (el.id === data.id ? data : el));
            setDb(newData);
        } else {
            setError(res);
        }
        });
    };


    const deleteData = (id) => {

        let isDelete = window.confirm(
        `¿Estás seguro de eliminar la pregunta?`
        );

        if (isDelete) {
        let endpoint = `${url}/${id}`;
        let options = {
            headers: { "content-type": "application/json" },
        };

        api.del(endpoint, options).then((res) => {
            if (!res.err) {
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
            } else {
            setError(res);
            }
        });
        } else {
        return;
        }
    };


    return (
        <div className="container mt-5">

            <h1 className="mb-5"> Quiz </h1>
            <CrudForm createData={createData} updateData={updateData} dataOption={dataOption} setDataOption={setDataOption} />
            {loading && <Loader/>}
            {error && <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />}
            { db && <CrudTable data={db} setDataOption={setDataOption} deleteData={deleteData} />}

        </div>
    )
}

export default CrudQuiz;    