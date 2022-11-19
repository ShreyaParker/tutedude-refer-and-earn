import React from 'react';

const PageIndex = ({setShow,show}) => {
    return (
        <div className="pb-7">
            <div className="flex flex-row  justify-start">
                <h1>Ui/Ux</h1> >
                <button onClick={()=>setShow(true)}>Refer & Earn</button>
                 {!show?<h1>
                    > Friend who enrolled
                </h1>:""}
            </div>
        </div>
    );
};

export default PageIndex;