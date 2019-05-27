import React from 'react';
import './Feed';
import Posts from '../posts/Posts';
import Users from '../users/Users';

export default function Feed() {
   return (
      <div className="container feed">
         <Posts/>
         <Users/>
      </div>
   )
}