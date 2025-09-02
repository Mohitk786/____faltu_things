"use server"

import {auth} from "@/auth"

interface User {
  id: string
  email: string
  name: string
  image: string
}

export const getCurrentUser = async ():Promise<User | null> => {
  const session = await auth()
  if (!session) return null
  console.log("session on server", session)
  return session.user as User
}