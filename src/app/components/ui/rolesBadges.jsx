import React from "react";
import PropTypes from "prop-types";
import Badge from "../common/badge";
import { getRoleByIds } from "../../store/roles";
import { useSelector } from "react-redux";

const RolesBadges = ({ roleIds, size }) => {
    const rolesArray = useSelector(getRoleByIds(roleIds));
    console.log(rolesArray);
    return (
        <div>
            {
                rolesArray?.map(role =>
                    <Badge
                        key={role._id}
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
