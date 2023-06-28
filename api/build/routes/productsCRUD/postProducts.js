"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = void 0;
const { products } = require("../../db");
function postProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { model, lateral, fabric, description, color, mesures, price, } = req.body;
            if (!model) {
                return res.status(404).send("The model has not been recognized or has not been entered, please try again.");
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
            let productCreated = yield products.create({
                model: modelDB,
                lateral,
                fabric,
                description,
                color,
                mesures,
                price,
                deleted: false
            });
            console.log(productCreated);
            /*       categoriesDB.forEach((el: any) => {
                    courseCreated.addCategory(el);
                  }); */
            return res.status(200).send(`The Product ${model} has been created`);
        }
        catch (err) {
            const errName = err.name;
            const errCode = err.code;
            const errMessage = err.message;
            return res.status(500).send(errName ?
                `Error ${errCode}: ${errName} - ${errMessage}` :
                "Something went wrong, please try again.");
        }
    });
}
exports.postProduct = postProduct;
