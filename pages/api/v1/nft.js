import clientPromise from "../../../utils/mongoClient";

export default async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("nft");
    const { itemName, game, network, token } = req.body;

    const post = await db.collection("nft").insertOne({
      itemName,
      game,
      network,
      token,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};