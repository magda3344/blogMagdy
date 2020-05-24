import React, {Component} from "react";
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import Form from "react-bootstrap/Form";
import CreateComment from './create-comment.component';

export default class Comment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            author: '',
            content: '',
            name: '',
            comment: ''
        }
    }

    AddName = (e) => {
        this.setState({name: e.target.value});
    }
    AddComment = (e) => {
        this.setState({comment: e.target.value});
    }

    componentDidMount() {
        axios.get('http://localhost:4000/articles/comment/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    content: res.data.content,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }
    onSubmit = (e) => {
        e.preventDefault() //gdy chcemy narzucić własną akcję, nie cały formularz

        const comm = {
            name: this.state.name,
            comment: this.state.comment,
        }

        axios.post('http://localhost:4000/comments/comment', comm) //gdzie chcemy przesłać zapytanie
            //komukikacja między klientem a serwerem, wysyłamy żadanie, post-prześlij nowe dane na serwer
            .then(res => console.log(res.data)) //to co chcemy otrzymać, jak dostajemy odpowiedz

        this.setState({ //czyszczenie stanu formularza
            name: '',
            comment: ''
        })

    }


    render() {
        return (<div>

                <Form>
                    <p><strong>Title: </strong>{this.state.title}</p>
                    <p><strong>Author: </strong>{this.state.author}</p>
                    <p><strong>Content: </strong>{this.state.content}</p>
                    <p style={{color: 'darkblue', paddingTop: 40}}><strong>Add your comment to the article</strong></p>
                </Form>
           <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Control size="sm" type="text" placeholder="Your Name" value={this.state.name} onChange={this.AddName}/>
                    </Form.Group>
                    <Form.Group controlId="Comment">
                        <Form.Control as="textarea" type='text' rows='2' placeholder="Add your comment" value={this.state.comment} onChange={this.AddComment}/>
                    </Form.Group>
                    <Button variant="primary" size="sm" type="submit">Submit</Button>
                </Form>

            <div><CreateComment/></div>

            </div>
        );
    }
}




//<Form onSubmit={this.onSubmit}>
/* <Form onSubmit={this.onOnSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Control size="sm" type="text" placeholder="Your Name"/>
                    </Form.Group>
                    <Form.Group controlId="Comment">
                        <Form.Control as="textarea" type='text' rows='2' placeholder="Add your comment"/>
                    </Form.Group>
                    <Button variant="primary" size="sm" type="submit">Submit</Button>
                </Form>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <strong><Form.Label>Name</Form.Label></strong>
                        <Form.Control type="text" value={this.state.name} onChange={this.AddName}/>
                    </Form.Group>

                    <Form.Group controlId="Comment">
                        <strong><Form.Label>Comment</Form.Label></strong>
                        <Form.Control type="text" value={this.state.comment} onChange={this.AddComment}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">Delete</Button>

                </Form>
*/