import React from "react";
import ReactDOM from "react-dom";

export const Image = props => {
    console.log(props.url);
    return <img src={props.url}  alt="Smiley face"></img>;
};



export default class About extends React.Component {
    render() {
        return (

            <div className="image">
                <strong><p>Something about me</p></strong>
                <Image url="https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_960_720.jpg"/>
                <Image url="https://cdn.pixabay.com/photo/2016/09/19/22/46/hut-1681485_960_720.jpg"/>
            </div>
        );
    }};
ReactDOM.render(<About />, document.getElementById("root"));

