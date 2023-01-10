// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const apikey = process.env.GOOGLE_LOCATION_API_KEY;
const url = process.env.GOOGLE_LOCATION_URL + `?key=${apikey}&radius=4000`;

type Data = {
  name: string
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
  const result = await fetchInfo(req);
    res.status(200).json(result);
}
