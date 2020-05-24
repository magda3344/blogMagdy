import React, {Component} from "react";
//import Button from 'react-bootstrap/Button'
import axios from 'axios';
import DisplayComment from "./display-comment.component";
import Form from "react-bootstrap/Form";

export default class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {

            comments: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/comments/')
            .then(res =>{
                this.setState({
                    comments: res.data //zwrot danych
                });
            })
            .catch(error =>{
                console.log(error)
            })
    }
    dataComment(){
        return this.state.comments.map((res ,i) =>{ //map -na każdym artykule stosuje funkcję
            return < Form obj={res} key={i}/>; //komponent jest renderowany, nr artukulu
        });
    }


    render() {
        return (<div>
<Form>
                <p>{this.dataComment()}</p>

                <DisplayComment/>
</Form>
            </div>
        );
    }
}

/*export default class CreateComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {

        axios.get('http://localhost:4000/comments/')
            .then(res =>{
                this.setState({
                    comments: res.data //zwrot danych
                });
            })
            .catch(error =>{
                console.log(error)
            })
    }
    dataComment(){
        return this.state.comments.map((res,i) =>{ //map -na każdym artykule stosuje funkcję
            return < DisplayComment obj={res} key={i}/>; //komponent jest renderowany, nr artukulu
        });
    }

    render() {
        return (<div>

                {this.dataComment()}

            </div>
        );
    }
}
*/
