import {datas} from "../datas";

function reducer(state = [], action) {
    switch (action.type) {
        case 'Action.Increase':
            if (state.find(item => item.id === action.id) === undefined) {

                return [...state, {
                    id:datas[action.id-1].id,
                    name:datas[action.id-1].name,
                    price: datas[action.id-1].price,
                    img:datas[action.id-1].img,
                    count:datas[action.id-1].count
                }];
            } else {
                return state.map(item => {
                    if (item.id === action.id) {
                       item={
                            id: item.id,
                            name:item.name,
                            img:item.img,
                            price:item.price,
                            count:item.count+1
                        };
                       console.log(item);
                       return item
                    }
                    else return item;
                });
            }

        case 'Action.Decrease':
            if(state.find(item=>item.id===action.id)?.count===1){
                return state.filter(item=>item.id!==action.id)
            }else {
                return state.map(item=>{
                    if(item.id===action.id){
                        return {...item,
                            count:item.count-1}
                    } else {
                        return item
                    }
                })
            }
        case 'Action.Remove':
           return  state.filter(item=>item.id!==action.id)
        default:
            return state;
    }
}

export default reducer;