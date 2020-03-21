class Notification {
    constructor() {
        this.from = '';
        this.to = '';
        this.content = '';
        this.link = '';
    }

    get notification() {
        return {
            from: this.from,
            to: this.to,
            link: this.link,
            content: this.content,
        };
    }

    
};

module.exports = Notification;