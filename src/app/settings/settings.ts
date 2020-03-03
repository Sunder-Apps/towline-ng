export enum Theme { DEVICE_PREFERENCE, DARK, LIGHT }
export class Settings {
    constructor (
        public settingsId: string = 'pic-settings-0',
        public crypto: boolean = true,
        public ads: boolean = true,
        public animations: boolean = true,
        public konami: boolean = false,
        public theme: Theme = Theme.DEVICE_PREFERENCE
    ) {}
}