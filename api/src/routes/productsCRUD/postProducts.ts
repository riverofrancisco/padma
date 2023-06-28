const { products } = require("../../db");


export async function postProduct(req: any, res: any) {
    try {
      const {
        model,
        lateral,
        fabric,
        description,
        color,
        mesures,
        price,
      } = req.body;
      if(!model){
        return res.status(404).send("The model has not been recognized or has not been entered, please try again.")
      }
      let modelDB = model.split(" ").join("-").toLowerCase();
      
      //FIND IF EXISTS
/*      let productExist = await products.findOne({
        where: { model: modelDB },
      });
      if (productExist) return res.status(404).send("El curso ya existe"); */
      
/*       let categoriesArr = category.map((el: string) => {
        return el.split(" ").join("-").toLowerCase();
      });
      let categoriesDB = await Category.findAll({
        where: {
          name: categoriesArr
        }
      }); */

      let productCreated = await products.create({
        model: modelDB,
        lateral,
        fabric,
        description,
        color,
        mesures,
        price,
        deleted: false
      });

      console.log(productCreated)
/*       categoriesDB.forEach((el: any) => {
        courseCreated.addCategory(el);
      }); */
      return res.status(200).send(`The Product ${model} has been created`);
    } catch (err: any) {
      const errName = err.name;
      const errCode = err.code;
      const errMessage = err.message;
      return res.status(500).send(errName ? 
        `Error ${errCode}: ${errName} - ${errMessage}` : 
        "Something went wrong, please try again.");
    }
  }
  