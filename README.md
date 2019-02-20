# Markov Dad Joke Generator

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

**Run**:

in one terminal window run: `rails s`. In another, run `cd client && yarn start`
