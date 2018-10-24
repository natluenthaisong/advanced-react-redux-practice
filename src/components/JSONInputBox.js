import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class JSONInputBox extends Component {
    state = { json: ''};

    handleChange = event => {
        this.setState({json: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveComment(this.state.json);
        this.setState({json: ''})

    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>JSON Input</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.json}/>
                    <div>
                        <button>Transform JSON</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(JSONInputBox);

