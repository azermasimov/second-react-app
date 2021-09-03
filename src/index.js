import ReactDOM from 'react-dom';
import faker from 'faker';
import Card from './Card';
import CardContainer from './CardContainer';

function App() {
  return (
    <div>
      <h4> Suggested people </h4>
      <CardContainer>
        <Card 
          image = {faker.image.avatar()}
          countOfFriends = {faker.datatype.number()}
          name = { faker.internet.userName() }
          text = {faker.lorem.words()}
          />
      </CardContainer>
      <CardContainer>
        <Card 
          image = {faker.image.avatar()}
          countOfFriends = {faker.datatype.number()}
          name = { faker.internet.userName() }
          text = {faker.lorem.words()}
          />
      </CardContainer>
      <CardContainer>
        <Card 
          image = {faker.image.avatar()}
          countOfFriends = {faker.datatype.number()}
          name = { faker.internet.userName() }
          text = {faker.lorem.words()}
          />
      </CardContainer>
      <CardContainer>
        <Card 
          image = {faker.image.avatar()}
          countOfFriends = {faker.datatype.number()}
          name = { faker.internet.userName() }
          text = {faker.lorem.words()}
          />
      </CardContainer>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
