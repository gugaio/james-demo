
const tool =  James.tool;
const ID = "playback_agent"
const TASK = "Analyze playback api video information"

export class UserAgent extends James.Agent {
    constructor() {
        super(ID, TASK);
    }

    instructions = () => {
        if(!this.context["user"]) {
            const instruction = `No user loaded into context.
            You need load a user using the load_user_to_context tool.
            User must provide the email.
            Ask the user for email if not provided yet.
            Then call the tool with the email as argument.`;
            const tools = [this.load_video_to_context];
            return {instruction, tools}
        }

        const video_available_fields = this._get_video_fields();
        const instruction = `The video loaded into context is ${this.context["video"]["title"]}.
        You can get the video info using the get_video_info tool.
        The tool requires a list of fields to retrieve, the fields must be a string separated by commas.
        The available fields are ${video_available_fields}.
        Provide the fields based on the user request.`;
        const tools = [this.get_video_info]; 
        return {instruction, tools}
    }

    @tool("Load a video into the context.")
    load_video_to_context(video_id) {
        this.context["video"] = {
            id: video_id,
            title: "Gladiator",
            description: "Gladiator is a 2000 epic historical action drama film directed by Ridley Scott and written by David Franzoni, John Logan, and William Nicholson.",
            duration: "5 secondsn",
            tags: ["continuation", "denzel"],
            categories: ["war", "war"]
        }
        return `Video ${video_id} loaded to context. The available fields are ${this._get_video_fields()}`;
    }

    @tool("Get video info")
    get_video_info(fields) {
        const video = this.context["video"];
        const requested_fields = fields.split(",");
        const available_fields = this._get_video_fields().split(",");
        const invalid_fields = requested_fields.filter(field => !available_fields.includes(field));
        if(invalid_fields.length > 0) {
            return `The fields ${invalid_fields} are not available. Please ask for available fields.`;
        }
        const video_info = requested_fields.reduce((acc, field) => {
            acc[field] = video[field];
            return acc;
        }, {});
        const video_info_str = JSON.stringify(video_info, null, 2);
        return video_info_str;
    }

    _get_video_fields = () => {
        return "id,title,description,duration,tags,categories"
    }

}