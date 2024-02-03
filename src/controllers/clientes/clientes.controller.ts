import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getMethod = async(req: Request, res: Response) => {
    try {
        const result = await prisma.clientes.findMany({
            orderBy: {
                id: 'asc'
            }
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::clientes", error);
        return res.status(500).json(error);
    }
}

const getMethodById = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.clientes.findUnique({ where: {id: Number(id)}});
        console.log(result);
        if (!result)
            return res.status(204).json({message: 'Not found'});
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::clientes", error);
        return res.status(500).json(error);
    }
}

const postMethod = async(req: Request, res: Response) => {
    try {
        const {body} = req
        const result = await prisma.clientes.create({data: body});
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::clientes", error);
        return res.status(500).json(error);
    }
}

const putMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    const {body} = req
    try {
        const result = await prisma.clientes.update({
            where: {id: Number(id)},
            data: body
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::clientes", error);
        return res.status(500).json(error);
    }
}

const deleteMethod = async(req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.clientes.delete({
            where: {id: Number(id)}
        });
        return res.status(200).json(result);
    } catch (error) {
        console.log("error::controller::clientes", error);
        return res.status(500).json(error);
    }
}

export {
    getMethod,
    getMethodById,
    postMethod,
    putMethod,
    deleteMethod
}