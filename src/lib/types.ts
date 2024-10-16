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

