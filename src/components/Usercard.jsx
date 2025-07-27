import { View, Text } from "react-native";
import React from "react";

const Usercard = (key, img, name_member, designation) => {
  return (
    <div
      key={key}
      className="bg-white border border-blue-900 rounded-xl px-4 py-5 shadow hover:shadow-md transition duration-300"
    >
      <img
        src={img}
        alt={name_member}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-900 object-cover"
        loading="lazy"
      />
      <p className="text-center font-semibold text-blue-950">{name_member}</p>
      <p className="text-center text-gray-700">{designation}</p>
    </div>
  );
};

export default Usercard;
