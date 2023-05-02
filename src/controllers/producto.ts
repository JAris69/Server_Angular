import {Request, Response} from 'express';
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) => {
    const listProducts = await Producto.findAll()
    res.json(listProducts)

}

export const getProduct = async (req: Request, res: Response) => {
const { id } =req.params;
const product = await Producto.findByPk(id)

if(product){
    res.json(product)
}else{
    res.status(404).json({
        msg: `No existe un producto con el id ${id}`
    })
}
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } =req.params;
    const product = await Producto.findByPk(id)
    
    if(!product){
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }else{
        await product.destroy();
        res.json({
            msg: `El producto fue eliminado con exito`
        })
    }
    }

export const postProduct = async (req: Request, res: Response) => {
    try {
    const { body } =req;
    await Producto.create(body)
    res.json({
       msg: `El producto fue agregado con exito!`
    })        
    } catch (error) {
        res.json({
            msg: `El producto no fue agregado: ${error}`
         })
        
    }
    
     }
 

export const updateProduct = async (req: Request, res: Response) => {
    const { body } =req;
    const { id } =req.params;
    try {
    const product = await Producto.findByPk(id)

    if(product){
        await product.update(body);
        res.json({
            msg: `El producto fue actualizado con exito`
        })

    } else{
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }

        
    } catch (error) {
        res.status(404).json({
            msg: `No se pudo actualizar los datos: ${error}`
        })
        
    }  

   

    }