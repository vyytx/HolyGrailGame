import { Request, Response } from "express";

export interface FlowCS<T, U> {
	req: T,
	res: U
}


export type IExpressHandler<T extends FlowCS<any, any>> = (req: Request<T['req']>, res: Response<T['res']>, next?: () => void) => void;