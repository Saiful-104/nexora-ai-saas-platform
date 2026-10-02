import { AppError } from "../errors/AppError.js";
import prisma from "../lib/prisma.js";

export const createOrganization = async (name:string ) =>{
   const organization = await prisma.organization.create({
    data:{
      name,
    }
   })
   return organization;
}

export const getOrganizationById = async(id:string)=>{
  const organization = await prisma.organization.findUnique({
    where:{
      id
    }
  });

  if(!organization){
  throw new AppError("Organization not found", 404);
}
  return organization;
}

export const updateOrganization= async (
  id:string,
  data:{name?:string}
)=>{
  const organization = await prisma.organization.findUnique({
    where:{
      id,
    }
  });

  if(!organization){
    throw new AppError("Organization not found", 404);
  }

  const updatedOrganization = await prisma.organization.update({
    where:{
      id,
    },
    data,
  });

  return updatedOrganization;
}
