import React, {Component} from 'react';
import './Post';
import User from '../user/User';

export default class Post extends Component {
   render() {
      return (
         <div className="post">
            <User
               src="http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
               alt="men"
               name="Casual Shirts"
               min
            />
            <img src={this.props.src} alt={this.props.alt}></img>
            <div className="post__name">
               some account
            </div>
            <div className="post__descr">
               lorem lorem
            </div>
         </div>
      )
   }
}