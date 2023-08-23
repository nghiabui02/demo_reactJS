import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddProduct() {
    const navigate =useNavigate()
    return (
        <>
            <Formik initialValues={{
                title: '',
                price:'',
                description: ''
            }} onSubmit={(values)=>{axios.post('http://localhost:8000/products', values).then(()=>{
                alert('them thanh cong')
                navigate('/home')
            })}}>
                <div className="container">
                    <h1>
                       Add a new product
                    </h1>
                    <div className="row">
                        <Form className={'myForm'}>
                            <div>
                                <label>Title</label>
                                <div className="input-data">
                                    <Field className={'myInput'} type="text" name={'title'}/>
                                </div>
                                <label>Price</label>
                                <div className="input-data">
                                    <Field className={'myInput'} type="text" name={'price'}/>
                                </div>
                                <label>Description</label>
                                <div className="input-data">
                                    <Field className={'myInput'} type="text" name={'description'}/>
                                </div>
                                <div className={'buttonSave'}>
                                    <button className={'btn btn-outline-primary'}>Save</button>
                                </div>

                            </div>
                        </Form>
                    </div>
                </div>
            </Formik>

        </>
    )
}