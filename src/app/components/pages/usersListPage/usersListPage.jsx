import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDataStatus, getUsersList } from "../../../store/users";
import Loader from "../../common/loader";
import UserCard from "../../ui/userCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    A11y,
    Mousewheel,
    Keyboard,
    EffectCoverflow
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const UsersListPage = () => {
    const history = useHistory();
    const users = useSelector(getUsersList());
    const dataStatus = useSelector(getDataStatus());
    const handleOpenCard = (id) => {
        history.push(`/users/${id}`);
    };
    if (!dataStatus) return <Loader />;
    return (
        <div className="d-flex flex-column">
            <div className="col-md-8 mx-auto my-3">
                <h1 className="text-center">Our Team</h1>
                <p>
                    We are students of group 23 of the Result School,
                    beginning Frontend Developers.
                </p>
                <p>
                    Here you can find information about each project participan
                    and you can contact us if necessary.
                </p>
                <p>
                    We are doing a project together with React and Redux using the
                    skills we have learned from learning the front module.
                </p>
                <p>
                    We are from different countries, from different professions,
                    but now we are doing the same thing
                </p>
            </div>
            <div>
                <Swiper
                    modules={[
                        Navigation,
                        Pagination,
                        A11y,
                        Mousewheel,
                        Keyboard,
                        EffectCoverflow
                    ]}
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={75}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    mousewheel
                    keyboard
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 200,
                        modifier: 3,
                        slideShadows: true
                    }}
                    className="mySwiper"
                >
                    {users.map(user => (
                        <SwiperSlide key={user._id}>
                            <UserCard
                                onOpenCard={handleOpenCard}
                                {...user}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default UsersListPage;
