import React from "react";

class AppleItem extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {state,eatApple}  = this.props;
        return (<div>
            <div className="appleItem">
                <span>{state.weight}g</span>
                <button onClick={()=>eatApple(state.id)}>吃苹果</button>
            </div>
        </div>)
    }
}

export default AppleItem;
