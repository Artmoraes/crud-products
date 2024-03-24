const { z } = require("zod");

const createProductSchema = z.object({
  name: z.string().trim().min(2, 
    {
      message: "É obrigatório inserir um nome para o produto de no mínimo 2 letras",
    }),

  description: z.string().trim().min(10, 
    {
      message: "A descrição precisa ao menos de 10 letras caso queira inserir uma",
    }).optional(),

  value: z.number(
    {
      required_error: "É obrigatório inserir um valor para o produto",
      invalid_type_error: "O campo de valor do produto deve ser do tipo número",
    }).refine((val: any) => typeof val === 'number' && !isNaN(val) && val >= 0 && Number.isInteger(val) === false, {
      message: "O valor do produto deve ser um número maior ou igual a 0",
    }),

  stock: z.number(
    {
      required_error: "É obrigatório inserir quantas unidades do produto existe no estoque",
      invalid_type_error: "O campo de estoque do produto deve ser do tipo número",
    }).int().min(0, { message: "O valor do estoque precisa ser no mínimo 0" }),
});

export default createProductSchema;
