// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const apikey = 'AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k';
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apikey}&radius=4000`


type Data = {
  name: string
}

type params = {
  location: string  | undefined | string[];
  keyword: string | undefined | string[];
}

const fetchInfo = async(req:NextApiRequest) => {
    const { location, keyword } = req.query;
    const requestUrl = url + '&location=' + location + '&keyword=' + keyword;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;

  const result = await fetchInfo(req);
    res.status(200).json(result);
}
