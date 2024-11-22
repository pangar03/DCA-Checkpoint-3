import { appState } from ".";
import { Actions } from "../types/store";
import { getEvents } from "../utils/firebase";

export const navigate = (screen: string) => {
    return {
        action: Actions.NAVIGATE,
        payload: screen,
    }
};

export const getEventsAction = async () => {
    const data = await getEvents();
    
    return {
        action: Actions.GETEVENTS,
        payload: data,
    }
};

export const deleteEventAction = (uid: string) => {
    return {
        action: Actions.DELETEEVENT,
        payload: uid,
    }
};

export const addEventAction = (event: any) => {
    return {
        action: Actions.ADDEVENT,
        payload: event,
    }
};

export const changeAdmin = () => {
    return {
        action: Actions.CHANGEADMIN,
        payload: !appState.isAdmin,
    }
}

export const addAttendeeAction = (uid: string) => {
    return {
        action: Actions.ADDATTENDEE,
        payload: uid,
    }
}