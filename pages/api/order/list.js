import { readFileS3FromBucket } from "../../../services/s3";

export default async (req, res) => {
    console.log('zô')
    const listOrder = await readFileS3FromBucket('order', 'orders.json')
    // console.log(listOrder)
    res.status(200).json(listOrder); 
}