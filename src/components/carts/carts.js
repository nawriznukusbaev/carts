import {useSelector, useDispatch} from "react-redux";
import {add, totalPrice, decrease, remove} from "../../store/actionsCreators";

export function Carts() {
    const carts = useSelector(state => state);
    const dispatch = useDispatch();

    return (<div className={'container'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фото</th>
                    <th scope="col">Количество</th>
                    <th scope="col">Цена</th>
                    <th scope="col">Общая цена</th>
                </tr>
                </thead>
                <tbody>
                {carts.map((item, index) => {
                    return (<tr key={index}>
                        <th scope="row">
                            <button type="button" className="btn btn-danger"
                            onClick={()=>{dispatch(remove(item.id))}}>X
                            </button>
                        </th>
                        <td>{item.name}</td>
                        <td><img src={item.img} className={'mini-img'} alt="img"/></td>
                        <td style={{display: 'flex', flexDirection: "row"}}>
                            <button type="button" className="btn btn-success"
                            onClick={(()=>{dispatch(decrease(item.id))})}>
                                <h4>-</h4>
                            </button>
                            <h3> {item.count} </h3>
                            <button type="button" className="btn btn-success"
                            onClick={() => {dispatch(add(item.id))}}>
                                <h4>+</h4>
                            </button>
                        </td>
                        <td>{item.price}$</td>
                        <td>{item.price*item.count}$</td>
                    </tr>)
                })}


                </tbody>
            </table>
            <div style={{float:"right",margin:"20px"}}>Всего: {totalPrice(carts)}$</div>
        </div>
    );
}