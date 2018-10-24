import React, { Component } from 'react';
import { connect } from 'react-redux'

class CommentList extends Component {
    renderComments() {
        let key = 0;
        return this.props.comments.map(comment => {
            key++;
            return <li key={key}>{comment}</li>;
        });
    }

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);
