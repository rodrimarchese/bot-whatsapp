import { ProviderClass } from '@bot-whatsapp/bot'
export interface Response {
    type: string
    data: Buffer
}

export type BotCtxMiddleware = Partial<ProviderClass & { provider: any }>
