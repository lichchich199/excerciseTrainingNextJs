import { readFileS3FromBucket } from "../../../services/s3";

export default async (req, res) => {
    const listOrder = await readFileS3FromBucket('order', 'orders.json')
    res.status(200).json(listOrder); 
}