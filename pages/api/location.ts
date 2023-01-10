// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const apikey = 'AIzaSyDIb6tuC5IBX5yf8pYBMs_hLkZicqDHZ9k';
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apikey}&radius=4000`


type Data = {
  name: string
}

type params = {
  location: string  | undefined;
  keyword: string | undefined;
}

const fetchInfo = async(params: params) => {
    const requestUrl = url + '&location=' + params.location + '&keyword=' + params.keyword;
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query;
  const { location, keyword } = query;
  const params = {
    location,
    keyword
  }
  const result = await fetchInfo(params);
    res.status(200).json(result);
}
