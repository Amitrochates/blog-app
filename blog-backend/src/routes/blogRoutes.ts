import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


export const blogRoute = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    },
    Variables: {
        userId: string;
    }
  }
  >()

blogRoute.use('/*', async(c, next) => {
    const token = await c.req.header("Authorization") || "";
    //anyone can decode , not everyone can verify
    const user = await verify(token, c.env.JWT_SECRET);
    if(user){
      //@ts-ignore
        c.set('userId', user.id) //i already define the type of userId in Variables
       await next();                     
    }
    else{
        c.status(403);
        return c.json({
            message: "Auth error, not logged in"
        })
    } 
});

blogRoute.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const authorId = c.get("userId");

    const blog = await prisma.blog.create({
        data: {
            title: body.title,
            body: body.body,
            authorId: authorId
        }
    })
    return c.json({
        id: blog.id
    })
  })
  

  blogRoute.put('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

  const blog = await prisma.blog.update({
    where:{
        id: body.id
    },
      data: {
          title: body.title,
          body: body.title,
      }
  })
  return c.json({
      id: blog.id
  })
  })

  blogRoute.get('/all', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

    const blogs = await prisma.blog.findMany(
      {
        select:{
          title: true,
          body: true,
          createdAt: true,
          id: true,
          author: {
            select: {
            name: true
          }
          }
        }
      }
    );
    return c.json(blogs);
  })
  
  
  blogRoute.get('/:id', async(c) => {

    
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const id = await c.req.param("id")

    try {const blog = await prisma.blog.findFirst({
            where:{
            id: id
            },
            select: {
              title: true,
              body: true,
              createdAt: true,
              id: true,
              author: {
                select:{
                  name: true
                }
                
              }
            }
        })
        return c.json({
        blog
        })
    }catch(e){
        c.status(411);
        return c.json("error while fetching")
    }
    
  })
  
  
  
  blogRoute.delete('/:id', (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())


    return c.text('signup')
  })