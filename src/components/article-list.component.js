import React, {Component} from "react";
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import ArticleTableRow from './articleTableRow'

export default class ArticleList extends Component{
    constructor(props) {
        super(props);
        this.state={
            articles: []
        }
    }
    componentDidMount() { //gotowy komponent
        axios.get('http://localhost:4000/articles/')
            .then(res =>{
                this.setState({
                    articles: res.data //zwrot danych
                });
            })
            .catch(error =>{
                console.log(error)
            })
    }
    dataTable(){
        return this.state.articles.map((res,i) =>{ //map -na każdym artykule stosuje funkcję
            return <ArticleTableRow obj={res} key={i}/>; //komponent jest renderowany, nr artukulu
        });
    }
    render (){
        return ( //html -to co pokazuje
<div><div className="top">Article List</div>
            <div className="table-wrapper">
                <Table striped bordered hover border-variant="dark">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Content</th>
                    </tr>
                    </thead>
                    <tbody>{this.dataTable()}</tbody>
                </Table>
            </div></div>
        )
    }
}
//   <Table striped bordered hover>


