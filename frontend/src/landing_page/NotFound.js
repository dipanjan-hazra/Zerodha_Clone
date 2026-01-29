import React from 'react';

function NotFound() {
    return (  
        <>
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5"><i class="fa fa-frown-o" aria-hidden="true"></i>404 Page Not Found ! </h1>
                <p>The  Page  You are Looking  for  doesn't exist!</p>
            </div>
        </div>
        </>
    );
}

export default NotFound;