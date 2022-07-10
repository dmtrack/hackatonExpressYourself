import React from "react";
import PropTypes from "prop-types";
import Badge from "../common/badge";
import { getRoleByIds } from "../../store/roles";
import { useSelector } from "react-redux";

const RolesBadges = ({ roleIds, size }) => {
    const rolesArray = useSelector(getRoleByIds(roleIds));
    return (
        <div className="d-flex justify-content-evenly w-100 gap-2">
            {
                rolesArray?.map(role =>
                    <Badge
                        key={"role" + role._id}
                        content={role.name}
                        color={role.name === "student" ? "primary" : "danger"}
                        size={size}
                    />
                )
            }
        </div>
    );
};
RolesBadges.propTypes = {
    roleIds: PropTypes.array,
    size: PropTypes.number
};
export default RolesBadges;
