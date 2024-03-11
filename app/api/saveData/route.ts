import { MongoClient, ServerApiVersion } from 'mongodb'

export async function POST(request: Request, response: Response){
  const { data } = await request.json()
  console.log('---',data)
  return new Response('text1111')
}

export async function DELETE(request: Request, response: Response) {
  const { data } = await request.json()

  console.log('>>',data)

  const client = new MongoClient(process.env.MONGODB_URI!, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  })

  try {
    await client.connect()
    const db = client.db()
    const collection = db.collection('user')
    await collection.insertOne({ data })
    return Response.json({ status: 201, message: 'Data saved successfully!' })
  } catch (error) {
    return Response.json({ status: 500, message: 'Something went wrong!' })
  } finally {
    await client.close()
  }
}