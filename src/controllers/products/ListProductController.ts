
import { Request, Response } from "express";
import { ListProductService } from "../../services/product/listProductServices";


class ListProductController{
  async handle(req: Request, res:Response) {
    const category_id = req.query.category_id as string

    const listByCategory = new ListProductService()

    const products = await listByCategory.execute({
      category_id
    })

    return res.json(products)
   
  }
}

export { ListProductController}
