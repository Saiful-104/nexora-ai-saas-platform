import { Request,Response } from "express";
 import { getHealthMessage } from "../services/health.service";
export const healthCheck = (req:Request,res:Response) =>{
     const message = getHealthMessage();
     res.json({
         message
     });
};
