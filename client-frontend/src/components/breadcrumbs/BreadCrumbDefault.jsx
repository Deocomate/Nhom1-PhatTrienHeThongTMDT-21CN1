"use client"

export default function BreadCrumbDefault({ name = "Default" }) {
    return (
        <>
            {/* BREADCRUMB AREA START */}
            <div
                className="ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "
                data-bs-bg="/assets/img/bg/14.jpg"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ltn__breadcrumb-inner">
                                <h1 className="page-title">{name}</h1>
                                <div className="ltn__breadcrumb-list">
                                    <ul>
                                        <li>
                                            <a href="/">
                                                <span className="ltn__secondary-color">
                                                    <i className="fas fa-home" />
                                                </span>{" "}
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li>{name}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* BREADCRUMB AREA END */}
        </>
    )
}
