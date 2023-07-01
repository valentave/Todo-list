export class Task {
    constructor(title, details, date, priority, project = 'Default') {
        this._title = title;
        this._details = details;
        this._date = date;
        this._priority = priority; 
        this._project = project;
    }

    set title(ttl) {
        this._title = ttl;
    }
    get title() {
        return this._title;
    }

    set details(dtls) {
        this._details = dtls;
    }
    get details() {
        return this._details
    }

    set date(dt) {
        this._date = dt;
    }
    get date() {
        return this._date
    }

    set priority(prio) {
        this._priority = prio;
    }
    get priority() {
        return this._priority
    }

    set project(pjct) {
        this._project = pjct;
    }
    get project() {
        return this._project
    }
}