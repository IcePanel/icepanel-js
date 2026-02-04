import { IcePanelClient as Client } from "./Client.js"
import type { BaseClientOptions } from "./BaseClient.js"
import * as core from "./core/index.js"
import type { IcePanelAPIVersion } from "./consts.js"

export interface IcePanelOptions {
    apiVersion: IcePanelAPIVersion
}

export class IcePanelClient extends Client {
    constructor(options: IcePanelOptions & BaseClientOptions) {
        const updatedOptions: BaseClientOptions = {
            ...options
        }

        updatedOptions.baseUrl = async () => {
            const baseUrl = options.baseUrl ? await core.Supplier.get(options.baseUrl) : undefined
            if (baseUrl) {
                return `${baseUrl}/${options.apiVersion}`
            }
            return `https://api.icepanel.io/${options.apiVersion}`
        }

        super(updatedOptions)
    }
}
