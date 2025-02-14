import React, { Component } from 'react'
import { movies } from './MovieData'

export class Favourites extends Component {
    constructor() {
        super()

        this.state = {
            genres: [],
            currgenre : 'All genres',
            movies : []
        }

    }

    componentDidMount(){
        let genreids = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };

        let data = JSON.parse(localStorage.getItem('movies-app') || '[]')
        
        let tempArr = []

        data.map((moviesObj) => {
            if (!tempArr.includes(genreids[moviesObj.genre_ids[0]])) {
                tempArr.push(genreids[moviesObj.genre_ids[0]])
            }
        })
        tempArr.unshift('All genres')

        this.setState({
            movies : [...data],
            genres : [...tempArr]
        })
    }
    render() {
       
        let genreids = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
        };
        

        

        return (
            <div className='main'>
                <div className='row'>
                    <div className='col-3'>
                        <ul className="list-group genre-selector">

                            {
                                this.state.genres.map((genre)=>(
                                    this.state.currgenre == genre ?
                                    <li style={{background:'#3f51b5' , color:'white' , fontWeight:'bold'}} className="list-group-item">{genre}</li> :
                                    <li style={{color:'#3f51b5'}} className="list-group-item">{genre}</li>
                                ))

                            }



                        </ul>
                    </div>
                    <div className='col-9 favourites-table'>

                        <div className='row'>
                            <input placeholder='Search' type='text' className='input-group-text col' />
                            <input type='number' className='input-group-text col' />
                        </div>
                        <div className='row'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>Poster</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">popularity</th>
                                        <th scope="col">Ratings</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.movies.map((moviesElem) => (
                                            <tr>
                                                <td><img style={{ width: '6rem' }} src={`https://image.tmdb.org/t/p/original${moviesElem.backdrop_path}`}></img></td>
                                                <th scope="row">{moviesElem.title}</th>
                                                <td>{genreids[moviesElem.genre_ids[0]]}</td>
                                                <td>{moviesElem.popularity}</td>
                                                <td>{moviesElem.vote_average}</td>
                                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>

                        </div>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        )
    }
}

export default Favourites