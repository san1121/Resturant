import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
//import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

//const prisma=new PrismaClient();

// FETCH ALL Orders
export const GET = async (req:NextRequest) => {
  
   const session= await getAuthSession();
if(session){
  try {
    
      if(session.user.isAdmin){
        const Orders=await prisma.order.findMany()
        return new NextResponse(JSON.stringify(Orders), { status: 200 });
      }  
      const  Orders =await prisma.order.findMany({
        where:{
          userEmail:session.user.email!
        }
      })
      return new NextResponse(JSON.stringify(Orders), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
} else
{
  return new NextResponse(
    JSON.stringify({ message: "You are not Authenticated!" }),
    { status: 401 }
  );
}
}; 