import {Link} from "react-router-dom";
import React from "react";
import {useDispatch} from "react-redux";
import {add} from "../../store/actionsCreators";
import {datas} from "../../datas";
export default function Products() {
    const dispatch = useDispatch();

    return (<div className={'container'}>
        <div className={'row'}>
            <div className="card" style={{width: "18rem"}}>
                <img src={datas[0].img} className="card-img-top" alt="React Logo" />
                <div className="card-body">
                    <h5 className="card-title">{datas[0].name}</h5>
                    <p className="card-text">price:{datas[0].price}$</p>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        dispatch(add(1))
                    }}>add
                    </button>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
                <img src={datas[1].img} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{datas[1].name}</h5>
                    <p className="card-text">price:{datas[1].price}$</p>
                    <button type="button" className="btn btn-primary" onClick={() => {
                        dispatch(add(2))
                    }}>add
                    </button>
                </div>
            </div>
        </div>

    </div>)
}