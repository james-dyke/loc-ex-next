import LocationWidget from "../components/Location";

const data = {
  radioGroup: {
    title: "Select a location",
    buttonData: [
      { label: "Snowmass, CO", location: "39.2130,-106.9378" },
      { label: "Malibu, CA", location: "34.0259,-118.7798" },
      { label: "Catskill, NY", location: "42.2146,-73.9595" },
      { label: "Grand Teton National Park, WY", location: "43.7904,-110.6818" },
      { label: "Columbia River Gorge, OR", location: "45.7253,-121.7300" },
    ],
  },
};

export default function Home() {
  return (
    <div className="p-2 mx-auto max-w-md">
      <LocationWidget data={data} />
    </div>
  );
}
