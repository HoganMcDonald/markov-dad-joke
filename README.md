# Markov Dad Joke Generator

## notes

This app is built as a rails api with a react front end. Jokes are sourced from https://icanhazdadjoke.com and stored in a database. They are used for constructing markov chains on the fly. The code for downloading the jokes is found in `/lib/tasks/download_dad_jokes.rake`.

The markov chain itself can be found it `/lib/markov_chain.rb`.

## Dev Setup

**Requirements**:

- ruby 2.5.3 (if using rvm: `rvm use`)
- rails `gem install rails`
- yarn `brew install yarn`
- node (if using nvm `nvm use`)

**Setup**:

```
# install rails gems
bundle install

# create the rails databases
rails db:setup

# navigate to client app
cd client

# install react dependencies
yarn install
```

jokes can be fetched manually from https://icanhazdadjoke.com by invoking:

```
# download available dad jokes
rake jokes:download
```

**Run**:

in one terminal window run: `rails s`. In another, run `cd client && yarn start`
