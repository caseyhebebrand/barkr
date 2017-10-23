import React from 'react';
import { Container, Card, Image, Grid, Icon } from 'semantic-ui-react';
import AdoptionListEntry from './AdoptionListEntry.jsx';

class AdoptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{}, {}, {}]
    }
  }

  render() {
    return (
      <Container>
        <AdoptionListEntry/>
        <Grid columns="two" verticalAlign="middle" centered>
          <Grid.Row>
            <Grid.Column width={2} textAlign="center">
              <Icon circular inverted color="red" name="ban" size="big"/>
            </Grid.Column>
            <Grid.Column width={2} textAlgin="center">
              <Icon circular inverted color="red" size="big" name="heart"/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
};

export default AdoptionList;
