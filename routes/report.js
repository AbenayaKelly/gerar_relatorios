const express = require("express");
const PDFDocument = require("pdfkit");
const Sale = require("../models/Sale");
const router = express.Router();
function formatDate(date){
    const options = {day:"2-digit", month: "2-digit", year: "numeric"};
    const localDate = new Date(date);// Converte o argumento date em um objeto de data
                                                //Retorna o número de minutos de diferença entre o horário UTC e o horário local. 
    localDate.setMinutes(localDate.getMinutes() + localDate.getTimezoneOffset());// Isso garante que mesmo que o horário esteja em UTC, a data exibida será a data local correta
    return new Intl.DateTimeFormat("pt-BR", options).format(localDate);
}
router.get("/report", async (req,res) => {
    try {
        const sales = await Sale.findAll(); // Pegar todas as vendas  existentes
        if (!sales || sales.length === 0) {
            return res.status(404).json({ error: 'Nenhuma venda encontrada' });
          }
        const doc = new PDFDocument();
        const fileName = "Relatorio_vendas.pdf";

        res.setHeader("Content-Type", "application/pdf"); // Informar que o arquivo será um pdf
        res.setHeader("Content-Disposition", `attachment; filename=${fileName}`); //Define o cabeçalho para indicar que o arquivo deve ser baixado pelo navegador
        doc.pipe(res);//Faz com que o documento PDF seja enviado diretamente na resposta HTTP.

        doc.fontSize(16).text("Relatório de Vendas", {align:"center"});
        doc.moveDown(); // Move o cursor para a proxima linha adicionando um espaço

        // Cada venda tera um pdf com informações
        sales.forEach(sale => {
            doc.fontSize(12).text(`Produto : ${sale.product_name}`);
            doc.text(`Quantidade: ${sale.quantity}`);
            doc.text(`Preço:  R$ ${sale.price}`);
            doc.text(`Data da Venda: ${formatDate(sale.sale_date)}`);
            doc.moveDown();
        });
        doc.end();//Finaliza o documento PDF, encerrando o fluxo de dados e enviando o arquivo completo na resposta HTTP

    }catch(err){
        res.status(500).json({error:" Erro ao gerar o relatório"});

    }
});
module.exports = router;