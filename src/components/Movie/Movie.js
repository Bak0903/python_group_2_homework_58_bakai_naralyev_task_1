import React, {Component} from 'react';
import './Movie.css';


class Movie extends Component {

    shouldComponentUpdate(nextProps) {
    console.log('[Post] ShouldUpdate');
    return nextProps.title !== this.props.title;
    }
    render() {
        return (
            <div className={"movie"} id={this.props.id}>
                <form className={"movie_form"}>
                    <input
                        type="text"
                        className={"movie_change"}
                        name={"text"}
                        value={this.props.title}
                        onChange={(event) => this.props.onChangeHandle(event, this.props.id)}
                    />
                </form>
                <div>
                    <button className={"delete_button"} onClick={this.props.onMovieRemove}>delete</button>
                </div>
            </div>
        );
    }
}

export default Movie;