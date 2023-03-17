import request, { IResponseData } from "@/renderer/utils/server";
import { IUser } from "@/renderer/types/user";

export function login(data: unknown): Promise<IResponseData<IUser>> {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

export function register(data: unknown): Promise<IResponseData<IUser>> {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}

export function me(): Promise<IResponseData<IUser>> {
  return request({
    url: "/user/me",
    method: "get",
  });
}
