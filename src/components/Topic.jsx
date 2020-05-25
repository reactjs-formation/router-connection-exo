
import React from 'react';
import { Link } from "react-router-dom";
import POSTS from '../db/database'

class Topic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: POSTS
        }
    }

    render() {
        console.log('Topic render', this.props.match.params.id)

        let topic =  {};
        if (this.props.match.params.id !== undefined) {
            topic = this.state.posts.find( 
                topic => parseInt(topic.id) === parseInt(this.props.match.params.id)
            )
        }

        const renderer = (this.props.match.params.id === undefined) ?
            (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Title</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((elm, i) => {
                            return (
                                <tr key={i}>
                                    <td>{elm.id}</td>
                                    <td><Link to={"/topics/"+elm.id}>{elm.title}</Link></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            )
            :
            (
                <div>
                    <h1>{topic.title}</h1>
                    <p>{topic.content}</p>
                </div>
            )

        return renderer;
    }
}

export default Topic;