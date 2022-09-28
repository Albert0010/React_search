import {Component} from "react";

export default class Input extends Component{
    render() {
        const {inputValue,handleChange} = this.props;
        return (
                <input value={inputValue}
                       className={"input"}
                       onChange={handleChange}/>
        )
    }
}