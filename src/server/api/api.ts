import { Router, Request, Response} from "express";
import account from "./account.js";

export interface ExpressHandler<T> {
	(req: Request, res: Response<T>, next?: () => void);
}

export function loadAllApi(router: Router) {
	account(router);
}