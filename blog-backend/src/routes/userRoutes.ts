import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { signupInput, signinInput } from '@amitrochates/blog-common'
export const userRoute = new Hono<{
    Bindings: {
      DATABASE_URL: string
      JWT_SECRET: string
    }
  }
  >()

userRoute.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body)
  if(!success){
    c.status(411);
    return c.json({
      message: "incorrect inputs"
    })
  }
  
  try{
      const user= await prisma.user.findFirst({
          where:{
            email: body.email,
            password: body.password
          }
      })
      if (!user) {
        c.status(403);
      return c.text('Email or password doesnt exist')
      }else{
          const token = await sign({id: user.id}, c.env.JWT_SECRET);
          return c.json(token)
        }
    }
    catch(e){
      console.log(e);
      c.status(403);
      return c.text('invalid')
    }
  })
  
  userRoute.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body)
  if(!success){
    c.status(411);
    return c.json({
      message: "incorrect inputs"
    })
  }

  //could add zod here
  try {
    const user = await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: body.password
    }
  })
  const token = await sign({id: user.id}, c.env.JWT_SECRET)
   return c.json(token)
    
  }
  catch(e){
    c.status(411);
    return c.text('Invalid credentials')
  }
  })
  
  