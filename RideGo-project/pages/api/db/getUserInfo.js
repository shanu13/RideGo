import { client } from '../../../lib/sanity'

const getUserInfo = async (req, res) => {
  try {
    const query = `
      *[_type == "users" && walletAddress=="${req.query.walletAddress}"]{
          name,
          walletAddress,
          "imageUrl": profileImage.asset->url
        }
    `

    const sanityResponse = await client.fetch(query)

    res.status(200).send({ message: 'success', data: sanityResponse[0] })
  } catch (error) {
    x
  }
}

export default getUserInfo
