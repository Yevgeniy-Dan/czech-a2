import React from "react";

const GreenBox: React.FC<
  React.PropsWithChildren<{ header: string; text: string }>
> = ({ header, text }) => {
  return (
    <div
      style={{
        backgroundColor: "#aae096",
      }}
    >
      <p className="fw-bold">{header}</p>
      <p>
        <i>{text}</i>
      </p>
    </div>
  );
};

export default GreenBox;
