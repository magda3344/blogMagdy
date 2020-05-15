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
            errormessagecontent: '',
            errormessaseall: ''
        }
    } //dla każdego pola chcemy podpiąć obsługę zmiany stanu



    onChangeArticleTitle = (e) => { //jak zmieni się tytuł artykułu wykonaj to, e-event-zdarzenie, target-pole zmienione

        const newTitle = e.target.value;
        const updatedState = {title: newTitle, errormessagetitle: ''}; //albo to albo to
        const reg =/^[A-Z]/;

        if (newTitle !=="" && newTitle.length <= 2) {
            updatedState.errormessagetitle = 'Length of title must be higher than 2 characters';
        }
        if (newTitle !=="" && newTitle.length >= 10) {
            updatedState.errormessagetitle = 'Length of title must be lower than 10 characters';
        }
        if (newTitle !=="" && !reg.test(newTitle)) {
            updatedState.errormessagetitle= 'Title must start with a capital letter';
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
        const reg =/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-.]+)+$/;
        ///^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        ///^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        ///^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
        const newAuthor = e.target.value;
        const updatedState = {author: newAuthor, errormessageauthor: ''};

        if (!reg.test(newAuthor)) {
           updatedState.errormessageauthor= 'email address is not valid';
        }
        this.setState(updatedState);
    }

    onChangeArticleContent = (e) => {
        const newContent = e.target.value;
        const updatedState = {content: newContent, errormessagecontent: ''}; //albo to albo to

        if (newContent.length <= 2) {
            updatedState.errormessagecontent = 'Length of content must be higher than 2 characters';
        }
        if (newContent.length >= 40) {
            updatedState.errormessagecontent = 'Length of content must be lower than 40 characters';
        }
        this.setState(updatedState); //wyswietli nowy tytuł i error jak bedzie
    }


    onSubmit = (e) => {
        e.preventDefault() //gdy chcemy narzucić własną akcję, nie cały formularz

        const bad = 'The article was not created !!! Complete the form correctly !!!';

        if (this.state.errormessagetitle===''&& this.state.title !==''
            && this.state.errormessageauthor===''&& this.state.author !==''
            && this.state.errormessagecontent===''&& this.state.content !=='')
        {
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
                content: '',
                errormessageall:''
            })
        } else {
            this.setState({errormessaseall: bad});
            }
        }



    render() { //tu tworze formularz
        return (<div className="form-wrapper">

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Title">
                        <strong><Form.Label>Title</Form.Label></strong>
                        <Form.Control type="text" value={this.state.title} onChange={this.onChangeArticleTitle}/>
                        <FieldValidationResults fieldErrorText={this.state.errormessagetitle} />
                    </Form.Group>


                    <Form.Group controlId="Author">
                        <strong><Form.Label>Author (e-mail address)</Form.Label></strong>
                        <Form.Control type="text" value={this.state.author} onChange={this.onChangeArticleAuthor}/>
                    </Form.Group>
                    <p>{this.state.errormessageauthor}</p>

                    <Form.Group controlId="Content">
                        <strong><Form.Label>Content</Form.Label></strong>
                        <Form.Control type="text" value={this.state.content} onChange={this.onChangeArticleContent}/>
                    </Form.Group>
                    <p>{this.state.errormessagecontent}</p>

                    <Button variant="danger" size="lg" block="block" type ="submit">Create Article</Button>

                    {/*<hr style={{color:'black',backgroundColor:'lightgrey', height:1}}/>*/}
                    <strong><p style={{color:'darkblue', paddingTop:50}}>{this.state.errormessaseall}</p></strong>
                </Form>
            </div>
        );
    }
}

