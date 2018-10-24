import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import JSONInput from 'components/JSONInputBox';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';

class App extends Component {
    renderButton() {
        if(this.props.auth) {
            return(
                <button onClick={() => this.props.changeAuth(false)}>
                Sign Out
            </button>)
        } else {
            return(
                <button onClick={() => this.props.changeAuth(true)}>
                Sign In
            </button>)
        }
    }

    renderHeader() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">Post A Comment</Link></li>
                <li><Link to="/json-transform">JSON Transform</Link></li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={requireAuth(CommentBox)} />
                <Route path="/" exact component={CommentList} />
                <Route path="/json-transform" component={JSONInput} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps, actions)(App);
