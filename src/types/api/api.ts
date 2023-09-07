import express from "express";

export type Implements<T, U extends T> = {};


export interface FlowCS<T, U> {
	req: T,
	res: U
}

export type ErrorResponse<R extends string> = {
	success: false
	reason: R
}

export type none = {};

export type Response<T, U extends string | none> = 
	U extends string
	? (T & { success: true }) | ErrorResponse<U>
	: (T & { success: true });

export type IExpressHandler<T extends FlowCS<any, any>> = (req: express.Request<T['req']>, res: express.Response<T['res']>, next?: () => void) => void;