import apiClient from "./api-Client";

interface Payload {
    id: number
}

class HttpService<T extends Payload> {
    _endPoint: string

    constructor(endPoint: string) {
        this._endPoint = endPoint

    }

    getAll() {
        const controller = new AbortController()
        const request = apiClient
            .get<T[]>(this._endPoint, { signal: controller.signal })

        return { request, cancel: () => controller.abort() }
    }

    create(payload: T) {
        return apiClient
            .post<T>(this._endPoint, payload)
    }

    get(id: number) {
        return apiClient.get<T>(`${this._endPoint}/${id}`)
    }

    update(payload: T) {
        return apiClient.patch(`${this._endPoint}/${payload.id}`, payload)
    }

    delete(id: number) {
        return apiClient.delete(`${this._endPoint}/${id}`)
    }
}

export default HttpService