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
                <Image url="https://cdn.pixabay.com/photo/2020/05/05/14/59/landscape-5133425_960_720.jpg"/>
                <Image url="https://images.unsplash.com/photo-1508138221679-760a23a2285b"/>
            </div>
        );
    }};
ReactDOM.render(<About />, document.getElementById("root"));

