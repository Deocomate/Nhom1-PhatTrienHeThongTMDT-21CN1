import React, {Fragment} from "react";

export const MostSearch = () => {
    return (<>
        <h3>Tìm kiếm nhiều</h3>
        <div>
            {[1, 2, 3, 4].map((item, index) => (<Fragment key={index}>
                <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc cảm cúm</button>
                <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc trầm cảm
                </button>
                <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Bao cao su</button>
                <button className="btn btn-outline-secondary p-2 rounded-3 mb-3 me-3">Thuốc ngủ</button>
            </Fragment>))}
        </div>
    </>)
}
