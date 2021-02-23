import ObjectId from 'bson-objectid';

class AccGroup {
    _id:     ObjectId  = new ObjectId();   // [id]
    name:    string    = '';
    type:    string    = '';
    acc:     Array<ObjectId> = [];   // list< -> acc >
    created: Date      = new Date();
    deleted: Date|null = null;
};

export { AccGroup };
