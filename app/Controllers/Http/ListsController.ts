// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ListsController {

    public async show({view, params})
    {
        
        const { id } = params;

        return view.render('lists/show', {id} ); 
    }
}
