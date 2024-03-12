import { Request, Response, NextFunction, } from 'express'

export const errorLogger = (err: Error, req: Request, res: Response, next: NextFunction) => {
    // Simple error log
    console.error(err);

    // Send placeholder error response
    res.status(500).send({ errors: [{ msg: 'Something went wrong!' }] })
}