import express from 'express'
import uc from '../controllers/usuarios.controller.js'

   const router = express.Router();

router.get("/", uc.listar);
router.get("/", uc.filtrarid);


export default router;