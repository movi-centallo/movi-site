import type { EntryFieldTypes } from "contentful";

export default interface Eventi {
    contentTypeId: "eventi",
    fields: {
        eventName: EntryFieldTypes.Text,
        caption: EntryFieldTypes.Text,
        startingDate: EntryFieldTypes.Date,
        endDate: EntryFieldTypes.Date,
        place: EntryFieldTypes.Location,
        eventoRicorrente: EntryFieldTypes.Boolean,
    }
}

export interface Progetti {
    contentTypeId: "progetti",
    fields: {
        title: EntryFieldTypes.Text,
        slug: EntryFieldTypes.Text,
        category: EntryFieldTypes.Text,
        publishDate: EntryFieldTypes.Date,
        tags: EntryFieldTypes.Array<EntryFieldTypes.Text>,
        content: EntryFieldTypes.RichText,
        image?: EntryFieldTypes.Object,
        draft?: EntryFieldTypes.Boolean,
    }
}

