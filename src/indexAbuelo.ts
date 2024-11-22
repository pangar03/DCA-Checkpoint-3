import "./components/export"
import { appState } from "./store";
import { Screens } from "./types/store";

import AdminDashboard from "./screens/adminDashboard/adminDashboard";
import "./screens/adminDashboard/adminDashboard";

import UserDashboard from "./screens/userDashboard/userDashboard";
import "./screens/userDashboard/userDashboard";

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            switch(appState.screen){
                case Screens.DASHBOARDADMIN:
                    const dashboard = this.ownerDocument.createElement('admin-dashboard') as AdminDashboard;
                    this.shadowRoot.appendChild(dashboard);
                    break;

                case Screens.DASHBOARDUSER:
                    const dashboardEvents = this.ownerDocument.createElement('user-dashboard') as UserDashboard;
                    this.shadowRoot.appendChild(dashboardEvents);
                    break;
                
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)