import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

class AdoptionListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card color="red" centered>
        <Card.Content>
          <Card.Header>{this.props.pet.name.$t}</Card.Header>
        </Card.Content>
        <Card.Content centered>
          <Grid columns="two">
            <Grid.Row>
              <Grid.Column>
                <Image src={this.props.pet.media.photos.photo[3].$t} fluid rounded/>
              </Grid.Column>
              <Grid.Column>
                {Array.isArray(this.props.pet.breeds.breed) ? <Card.Description floated="right">Breed: {this.props.pet.breeds.breed[0].$t}</Card.Description> :
                <Card.Description floated="right">Breed:  {this.props.pet.breeds.breed.$t}</Card.Description>}
                <Card.Description floated="right">Age Group:  {this.props.pet.age.$t}</Card.Description>
                {this.props.pet.description ? <Card.Description floated="right">{this.props.pet.description.$t}</Card.Description> : null}
                <Card.Description floated="right">{this.props.pet.contact.address1.$t}</Card.Description>
                <Card.Description floated="right">{this.props.pet.contact.city.$t}</Card.Description>
                <Card.Description floated="right">{this.props.pet.contact.phone.$t}</Card.Description>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    )
  }
}

export default AdoptionListEntry;
