import { Request, Response } from "express";
import shortId from 'shortid';
import { config } from '../config/Constants';

export class URLController {
    public async shorten(request: Request, response: Response): Promise<void> {
        const { originURL } = request.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/{hash}`

    } 
}