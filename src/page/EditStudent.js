import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function EditStudent() {
    const {id} = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState()
    useEffect(() => {
        getOne()
    }, [])
    const getOne = () => {
        axios.get('http://localhost:3000/students/' + id).then((res) => {
            setData(res.data);
        })
    }
    return (
        <Formik
            initialValues={
                data
            }
            enableReinitialize={true}
            onSubmit={(values) => {
                axios.put('http://localhost:3000/students/' + id, values).then(()=> {
                    navigate('/user')
                })
            }}>
            <Form>
                <Field type={'text'} name={'name'}></Field>
                <Field type={'text'} name={'description'}></Field>
                <Field type={'text'} name={'action'}></Field>
                <button>Save</button>
            </Form>
        </Formik>
    )
}
