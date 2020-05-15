import React, {useState} from 'react';
import axios from 'axios';

const UpdateMovie = (props) =>{
    const [title, setTitle] = useState();
    const [director, setDirector] = useState();
    const [metascore, setMetascore] = useState();
    const [stars, setStars] = useState();
    const [response, setResponse] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        axios
            .put('http://localhost:5000/api/movies/:id', {id: props.match.params.id, title: title, director: director, metascore: metascore, stars: stars})
                .then(res =>{
                    setResponse(res.data)
                    console.log(response);
                })
                .catch(err =>{
                    console.log(err);
                })
    }
    return(
    <form>
        <input
            placeholder="Enter movie name"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            placeholder="enter director"
            type="text"
            onChange={(e) => setDirector(e.target.value)}
        />
        <input
            placeholder="enter metascore"
            type="text"
            onChange={(e) => setMetascore(e.target.value)}
        />
        <input
            placeholder="enter stars"
            type="text"
            onChange={(e) => setStars(e.target.value)}
        />
        <button
        onClick={submitForm}
        />
    </form>
)
}


export default UpdateMovie;