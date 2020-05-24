import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Form from "react-bootstrap/Form";
//import {Link} from 'react-router-dom'

export default class DisplayComment extends Component{
    constructor(props) {
        super(props);
        this.deleteComment=this.deleteComment.bind(this);
    }
    deleteComment(){ //funkcja pozwalająca usuwać komentarze
        axios.delete('http://localhost:4000/comments/delete-comment/'+this.props.obj._id)
            .then((res)=>{
                console.log("Deleted!")
                window.location.reload();
            }).catch((error) =>{
            console.log(error)
        })
    }
    render() {
        return (
            <Form>

                <Button onClick={this.deleteComment} size="sm" variant="danger">Delete</Button>
            </Form>
       );
    }

    //  window.location.reload();  odświeża stronę, po naciśnięciu delete artykuł od razu znika
}


/*  <p>{this.props.obj.name}</p>
                <p>{this.props.obj.comment}</p>
                */
