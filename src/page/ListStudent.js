import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function ProductList() {
    const [list, setList] = useState([]);
    const navigate = useNavigate();
    const getAll = () => {
        axios.get('http://localhost:8000/products').then((res) => {
            setList(res.data);
            console.log(res.data)
        })
    }
    // hiện html (render) => dùng axios để lấy dữ liệu (useEffect) => cập nhật html (re-render)
    useEffect(() => {
        getAll()
    }, [])

    return (
        <>

            <h1>Product List</h1>
            <div className={'list'}>
                <table className={'table table-hover'}>
                    <thead>
                    <tr>
                        <th scope="col">Ordinal</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Option</th>
                        <th scope="col"></th>

                    </tr>
                    </thead>
                    {list.map((item, key)=>(
                        <tbody>
                        <tr>
                            <th scope="row">{key+1}</th>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><button className={'btn btn-outline-primary'} onClick={()=> {
                                navigate('edit/'+item.id)
                            }}>Edit</button></td>
                            <td><button className='btn btn-outline-danger' onClick={() => {
                                axios.delete('http://localhost:8000/products/' + item.id).then(() => {
                                    getAll()
                                })
                            }}>Delete</button></td>

                        </tr>
                        </tbody>
                    ))}
                </table>
            </div>
        </>

    )
}

