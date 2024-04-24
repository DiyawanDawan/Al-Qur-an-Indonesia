import React, { useState } from "react";

const FilterChapters = () => {
  const [numberOptions, setNumberOptions] = useState(
    Array.from({ length: 30 }, (_, index) => ({
      value: index + 1,
      label: `${index + 1}`,
    }))
  );
  const [textOptions, setTextOptions] = useState([
    { value: "Al-Quran", label: "Al-Quran" },
    { value: "Jus", label: "Jus" },
    // Tambahkan opsi lainnya di sini
  ]);
  const [selectedNumberValue, setSelectedNumberValue] = useState("");
  const [selectedTextValue, setSelectedTextValue] = useState("");
  const [numberSearchTerm, setNumberSearchTerm] = useState("");
  const [textSearchTerm, setTextSearchTerm] = useState("");

  const filteredNumberOptions = numberOptions.filter((option) =>
    option.label.toLowerCase().includes(numberSearchTerm.toLowerCase())
  );

  const filteredTextOptions = textOptions.filter((option) =>
    option.label.toLowerCase().includes(textSearchTerm.toLowerCase())
  );

  const handleNumberOptionClick = (value) => {
    setSelectedNumberValue(value);
    setNumberSearchTerm("");
  };

  const handleTextOptionClick = (value) => {
    setSelectedTextValue(value);
    setTextSearchTerm("");
  };

  const handleNumberSearchChange = (event) => {
    setNumberSearchTerm(event.target.value);
  };

  const handleTextSearchChange = (event) => {
    setTextSearchTerm(event.target.value);
  };

  return (
    <>
    <div className="flex m-4 w-full pr-4">
        <input
            id="textSearchInput"
            type="text"
            placeholder="Cari teks"
            value={textSearchTerm}
            onChange={handleTextSearchChange}
            className="border border-gray-300 rounded-md px-2 py-2 w-1/2 mr-3"
        />
        <input
            id="numberSearchInput"
            type="text"
            placeholder="Cari angka"
            value={numberSearchTerm}
            onChange={handleNumberSearchChange}
            className="border border-gray-300 rounded-md px-2 py-2 w-1/2"
        />
    </div>
    <div className="flex justify-between w-full">
        <div className="w-full pl-2">
            <h2>Teks:</h2>
            {filteredTextOptions.map((option) => (
                <div
                    key={option.value}
                    onClick={() => handleTextOptionClick(option.value)}
                    style={{ cursor: "pointer", margin: "5px 0" }}
                >
                    {option.label}
                </div>
            ))}
        </div>
        <div className="w-full pr-2">
            <h2>Angka:</h2>
            {filteredNumberOptions.map((option) => (
                <div
                    key={option.value}
                    onClick={() => handleNumberOptionClick(option.value)}
                    style={{ cursor: "pointer", margin: "5px 0" }}
                >
                    {option.label}
                </div>
            ))}
        </div>
    </div>
    <p>Nilai angka yang dipilih: {selectedNumberValue}</p>
    <p>Nilai teks yang dipilih: {selectedTextValue}</p>

</>
  );
};

export default FilterChapters;
