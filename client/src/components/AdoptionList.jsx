import React from 'react';
import { Container, Card, Image, Grid, Icon } from 'semantic-ui-react';
import { Form, Input, Button, Select } from 'semantic-ui-react';
import AdoptionListEntry from './AdoptionListEntry.jsx';

const genderOptions = [
  { key: 'm', text: 'Male', value: 'M' },
  { key: 'f', text: 'Female', value: 'F' },
];

const sizeOptions = [
  {key: 's', text: 'Small', value: 'S'},
  {key: 'm', text: 'Medium', value: 'M'},
  {key: 'l', text: 'Large', value: 'L'},
  {key: 'xl', text: 'Extra Large', value: 'XL'}
];

class AdoptionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{}, {}, {}],
      petView: false
    }
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    this.setState({
      petView: true
    })
  }

  render() {
    return (

        <Container>
          { this.state.petView ?
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
            </Container> :

          <Card color="red" centered>
            <Card.Content>
              <Card.Header>Welcome to Barkr!</Card.Header>
              <Card.Meta>Please fill out the form below to start the search for your next furry family member</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Form size="medium">
                <Form.Group>
                  <Form.Input label="Zip Code" placeholder="Zip Code"/>
                  <Form.Field control={Select} label='Gender' options={genderOptions} placeholder='Gender' />
                  <Form.Field control={Select} label='Size' options={sizeOptions} placeholder='Size' />
                </Form.Group>
                <Button size="large" color="red" fluid onClick={this.submitForm}>Search</Button>
              </Form>
            </Card.Content>
          </Card>
        }
      </Container>

    )
  }
};

export default AdoptionList;
