import { Router } from "express";
import { cholloController } from '../controllers/chollosController';


class CholloRoutes {

    public router : Router= Router();
    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/',cholloController.list);  
        this.router.get('/:id',cholloController.oneChollo);  
        this.router.post('/', cholloController.create);
        this.router.delete('/:id', cholloController.delete);
        this.router.put('/:id', cholloController.update);

    }
}

const cholloRoutes = new CholloRoutes();
export default cholloRoutes.router;