import React, {Component} from 'react';
import './AddMovieForm.css';


class AddMovieForm extends Component {
    render() {
        return (
            <div className="AddMovieForm">
                <form className={"movie_form"}>
                    <input
                        type="text"
                        className={"new_movie"}
                        name={"text"}
                        value={this.props.title}
                        onChange={(event) =>this.props.onChangeHandle(event, 0)}/>
                        <button
                            type="submit"
                            disabled={this.props.isAddButtonDisabled}
                            className={"add_movie"}
                            onClick={this.props.onAddMovie}
                        >Add</button>
                </form>
            </div>
        );
    }
}


export default AddMovieForm;