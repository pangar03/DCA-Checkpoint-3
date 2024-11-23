import  EventAdmin, {Attribute as EventAttribute} from '../../components/eventAdmin/eventAdmin';
import '../../components/eventAdmin/eventAdmin';
import { appState } from '../../store';

import CreateForm from '../../components/createForm/createForm';
import '../../components/createForm/createForm';

class AdminDashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
                <create-form></create-form>
                <section id="events-container"></section>
            `;
        }

        const container = this.shadowRoot?.querySelector("#events-container");
        appState.events.forEach(event => {
            const eventComponent = this.ownerDocument.createElement('event-admin') as EventAdmin;
            eventComponent.setAttribute(EventAttribute.uid, event.uid);
            eventComponent.setAttribute(EventAttribute.url, event.url);
            eventComponent.setAttribute(EventAttribute.eventtitle, event.eventtitle);
            eventComponent.setAttribute(EventAttribute.datetime, event.datetime);
            eventComponent.setAttribute(EventAttribute.location, event.location);
            eventComponent.setAttribute(EventAttribute.attendees, String(event.attendees));

            container?.appendChild(eventComponent);
        })
    }
}

customElements.define('admin-dashboard', AdminDashboard)
export default AdminDashboard;