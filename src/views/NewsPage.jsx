import React from 'react';

const Newspaper = () => {

    return (

        <div className='newspaper' id='newspaper'>

            <div className="container-fluid bg-light">
                <div className="row justify-content-between align-items-center w3-pale-blue">
                    <div className="col-sm-12 col-md-2 col-lg-2 w3-gray">
                        <p className=" ">COLUMN 1</p>
                    </div>
                    <div className="col-sm-12 col-md-5 col-lg-5 w3-blue">
                        <p className=" ">COLUMN 2 Trending:</p>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-3 w3-black">
                        <p className="">COLUMN 3 Trending:</p>
                    </div>
                    <div className="col-sm-12 col-md-2 col-lg-2 w3-gray">
                        <p className="">COLUMN 4</p>
                    </div>
                </div>
</div>
                </div>

    );
}

export default Newspaper;