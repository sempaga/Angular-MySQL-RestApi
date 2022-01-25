import {Request, Response } from 'express';

import pool from '../datebase';
class ChollosController {
    public async list (req: Request, res: Response){
       const chollos =  await pool.query('SELECT * FROM chollos');
       res.json(chollos);


    } 
    public async oneChollo (req: Request, res: Response) : Promise <any>{
        const {id} = req.params;
        const chollos = await pool.query('SELECT * FROM chollos WHERE id = ?', [id]);
        if(chollos.length > 0){
            return res.json(chollos[0]);
        }
        res.status(404).json({text: "Chollo no encontrado"});
      

    } 

    public async create(req: Request, res: Response) : Promise <void>{
        console.log(req.body);
        await pool.query('INSERT INTO chollos set ?', [req.body])
        res.json({message: 'Chollo guardado'});
    }
    public async delete(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        await pool.query('DELETE FROM chollos WHERE id = ?', [id])
        res.json({text: 'El chollo a sido eliminado'});
    }
    public async update(req: Request, res: Response):Promise <void>{
        const {id} = req.params;
        await pool.query('UPDATE chollos set ? WHERE id = ?', [req.body, id]);
        res.json({text: 'Chollo actualizado'});
    }
    
}

export const cholloController = new ChollosController();