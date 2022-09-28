import {Component} from "react";
import Input from "../Input/Input.js";

const links = ["https://browsecat.net/sites/default/files/armenia-flag-wallpapers-43065-49954-6790269.png","https://ethereumworldnews.com/wp-content/uploads/2018/07/maxresdefault.jpg","https://ethereumworldnews.com/wp-content/uploads/2018/07/maxresdefault.jpg","https://i.artfile.ru/2200x1415_537382_[www.ArtFile.ru].jpg","https://school.sibstrin.ru/img/19136235.png","https://avatars.mds.yandex.net/i?id=497b2a7a0aac690ee95332d88fa712ea-5428196-images-thumbs&n=13"]

let countries = ["Armenia","Brazil","Germany","Argentina","France","Italia",];



export default class Table extends Component{
    constructor(props) {
        super(props);
        this.countriesArr = countries.map((val,index)=> [val,links[index],index]);
        this.state = {
            country:this.countriesArr,
            inputValue:""
        }
    }

    handleChange = (e)=>{
        this.setState({inputValue:e.target.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {inputValue,country} = this.state;

            if(prevState.inputValue !== inputValue){
                if(inputValue.length >=3){
                    this.setState({country:country.filter((val)=> val[0].includes(inputValue))});
                }else {
                    this.setState({country:this.countriesArr});
                }
            }
    }






    render() {
        const {inputValue,country} = this.state;
        return (
            <div className={"cont"} >
                <Input  inputValue = {inputValue}
                        handleChange = {this.handleChange}/>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Flag</th>
                        </tr>
                    </thead>
                    {country.map((val)=>{
                        return (
                            <tbody key={val[2]}>
                                <tr>
                                    <td>{val[0]}</td>
                                    <td><img src={val[1]} className={"image"}/></td>
                                 </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        )
    }
}