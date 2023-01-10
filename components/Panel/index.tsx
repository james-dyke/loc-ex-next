interface PanelProps {
  title: string;
  address: string;
  rating: number;
}

export default function Panel({ title, address, rating }: PanelProps) {
  return (
    <>
      <li className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mb-2">
        <div className="flex">
          <div className="w-6/12">
            <h2 className="font-bold text-sm text-left">{title}</h2>
            <p className="text-sm text-left">{address}</p>
          </div>
          <div className="w-6/12 flex items-center justify-center ">
            {rating !== undefined ? (
              <p className="text-sm">{rating} stars</p>
            ) : (
              <p className="text-sm">not rated</p>
            )}
          </div>
        </div>
      </li>
    </>
  );
}
