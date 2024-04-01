import axios, {AxiosProgressEvent} from "axios";
import {computed, reactive} from "vue";
import {RequestInterface, RequestParamsInterface, ResponseInterface} from "@/api/apiRequestTypes.ts";

export function useApiRequest() {
    const state = reactive(<RequestInterface>{})

    const downloadProgress = computed(() => state.downloadProgress)
    const uploadProgress = computed(() => state.uploadProgress)

    function abort() {
        state.abortController.abort()
    }

    async function request({method = 'GET', url, data}: RequestParamsInterface): Promise<ResponseInterface> {
        state.isLoading = true
        state.abortController = new AbortController()

        return axios({
            baseURL: '',
            signal: state.abortController.signal,
            url,
            method,
            onDownloadProgress: (progressEvent: AxiosProgressEvent) => state.downloadProgress = progressEvent,
            onUploadProgress: (progressEvent: AxiosProgressEvent) => state.uploadProgress = progressEvent,
            data,
        }).finally(() => state.isLoading = false)
    }

    return {
        request,
        uploadProgress,
        downloadProgress,
        abort
    }
}