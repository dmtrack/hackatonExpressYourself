import React from "react";
import { useSelector } from "react-redux";
import { getBookmarksCount } from "../../store/users";

const BookmarkCounter = () => {
    const bookmarkCount = useSelector(getBookmarksCount());
    return (
        <span
            className="position-absolute top-0 start-100
                translate-middle badge rounded-pill bg-warning text-dark"
        >
            {bookmarkCount !== 0 && bookmarkCount}
        </span>
    );
};

export default BookmarkCounter;
