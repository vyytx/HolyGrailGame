import { Router, Request, Response} from "express";
import account from "./account.js";

export function loadAllApi(router: Router) {
	account(router);
}