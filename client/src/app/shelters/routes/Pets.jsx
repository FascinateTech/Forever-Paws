import React, { Component, Fragment } from 'react';
import { get } from 'axios';
import styled from 'styled-components';
import Nav from '../navbar/index';
import PetListEntry from './PetListEntries';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const Th = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Td = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20%;
  margin-right: 20%;
`;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { myPets: [] };
  }

  async componentDidMount() {
    const {
      data: { myPets },
    } = await get('/api/animals/my');
    this.setState({ myPets });
  }

  render() {
    const { myPets } = this.state;
    return (
      <Fragment>
        <Nav />
        <Container>
          <div style={{ flex: '1', marginTop: '5%' }}>
            <h2 className="mb-3">Pet List</h2>
            <Table>
              <thead>
                <tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Breed</Th>
                </tr>
              </thead>
              <tbody>
<<<<<<< HEAD
                {myPets.map(pet => (
                  <PetListEntry pet={pet} />
                ))}
                {/* <tr>
                  <Td>id</Td>
                  <Td>name</Td>
                  <Td>breed</Td>
                </tr> */}
=======
                {/* {myPets.map(pet => (
                    <PetListEntry pet={pet} />
                  ))} */}
                <tr>
                  <Td>id</Td>
                  <Td>name</Td>
                  <Td>breed</Td>
                </tr>
>>>>>>> 65df241fee95f19f75b2fa40bc3b88a2133740b7
              </tbody>
            </Table>
          </div>
        </Container>
      </Fragment>
    );
  }
}
