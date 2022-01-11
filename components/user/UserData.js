import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export default function UserData() {
  const { user } = useContext(AppContext);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between my-3">
          <div className="text-scotland-blue font-medium text-sm md:text-lg px-3 py-1">
            Your Full Name:
          </div>
          <div className="font-medium text-sm md:text-lg px-3 py-1 border-b-4 border-scotland-blue">{`${user.firstName} ${user.lastName}`}</div>
        </div>
        <div className="flex justify-between my-3">
          <div className="text-scotland-blue font-medium text-sm md:text-lg px-3 py-1">
            Phone Number
          </div>
          <div className="font-medium text-sm md:text-lg px-3 py-1 border-b-4 border-scotland-blue">
            {user.phone}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between my-3">
          <div className="text-scotland-blue font-medium text-sm md:text-lg px-3 py-1">
            Email:
          </div>
          <div className="font-medium text-sm md:text-lg px-3 py-1 border-b-4 border-scotland-blue">
            {user.email}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="flex justify-between my-3">
          <div className="text-scotland-blue font-medium text-sm md:text-lg px-3 py-1">
            Address:
          </div>
          <div className="font-medium text-sm md:text-lg px-3 py-1 border-b-4 border-scotland-blue">{`${user.city}  - ${user.street} st.`}</div>
        </div>
      </div>
    </div>
  );
}
