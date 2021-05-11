import React from "react";

type SearchProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Search({ handleChange }: SearchProps) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by country..."
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
        onChange={handleChange}
      />
    </div>
  );
}
