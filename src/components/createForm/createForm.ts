import { dispatch } from "../../store";
import { addEventAction, getEventsAction } from "../../store/actions";
import { addPost, getEvents } from "../../utils/firebase";

class CreateForm extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =
            `
                <form class="create-event-form">
                    <div>
                        <label for="event-title">Event Title</label>
                        <input type="text" id="event-title" name="event-title" required placeholder="What is the name of the event?">
                    </div>
                    <div>
                        <label for="image">Upload an image for your new event!</label>
                        <input type="text" id="image" name="image" required placeholder="Put the image URL Here!">
                    </div>
                    <div id="location-div">
                        <label for="location">Location</label>
                        <input type="text" id="location" name="location" required placeholder="Where will the event take place?">
                    </div>
                    <div class="date-time">
                        <label for="date">Date</label>
                        <input type="datetime-local" id="date" name="date" required>
                    </div>
                    <button type="submit">Publish</button>
                </form>
            `;
        }

        const form = this.shadowRoot?.querySelector('form');
        form?.addEventListener('submit', async (e) => {
            e.preventDefault();

            const postId = new Date().getTime();
            const title = form['event-title'].value;
            const image = form.image.value;
            const location = form.location.value;
            const date = form.date.value;
            const attendees = 0;

            const event = {
                uid: postId,
                url: image, 
                eventtitle: title,
                datetime: date,
                location: location,
                attendees: attendees,
            };

            // AddPost
            await addPost(event);
            const action = addEventAction(event);
            dispatch(action);
            // GetPosts
            dispatch(getEventsAction());
        });
    }
}

customElements.define('create-form', CreateForm)
export default CreateForm;