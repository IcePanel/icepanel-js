import { IcePanelClient as Client } from "./Client"
import type { BaseClientOptions } from "./BaseClient"
import * as core from "./core/index"
import type { IcePanelAPIVersion } from "./consts"

export interface IcePanelOptions extends Omit<BaseClientOptions, 'environment' | 'apiKey' | 'authorization'> {
    apiVersion: IcePanelAPIVersion
    environment?: core.Supplier<string | undefined>
    apiKey?: core.Supplier<string | undefined>
    authorization?: core.Supplier<string | undefined>
}

export class IcePanelClient extends Client {
    constructor(options: IcePanelOptions) {
        const updatedOptions: BaseClientOptions = {
            ...options,
            environment: undefined,
            apiKey: undefined,
            authorization: undefined
        }

        updatedOptions.baseUrl = async () => {
            const baseUrl = options.baseUrl ? await core.Supplier.get(options.baseUrl) : undefined
            if (baseUrl) {
                return `https://${baseUrl}/${options.apiVersion}`
            }
            const environment = options.environment ? await core.Supplier.get(options.environment) : undefined
            if (environment) {
                return `https://api.${environment}.icepanel.cloud/${options.apiVersion}`
            }
            return `https://api.icepanel.io/${options.apiVersion}`
        }

        if (options.apiKey) {
            updatedOptions.headers = {
                ...updatedOptions.headers,
                'X-API-Key': options.apiKey
            }
        }

        if (options.authorization) {
            updatedOptions.headers = {
                ...updatedOptions.headers,
                Authorization: options.authorization
            }
        }

        super(updatedOptions)
    }
}