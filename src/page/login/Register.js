import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login, register} from "../../services/userService";

export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            name: "",
            username: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values)
            handleRegister(values).then()
            toast.success('Register Success')
            navigate('/')
        }
    })
    const handleRegister =  async(values)=> {
        let a = await dispatch(register(values))
        console.log(a.payload.data)
        navigate('/')
    }

    return (
        <>
            <div className={'row'}>
                <div className={'offset-lg-3 col-lg-6'} style={{marginTop: '100px'}}>
                    <form onSubmit={formik.handleSubmit} className={'container'}>
                        <div className={'card'}>
                            <div className={'card-header'}>
                                <h2>User Register</h2>
                            </div>
                            <div className= 'card-body'>
                                <div className= 'form-group'>
                                    <label>Name<span style={{color: "red"}}>*</span></label>
                                    <input value={formik.values.name}
                                           onChange={formik.handleChange}
                                           name="name"
                                           className='form-control'/>
                                    {formik.errors.name && formik.touched.name ? (
                                        <div className="text-danger">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div className= 'form-group'>
                                    <label>Username<span style={{color: "red"}}>*</span></label>
                                    <input value={formik.values.username}
                                           onChange={formik.handleChange}
                                           name="username"
                                           className='form-control'/>
                                    {formik.errors.username && formik.touched.username ? (
                                        <div className="text-danger">{formik.errors.username}</div>
                                    ) : null}
                                </div>
                                <div className={'form-group'}>
                                    <label>Password<span style={{color: "red"}}>*</span></label>
                                    <input value={formik.values.password}
                                           onChange={formik.handleChange}
                                           className={'form-control'}
                                           name="password"
                                           type="password"
                                    />
                                    {formik.errors.password && formik.touched.password ? (
                                        <div className="text-danger">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='card-footer'>
                                <button type="submit" className='btn btn-outline-primary'>Submit</button> |
                                <Link className={'btn btn-outline-success'} style={{float: 'right'}} to={'/'}><button>Login</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}