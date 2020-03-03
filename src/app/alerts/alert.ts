export enum Answer { NONE, ACCEPT, INFO, LINK, REJECT };
export class Alert {
    constructor (
        public alertId: string,
        public alertClass: string,
        public disabled: boolean = false,
        public answer: Answer = Answer.NONE,
        public title: string,
        public message: string,
        public acceptText?: string,
        public accept?: Function,
        public infoText?: string,
        public info?: Function,
        public linkText?: string,
        public link?: Function,
        public rejectText?: string,
        public reject?: Function
    ) {}
}
