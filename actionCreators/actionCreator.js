import {createAction} from 'redux-actions';

export default {
    EAT_APPLE : createAction("EAT_APPLE"),
    START_PLANT_APPLE : createAction("START_PLANT_APPLE"),
    END_PLANT_APPLE : createAction("END_PLANT_APPLE"),
    PLANT_APPLE : createAction("PLANT_APPLE",function(){
        return dispatch=>{
            dispatch(createAction("START_PLANT_APPLE")());
            dispatch({
                type:"PLANT_APPLE",
            });
            dispatch(createAction("END_PLANT_APPLE"));
        }
    })
}

