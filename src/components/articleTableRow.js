import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ArticleTableRow extends Component{
    constructor(props) {
        super(props);
        this.deleteArticle=this.deleteArticle.bind(this);
    }
    deleteArticle(){ //funkcja pozwalająca usuwać artykuły
        axios.delete('http://localhost:4000/articles/delete-article/'+this.props.obj._id)
            .then((res)=>{
                console.log("Deleted!")
                window.location.reload();
            }).catch((error) =>{
            console.log(error)
        })
    }
    render() {
        return (<tr className='tabela'>
            <td>{this.props.obj.title}</td>
            <td>{this.props.obj.author}</td>
            <td>{this.props.obj.content}</td>
            <td className='buttons'>
                <Link className="edit-link" to={"/edit-article/"+this.props.obj._id}>
                    Edit
                </Link>
                <Link className="comment" to={"/comment/"+this.props.obj._id}>
                    Comment
                </Link>
                <Button onClick={this.deleteArticle} size="sm" variant="danger">Delete</Button>
            </td>
        </tr>);
    }

    //  window.location.reload();  odświeża stronę, po naciśnięciu delete artykuł od razu znika
}
