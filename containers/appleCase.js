import React from "react";
import {bindActionCreators } from "redux";
import {connect} from "react-redux";
// import actions from "../actionCreators/actionCreator"
import {EAT_APPLE,PLANT_APPLE} from  "../actionCreators/actionCreator";
import AppleItem from "../components/appleItem";
// import {Button} from "antd"

class AppleCase extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {state , actions}  = this.props;
        // console.log(actions);
        let eaten = {
            count:0,
            weight:0
        };
        state.apples.map(apple=>{
            if(apple.eaten === true){
                eaten["count"]++;
                eaten["weight"]+=apple.weight;
            }
        });
        return (<div>
            <div className="appleCase">
                <span>吃掉{eaten["count"]}个苹果，重量为{eaten["weight"]}克</span>
                {
                    state.apples.map((apple,index) => {
                        if(apple.eaten === false)
                            return <AppleItem key={index} state={apple} eatApple={actions.eatApple}></AppleItem>;
                    })
                }
                <button onClick={()=>actions.plantApple()}>载苹果</button>
            </div>
            {this.props.children}
        </div>)
    }
}
let mapStateToProps = state=>({
    state:state.Apple
});
let mapDispatchToProps = dispatch =>({
    // actions: bindActionCreators(actions, dispatch)
    actions:{
        eatApple:id => dispatch(EAT_APPLE(id)),
        plantApple:()=>dispatch(PLANT_APPLE())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(AppleCase);
