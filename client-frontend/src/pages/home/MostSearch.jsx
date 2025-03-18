import React, {Fragment} from "react";

export const MostSearch = ({mostSearches}) => {
    console.log(mostSearches)
    return (<>
        <h3>Tìm kiếm nhiều</h3>
        <div>
            {mostSearches.map((item, index) => (<Fragment key={index}>
                <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">{item}</button>
            </Fragment>))}
        </div>
    </>)
}
