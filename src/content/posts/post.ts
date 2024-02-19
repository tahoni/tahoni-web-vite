const MAX_TITLE_LENGTH: number = 36;
const MAX_TAG_LENGTH: number = 16;

export class Post {
    title: string;
    content: string;
    subject: string;
    dateCreated: Date;
    dateUpdated?: Date;
    tags: string[];

    // Trim all fields to exclude leading and trailing whitespace
    constructor(post: {title?: string, content: string, subject?: string, dateCreated: Date, 
    dateUpdated?: Date, tags?: string[]}) {

        // The content will always be specified
        this.content = post.content.trim();

        // Ensure the title is not empty
        let title: string = (post.title ? post.title : '');
        // If no title is specified, populate with the subject and as a last resort the content
        if (title === '') {
            if (post.subject) {
                title = post.subject;
            } else {
                title = post.content;
            }
        }
        this.title = this.initField(title, MAX_TITLE_LENGTH);

        // Ensure that the subject is not empty
        let subject: string = (post.subject ? post.subject : '');
        // If no subject is specified, populate with the title
        if (subject === '') {
            subject = title;
        }
        this.subject = this.initField(subject, MAX_TITLE_LENGTH);

        // Date created and/or date updated
        this.dateCreated = post.dateCreated;
        this.dateUpdated = post.dateUpdated;

        // Initialize tags to an empty array
        this.tags = [];
        if (post.tags) {
            // Populate the tags array
            post.tags.forEach(tag => {
                this.tags.push(this.initField(tag, MAX_TAG_LENGTH));
            });
        }
    }

    private initField = (field: string, maxLength?: number): string => {
        // Trim leading and trailing whitespace
        let value: string = field.trim();
        // Ensure the title is not too long
        if ((maxLength) && (value.length > maxLength)) {
            value = value.substring(0, maxLength);
        }
        return value;
    }
}
