const express = require('express');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();
const events = [];
app.use(express.json());

app.use(
	'/graphql',
	graphqlHTTP({
		schema: buildSchema(`
		type Event {
			_id: ID!
			title: String!
			description: String!
			price: Float!
			date: String!
		}
		input EventInput {
			title: String!
			description: String!
			price: Float!
			date: String!
		}
    type RootQuery {
      events: [Event!]
    }
    type RootMutation {
      createEvent(eventInput: EventInput): Event
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
		rootValue: {
			events: () => {
				return events;
			},
			createEvent: (args) => {
				const event = {
					_id: Math.random().toString(),
					title: args.eventInput.title,
					description: args.eventInput.description,
					price: +args.eventInput.price,
					date: args.eventInput.date
				};
				events.push(event);
				return event;
			}
		},
		graphiql: true
	})
);

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`app listening on http://localhost:${PORT}`);
});
