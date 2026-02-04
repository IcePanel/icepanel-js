import { IcePanelClient as Client } from "./Client.js"
import type { BaseClientOptions } from "./BaseClient.js"
import * as core from "./core/index.js"
import type { IcePanelAPIVersion } from "./consts.js"

export interface IcePanelOptions extends Omit<BaseClientOptions, 'apiKeyAuth' | 'bearerAuth'> {
    apiVersion: IcePanelAPIVersion
    apiKey?: core.Supplier<string>
    token?: core.Supplier<string>
}

export class IcePanelClient extends Client {
    constructor(options: IcePanelOptions) {
        const updatedOptions: BaseClientOptions = {
            ...options,
            apiKeyAuth: undefined,
            bearerAuth: undefined
        }

        updatedOptions.baseUrl = async () => {
            const baseUrl = options.baseUrl ? await core.Supplier.get(options.baseUrl) : undefined
            if (baseUrl) {
                return `${baseUrl}/${options.apiVersion}`
            }
            return `https://api.icepanel.io/${options.apiVersion}`
        }

        if (options.apiKey) {
            updatedOptions.apiKeyAuth = {
                key: options.apiKey
            }
        }

        if (options.token) {
            updatedOptions.bearerAuth = {
                token: options.token
            }
        }

        super(updatedOptions)
    }
}