import RadioButton from "../Button/Radio";
import Panel from "../Panel";
import { useState } from "react";

interface LocationWidgetProps {
  data: {
    radioGroup: { title: string; buttonData: radioGroup[] };
  };
}

type radioGroup = {
  label: string;
  location: string;
};

type result = {
  place_id: string;
  name: string;
  vicinity: string;
  rating: number;
};

export default function LocationWidget({ data }: LocationWidgetProps) {
  const [results, setResults] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch(
      `/api/location?location=${location}&keyword=${keyword}&radius=4000&type=`
    )
      .then((res) => res.json())
      .then((result) => {
        setResults(result.results);
      });
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="p-2 mx-auto max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-md mx-auto">
          <label className="pb-2 text-left font-semibold">
            {data.radioGroup.title}
          </label>
          <div className="flex flex-row pb-2 flex-wrap">
            {data.radioGroup.buttonData.map(
              (radioButtonData: radioGroup, index: number) => (
                <RadioButton
                  key={index}
                  label={radioButtonData.label}
                  value={radioButtonData.location}
                  name={"location"}
                  checked={location === radioButtonData.location}
                  onChange={handleOptionChange}
                />
              )
            )}
          </div>
          <div className="text-left flex flex-col">
            <label htmlFor="keyword">
              <p className="font-semibold pb-2">Search</p>
            </label>
            <input
              type="text"
              name="keyword"
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
              className="shadow appearance-none border border-black rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline max-w-xs"
            />
            <input
              type="submit"
              value="Search"
              className="bg-blue-500 shadow-md hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-xs cursor-pointer"
            />
          </div>
        </div>
      </form>
      <div>
        <ul className="mt-2">
          {results.map((result: result, index: number) => (
            <Panel
              key={index}
              title={result.name}
              address={result.vicinity}
              rating={result.rating}
            ></Panel>
          ))}
        </ul>
      </div>
    </div>
  );
}
