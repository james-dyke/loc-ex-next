import LocationWidget from "../components/Location";
import { data } from "./data";

export default function Home() {
  return (
    <div className="p-2 mx-auto max-w-md">
      <LocationWidget data={data} />
    </div>
  );
}
