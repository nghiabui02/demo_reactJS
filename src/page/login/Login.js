import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {login} from "../../services/userService";


const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Required'),
    password: Yup.string()
        .required('Required')
});

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit: (values) => {
            console.log(values)
            if (values){
                handleLogin(values).then()
            } else {
                toast.error("Account not exist!")
            }

        }
    })
    const handleLogin =  async(values)=> {
        let a = await dispatch(login(values))
        console.log(a.payload.data)
            if (a.payload.data === "User is not exist" || a.payload.data === "Password is wrong"){
                toast.error("Account not exist!")
                navigate("/")
            }else {
                navigate("/home")
            }
    }

    return (
        <>
            <div className={'row'}>
                <div className={'offset-lg-3 col-lg-6'} style={{marginTop: '100px'}}>
                    <form onSubmit={formik.handleSubmit} className={'container'}>
                        <div className={'card'}>
                            <div className={'card-header'}>
                                <h2>User login</h2>
                            </div>
                            <div className={'card-body'}>
                                <div className={'form-group'}>
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
                                <button type="submit" className='btn btn-outline-primary'>Login</button> |
                                <Link className={'btn btn-outline-success'} style={{float: 'right'}} to={'/register'}><button>Register</button></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
