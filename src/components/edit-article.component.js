import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

export default class EditArticle extends Component {
    constructor(props) {
        super(props);

        this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
        this.onChangeArticleAuthor = this.onChangeArticleAuthor.bind(this);
        this.onChangeArticleContent = this.onChangeArticleContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            content: '',

        }
    }

    onChangeArticleTitle(e) {
        this.setState({title: e.target.value})
    }

    onChangeArticleAuthor(e) {
        this.setState({author: e.target.value})
    }

    onChangeArticleContent(e) {
        this.setState({content: e.target.value})
    }


    componentDidMount() {
        axios.get('http://localhost:4000/articles/edit-article/'+this.props.match.params.id)
            .then(res =>{
                this.setState({
                    title: res.data.title,
                    author: res.data.author,
                    content: res.data.content,
                });
            })
            .catch((error) =>{
                console.log(error)
            })
    }

    onSubmit(e) {
        e.preventDefault()

        const article = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content,
        }

        axios.put('http://localhost:4000/articles/update-article/'+ this.props.match.params.id, article)
            .then(res => {
                console.log(res.data)
                console.log("Updated")
                this.props.history.push('/article-list')
            }).catch(error =>{
            console.log(error)
        });

    }


    render() { //tu tworze formularz
        return (<div className="form-wrapper">

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <strong><Form.Label>Title</Form.Label></strong>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeArticleTitle}/>
                    </Form.Group>

                    <Form.Group controlId="Author">
                        <strong><Form.Label>Author</Form.Label></strong>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeArticleAuthor}/>
                    </Form.Group>

                    <Form.Group controlId="Content">
                        <strong><Form.Label>Content</Form.Label></strong>
                        <Form.Control type="text" value={this.state.content} onChange={this.onChangeArticleContent}/>
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type ="submit">Update Article</Button>

                </Form>

            </div>
        );
    }
}