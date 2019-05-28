import React from 'react';
import User from '../user/User';
import Palette from '../palette/Palette';

const Profile = () => {
   return (
      <div className="container profile">
         <User
            src="http://www.stamparijakolibri.rs/assets/prodimgs/m/3308-majica-full-hd-men.jpg"
            alt="men"
            name="sone_cool_men"
         />
         <Palette/>
      </div>
   )
}

export default Profile;