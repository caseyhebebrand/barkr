import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

const AdoptionListEntry = (props) => (
  <Card color="red" centered>
    <Card.Content>
      <Card.Header>Buddy</Card.Header>
    </Card.Content>
    <Card.Content centered>
      <Grid columns="two">
        <Grid.Row>
          <Grid.Column>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc6B_V6-rZhk9s5wZKx3I2h3ChiEyUydRJiwhP4aYtWmAMKtz_xA"
            fluid rounded/>
          </Grid.Column>
          <Grid.Column>
            <Card.Description floated="right">Adopt me.</Card.Description>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card.Content>
  </Card>
)

export default AdoptionListEntry;