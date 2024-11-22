import { appState } from ".";
import { Actions, Screens } from "../types/store";

export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;

    switch(action){
        case Actions.NAVIGATE:
			return {
				...currentState,
				screen: payload,
			};

        case Actions.ADDEVENT:
            return {
                ...currentState,
                events: [...currentState.events, payload],
            }
        
        case Actions.DELETEEVENT:
            return {
                ...currentState,
                events: currentState.events.filter((post: any) => post.uid !== payload),
            }
        
        case Actions.GETEVENTS:
            return {
                ...currentState,
                events: payload,
            }

        case Actions.CHANGEADMIN:
            return {
                ...currentState,
                isAdmin: payload,
                screen: currentState.isAdmin ? Screens.DASHBOARDADMIN : Screens.DASHBOARDUSER,
            }

        case Actions.ADDATTENDEE:
            return {
                ...currentState,
                events: currentState.events.map((event: any) => { if(event.uid === payload) event.attendees += 1 }),
            }

        default:
            return currentState;
    }
}