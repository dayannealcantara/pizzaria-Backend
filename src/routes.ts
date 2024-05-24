import {Router} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { CreateProductController } from './controllers/products/CreateProductController';
import multer from 'multer';
import uploadConfig from './config/multer'
import { ListProductController } from './controllers/products/ListProductController';
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';


const router= Router();

const upload = multer(uploadConfig.upload("./tmp"))

//Rotas de usuário
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

//Rotas de categoria

router.post('/category', isAuthenticated, new CreateCategoryController().handle)

router.get('/category', isAuthenticated, new ListCategoryController().handle)

//Rotas de produtos

router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListProductController().handle)

//Rotas de Order

router.post('/order', isAuthenticated,  new CreateOrderController().handle)
router.delete('/order', isAuthenticated,  new RemoveOrderController().handle)



export { router }