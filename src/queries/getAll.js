const {
    GraphQLID,
    GraphQLList
} = require('graphql');
const EventType = require('../types/event');
const Event = require('../db/event');
const getProjection = require('../utils/projection');

module.exports = {
    type:  new GraphQLList(EventType),
    resolve: (root, args, options, fieldAsts) => {
        return new Promise((resolve, reject) => {
            try {
                const projection = getProjection(fieldAsts);

                Event.find({})
                    .select(projection)
                    .exec()
                    .then(data => resolve(data))
                    .catch(errors => reject(errors));
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}