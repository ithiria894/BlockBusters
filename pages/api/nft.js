import clientPromise from '../../utils/mongoClient';

/**
 * @swagger
 * /api/nft:
 *   get:
 *     tags:
 *       - NFT
 *     summary: Get all NFT
 *     description: Get all NFT
 *     operationId: GetNFT
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/NFT'
 *       '400':
 *         description: Bad Request
 *       '405':
 *         description: Validation exception
 *   post:
 *     tags:
 *       - NFT
 *     summary: Update a NFT
 *     description: Upload a NFT
 *     operationId: UploadNFT
 *     requestBody:
 *       description: Upload NFT
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/NFT'
 *       required: true
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/NFTResponse'
 *       '400':
 *         description: Bad Request
 *       '405':
 *         description: Validation exception
 * components:
 *   NFT:
 *     type: object
 *     required:
 *        - userName
 *     properties:
 *         name:
 *            type: string
 *         website:
 *             type: string
 *         description:
 *             type: string
 *         category:
 *             type: string
 *         game:
 *             type: string
 *         price:
 *             type: string
 *         image:
 *              type: string 
 *         url:
 *              type: string 
 *   NFTResponse:
 *      type: object
 *      properties:
 *         success:
 *            type: boolean
 *         nftId:
 *             type: string
 */
const handler = (req, res) => {
    if (req.method === 'GET') {
      getHandler(req, res)
    }
    if (req.method === 'POST') {
      postHandler(req, res)
    }
    if (req.method === 'PUT') {
      // update NFT URL only
      putHandler(req, res)
    }
};

const getHandler = async(req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("block_busters");

    const nfts = await db.collection("nft").find({}).toArray();

    res.status(200).json(nfts);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}

const postHandler = async(req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db("block_busters");
    const { name, website, description, category, game, price, image, url } = req.body;

    const nft = await db.collection("nft").insertOne({
      name,
      website,
      description,
      category,
      game,
      price,
      image,
      url,
    });

    res.status(200).json({
        success: nft.acknowledged,
        nftId: nft.insertedId,
    });
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
}

export default handler;