import React from 'react';
import './Users';
import User from '../user/User';

export default function Users() {
   return (
      <div className="right">
            <User
               src="http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
               alt="men"
               name="Casual Shirts"
            />
         <div className="users__block">
         <User
               src="http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
               alt="men"
               name="Casual Shirts"
               min
            />
         <User
               src="http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
               alt="men"
               name="Casual Shirts"
               min
            />
         <User
               src="http://assets.myntassets.com/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg"
               alt="men"
               name="Casual Shirts"
               min
            />
         </div>
      </div>
   )
}