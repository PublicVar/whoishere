 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import List from 'App/Models/List';

export default class ListsController {

    public async show({view, params}: HttpContextContract)
    {
        
        const { id } = params;

        const list = await List.find(id);

        return view.render('lists/show', {list} ); 
    }

    public async index({view}: HttpContextContract)
    {
        const lists = await List.all();

        return view.render('lists/index', {lists});
    }
}
