import React, {Component} from 'react';
import './Posts';
import Post from '../Post/Post';

export default class Posts extends Component {
   render() {
      return (
         <div className="left">
            <Post alt="nature" src="https://images5.alphacoders.com/440/440292.jpg"/>
            <Post alt="nature" src="https://images5.alphacoders.com/440/440292.jpg"/>
         </div>
      )
   }
}