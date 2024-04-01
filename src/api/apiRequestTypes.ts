import {AxiosProgressEvent} from "axios";

export interface RequestParamsInterface {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
    url: string,
    data?: any
}

export interface RequestInterface {
    abortController: AbortController,
    downloadProgress: AxiosProgressEvent,
    uploadProgress: AxiosProgressEvent,
    isLoading: boolean
}

export interface ResponseInterface {
    data: any,
    status: number
}