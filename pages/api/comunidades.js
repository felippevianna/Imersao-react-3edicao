import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {
    
    
    if(request.metohd === 'POST'){
        const TOKEN = 'c504ab36f5b043dc30647bf3c11279';
        const client = new SiteClient(TOKEN);
        
        // Validar os dados, antes de sair cadastrando
        const registroCriado = await client.items.create({
            itemType: "971839", // ID do model de "Communities" criado pelo Dato
            ...request.body,
            
            // title: "Comunidade de Teste",
            // imageUrl: "https://github.com/omariosouto.png",
            // creatorSlug: "omariosouto",
        })
    
        console.log(registroCriado)
    
        response.json({
            dados: 'Algum dado qualquer',
            registroCriado: registroCriado,
        })
        return;
    }
}