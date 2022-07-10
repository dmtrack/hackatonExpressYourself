import React from "react";
import UserCard from "./userCard";
import PropTypes from "prop-types";
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

const Slider3D = ({ users, onToggleBookmark, onOpenCard }) => {
    return (
        <div className="my-4">
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
                spaceBetween={50}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                mousewheel
                keyboard
                effect={"coverflow"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 5,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true
                }}
                className="mySwiper"
            >
                {users.map(user => (
                    <SwiperSlide key={user._id}>
                        <UserCard
                            onToggleBookmark={onToggleBookmark}
                            onOpenCard={onOpenCard}
                            {...user}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

Slider3D.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object),
    onToggleBookmark: PropTypes.func,
    onOpenCard: PropTypes.func
};

export default Slider3D;
