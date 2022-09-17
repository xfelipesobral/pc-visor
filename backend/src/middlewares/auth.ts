import { Request, Response, NextFunction } from 'express'

function auth(request: Request, response: Response, next: NextFunction) {
    const authorization = request.headers.authorization

    if (!authorization) {
        return response.status(401).json({ error: 'Authorization token missing!' })
    }

    const password = process.env.REST_PASSWORD || 'strongpassword'
    if (authorization === password) {
        return next()
    }

    return response.status(401).json({ error: 'Bad password :(' })
}

export default auth