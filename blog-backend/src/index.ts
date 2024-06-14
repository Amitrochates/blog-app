import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userRoute } from './routes/userRoutes'
import { blogRoute } from './routes/blogRoutes'


const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}
>()

app.route('/api/user', userRoute)
app.route('/api/blog', blogRoute)


app.get('/', (c) => {

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text('Hello Hono!')
})




export default app



//postgresurl - postgresql://test_owner:nQYiW3o8GpAN@ep-damp-block-a12fqlo1.ap-southeast-1.aws.neon.tech/blog?sslmode=require
//prisma url (connection pool ) - DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNjQ3Mzc3OTEtZDdjMS00NTU4LWE5YjItMzUyOTE0OGZlYTBiIiwidGVuYW50X2lkIjoiOGI0MDc5NTYwNjRmN2YyZTY4MjA2Y2M0Y2U1NWNhMTMzZmU2N2ZjZDYxNTkyNDdhNjk5ODAwNWU3ZmU5MjViMyIsImludGVybmFsX3NlY3JldCI6IjlhZTBlZjYyLTg5YWQtNDhjOC05ZDY0LTI0YWExMjkwZDFlNSJ9.hCZJhC1Or7_jTnfxXYxfLrkVtl3v25ae_yQ-RmEw6bM"