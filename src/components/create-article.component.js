import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import FieldValidationResults from "./FieldValidationResults";
//import { validate } from 'validate.js';

export default class CreateArticle extends Component {
    constructor(props) {
        super(props);

        // this.onChangeArticleTitle = this.onChangeArticleTitle.bind(this);
        //this.onChangeArticleAuthor = this.onChangeArticleAuthor.bind(this);
        //this.onChangeArticleContent = this.onChangeArticleContent.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            author: '',
            content: '',
            errormessagetitle: '',
            errormessageauthor: '',
            errormessagecontent: ''
        }
    } //dla każdego pola chcemy podpiąć obsługę zmiany stanu



    onChangeArticleTitle = (e) => { //jak zmieni się tytuł artykułu wykonaj to, e-event-zdarzenie, target-pole zmienione

        const newTitle = e.target.value;
        const updatedState = {title: newTitle, errormessagetitle: ''}; //albo to albo to

        if (newTitle.length <= 2) {
            updatedState.errormessagetitle = 'Length of title must be higher than 2 characters';
        }
        if (newTitle.length >= 10) {
            updatedState.errormessagetitle = 'Length of title must be lower than 10 characters';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
    }

//this.setState({title: e.target.value}) //setState ustawiamy stan

    /* if ($('#lastName').val().length < 1) {
     this.setError("lastName", "Please enter your last name");
     hasErrors = true;
 } else this.setError("lastName", null) */
//https://stackoverflow.com/questions/41348459/regex-in-react-email-validation
    //http://kursjs.pl/kurs/formularze/formularze-walidacja.php
    //https://blog.mailtrap.io/react-native-email-validation/

    onChangeArticleAuthor = (e) => {
        const reg =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        ///^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        ///^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        ///^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        const newAuthor = e.target.value;

        if (newAuthor !== reg) {
            this.setState({errormessageauthor: 'email address is not valid'});
        }else this.setState(newAuthor);
    }

    onChangeArticleContent = (e) => {
        const newContent = e.target.value;
        const updatedState = {content: newContent, errormessagecontent: ''}; //albo to albo to

        if (newContent.length <= 2) {
            updatedState.errormessagecontent = 'Length of content must be higher than 2 characters';
        }
        if (newContent.length >= 10) {
            updatedState.errormessagecontent = 'Length of content must be lower than 10 characters';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
    }


    onSubmit = (e) => {
        e.preventDefault() //gdy chcemy narzucić własną akcję

        const article = {
            title: this.state.title,
            author: this.state.author,
            content: this.state.content,
        }

        axios.post('http://localhost:4000/articles/create-article', article) //gdzie chcemy przesłać zapytanie
            //komukikacja między klientem a serwerem, wysyłamy żadanie, post-prześlij nowe dane na serwer
            .then(res => console.log(res.data)) //to co chcemy otrzymać, jak dostajemy odpowiedz

        this.setState({ //czyszczenie stanu formularza
            title: '',
            author: '',
            content: ''
        })
    }

    render() { //tu tworze formularz
        return (<div className="form-wrapper">

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeArticleTitle}/>
                        <FieldValidationResults fieldErrorText={this.state.errormessagetitle} />
                    </Form.Group>


                    <Form.Group controlId="Author">
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeArticleAuthor}/>
                    </Form.Group>
                    <p>{this.state.errormessageauthor}</p>

                    <Form.Group controlId="Content">
                        <Form.Label>Content</Form.Label>
                        <Form.Control type="text" value={this.state.content} onChange={this.onChangeArticleContent}/>
                    </Form.Group>
                    <p>{this.state.errormessagecontent}</p>

                    <Button variant="danger" size="lg" block="block" type ="submit">Create Article</Button>

                </Form>
            </div>
        );
    }
}