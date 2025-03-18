import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import {formatNumber} from "@/utils/NumberUltils";
import apiService from "@/lib/api/apiService";

export const ProductsByCategoryCarousel = ({banner, title, categoryId}) => {

    let [categories, setCategories] = useState([])

    const fetchCategory = async () => {
        if (categoryId) {
            let response = await apiService.get("/products/category/" + categoryId)
            console.log(response.data)
            if (response.data.content?.length >= 0) {
                setCategories(response.data.content);
            }
        }
    }
    useEffect(() => {
        fetchCategory().then()
    }, [categoryId]);

    return (<>
        <div className={"banner mb-3"}>
            <img src={banner || "/assets/default/placeholder.png"} className={"w-100"} alt=""/>
        </div>
        <div className={"border rounded-3 py-4 px-4"}>
            <div className={"header d-flex justify-content-between align-items-center mb-3"}>
                <h3 className={"mb-0 "}>{title}</h3>
                <Link href={"/category/"} passHref>
                    <button className={"btn-all btn btn-sm btn-success py-2 px-3"}>Xem tất cả</button>
                </Link>
            </div>
            <div className={"product-list"}>
                <Swiper
                    className={"product-item"}
                    modules={[Scrollbar]}
                    spaceBetween={5}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.3, spaceBetween: 5,
                        }, 480: {
                            slidesPerView: 2.3, spaceBetween: 5,
                        }, 640: {
                            slidesPerView: 3.3, spaceBetween: 10, // Tăng khoảng cách cho phù hợp
                        }, 768: {
                            slidesPerView: 4.3,  // Có thể chỉnh xuống 3.3 hoặc 4 nếu bạn thấy quá nhiều
                            spaceBetween: 10,
                        }, 1024: {  //Thêm breakpoint 1024
                            slidesPerView: 4.3, spaceBetween: 10
                        }
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {categories.map((item, index) => ( // Thêm nhiều item hơn để test
                        <SwiperSlide className={"p-1"} key={index}>
                            <div className={"product-card"}>
                                <div className="card" style={{overflow: "hidden"}}>
                                    <Link href={`/products/${item.slug}`}
                                          passHref> {/* Thay đổi: Thêm Link vào từng sản phẩm */}
                                        <img src={item.thumbnail}
                                             style={{height: "200px", objectFit: "cover"}}
                                             className="w-100" alt=""/>
                                    </Link>
                                    <div className="card-body pb-0">
                                        <h5 className={"fw-normal"}>
                                            <Link href={`/products/${item.slug}`}
                                                  passHref>
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p className="mb-3"><b className="text-success">{formatNumber(item.price)}</b> /
                                            Sản
                                            phẩm
                                        </p>
                                    </div>
                                    <div className={"card-footer bg-white border-0"}>
                                        <Link href={`/products/${item.slug}`}
                                              passHref>  {/* Thay đổi: Chuyển button thành Link */}
                                            <button className={"btn btn-sm p-2 btn-success w-100"}>Xem chi tiết
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        </div>

        <style jsx>{`
            .card-footer button {
                border-radius: 10px;
            }

            .card {
                max-width: 400px; // Cái này có vẻ không cần thiết trong trường hợp responsive
            }

            button.btn-all {
                border-radius: 30px;
            }

            .card {
                transition: 0.5s;
            }

            .card:hover {
                cursor: pointer;
                border: 1px solid green; // Giữ lại cái này nếu bạn thích hiệu ứng hover
            }


        `}</style>
    </>);
};

export default ProductsByCategoryCarousel;