class Notification {
    constructor() {
        this.from = '';
        this.to = '';
        this.content = '';
        this.link = '';
    }

    set from(from) {
        this.from = from;
        return this;
    }

    set to(to) {
        this.to = to;
        return this;
    }

    set content(content) {
        this.content = content;
        return this;
    }

    set link(link) {
        this.link = link;
        return this;
    }

    get notification() {
        const notification = {
            from: this.from,
            to: this.to,
            link: this.link,
            content: this.content,
        };

        return notification;
    }


};

module.exports = Notification;