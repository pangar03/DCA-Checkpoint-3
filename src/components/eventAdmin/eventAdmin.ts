
export enum Attribute {
    'uid' = 'uid',
    'url' = 'url',
    'eventtitle' = 'eventtitle',
    'datetime' = 'datetime',
    'location' = 'location',
    'attendees' = 'attendees',
};

class EventAdmin extends HTMLElement {
    uid?: string;
    url?: string;
    eventtitle?: string;
    datetime?: string;
    location?: string;
    attendees?: number;

    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    attributeChangedCallback(
        propName: Attribute,
        oldValue: string | undefined,
        newValue: string | undefined
    ) {
        switch(propName){
            case Attribute.attendees:
                this[propName] = newValue ? Number(newValue) : undefined;
                break;
            
            default:
                this[propName] = newValue;
                break;
        }
    }
    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <section>
                    <img src="${this.url} alt="${this.eventtitle}">
                    <h1>${this.eventtitle}</h1>
                    <h3>${this.location}</h3>
                    <h4>${this.datetime}</h4>
                    <h4>${this.attendees}</h4>
                </section>
            `; 
        }
    }
}

customElements.define('event-admin', EventAdmin);
export default EventAdmin;