import clientPromise from "../../../utils/mongoClient";

export default async (req, res) => {
  if (req.method === 'GET') {
    get(req, res)
  }
  if (req.method === 'POST') {
    post(req, res)
  }
};

const get = async(req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("nft");
    const nft = await db.collection("nft").find({}).toArray();
    
    res.json(nft);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}

const post = async(req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("nft");
    const { itemName, game, network, token } = req.body;

    const nft = await db.collection("nft").insertOne({
      itemName,
      game,
      network,
      token,
    });

    res.json(nft);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}